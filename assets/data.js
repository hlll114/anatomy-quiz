/* =========================================================
 * 人体解剖生理学 · 刷题系统
 * data.js —— 内置题库（种子数据）
 *
 * 字段说明：
 *   id          题目唯一标识
 *   type        题型：choice(单选) / reverse(反向题) / judge(判断)
 *                      / fill(填空) / term(名词卡) / image(看图题)
 *   chapter     所属章节（用于统计与筛选）
 *   stem        题干
 *   options     选项数组（choice / reverse / judge / image 使用）
 *   answerIndex 正确选项下标
 *   answers     可接受答案数组（fill / term 使用，第一个为标准答案）
 *   image       图片路径（image 题型使用）
 *   explanation 解析
 * ========================================================= */
window.SEED_QUESTIONS = [

  /* ---------- 细胞与组织（16 题） ---------- */
  {
    id: 'cell01', type: 'choice', chapter: '细胞与组织',
    stem: '人体最大的细胞是？',
    options: ['红细胞', '神经细胞', '骨骼肌细胞', '卵细胞'],
    answerIndex: 3,
    explanation: '卵细胞直径约 120 μm，是人体最大的细胞；红细胞直径约 7.5 μm，是最小的细胞之一。'
  },
  {
    id: 'cell02', type: 'judge', chapter: '细胞与组织',
    stem: '细胞膜的基本骨架是磷脂双分子层。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '细胞膜以磷脂双分子层为基本骨架，蛋白质镶嵌或贯穿其中，构成“流动镶嵌模型”。'
  },
  {
    id: 'cell03', type: 'fill', chapter: '细胞与组织',
    stem: '人体四大基本组织是上皮组织、结缔组织、肌组织和 ______ 。',
    answers: ['神经组织'],
    explanation: '四大基本组织：上皮组织、结缔组织、肌组织、神经组织。'
  },
  {
    id: 'cell04', type: 'term', chapter: '细胞与组织',
    stem: '线粒体的主要功能是什么？',
    answers: ['线粒体是有氧氧化的主要场所，通过三羧酸循环和氧化磷酸化生成 ATP，为细胞提供能量，因此被称为细胞的“动力工厂”。'],
    explanation: '线粒体含有自身 DNA 和核糖体，能自主合成部分蛋白质。'
  },
  {
    id: 'cell05', type: 'choice', chapter: '细胞与组织',
    stem: '构成人体的基本结构和功能单位是？',
    options: ['系统', '器官', '组织', '细胞'],
    answerIndex: 3,
    explanation: '人体结构层次由小到大为：细胞 → 组织 → 器官 → 系统 → 个体。'
  },
  {
    id: 'cell06', type: 'reverse', chapter: '细胞与组织',
    stem: '某种组织由大量细胞和丰富的细胞间质构成，主要起支持、连接、营养和保护作用。这种组织是？',
    options: ['肌组织', '上皮组织', '结缔组织', '神经组织'],
    answerIndex: 2,
    explanation: '结缔组织的共同特点是细胞数量少、细胞间质多，包括疏松结缔组织、致密结缔组织、软骨、骨和血液等。'
  },
  {
    id: 'cell07', type: 'choice', chapter: '细胞与组织',
    stem: '细胞生命活动的直接能源物质是？',
    options: ['葡萄糖', 'ATP', '蛋白质', '脂肪'],
    answerIndex: 1,
    explanation: 'ATP 是细胞能直接利用的能量形式；糖类是主要能源物质，但需先氧化分解生成 ATP。'
  },
  {
    id: 'cell08', type: 'choice', chapter: '细胞与组织',
    stem: '细胞内蛋白质合成的主要场所是？',
    options: ['高尔基复合体', '核糖体', '溶酶体', '线粒体'],
    answerIndex: 1,
    explanation: '核糖体是蛋白质合成的“装配机器”，游离核糖体合成胞内蛋白，附着核糖体合成分泌蛋白。'
  },
  {
    id: 'cell09', type: 'judge', chapter: '细胞与组织',
    stem: '溶酶体内含多种水解酶，被称为“细胞内的消化车间”。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '溶酶体能分解衰老的细胞器、吞噬的物质和外来异物，也参与细胞凋亡过程。'
  },
  {
    id: 'cell10', type: 'choice', chapter: '细胞与组织',
    stem: '细胞分裂间期中，DNA 复制发生在哪一期？',
    options: ['M 期', 'G2 期', 'G1 期', 'S 期'],
    answerIndex: 3,
    explanation: '间期分为 G1、S、G2 三期，DNA 在 S 期完成复制，染色体数目不变、DNA 含量加倍。'
  },
  {
    id: 'cell11', type: 'fill', chapter: '细胞与组织',
    stem: '人体面积最大、也是最大的器官是 ______ 。',
    answers: ['皮肤'],
    explanation: '成人皮肤面积约 1.5～2 m²，具有屏障、感觉、调节体温和分泌排泄等功能。'
  },
  {
    id: 'cell12', type: 'choice', chapter: '细胞与组织',
    stem: '疏松结缔组织中，能够合成并分泌抗体的细胞是？',
    options: ['肥大细胞', '浆细胞', '成纤维细胞', '巨噬细胞'],
    answerIndex: 1,
    explanation: '浆细胞由 B 淋巴细胞分化而来，能合成免疫球蛋白（抗体）；肥大细胞释放组胺参与过敏反应。'
  },
  {
    id: 'cell13', type: 'judge', chapter: '细胞与组织',
    stem: '成熟红细胞内含有大量线粒体。',
    options: ['正确', '错误'],
    answerIndex: 1,
    explanation: '成熟红细胞没有细胞核和细胞器，只能靠无氧酵解供能，因此不能进行有氧氧化。'
  },
  {
    id: 'cell14', type: 'term', chapter: '细胞与组织',
    stem: '什么是内环境？',
    answers: ['内环境是指围绕细胞周围的细胞外液构成的液体环境，主要包括血浆、组织液和淋巴。内环境的相对稳定是细胞正常生命活动的必要条件。'],
    explanation: '内环境稳态依靠神经调节、体液调节和免疫调节共同维持。'
  },
  {
    id: 'cell15', type: 'choice', chapter: '细胞与组织',
    stem: '下列跨膜物质转运方式中，不消耗 ATP 的是？',
    options: ['原发性主动转运', '继发性主动转运', '单纯扩散', '胞吞作用'],
    answerIndex: 2,
    explanation: '单纯扩散顺浓度梯度、不需载体也不耗能；易化扩散也不耗能但需要载体或通道。'
  },
  {
    id: 'cell16', type: 'choice', chapter: '细胞与组织',
    stem: '组织液与血浆成分的主要区别是？',
    options: ['组织液中含大量血细胞', '组织液中不含葡萄糖', '组织液中蛋白质含量很少', '组织液中不含无机盐'],
    answerIndex: 2,
    explanation: '毛细血管壁对蛋白质通透性很低，故组织液中蛋白质含量明显低于血浆，这是二者最主要的差别。'
  }

  /* ---------- 运动系统（15 题） ---------- */
,
  {
    id: 'move01', type: 'choice', chapter: '运动系统',
    stem: '正常成人全身骨的数量是？',
    options: ['206 块', '200 块', '180 块', '212 块'],
    answerIndex: 0,
    explanation: '成人全身骨共 206 块，分为颅骨、躯干骨和四肢骨三部分。'
  },
  {
    id: 'move02', type: 'choice', chapter: '运动系统',
    stem: '人体最长的骨是？',
    options: ['股骨', '腓骨', '胫骨', '肱骨'],
    answerIndex: 0,
    explanation: '股骨是人体最长、最结实的长骨，约占身高的 1/4。'
  },
  {
    id: 'move03', type: 'judge', chapter: '运动系统',
    stem: '成人脊柱由 24 块椎骨、1 块骶骨和 1 块尾骨组成。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '椎骨 24 块（颈椎 7、胸椎 12、腰椎 5），加上骶骨和尾骨各 1 块，共 26 块。'
  },
  {
    id: 'move04', type: 'fill', chapter: '运动系统',
    stem: '骨骼肌收缩的基本结构和功能单位是 ______ 。',
    answers: ['肌节'],
    explanation: '肌节由一条粗肌丝和两侧各半条细肌丝区域构成，是肌纤维收缩的最小功能单位。'
  },
  {
    id: 'move05', type: 'term', chapter: '运动系统',
    stem: '肩关节属于哪一类关节？有什么运动特点？',
    answers: ['肩关节属于球窝关节（多轴关节），关节头大、关节窝浅，关节囊松弛，可作屈伸、收展、旋转和环转运动，活动范围最大，但稳定性较差，容易脱位。'],
    explanation: '肩关节是人体活动度最大的关节，脱位发生率居各关节之首。'
  },
  {
    id: 'move06', type: 'judge', chapter: '运动系统',
    stem: '儿童少年骨中有机质比例高于成人，因此弹性大、不易骨折。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '儿童骨中有机质约占 1/2，弹性好但硬度低，易变形；老年骨无机质比例高，脆性大，易骨折。'
  },
  {
    id: 'move07', type: 'choice', chapter: '运动系统',
    stem: '骨中有机质的主要成分是？',
    options: ['羟基磷灰石', '磷酸钙', '碳酸钙', '骨胶原纤维'],
    answerIndex: 3,
    explanation: '有机质以骨胶原纤维为主，赋予骨弹性和韧性；无机质主要是钙磷化合物，赋予骨硬度。'
  },
  {
    id: 'move08', type: 'choice', chapter: '运动系统',
    stem: '成人椎骨中，数目最多的是？',
    options: ['骶椎', '颈椎', '腰椎', '胸椎'],
    answerIndex: 3,
    explanation: '颈椎 7 块、胸椎 12 块、腰椎 5 块，胸椎数目最多。'
  },
  {
    id: 'move09', type: 'judge', chapter: '运动系统',
    stem: '红骨髓具有造血功能。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '红骨髓含大量造血干细胞，是主要造血器官；成人的红骨髓主要分布于椎骨、肋骨、胸骨和髂骨等处。'
  },
  {
    id: 'move10', type: 'fill', chapter: '运动系统',
    stem: '成人有肋骨 ______ 对。',
    answers: ['12'],
    explanation: '12 对肋骨中，第 1～7 对为真肋，第 8～10 对为假肋，第 11～12 对为浮肋。'
  },
  {
    id: 'move11', type: 'choice', chapter: '运动系统',
    stem: '下列骨中，属于不规则骨的是？',
    options: ['腕骨', '肱骨', '椎骨', '顶骨'],
    answerIndex: 2,
    explanation: '骨按形态分为长骨、短骨、扁骨和不规则骨。椎骨形态不规则，属不规则骨；顶骨属扁骨。'
  },
  {
    id: 'move12', type: 'judge', chapter: '运动系统',
    stem: '膝关节内的半月板可以缓冲震荡、增加关节稳定性。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '半月板由纤维软骨构成，能缓冲压力、加深关节窝，剧烈扭转时易损伤撕裂。'
  },
  {
    id: 'move13', type: 'fill', chapter: '运动系统',
    stem: '人体最大的籽骨是 ______ 。',
    answers: ['髌骨'],
    explanation: '髌骨位于股四头肌腱内，可增大肌力力臂、保护膝关节。'
  },
  {
    id: 'move14', type: 'choice', chapter: '运动系统',
    stem: '脊柱四个生理弯曲中，凸向后方的是？',
    options: ['颈曲和胸曲', '颈曲和腰曲', '腰曲和骶曲', '胸曲和骶曲'],
    answerIndex: 3,
    explanation: '颈曲、腰曲凸向前，胸曲、骶曲凸向后。生理弯曲使脊柱富有弹性，可缓冲震荡。'
  },
  {
    id: 'img-longbone', type: 'image', chapter: '运动系统',
    stem: '图中标注的、紧贴骨表面并富含血管和神经的薄膜是？',
    image: 'assets/images/longbone.svg',
    options: ['骨膜', '骨髓', '骨密质', '骺软骨'],
    answerIndex: 0,
    explanation: '骨膜内层含有成骨细胞和破骨细胞，对骨的营养、生长和修复起重要作用；骨折时骨膜参与骨痂形成。'
  }

  /* ---------- 血液（16 题） ---------- */
,
  {
    id: 'blood01', type: 'choice', chapter: '血液',
    stem: '正常成人血浆约占血液容积的？',
    options: ['45%', '35%', '55%', '60%'],
    answerIndex: 2,
    explanation: '血浆约占 55%，血细胞约占 45%。'
  },
  {
    id: 'blood02', type: 'choice', chapter: '血液',
    stem: '正常成人红细胞的平均寿命约为？',
    options: ['30 天', '7 天', '120 天', '60 天'],
    answerIndex: 2,
    explanation: '红细胞寿命约 120 天，衰老后主要在脾脏被巨噬细胞吞噬。'
  },
  {
    id: 'blood03', type: 'judge', chapter: '血液',
    stem: '血小板具有细胞核。',
    options: ['正确', '错误'],
    answerIndex: 1,
    explanation: '血小板是巨核细胞胞质脱落形成的碎片，有细胞器但没有细胞核。'
  },
  {
    id: 'blood04', type: 'fill', chapter: '血液',
    stem: '正常成人安静状态下心率为 ______ 次/分。',
    answers: ['60-100', '60~100', '60—100', '60到100'],
    explanation: '成人安静时心率 60～100 次/分，低于 60 为心动过缓，高于 100 为心动过速。'
  },
  {
    id: 'blood05', type: 'term', chapter: '血液',
    stem: '什么是血细胞比容？正常值是多少？',
    answers: ['血细胞比容是指红细胞在全血中所占的容积百分比，正常成年男性约为 40%～50%，女性约为 37%～48%。它能反映红细胞数量的相对多少。'],
    explanation: '贫血时血细胞比容降低，脱水时相对升高。'
  },
  {
    id: 'blood06', type: 'choice', chapter: '血液',
    stem: '中性粒细胞的主要功能是？',
    options: ['参与凝血', '释放组胺', '吞噬和杀灭细菌', '分泌抗体'],
    answerIndex: 2,
    explanation: '中性粒细胞具有活跃的变形运动和吞噬能力，是急性化脓性感染时的主要防御细胞。'
  },
  {
    id: 'blood07', type: 'choice', chapter: '血液',
    stem: '血浆中含量最多的蛋白质是？',
    options: ['纤维蛋白原', '球蛋白', '白蛋白', '血红蛋白'],
    answerIndex: 2,
    explanation: '白蛋白约占血浆蛋白总量的 50%～60%，主要维持血浆胶体渗透压。'
  },
  {
    id: 'blood08', type: 'choice', chapter: '血液',
    stem: '血浆胶体渗透压主要由下列哪种物质维持？',
    options: ['纤维蛋白原', '球蛋白', '白蛋白', '氯化钠'],
    answerIndex: 2,
    explanation: '血浆胶体渗透压主要取决于血浆蛋白，其中白蛋白分子量小、数量多，贡献最大。'
  },
  {
    id: 'blood09', type: 'judge', chapter: '血液',
    stem: '成人造血的主要场所是红骨髓。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '成人红骨髓是主要造血器官；黄骨髓在大量失血时可转化为红骨髓恢复造血。'
  },
  {
    id: 'blood10', type: 'fill', chapter: '血液',
    stem: '正常成人外周血白细胞总数为 ______ ×10⁹/L。',
    answers: ['4-10', '4~10', '4—10', '4到10'],
    explanation: '正常成人白细胞 4～10×10⁹/L，其中中性粒细胞占 50%～70%。'
  },
  {
    id: 'blood11', type: 'choice', chapter: '血液',
    stem: '血浆晶体渗透压主要来自？',
    options: ['血浆蛋白', '无机盐（以 NaCl 为主）', '葡萄糖', '尿素'],
    answerIndex: 1,
    explanation: '晶体渗透压主要由无机盐形成，对维持细胞内外水平衡起重要作用。'
  },
  {
    id: 'blood12', type: 'choice', chapter: '血液',
    stem: '血液中运输 O₂ 的主要蛋白质是？',
    options: ['球蛋白', '血红蛋白', '纤维蛋白原', '白蛋白'],
    answerIndex: 1,
    explanation: '血红蛋白与 O₂ 结合成氧合血红蛋白，完成氧的运输；1 分子血红蛋白可结合 4 分子 O₂。'
  },
  {
    id: 'blood13', type: 'term', chapter: '血液',
    stem: '什么是贫血？',
    answers: ['贫血是指外周血中红细胞数量、血红蛋白浓度或红细胞比容低于正常值的状态。我国成年男性血红蛋白低于 120 g/L、女性低于 110 g/L 即可诊断为贫血。'],
    explanation: '常见原因包括造血原料不足、骨髓造血功能障碍和红细胞破坏或丢失过多。'
  },
  {
    id: 'blood14', type: 'choice', chapter: '血液',
    stem: '正常人血液的 pH 值范围是？',
    options: ['7.35～7.45', '6.35～6.45', '7.55～7.65', '7.10～7.20'],
    answerIndex: 0,
    explanation: '血液 pH 依靠血液缓冲系统、肺和肾的调节维持在 7.35～7.45 之间。'
  },
  {
    id: 'blood15', type: 'judge', chapter: '血液',
    stem: '红细胞放入低渗溶液中会发生皱缩。',
    options: ['正确', '错误'],
    answerIndex: 1,
    explanation: '低渗溶液中水分进入红细胞，红细胞膨胀甚至破裂溶血；在高渗溶液中才会皱缩。'
  },
  {
    id: 'blood16', type: 'fill', chapter: '血液',
    stem: 'ABO 血型是依据红细胞膜上是否存在 ______ 来分型的。',
    answers: ['抗原', '凝集原', 'A抗原和B抗原'],
    explanation: '红细胞膜上的 A、B 凝集原（抗原）决定血型，血清中存在相应的凝集素（抗体）。'
  }

  /* ---------- 循环系统（20 题） ---------- */
,
  {
    id: 'circ01', type: 'choice', chapter: '循环系统',
    stem: '左心室收缩时，血液射入哪个血管？',
    options: ['肺动脉', '腔静脉', '肺静脉', '主动脉'],
    answerIndex: 3,
    explanation: '左心室 → 主动脉瓣 → 主动脉，属于体循环的起点。'
  },
  {
    id: 'circ02', type: 'judge', chapter: '循环系统',
    stem: '动脉内流动的一定是动脉血。',
    options: ['正确', '错误'],
    answerIndex: 1,
    explanation: '肺动脉内流动的是静脉血，肺静脉内流动的是动脉血。动脉血与静脉血是按含氧量划分，与血管名称无关。'
  },
  {
    id: 'circ03', type: 'choice', chapter: '循环系统',
    stem: '心脏的正常起搏点是？',
    options: ['房室结', '窦房结', '浦肯野纤维', '房室束'],
    answerIndex: 1,
    explanation: '窦房结自律性最高（约 100 次/分），是心脏的正常起搏点，其所控制的心律称为窦性心律。'
  },
  {
    id: 'circ04', type: 'term', chapter: '循环系统',
    stem: '什么是心输出量？正常值是多少？',
    answers: ['心输出量是指每分钟一侧心室射出的血量，等于每搏输出量乘以心率。安静状态下正常成人约为 5 L/min，运动时可增加数倍。'],
    explanation: '心输出量是评价心脏泵血功能的基本指标。'
  },
  {
    id: 'circ05', type: 'fill', chapter: '循环系统',
    stem: '我国正常成人收缩压的范围是 ______ mmHg。',
    answers: ['90-139', '90~139', '90—139', '90到139'],
    explanation: '正常成人收缩压 90～139 mmHg，舒张压 60～89 mmHg。'
  },
  {
    id: 'circ06', type: 'choice', chapter: '循环系统',
    stem: '体循环的起点是？',
    options: ['右心室', '右心房', '左心房', '左心室'],
    answerIndex: 3,
    explanation: '体循环：左心室 → 主动脉 → 全身毛细血管 → 上、下腔静脉 → 右心房。'
  },
  {
    id: 'circ07', type: 'judge', chapter: '循环系统',
    stem: '心室肌细胞具有自动节律性，因此是心脏活动的正常起搏点。',
    options: ['正确', '错误'],
    answerIndex: 1,
    explanation: '心室肌细胞一般不具有自律性；窦房结 P 细胞自律性最高，才是正常起搏点。'
  },
  {
    id: 'circ08', type: 'reverse', chapter: '循环系统',
    stem: '某段血管内流动的是含氧较少的血液，且压力低、管壁薄、容量大。这段血管最可能是？',
    options: ['主动脉', '肺动脉', '肺静脉', '股动脉'],
    answerIndex: 1,
    explanation: '肺动脉是唯一运送静脉血的动脉，将右心室的血液送往肺进行气体交换。'
  },
  {
    id: 'circ09', type: 'choice', chapter: '循环系统',
    stem: '心动周期中，心室射血发生在？',
    options: ['心室舒张期', '心房收缩期', '心室收缩期', '全心舒张期'],
    answerIndex: 2,
    explanation: '心室收缩时室内压超过动脉压，半月瓣开放，血液射入主动脉和肺动脉。'
  },
  {
    id: 'circ10', type: 'choice', chapter: '循环系统',
    stem: '心电图中 QRS 波群代表？',
    options: ['心房复极化', '心房去极化', '心室复极化', '心室去极化'],
    answerIndex: 3,
    explanation: 'P 波代表心房去极化，QRS 波群代表心室去极化，T 波代表心室复极化。'
  },
  {
    id: 'circ11', type: 'judge', chapter: '循环系统',
    stem: '心迷走神经兴奋可使心率减慢。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '心迷走神经末梢释放乙酰胆碱，作用于 M 受体，使心率减慢、房室传导减慢、心肌收缩力减弱。'
  },
  {
    id: 'circ12', type: 'fill', chapter: '循环系统',
    stem: '安静状态下正常成人每搏输出量约为 ______ ml。',
    answers: ['70'],
    explanation: '每搏输出量约 60～80 ml，乘以心率即为每分输出量（约 5 L/min）。'
  },
  {
    id: 'circ13', type: 'choice', chapter: '循环系统',
    stem: '第一心音的产生主要与什么有关？',
    options: ['心室舒张', '房室瓣关闭', '心房收缩', '半月瓣关闭'],
    answerIndex: 1,
    explanation: '第一心音出现在心室收缩期初，主要由房室瓣关闭引起；第二心音由半月瓣关闭引起。'
  },
  {
    id: 'circ14', type: 'term', chapter: '循环系统',
    stem: '什么是平均动脉压？如何估算？',
    answers: ['平均动脉压是指一个心动周期中动脉血压的平均值，约等于舒张压加上三分之一的脉压。它反映组织器官的血液灌注水平。'],
    explanation: '由于舒张期长于收缩期，平均动脉压更接近舒张压。'
  },
  {
    id: 'circ15', type: 'choice', chapter: '循环系统',
    stem: '微循环中进行物质交换的主要通路是？',
    options: ['直捷通路', '迂回通路', '淋巴通路', '动-静脉短路'],
    answerIndex: 1,
    explanation: '迂回通路（营养通路）血流缓慢、毛细血管壁通透性高，是物质交换的主要场所。'
  },
  {
    id: 'circ16', type: 'judge', chapter: '循环系统',
    stem: '大动脉的弹性回缩作用可缓冲血压波动，使血流保持连续。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '大动脉弹性贮器作用：收缩期贮存势能、舒张期释放，从而减小脉压并使血流连续。'
  },
  {
    id: 'circ17', type: 'fill', chapter: '循环系统',
    stem: '心率过快时，心输出量会 ______ 。',
    answers: ['减少', '降低', '减小'],
    explanation: '心率过快时舒张期明显缩短，心室充盈不足，每搏输出量下降，心输出量反而减少。'
  },
  {
    id: 'circ18', type: 'choice', chapter: '循环系统',
    stem: '淋巴液最终汇入？',
    options: ['主动脉', '静脉角（锁骨下静脉与颈内静脉交汇处）', '肺动脉', '门静脉'],
    answerIndex: 1,
    explanation: '右淋巴导管汇入右静脉角，胸导管汇入左静脉角，淋巴由此回到血液循环。'
  },
  {
    id: 'circ19', type: 'choice', chapter: '循环系统',
    stem: '正常成人的脉压约为？',
    options: ['10～20 mmHg', '70～90 mmHg', '50～70 mmHg', '30～40 mmHg'],
    answerIndex: 3,
    explanation: '脉压＝收缩压－舒张压，正常约 30～40 mmHg。脉压增大常见于主动脉硬化。'
  },
  {
    id: 'img-heart', type: 'image', chapter: '循环系统',
    stem: '图中标注（?）所示的心腔是？',
    image: 'assets/images/heart.svg',
    options: ['左心房', '右心房', '左心室', '右心室'],
    answerIndex: 3,
    explanation: '图为心脏前面观示意图。前面观时图的左侧为心的右侧，标注处位于右下方，即右心室。右心室收缩时血液经肺动脉瓣泵入肺动脉。'
  }

  /* ---------- 呼吸系统（16 题） ---------- */
,
  {
    id: 'resp01', type: 'choice', chapter: '呼吸系统',
    stem: '肺内气体交换的主要场所是？',
    options: ['支气管', '气管', '胸膜腔', '肺泡'],
    answerIndex: 3,
    explanation: '肺泡壁极薄、面积大、毛细血管丰富，是气体交换的主要部位。'
  },
  {
    id: 'resp02', type: 'judge', chapter: '呼吸系统',
    stem: '平静呼吸时，吸气是主动过程，呼气是被动过程。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '平静吸气依靠膈肌和肋间外肌收缩，呼气依靠肺和胸廓的弹性回缩。用力呼吸时吸气和呼气均为主动过程。'
  },
  {
    id: 'resp03', type: 'fill', chapter: '呼吸系统',
    stem: '正常成人平静呼吸频率为 ______ 次/分。',
    answers: ['12-18', '12~18', '12—18', '12到18'],
    explanation: '成人平静呼吸 12～18 次/分，呼吸与脉搏之比约为 1:4。'
  },
  {
    id: 'resp04', type: 'term', chapter: '呼吸系统',
    stem: '什么是肺活量？',
    answers: ['肺活量是指尽力吸气后再尽力呼气所能呼出的最大气量，等于潮气量、补吸气量和补呼气量之和。正常成年男性约 3500 ml，女性约 2500 ml。'],
    explanation: '肺活量反映一次呼吸的最大通气能力，但不反映通气效率。'
  },
  {
    id: 'resp05', type: 'choice', chapter: '呼吸系统',
    stem: '氧在血液中的主要运输形式是？',
    options: ['物理溶解', '形成碳酸氢盐', '与白蛋白结合', '与血红蛋白结合'],
    answerIndex: 3,
    explanation: '血液中约 98% 的氧以氧合血红蛋白形式运输，仅 2% 物理溶解。'
  },
  {
    id: 'resp06', type: 'choice', chapter: '呼吸系统',
    stem: '基本呼吸中枢位于？',
    options: ['脊髓', '中脑', '延髓', '脑桥'],
    answerIndex: 2,
    explanation: '延髓是产生基本呼吸节律的部位，脑桥含有调整呼吸节律的呼吸调整中枢。'
  },
  {
    id: 'resp07', type: 'choice', chapter: '呼吸系统',
    stem: '平静呼气末，胸膜腔内压？',
    options: ['等于大气压', '高于大气压', '低于大气压，为负压', '等于肺内压'],
    answerIndex: 2,
    explanation: '胸膜腔内压始终低于大气压，由肺的弹性回缩力造成，有利于静脉和淋巴回流。'
  },
  {
    id: 'resp08', type: 'judge', chapter: '呼吸系统',
    stem: '肺泡表面活性物质缺乏时可导致肺不张。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '表面活性物质由肺泡Ⅱ型细胞分泌，可降低肺泡表面张力、防止肺泡萎陷；早产儿缺乏可致呼吸窘迫综合征。'
  },
  {
    id: 'resp09', type: 'fill', chapter: '呼吸系统',
    stem: '正常成人平静呼吸时的潮气量约为 ______ ml。',
    answers: ['500'],
    explanation: '潮气量约 400～600 ml，其中约 150 ml 存留于解剖无效腔。'
  },
  {
    id: 'resp10', type: 'choice', chapter: '呼吸系统',
    stem: '影响气道阻力的最主要因素是？',
    options: ['气道长度', '气流速度', '气道口径', '气体密度'],
    answerIndex: 2,
    explanation: '气道阻力与半径的 4 次方成反比，故口径影响最大；交感神经兴奋使支气管扩张、阻力减小。'
  },
  {
    id: 'resp11', type: 'choice', chapter: '呼吸系统',
    stem: 'CO₂ 在血液中的主要运输形式是？',
    options: ['碳酸', '物理溶解', '氨基甲酰血红蛋白', '碳酸氢盐'],
    answerIndex: 3,
    explanation: '约 70%～88% 的 CO₂ 以碳酸氢盐形式运输，少量与血红蛋白结合或物理溶解。'
  },
  {
    id: 'resp12', type: 'judge', chapter: '呼吸系统',
    stem: '肺牵张反射的作用是促进吸气。',
    options: ['正确', '错误'],
    answerIndex: 1,
    explanation: '肺扩张时引起肺牵张反射，抑制吸气、促进吸气转为呼气，从而防止肺过度膨胀。'
  },
  {
    id: 'resp13', type: 'term', chapter: '呼吸系统',
    stem: '什么是肺泡通气量？为什么它比肺通气量更有意义？',
    answers: ['肺泡通气量是指每分钟吸入肺泡的新鲜空气量，等于（潮气量－无效腔气量）×呼吸频率。因为只有到达肺泡的气体才能参与气体交换，所以它比肺通气量更能反映有效通气效率。'],
    explanation: '浅快呼吸时肺泡通气量明显下降，深慢呼吸则更有效。'
  },
  {
    id: 'resp14', type: 'fill', chapter: '呼吸系统',
    stem: '正常成人解剖无效腔的容量约为 ______ ml。',
    answers: ['150'],
    explanation: '解剖无效腔约 150 ml，其中不含参与气体交换的气体。'
  },
  {
    id: 'resp15', type: 'choice', chapter: '呼吸系统',
    stem: '动脉血中 PCO₂ 升高时，呼吸运动将？',
    options: ['先浅快后深慢', '变浅变慢', '保持不变', '加深加快'],
    answerIndex: 3,
    explanation: 'CO₂ 是调节呼吸最重要的生理性化学因素，PCO₂ 升高通过刺激中枢和外周化学感受器使呼吸加深加快。'
  },
  {
    id: 'img-alveolus', type: 'image', chapter: '呼吸系统',
    stem: '图中标注的结构是肺内气体交换的主要场所，它是？',
    image: 'assets/images/alveolus.svg',
    options: ['胸膜', '肺静脉', '肺泡', '细支气管'],
    answerIndex: 2,
    explanation: '肺泡壁由单层上皮细胞构成，外面紧贴毛细血管，二者共同构成呼吸膜，是 O₂ 与 CO₂ 交换的部位。'
  }

  /* ---------- 消化系统（18 题） ---------- */
,
  {
    id: 'dig01', type: 'choice', chapter: '消化系统',
    stem: '消化和吸收的主要部位是？',
    options: ['口腔', '大肠', '小肠', '胃'],
    answerIndex: 2,
    explanation: '小肠长约 5～7 m，具有环状皱襞、绒毛和微绒毛，吸收面积极大。'
  },
  {
    id: 'dig02', type: 'choice', chapter: '消化系统',
    stem: '胃壁细胞主要分泌？',
    options: ['促胃液素', '盐酸和内因子', '黏液', '胃蛋白酶原'],
    answerIndex: 1,
    explanation: '主细胞分泌胃蛋白酶原，壁细胞分泌盐酸和内因子，黏液细胞分泌黏液。'
  },
  {
    id: 'dig03', type: 'fill', chapter: '消化系统',
    stem: '成人小肠全长约 ______ 米。',
    answers: ['5-7', '5~7', '5—7', '5到7'],
    explanation: '小肠分为十二指肠、空肠和回肠，全长约 5～7 m。'
  },
  {
    id: 'dig04', type: 'judge', chapter: '消化系统',
    stem: '胆汁中含有消化酶，能直接分解脂肪。',
    options: ['正确', '错误'],
    answerIndex: 1,
    explanation: '胆汁不含消化酶，其中的胆盐可乳化脂肪、促进脂肪消化吸收，并促进脂溶性维生素吸收。'
  },
  {
    id: 'dig05', type: 'term', chapter: '消化系统',
    stem: '什么是基本电节律（慢波）？',
    answers: ['基本电节律是指胃肠道平滑肌细胞在静息电位基础上自发产生的节律性去极化，它决定平滑肌收缩的节律和方向，本身不引起收缩，但为动作电位的产生创造条件。'],
    explanation: '基本电节律起源于 Cajal 间质细胞，胃约 3 次/分，十二指肠约 12 次/分。'
  },
  {
    id: 'dig06', type: 'reverse', chapter: '消化系统',
    stem: '某种消化液的主要作用是乳化脂肪、促进脂肪消化吸收，但本身不含消化酶。该消化液是？',
    options: ['小肠液', '胃液', '胆汁', '胰液'],
    answerIndex: 2,
    explanation: '胆汁由肝细胞分泌、胆囊储存和浓缩，胆盐是其发挥消化作用的主要成分。'
  },
  {
    id: 'dig07', type: 'judge', chapter: '消化系统',
    stem: '肝脏是人体最大的消化腺，同时也是重要的代谢和解毒器官。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '肝脏参与糖、脂肪、蛋白质代谢，并具有解毒、分泌胆汁、储存糖原和参与凝血因子合成等功能。'
  },
  {
    id: 'dig08', type: 'choice', chapter: '消化系统',
    stem: '下列哪种消化液不含消化酶？',
    options: ['胃液', '小肠液', '胰液', '胆汁'],
    answerIndex: 3,
    explanation: '胰液含胰蛋白酶、胰淀粉酶和胰脂肪酶；胃液含胃蛋白酶；小肠液含多种消化酶；胆汁不含酶。'
  },
  {
    id: 'dig09', type: 'choice', chapter: '消化系统',
    stem: '三类营养物质中，胃排空速度最快的是？',
    options: ['脂肪', '蛋白质', '膳食纤维', '糖类'],
    answerIndex: 3,
    explanation: '胃排空速度：糖类 > 蛋白质 > 脂肪。脂肪可刺激胆囊收缩素释放，明显延缓胃排空。'
  },
  {
    id: 'dig10', type: 'judge', chapter: '消化系统',
    stem: '胃能吸收酒精和少量水分。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '胃主要吸收酒精和少量水分，绝大部分营养物质在小肠吸收。'
  },
  {
    id: 'dig11', type: 'fill', chapter: '消化系统',
    stem: '成人每日分泌的胃液量约为 ______ L。',
    answers: ['1.5-2.5', '1.5~2.5', '2'],
    explanation: '胃液呈强酸性（pH 0.9～1.5），主要成分包括盐酸、胃蛋白酶原、内因子和黏液。'
  },
  {
    id: 'dig12', type: 'choice', chapter: '消化系统',
    stem: '促胰液素（胰泌素）的主要作用是？',
    options: ['促进胃排空', '促进胆囊收缩', '促进胰液分泌大量水分和碳酸氢盐', '促进胃酸分泌'],
    answerIndex: 2,
    explanation: '促胰液素由小肠 S 细胞分泌，主要促使胰液分泌水和碳酸氢盐，中和进入十二指肠的胃酸。'
  },
  {
    id: 'dig13', type: 'choice', chapter: '消化系统',
    stem: '胆囊收缩素（CCK）的主要作用是？',
    options: ['促进小肠液分泌', '促进胃酸分泌', '促进胆囊收缩和胰酶分泌', '抑制胰液分泌'],
    answerIndex: 2,
    explanation: 'CCK 由小肠 I 细胞分泌，促进胆囊收缩、奥迪括约肌舒张并促使胰酶分泌，同时抑制胃排空。'
  },
  {
    id: 'dig14', type: 'judge', chapter: '消化系统',
    stem: '交感神经兴奋可促进消化液分泌和胃肠运动。',
    options: ['正确', '错误'],
    answerIndex: 1,
    explanation: '副交感神经（迷走神经）兴奋促进消化；交感神经兴奋则抑制胃肠运动和消化液分泌。'
  },
  {
    id: 'dig15', type: 'choice', chapter: '消化系统',
    stem: '铁在消化道的主要吸收部位是？',
    options: ['胃', '结肠', '回肠末端', '十二指肠和空肠上段'],
    answerIndex: 3,
    explanation: '铁主要在十二指肠和空肠上段以二价铁形式吸收，维生素 C 可促进铁的吸收。'
  },
  {
    id: 'dig16', type: 'choice', chapter: '消化系统',
    stem: '维生素 B₁₂ 的吸收必须有哪种物质参与？',
    options: ['胰蛋白酶', '盐酸', '胆盐', '内因子'],
    answerIndex: 3,
    explanation: '内因子由胃壁细胞分泌，与维生素 B₁₂ 结合后保护其不被破坏，并在回肠末端被吸收。'
  },
  {
    id: 'dig17', type: 'choice', chapter: '消化系统',
    stem: '下列哪项不属于小肠的运动形式？',
    options: ['紧张性收缩', '蠕动', '容受性舒张', '分节运动'],
    answerIndex: 2,
    explanation: '容受性舒张是胃特有的运动形式，指进食时胃底和胃体舒张以容纳食物。'
  },
  {
    id: 'img-digestive', type: 'image', chapter: '消化系统',
    stem: '图中标注的盘曲管道是消化吸收的主要部位，它是？',
    image: 'assets/images/digestive.svg',
    options: ['大肠', '小肠', '胃', '食管'],
    answerIndex: 1,
    explanation: '小肠长约 5～7 m，黏膜具有环状皱襞、绒毛和微绒毛，使吸收面积扩大约 600 倍，是消化吸收的主要场所。'
  }

  /* ---------- 泌尿系统（15 题） ---------- */
,
  {
    id: 'uri01', type: 'choice', chapter: '泌尿系统',
    stem: '肾单位由哪两部分组成？',
    options: ['肾小管和集合管', '肾盂和肾盏', '肾小体和肾小管', '肾小体和集合管'],
    answerIndex: 2,
    explanation: '肾单位包括肾小体（肾小球 + 肾小囊）和肾小管，是肾脏的基本结构和功能单位。'
  },
  {
    id: 'uri02', type: 'judge', chapter: '泌尿系统',
    stem: '原尿与血浆的主要区别是原尿中蛋白质含量极少。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '肾小球滤过膜具有分子屏障和电荷屏障，大分子蛋白质不能滤过，故原尿中几乎不含蛋白质。'
  },
  {
    id: 'uri03', type: 'fill', chapter: '泌尿系统',
    stem: '成人每昼夜尿量少于 ______ ml 称为少尿。',
    answers: ['400'],
    explanation: '正常成人尿量 1000～2000 ml/日；少于 400 ml 为少尿，少于 100 ml 为无尿。'
  },
  {
    id: 'uri04', type: 'term', chapter: '泌尿系统',
    stem: '什么是肾小球滤过率？正常值是多少？',
    answers: ['肾小球滤过率是指单位时间（每分钟）内两肾生成的超滤液量，正常成人约为 125 ml/min，是衡量肾滤过功能的重要指标。'],
    explanation: '肾小球滤过率受有效滤过压、滤过膜通透性和肾血浆流量的影响。'
  },
  {
    id: 'uri05', type: 'choice', chapter: '泌尿系统',
    stem: '抗利尿激素（ADH）的合成部位是？',
    options: ['肾上腺皮质', '神经垂体', '腺垂体', '下丘脑视上核和室旁核'],
    answerIndex: 3,
    explanation: 'ADH 由下丘脑视上核和室旁核的神经元合成，沿轴突运输至神经垂体储存和释放。'
  },
  {
    id: 'uri06', type: 'choice', chapter: '泌尿系统',
    stem: '正常尿液中的主要溶质成分是？',
    options: ['葡萄糖', '尿素', '红细胞', '蛋白质'],
    answerIndex: 1,
    explanation: '正常尿液中尿素含量最高，其次为钠、钾、氯等；出现葡萄糖、蛋白质或红细胞提示异常。'
  },
  {
    id: 'uri07', type: 'choice', chapter: '泌尿系统',
    stem: '肾小球滤过的动力是？',
    options: ['血浆胶体渗透压', '肾小球毛细血管血压', '有效滤过压', '肾小囊内压'],
    answerIndex: 2,
    explanation: '有效滤过压＝肾小球毛细血管血压－（血浆胶体渗透压＋肾小囊内压），是推动滤过的直接动力。'
  },
  {
    id: 'uri08', type: 'judge', chapter: '泌尿系统',
    stem: '醛固酮的作用是保钠排钾。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '醛固酮由肾上腺皮质球状带分泌，促进远端小管和集合管重吸收 Na⁺、分泌 K⁺，同时伴有水的重吸收。'
  },
  {
    id: 'uri09', type: 'fill', chapter: '泌尿系统',
    stem: '正常成人 24 小时尿量约为 ______ ml。',
    answers: ['1000-2000', '1000~2000', '1500'],
    explanation: '正常成人尿量 1000～2000 ml/日；少于 400 ml 为少尿，少于 100 ml 为无尿。'
  },
  {
    id: 'uri10', type: 'choice', chapter: '泌尿系统',
    stem: '大量出汗后尿量减少，最主要的原因是？',
    options: ['醛固酮分泌减少', '肾小管重吸收减少', '抗利尿激素分泌增多', '肾小球滤过率升高'],
    answerIndex: 2,
    explanation: '大量出汗使血浆晶体渗透压升高，刺激下丘脑渗透压感受器，ADH 释放增多，促进水重吸收，尿量减少。'
  },
  {
    id: 'uri11', type: 'choice', chapter: '泌尿系统',
    stem: '原尿中葡萄糖被重吸收的部位是？',
    options: ['髓袢', '近端小管', '集合管', '远端小管'],
    answerIndex: 1,
    explanation: '葡萄糖在近端小管被全部重吸收，属于继发性主动转运；超过肾糖阈时出现糖尿。'
  },
  {
    id: 'uri12', type: 'term', chapter: '泌尿系统',
    stem: '什么是渗透性利尿？',
    answers: ['渗透性利尿是指小管液中溶质浓度升高，使小管液渗透压增大，妨碍肾小管对水的重吸收，从而引起尿量增多的现象。临床用甘露醇利尿即利用此原理。'],
    explanation: '与抗利尿激素调节的水重吸收机制不同，渗透性利尿属于小管液溶质因素。'
  },
  {
    id: 'uri13', type: 'judge', chapter: '泌尿系统',
    stem: '当动脉血压在 80～180 mmHg 范围内变动时，肾血流量可保持相对恒定。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '这称为肾血流量的自身调节，主要由入球小动脉的肌源性机制实现，保证滤过率稳定。'
  },
  {
    id: 'uri14', type: 'choice', chapter: '泌尿系统',
    stem: '排尿反射的初级中枢位于？',
    options: ['大脑皮质', '延髓', '胸髓', '骶髓'],
    answerIndex: 3,
    explanation: '排尿反射初级中枢位于骶髓（S2～S4）；高位中枢可对其产生易化或抑制。'
  },
  {
    id: 'img-nephron', type: 'image', chapter: '泌尿系统',
    stem: '图中标注的球状结构是肾小体的主要组成部分，它是？',
    image: 'assets/images/nephron.svg',
    options: ['集合管', '肾小囊', '近端小管', '肾小球'],
    answerIndex: 3,
    explanation: '肾小球是入球小动脉反复分支形成的毛细血管球，与肾小囊共同构成肾小体，是血浆滤过形成原尿的场所。'
  }

  /* ---------- 神经系统（18 题） ---------- */
,
  {
    id: 'ner01', type: 'choice', chapter: '神经系统',
    stem: '中枢神经系统包括？',
    options: ['交感神经和副交感神经', '脑和脊神经', '脑神经和脊髓', '脑和脊髓'],
    answerIndex: 3,
    explanation: '中枢神经系统由脑和脊髓组成；脑神经、脊神经及内脏神经构成周围神经系统。'
  },
  {
    id: 'ner02', type: 'judge', chapter: '神经系统',
    stem: '交感神经兴奋时，心率加快、瞳孔扩大、血压升高。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '交感神经兴奋引起“战斗或逃跑”反应；副交感神经兴奋则心率减慢、瞳孔缩小、腺体分泌增加。'
  },
  {
    id: 'ner03', type: 'fill', chapter: '神经系统',
    stem: '神经元的基本结构包括胞体、树突和 ______ 。',
    answers: ['轴突'],
    explanation: '树突接受信息传向胞体，轴突将冲动由胞体传出。'
  },
  {
    id: 'ner04', type: 'term', chapter: '神经系统',
    stem: '什么是突触？',
    answers: ['突触是指神经元与神经元之间、或神经元与效应器细胞之间相互接触并传递信息的特化结构，由突触前膜、突触间隙和突触后膜组成，主要通过释放神经递质完成信息传递。'],
    explanation: '突触传递具有单向性、突触延搁和易受药物影响等特点。'
  },
  {
    id: 'ner05', type: 'choice', chapter: '神经系统',
    stem: '小脑的主要功能是？',
    options: ['产生情绪', '维持身体平衡、协调随意运动', '调节体温', '控制呼吸节律'],
    answerIndex: 1,
    explanation: '小脑参与维持姿势平衡、调节肌张力和协调随意运动，损伤后出现共济失调。'
  },
  {
    id: 'ner06', type: 'choice', chapter: '神经系统',
    stem: '牵张反射的感受器是？',
    options: ['腱器官', '肌梭', '环层小体', '游离神经末梢'],
    answerIndex: 1,
    explanation: '肌梭感受肌肉长度变化，腱器官感受肌肉张力变化。'
  },
  {
    id: 'ner07', type: 'judge', chapter: '神经系统',
    stem: '神经调节的基本方式是反射。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '反射的结构基础是反射弧，包括感受器、传入神经、神经中枢、传出神经和效应器五部分。'
  },
  {
    id: 'ner08', type: 'choice', chapter: '神经系统',
    stem: '神经元之间信息传递的主要方式是？',
    options: ['体液扩散', '电突触传递', '直接接触传导', '化学性突触传递'],
    answerIndex: 3,
    explanation: '化学性突触传递通过释放神经递质完成，是神经系统最主要的传递方式，具有单向性和突触延搁。'
  },
  {
    id: 'ner09', type: 'choice', chapter: '神经系统',
    stem: '内环境稳态调节的高级中枢位于？',
    options: ['小脑', '下丘脑', '脊髓', '延髓'],
    answerIndex: 1,
    explanation: '下丘脑是调节体温、水平衡、摄食、内分泌和情绪的重要中枢，被称为“生命中枢”之一。'
  },
  {
    id: 'ner10', type: 'judge', chapter: '神经系统',
    stem: '特异性投射系统能引起特定感觉并激发大脑皮质发出传出冲动。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '特异性投射系统点对点投射到皮质特定区域引起特定感觉；非特异性投射系统维持皮质觉醒。'
  },
  {
    id: 'ner11', type: 'fill', chapter: '神经系统',
    stem: '反射弧由感受器、传入神经、神经中枢、传出神经和 ______ 五部分组成。',
    answers: ['效应器'],
    explanation: '任何一个环节受损，反射都不能完成，如传出神经损伤可导致肌肉瘫痪。'
  },
  {
    id: 'ner12', type: 'choice', chapter: '神经系统',
    stem: '维持大脑皮质觉醒状态的主要结构是？',
    options: ['锥体系', '网状结构上行激动系统', '锥体外系', '特异性投射系统'],
    answerIndex: 1,
    explanation: '网状结构上行激动系统经非特异性投射维持皮质兴奋状态；该系统受损可导致昏迷。'
  },
  {
    id: 'ner13', type: 'choice', chapter: '神经系统',
    stem: '腱反射（如膝跳反射）属于？',
    options: ['条件反射', '单突触反射', '多突触反射', '内脏反射'],
    answerIndex: 1,
    explanation: '腱反射的反射弧只有传入和传出两个神经元、一个突触，属单突触反射，临床上用于检查神经功能。'
  },
  {
    id: 'ner14', type: 'term', chapter: '神经系统',
    stem: '什么是突触后抑制？',
    answers: ['突触后抑制是指抑制性中间神经元释放抑制性神经递质，使突触后膜发生超极化、产生抑制性突触后电位（IPSP），从而降低突触后神经元兴奋性的现象。包括传入侧支性抑制和回返性抑制。'],
    explanation: '突触后抑制使神经元活动减弱，与突触前抑制机制不同。'
  },
  {
    id: 'ner15', type: 'choice', chapter: '神经系统',
    stem: '锥体系的主要功能是？',
    options: ['调节内脏活动', '维持觉醒状态', '维持肌张力与姿势', '控制精细的随意运动'],
    answerIndex: 3,
    explanation: '锥体系控制头面部和四肢的精细随意运动；锥体外系主要调节肌张力和协调运动。'
  },
  {
    id: 'ner16', type: 'judge', chapter: '神经系统',
    stem: '小脑损伤后典型的表现为静止性震颤。',
    options: ['正确', '错误'],
    answerIndex: 1,
    explanation: '小脑损伤表现为共济失调、意向性震颤和平衡障碍；静止性震颤是帕金森病的典型表现（黑质多巴胺能神经元变性）。'
  },
  {
    id: 'img-neuron', type: 'image', chapter: '神经系统',
    stem: '图中标注的、呈节段状包裹在轴突外层的结构是？',
    image: 'assets/images/neuron.svg',
    options: ['树突', '突触小体', '轴丘', '髓鞘'],
    answerIndex: 3,
    explanation: '髓鞘由施万细胞（周围神经）或少突胶质细胞（中枢神经）形成，具有绝缘作用，使神经冲动以跳跃式传导，速度大大加快。'
  },
  {
    id: 'img-brain', type: 'image', chapter: '神经系统',
    stem: '图中标注的、位于大脑后下方并维持身体平衡的结构是？',
    image: 'assets/images/brain.svg',
    options: ['脊髓', '延髓', '小脑', '脑桥'],
    answerIndex: 2,
    explanation: '小脑位于大脑半球后方、脑干背侧，主要功能是维持身体平衡、调节肌张力和协调随意运动；损伤后可出现共济失调。'
  }

  /* ---------- 内分泌系统（14 题） ---------- */
,
  {
    id: 'end01', type: 'choice', chapter: '内分泌系统',
    stem: '胰岛素由胰岛中的哪种细胞分泌？',
    options: ['PP 细胞', 'D 细胞', 'A 细胞', 'B 细胞'],
    answerIndex: 3,
    explanation: '胰岛 B 细胞分泌胰岛素，A 细胞分泌胰高血糖素，D 细胞分泌生长抑素。'
  },
  {
    id: 'end02', type: 'judge', chapter: '内分泌系统',
    stem: '甲状腺激素的合成必须有碘参与。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '碘是合成甲状腺激素的必需原料，缺碘可引起甲状腺肿和甲状腺功能减退。'
  },
  {
    id: 'end03', type: 'fill', chapter: '内分泌系统',
    stem: '生长激素由 ______ 分泌。',
    answers: ['腺垂体', '垂体前叶'],
    explanation: '生长激素由腺垂体嗜酸性细胞分泌，促进骨骼和软组织生长。'
  },
  {
    id: 'end04', type: 'term', chapter: '内分泌系统',
    stem: '什么是激素？',
    answers: ['激素是由内分泌腺或内分泌细胞分泌的高效能生物活性物质，经体液或血液运输，作用于特定的靶细胞、靶组织或靶器官，调节其功能活动。'],
    explanation: '激素作用具有特异性、高效性和信息传递作用，本身不提供能量。'
  },
  {
    id: 'end05', type: 'choice', chapter: '内分泌系统',
    stem: '肾上腺髓质分泌的激素主要是？',
    options: ['皮质醇', '雄激素', '肾上腺素和去甲肾上腺素', '醛固酮'],
    answerIndex: 2,
    explanation: '肾上腺皮质分泌醛固酮、皮质醇和性激素；髓质分泌儿茶酚胺类激素。'
  },
  {
    id: 'end06', type: 'choice', chapter: '内分泌系统',
    stem: '调节钙、磷代谢最主要的激素是？',
    options: ['胰岛素', '甲状腺激素', '生长激素', '甲状旁腺激素'],
    answerIndex: 3,
    explanation: '甲状旁腺激素升高血钙、降低血磷；降钙素作用相反；维生素 D 促进钙吸收。'
  },
  {
    id: 'end07', type: 'choice', chapter: '内分泌系统',
    stem: '促甲状腺激素（TSH）的作用部位是？',
    options: ['下丘脑', '甲状腺', '腺垂体', '肾上腺'],
    answerIndex: 1,
    explanation: 'TSH 由腺垂体分泌，作用于甲状腺，促进甲状腺激素的合成与释放，并维持甲状腺的形态。'
  },
  {
    id: 'end08', type: 'judge', chapter: '内分泌系统',
    stem: '甲状腺激素能提高全身组织的耗氧量和基础代谢率。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '甲状腺激素促进物质氧化分解，使产热增加；甲亢时怕热多汗、基础代谢率升高。'
  },
  {
    id: 'end09', type: 'fill', chapter: '内分泌系统',
    stem: '胰岛 A 细胞分泌的激素是 ______ 。',
    answers: ['胰高血糖素'],
    explanation: '胰岛 A 细胞分泌胰高血糖素，升高血糖；B 细胞分泌胰岛素，降低血糖。'
  },
  {
    id: 'end10', type: 'choice', chapter: '内分泌系统',
    stem: '应激状态下糖皮质激素分泌增多，主要通过什么途径调节？',
    options: ['肾素—血管紧张素系统', '交感—肾上腺髓质轴', '下丘脑—腺垂体—肾上腺皮质轴', '甲状腺轴'],
    answerIndex: 2,
    explanation: '应激时 CRH—ACTH—糖皮质激素轴活动增强；糖皮质激素可提高机体对有害刺激的耐受力。'
  },
  {
    id: 'end11', type: 'term', chapter: '内分泌系统',
    stem: '什么是激素的“允许作用”？',
    answers: ['允许作用是指某种激素本身不能直接对某器官或组织产生效应，但它的存在是另一种激素发挥作用的必要条件。例如糖皮质激素本身不收缩血管，但可增强儿茶酚胺的缩血管效应。'],
    explanation: '允许作用体现了激素之间的协同关系，是内分泌调节的重要特点。'
  },
  {
    id: 'end12', type: 'judge', chapter: '内分泌系统',
    stem: '胰岛素是体内唯一能降低血糖的激素。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '胰岛素促进组织摄取和利用葡萄糖、促进糖原合成，是唯一降血糖激素；升血糖激素有多种。'
  },
  {
    id: 'end13', type: 'choice', chapter: '内分泌系统',
    stem: '下列哪项不是甲状旁腺激素升高血钙的机制？',
    options: ['促进肾小管重吸收钙', '促进成骨细胞活动', '促进破骨细胞活动', '促进维生素 D 活化'],
    answerIndex: 1,
    explanation: 'PTH 通过促进骨钙释放、肾小管保钙排磷和活化维生素 D 来升高血钙，抑制而非促进成骨活动。'
  },
  {
    id: 'end14', type: 'fill', chapter: '内分泌系统',
    stem: '促肾上腺皮质激素的英文缩写是 ______ 。',
    answers: ['ACTH'],
    explanation: 'ACTH 由腺垂体分泌，作用于肾上腺皮质束状带，促进糖皮质激素的合成与释放。'
  }

  /* ---------- 感觉器官（12 题） ---------- */
,
  {
    id: 'sense01', type: 'choice', chapter: '感觉器官',
    stem: '视觉感受器（感光细胞）位于？',
    options: ['晶状体', '角膜', '脉络膜', '视网膜'],
    answerIndex: 3,
    explanation: '视网膜内的视杆细胞和视锥细胞是感光细胞，能感受光刺激并产生神经冲动。'
  },
  {
    id: 'sense02', type: 'judge', chapter: '感觉器官',
    stem: '视锥细胞主要感受暗光刺激。',
    options: ['正确', '错误'],
    answerIndex: 1,
    explanation: '视杆细胞感受暗光、缺乏色觉；视锥细胞感受强光和颜色，分辨力高。'
  },
  {
    id: 'sense03', type: 'fill', chapter: '感觉器官',
    stem: '听觉感受器是 ______ 。',
    answers: ['螺旋器', '柯蒂器', '螺旋器（柯蒂器）'],
    explanation: '螺旋器（柯蒂器）位于耳蜗基底膜上，由毛细胞和支持细胞构成，是听觉感受器。'
  },
  {
    id: 'sense04', type: 'term', chapter: '感觉器官',
    stem: '什么是感受器的适应现象？',
    answers: ['适应现象是指当恒定强度的刺激持续作用于感受器时，传入神经纤维上动作电位的频率逐渐降低的现象。它使感受器对刺激变化的敏感性更高。'],
    explanation: '不同感受器适应速度不同：触觉感受器适应快，痛觉感受器适应慢甚至不产生适应。'
  },
  {
    id: 'sense05', type: 'choice', chapter: '感觉器官',
    stem: '眼球的折光系统不包括？',
    options: ['角膜', '视网膜', '玻璃体', '晶状体'],
    answerIndex: 1,
    explanation: '折光系统包括角膜、房水、晶状体和玻璃体；视网膜是感光换能部位。'
  },
  {
    id: 'sense06', type: 'choice', chapter: '感觉器官',
    stem: '看近物时，眼的调节反应包括？',
    options: ['晶状体变扁、瞳孔散大、双眼散开', '晶状体变凸、瞳孔散大', '晶状体不变、瞳孔缩小', '晶状体变凸、瞳孔缩小、双眼会聚'],
    answerIndex: 3,
    explanation: '视近物时睫状肌收缩使晶状体变凸（折光力增强），同时瞳孔缩小（减少球面像差）并出现双眼会聚。'
  },
  {
    id: 'sense07', type: 'judge', chapter: '感觉器官',
    stem: '声波经外耳道、鼓膜和听骨链传入内耳，属于气传导。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '气传导是正常听觉的主要途径；骨传导是声波直接经颅骨传至内耳，正常情况下作用很小。'
  },
  {
    id: 'sense08', type: 'fill', chapter: '感觉器官',
    stem: '近视眼应配戴 ______ 透镜加以矫正。',
    answers: ['凹', '凹透镜', '双凹'],
    explanation: '近视眼因眼球前后径过长或折光力过强，平行光线聚焦于视网膜前，需用凹透镜使光线发散后移。'
  },
  {
    id: 'sense09', type: 'choice', chapter: '感觉器官',
    stem: '前庭器官中，感受直线加速度的是？',
    options: ['耳蜗', '椭圆囊和球囊', '三个半规管', '鼓膜'],
    answerIndex: 1,
    explanation: '椭圆囊和球囊的囊斑感受直线加速度和头部位置变化；半规管的壶腹嵴感受角加速度。'
  },
  {
    id: 'sense10', type: 'judge', chapter: '感觉器官',
    stem: '视网膜中央凹处视锥细胞密度最高，是视觉最敏锐的部位。',
    options: ['正确', '错误'],
    answerIndex: 0,
    explanation: '中央凹几乎只有视锥细胞，且为单线联系，故分辨力最高；视杆细胞主要分布于周边部。'
  },
  {
    id: 'sense11', type: 'choice', chapter: '感觉器官',
    stem: '暗适应过程中，合成视紫红质所需的关键物质是？',
    options: ['维生素 B₁', '维生素 C', '维生素 D', '维生素 A'],
    answerIndex: 3,
    explanation: '视紫红质由视蛋白和视黄醛构成，视黄醛来源于维生素 A；缺乏维生素 A 可导致夜盲症。'
  },
  {
    id: 'img-eye', type: 'image', chapter: '感觉器官',
    stem: '图中标注的、可通过改变曲度来调节焦距的结构是？',
    image: 'assets/images/eye.svg',
    options: ['虹膜', '晶状体', '视网膜', '角膜'],
    answerIndex: 1,
    explanation: '晶状体呈双凸透镜状，睫状肌收缩时悬韧带松弛、晶状体变凸，折光力增强，从而看清近物，这一过程称为眼的调节。'
  }
];
