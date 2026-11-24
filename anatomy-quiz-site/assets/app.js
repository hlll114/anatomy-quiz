/* =========================================================
 * 人体解剖生理学 · 刷题系统
 * app.js —— 全站共享逻辑
 *   1. 数据存储（localStorage，带异常兜底）
 *   2. 间隔重复算法（艾宾浩斯简化版）
 *   3. 判分（四种题型统一入口）
 *   4. 通用工具（Toast、转义、日期、洗牌）
 * ========================================================= */
(function (global) {
  'use strict';

  /* ---------------- 常量 ---------------- */

  var STORAGE_KEY = 'anatomy_quiz_state_v1';
  var SEED_VERSION = 2;          // 题库版本：升级后旧用户会自动补入新增题目
  var RECORD_LIMIT = 1000;

  // 复习间隔（天）：连续答对次数 → 下次复习间隔
  var INTERVALS = [1, 3, 7, 15, 30];

  // 连续答对达到该次数视为「已掌握」
  var MASTER_STREAK = 3;

  var CHAPTERS = [
    '细胞与组织', '运动系统', '血液', '循环系统', '呼吸系统',
    '消化系统', '泌尿系统', '神经系统', '内分泌系统', '感觉器官'
  ];

  var TYPES = {
    choice:  '单选题',
    reverse: '反向题',
    judge:   '判断题',
    fill:    '填空题',
    term:    '名词卡',
    image:   '看图题'
  };

  /* ---------------- 存储层 ---------------- */

  var memoryFallback = null;   // localStorage 不可用时退化为内存存储

  function hasStorage() {
    try {
      var k = '__t__';
      global.localStorage.setItem(k, '1');
      global.localStorage.removeItem(k);
      return true;
    } catch (e) {
      return false;
    }
  }

  var storageOK = hasStorage();

  function readRaw() {
    if (!storageOK) return memoryFallback;
    try {
      var raw = global.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn('[store] 读取失败，使用空数据', e);
      return null;
    }
  }

  function writeRaw(state) {
    if (!storageOK) { memoryFallback = state; return true; }
    try {
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (e) {
      console.warn('[store] 写入失败', e);
      toast('保存失败：浏览器存储空间不足或被禁用', 'error');
      return false;
    }
  }

  /* ---------------- 题目结构整理 ---------------- */

  function uid() {
    return 'q_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7);
  }

  function freshSrs() {
    return { streak: 0, right: 0, wrong: 0, nextReview: 0, lastWrong: 0 };
  }

  /**
   * 把任意来源的题目对象整理成内部标准结构。
   * 容错：缺字段、类型错误、选项不是数组等情况都不会抛出异常。
   */
  function hydrate(q) {
    if (!q || typeof q !== 'object') return null;

    var type = TYPES[q.type] ? q.type : 'choice';
    var options = Array.isArray(q.options) ? q.options.map(String) : null;

    // 判断题统一成「正确 / 错误」两个选项
    if (type === 'judge') {
      options = ['正确', '错误'];
    }
    // 单选 / 反向 / 看图都依赖选项，选项不全时退化为名词卡，避免出现无法作答的题
    if ((type === 'choice' || type === 'reverse' || type === 'image') &&
        (!options || options.length < 2)) {
      type = 'term';
      options = null;
    }

    var answers = [];
    if (Array.isArray(q.answers)) {
      answers = q.answers.map(function (a) { return String(a); });
    } else if (typeof q.answers === 'string' && q.answers) {
      answers = [q.answers];
    } else if (typeof q.answerText === 'string' && q.answerText) {
      answers = [q.answerText];
    }

    var answerIndex = null;
    if (type === 'choice' || type === 'reverse' || type === 'judge' || type === 'image') {
      var ai = Number(q.answerIndex);
      if (!isFinite(ai) || ai < 0 || options === null || ai >= options.length) {
        // 兼容旧写法：answer 字段直接给答案文本
        if (typeof q.answer === 'string' && options) {
          var idx = options.indexOf(q.answer);
          ai = idx >= 0 ? idx : 0;
        } else {
          ai = 0;
        }
      }
      answerIndex = Math.floor(ai);
    }

    var stem = String(q.stem || '').trim();
    if (!stem) return null;

    return {
      id: q.id ? String(q.id) : uid(),
      type: type,
      chapter: q.chapter && CHAPTERS.indexOf(q.chapter) >= 0 ? q.chapter : '其他',
      stem: stem,
      options: options,
      answerIndex: answerIndex,
      answers: answers,
      image: String(q.image || ''),
      explanation: String(q.explanation || ''),
      srs: validSrs(q.srs) ? {
        streak: Number(q.srs.streak) || 0,
        right: Number(q.srs.right) || 0,
        wrong: Number(q.srs.wrong) || 0,
        nextReview: Number(q.srs.nextReview) || 0,
        lastWrong: Number(q.srs.lastWrong) || 0
      } : freshSrs(),
      createdAt: Number(q.createdAt) || Date.now()
    };
  }

  function validSrs(s) {
    return s && typeof s === 'object' && !Array.isArray(s);
  }

  /* ---------------- 状态加载 / 保存 ---------------- */

  var state = null;

  function seedQuestions() {
    var list = Array.isArray(global.SEED_QUESTIONS) ? global.SEED_QUESTIONS : [];
    return list.map(hydrate).filter(Boolean);
  }

  function defaultState() {
    return {
      version: SEED_VERSION,
      seededVersion: SEED_VERSION,
      questions: seedQuestions(),
      records: [],
      createdAt: Date.now()
    };
  }

  function load() {
    if (state) return state;

    var raw = readRaw();
    if (!raw || typeof raw !== 'object') {
      state = defaultState();
      writeRaw(state);
      return state;
    }

    var questions = Array.isArray(raw.questions)
      ? raw.questions.map(hydrate).filter(Boolean)
      : [];

    state = {
      version: Number(raw.version) || 1,
      seededVersion: Number(raw.seededVersion) || 0,
      questions: questions,
      records: Array.isArray(raw.records) ? raw.records.filter(isRecord) : [],
      createdAt: Number(raw.createdAt) || Date.now()
    };

    // 题库为空（首次打开、或导入失败）时补回内置题库
    if (state.questions.length === 0) {
      state.questions = seedQuestions();
      state.seededVersion = SEED_VERSION;
      writeRaw(state);
    } else if (state.seededVersion < SEED_VERSION) {
      mergeSeed();
    }

    return state;
  }

  function isRecord(r) {
    return r && typeof r === 'object' && typeof r.ts === 'number';
  }

  /** 版本升级时把新增的内置题补进来，不影响用户自己的题和答题记录 */
  function mergeSeed() {
    var existing = {};
    state.questions.forEach(function (q) { existing[q.id] = q; });

    var added = 0, refreshed = 0;

    seedQuestions().forEach(function (q) {
      var cur = existing[q.id];

      if (!cur) {
        state.questions.push(q);
        added++;
        return;
      }

      // 题干与选项内容完全一致（用户没改过）时，同步最新的选项顺序，
      // 保留原来的 id 和复习进度，避免旧数据正确答案全排在第一项。
      if (cur.stem === q.stem && q.options && cur.options &&
          q.options.length === cur.options.length &&
          sameSet(q.options, cur.options)) {
        cur.options = q.options.slice();
        cur.answerIndex = q.answerIndex;
        refreshed++;
      }
    });

    state.seededVersion = SEED_VERSION;
    if (added > 0 || refreshed > 0) writeRaw(state);
    return { added: added, refreshed: refreshed };
  }

  /** 判断两个字符串数组内容是否完全相同（与顺序无关） */
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var x = a.slice().sort();
    var y = b.slice().sort();
    for (var i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) return false;
    }
    return true;
  }

  function save() {
    if (!state) return false;
    return writeRaw(state);
  }

  function resetAll() {
    state = defaultState();
    return writeRaw(state);
  }

  /* ---------------- 间隔重复算法 ---------------- */

  /**
   * 记录一次答题结果并更新复习计划。
   * 答对：连续答对次数 +1，间隔按 [1,3,7,15,30] 天递增
   * 答错：连续次数清零，立即重新纳入待复习队列
   */
  function applyResult(q, correct, now) {
    now = now || Date.now();
    if (!q.srs) q.srs = freshSrs();
    var s = q.srs;

    if (correct) {
      s.right += 1;
      s.streak += 1;
      var step = Math.min(s.streak - 1, INTERVALS.length - 1);
      s.nextReview = now + INTERVALS[step] * 86400000;
    } else {
      s.wrong += 1;
      s.streak = 0;
      s.nextReview = now;            // 今天之内再来一遍
      s.lastWrong = now;
    }
    return s;
  }

  function isDue(q, now) {
    return !q.srs || !q.srs.nextReview || q.srs.nextReview <= (now || Date.now());
  }

  /** 掌握度 0~1 */
  function mastery(q) {
    if (!q.srs) return 0;
    return Math.min(q.srs.streak / MASTER_STREAK, 1);
  }

  function masteryLevel(q) {
    if (!q.srs || q.srs.right + q.srs.wrong === 0) return 'new';
    return q.srs.streak >= MASTER_STREAK ? 'master' : 'learning';
  }

  /* ---------------- 判分 ---------------- */

  /** 归一化填空答案：去空白、去标点、统一大小写与全角 */
  function normalize(text) {
    return String(text == null ? '' : text)
      .replace(/[\s\u3000]+/g, '')
      .replace(/[，。、；：？！“”‘’（）()《》〈〉【】\[\]·…—－_\-]/g, '')
      .replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (ch) {
        return String.fromCharCode(ch.charCodeAt(0) - 0xFEE0);
      })
      .toLowerCase();
  }

  /**
   * 统一判分入口。
   * @param {object} q        题目
   * @param {*} response      choice/judge: 选项下标；fill: 文本；term: 'know' | 'unknown'
   * @returns {Object} 含 correct(布尔)、answerText(标准答案)、userText(用户作答)
   */
  function grade(q, response) {
    var correct = false;
    var userText = '';
    var answerText = '';

    if (q.type === 'choice' || q.type === 'reverse' || q.type === 'judge' || q.type === 'image') {
      correct = Number(response) === q.answerIndex;
      userText = (q.options && q.options[response] != null) ? q.options[response] : '';
      answerText = (q.options && q.options[q.answerIndex] != null) ? q.options[q.answerIndex] : '';

    } else if (q.type === 'fill') {
      userText = String(response == null ? '' : response);
      var list = q.answers && q.answers.length ? q.answers : [''];
      answerText = list[0];
      var target = normalize(userText);
      if (target) {
        correct = list.some(function (a) { return normalize(a) === target; });
      }

    } else {
      // 名词卡为自评：认识 = 答对
      correct = response === 'know';
      userText = response === 'know' ? '认识' : '不认识';
      answerText = (q.answers && q.answers[0]) || '';
    }

    return { correct: correct, answerText: answerText, userText: userText };
  }

  /* ---------------- 记录 ---------------- */

  function recordResult(q, correct) {
    var st = load();
    st.records.push({
      ts: Date.now(),
      qid: q.id,
      type: q.type,
      chapter: q.chapter,
      correct: !!correct
    });
    if (st.records.length > RECORD_LIMIT) {
      st.records = st.records.slice(st.records.length - RECORD_LIMIT);
    }
  }

  /* ---------------- 组卷 ---------------- */

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /**
   * 按模式生成题组。
   * mode: due | random | chapter | type | wrong | ids | all
   */
  function buildList(mode, opts) {
    opts = opts || {};
    var st = load();
    var all = st.questions.slice();
    var list;

    switch (mode) {
      case 'due':
        list = all.filter(function (q) { return isDue(q); });
        list.sort(function (a, b) {
          return (a.srs.nextReview || 0) - (b.srs.nextReview || 0);
        });
        break;

      case 'random':
        list = shuffle(all);
        break;

      case 'chapter':
        list = shuffle(all.filter(function (q) { return q.chapter === opts.chapter; }));
        break;

      case 'type':
        list = shuffle(all.filter(function (q) { return q.type === opts.type; }));
        break;

      case 'wrong':
        list = all
          .filter(function (q) { return q.srs && q.srs.wrong > 0; })
          .sort(function (a, b) { return b.srs.wrong - a.srs.wrong; });
        break;

      case 'ids':
        var byId = {};
        all.forEach(function (q) { byId[q.id] = q; });
        list = (opts.ids || []).map(function (id) { return byId[id]; }).filter(Boolean);
        break;

      default:
        list = shuffle(all);
    }

    if (opts.limit && opts.limit > 0) list = list.slice(0, opts.limit);
    return list;
  }

  /* ---------------- 统计 ---------------- */

  function stats() {
    var st = load();
    var now = Date.now();
    var qs = st.questions;
    var due = 0, mastered = 0, seen = 0;

    qs.forEach(function (q) {
      if (isDue(q, now)) due++;
      if (q.srs && q.srs.right + q.srs.wrong > 0) seen++;
      if (masteryLevel(q) === 'master') mastered++;
    });

    var answered = st.records.length;
    var right = 0;
    st.records.forEach(function (r) { if (r.correct) right++; });

    return {
      total: qs.length,
      due: due,
      mastered: mastered,
      seen: seen,
      answered: answered,
      right: right,
      accuracy: answered ? Math.round((right / answered) * 100) : 0,
      chapterStats: chapterStats(),
      typeStats: typeStats()
    };
  }

  function chapterStats() {
    var st = load();
    var map = {};
    CHAPTERS.forEach(function (c) { map[c] = { chapter: c, total: 0, mastered: 0, seen: 0 }; });

    st.questions.forEach(function (q) {
      var row = map[q.chapter];
      if (!row) {
        row = map[q.chapter] = { chapter: q.chapter, total: 0, mastered: 0, seen: 0 };
      }
      row.total++;
      if (q.srs && q.srs.right + q.srs.wrong > 0) row.seen++;
      if (masteryLevel(q) === 'master') row.mastered++;
    });

    return Object.keys(map)
      .map(function (k) { return map[k]; })
      .filter(function (r) { return r.total > 0; })
      .sort(function (a, b) { return b.total - a.total; });
  }

  function typeStats() {
    var st = load();
    var map = {};
    st.questions.forEach(function (q) {
      if (!map[q.type]) map[q.type] = { type: q.type, label: TYPES[q.type] || q.type, total: 0, mastered: 0 };
      map[q.type].total++;
      if (masteryLevel(q) === 'master') map[q.type].mastered++;
    });
    return Object.keys(map).map(function (k) { return map[k]; });
  }

  /* ---------------- 工具 ---------------- */

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  var toastTimer = null;
  function toast(msg, kind) {
    var el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.className = 'toast show' + (kind ? ' is-' + kind : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.className = 'toast' + (kind ? ' is-' + kind : '');
    }, 2200);
  }

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function formatDate(ts) {
    if (!ts) return '—';
    var d = new Date(ts);
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }

  function formatDateTime(ts) {
    if (!ts) return '—';
    var d = new Date(ts);
    return formatDate(ts) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  /** 距离下次复习的友好描述 */
  function dueLabel(q) {
    if (!q.srs || !q.srs.nextReview) return '待首次复习';
    var diff = q.srs.nextReview - Date.now();
    if (diff <= 0) return '现在复习';
    var days = Math.ceil(diff / 86400000);
    return days <= 1 ? '明天复习' : days + ' 天后复习';
  }

  function formatDuration(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(s / 60);
    s = s % 60;
    return m > 0 ? m + ' 分 ' + s + ' 秒' : s + ' 秒';
  }

  /** 高亮当前页导航 */
  function markNav() {
    var file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    if (file === '' || file === 'index.html' || file === 'index.htm') file = 'index.html';
    var links = document.querySelectorAll('.nav a');
    for (var i = 0; i < links.length; i++) {
      var href = (links[i].getAttribute('href') || '').toLowerCase();
      if (href === file) links[i].className = 'active';
    }
  }

  /** 读取 URL 查询参数 */
  function query() {
    var out = {};
    var s = location.search.replace(/^\?/, '');
    if (!s) return out;
    s.split('&').forEach(function (pair) {
      if (!pair) return;
      var i = pair.indexOf('=');
      var k = i < 0 ? pair : pair.slice(0, i);
      var v = i < 0 ? '' : pair.slice(i + 1);
      try {
        out[decodeURIComponent(k)] = decodeURIComponent(v.replace(/\+/g, ' '));
      } catch (e) {
        out[k] = v;
      }
    });
    return out;
  }

  /* ---------------- 导出给页面使用 ---------------- */

  var App = {
    // 常量
    CHAPTERS: CHAPTERS,
    TYPES: TYPES,
    INTERVALS: INTERVALS,
    MASTER_STREAK: MASTER_STREAK,
    STORAGE_KEY: STORAGE_KEY,
    storageOK: storageOK,

    // 数据
    load: load,
    save: save,
    resetAll: resetAll,
    state: function () { return load(); },

    // 算法
    applyResult: applyResult,
    isDue: isDue,
    mastery: mastery,
    masteryLevel: masteryLevel,
    grade: grade,
    normalize: normalize,
    buildList: buildList,
    recordResult: recordResult,
    stats: stats,
    chapterStats: chapterStats,
    typeStats: typeStats,

    // 工具
    uid: uid,
    hydrate: hydrate,
    freshSrs: freshSrs,
    shuffle: shuffle,
    escapeHtml: escapeHtml,
    toast: toast,
    formatDate: formatDate,
    formatDateTime: formatDateTime,
    formatDuration: formatDuration,
    dueLabel: dueLabel,
    markNav: markNav,
    query: query
  };

  global.App = App;

  // 页面加载后自动高亮导航
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markNav);
  } else {
    markNav();
  }

})(window);
