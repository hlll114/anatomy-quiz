# 部署指南：让其他人也能用

本项目是**纯静态网站**（HTML + CSS + JS，无后端），任何能放静态文件的地方都能托管。
下面按「最快 → 最推荐」排序。

> ⚠️ 重要前提：网站托管**需要你自己注册账号**（免费），我无法代你注册或上传。
> 下面每一步都写清楚了，照着做大约 5 分钟。

---

## 零、仓库已经准备好了（推荐走这条）

本目录**已经初始化好 git 仓库**：分支 `main`，包含 1 个提交，`.gitignore` 已排除测试截图。
你只需要两件事：**建一个空仓库** + **推送**。

### 第 1 步：在 GitHub 建仓库

1. 打开 <https://github.com/new>
2. Repository name 填 **`anatomy-quiz`**
3. 选 **Public**（公开；Pages 免费版要求公开）
4. **不要**勾选 "Add a README file"、"Add .gitignore"、"Choose a license"（保持空仓库）
5. 点 **Create repository**

### 第 2 步：推送（在 `anatomy-quiz` 目录下执行）

```bash
cd D:/dsh/anatomy-quiz
git remote add origin https://github.com/你的用户名/anatomy-quiz.git
git push -u origin main
```

第一次 push 会弹出登录窗口，按提示用浏览器授权即可（也可以用 Personal Access Token 当密码）。

如果提示 `remote origin already exists`，说明已经加过，改用：

```bash
git remote set-url origin https://github.com/你的用户名/anatomy-quiz.git
git push -u origin main
```

### 第 3 步：开启 Pages

仓库页 → **Settings** → 左侧 **Pages** → Source 选 **Deploy from a branch**
→ Branch 选 **main**、目录选 **/ (root)** → 点 **Save**

等 1～2 分钟刷新，页面顶部会显示：

```
https://你的用户名.github.io/anatomy-quiz/
```

**这就是可以发给同学的网址。**

### 第 4 步：设置站点地址（一条命令，自动完成）

在项目目录执行：

```bash
cd D:/dsh/anatomy-quiz
bash tools/set-site-url.sh
```

它会自动从 `git remote` 里读出你的用户名和仓库名，把 `robots.txt`、`sitemap.xml` 里的占位符换成真实地址，并提交好。

然后：

```bash
git push
```

> 执行完会直接告诉你最终的访问地址，形如 `https://你的用户名.github.io/anatomy-quiz/`
>
> 如果脚本提示找不到 remote，也可以直接传地址：
> `bash tools/set-site-url.sh https://github.com/你的用户名/anatomy-quiz.git`
>
> **不改这个，搜索引擎抓到的会是错误地址，收录一定失败。**

---

## 方案一：Netlify Drop（不想用 Git 的话最快）

1. 打开 <https://app.netlify.com/drop>
2. 把整个 `anatomy-quiz` **文件夹**直接拖进网页
3. 等几秒，会得到一个形如 `https://xxxx-yyyy.netlify.app` 的网址

**优点**：不用 Git、不用命令行、立刻可用
**缺点**：不注册的话网站是临时的；注册后可以永久保留

---

## 方案二：GitHub Pages（推荐，免费永久，最容易被搜索引擎收录）

### 步骤

1. 注册 GitHub 账号：<https://github.com>
2. 新建仓库：右上角 **+ → New repository**
   - Repository name 填 `anatomy-quiz`
   - 选 **Public**（公开，Pages 免费版需要公开仓库）
   - 不要勾选 "Add a README file"
   - 点 **Create repository**
3. 上传文件（网页操作，不用命令行）：
   - 点 **uploading an existing file**
   - 把 `anatomy-quiz` 文件夹里的**所有内容**拖进去
     （包括 `index.html`、`assets` 文件夹、`robots.txt` 等，**注意 `index.html` 要在仓库根目录**）
   - 点 **Commit changes**
4. 开启 Pages：仓库 → **Settings → Pages**
   - Source 选 **Deploy from a branch**
   - Branch 选 **main**，目录选 **/ (root)**，点 **Save**
5. 等 1～2 分钟，刷新该页面，会显示访问地址：
   ```
   https://你的用户名.github.io/anatomy-quiz/
   ```

**这个地址就是永久链接**，可以贴到群里、写进简历、发给老师。

### 部署后要改的两个文件

把 `robots.txt` 和 `sitemap.xml` 里的 `YOUR-USERNAME` 换成你的 GitHub 用户名，
这样搜索引擎才能正确抓取。

---

## 方案三：Vercel / Cloudflare Pages

两类平台都支持直接连 GitHub 仓库自动部署，之后每次改代码自动更新。

- Vercel：<https://vercel.com> → Add New Project → 导入仓库 → Framework 选 **Other** → Deploy
- Cloudflare Pages：<https://pages.cloudflare.com> → 连接 Git → 构建命令留空 → 输出目录填 `/`

---

## 方案四：只在教室/宿舍临时分享（不发布也能用）

如果只是想让同宿舍同学今天就能用：

```bash
cd D:/dsh/anatomy-quiz
python -m http.server 8000
```

然后在同一 WiFi 下，让同学访问：
```
http://你的电脑IP:8000
```

查本机 IP（Windows）：
```bash
ipconfig
```
看「IPv4 地址」那一行，形如 `192.168.1.5`。

**注意**：你关闭命令窗口服务就停了，只适合临时演示。

---

## 关于「搜索就能找到」

发布之后，别人**直接打开网址**就能用。但如果要**在百度/Google 搜索到**，还需要做两件事：

### 1. 提交站点地图

| 搜索引擎 | 提交地址 |
|---|---|
| Google | <https://search.google.com/search-console> |
| 必应 Bing | <https://www.bing.com/webmasters> |
| 百度 | <https://ziyuan.baidu.com> |

提交时填入你的 `sitemap.xml` 完整地址，例如：
```
https://你的用户名.github.io/anatomy-quiz/sitemap.xml
```

### 2. 等待收录（要有心理准备）

- **Google / Bing**：几天到两周
- **百度**：通常更慢，新站可能需要 1～4 周

> 老实说：**「搜一下就能搜到」这件事无法马上生效**，新网站的索引需要时间。
> 短期最现实的做法是——把网址直接发到班级群 / 课程群，二维码也可以。

### 提高被搜到的概率（已内置）

- 每页都有独立的 `<title>` 和 `<meta name="description">`
- 首页带完整的关键词描述和语义化标题
- 提供 `robots.txt` 和 `sitemap.xml`
- 有站点图标和 `site.webmanifest`（手机可「添加到主屏幕」，用起来像 App）

---

## 部署后注意事项

### 1. 每个人的数据存在自己的浏览器里

这是纯前端应用的特点：**访客的答题记录只保存在他自己的浏览器**，彼此看不到，也不会同步到服务器。
换设备、清缓存会丢失，所以系统里有「导入 / 导出 JSON」做备份。

如果以后想做「全班共用一份进度」，就需要接后端数据库（属于进阶功能）。

### 2. 国内访问 GitHub Pages 可能较慢

如果主要给国内同学用，可以考虑：

- Cloudflare Pages（速度一般比 GitHub Pages 好）
- 腾讯云 COS / 阿里云 OSS 静态托管（**需要已备案的域名**才能绑自定义域名，但用平台默认域名可以免备案）

### 3. 图片和资源都是相对路径

`assets/images/*.svg` 用的是相对路径，所以不管放在
`用户名.github.io/anatomy-quiz/` 还是别的子目录下，都能正常显示。

---

## 一键检查清单

部署后打开网址，依次确认：

- [ ] 首页能打开，显示「待复习 160 题」
- [ ] 点「开始今日复习」能进入答题
- [ ] 出现看图题时**图片能正常显示**（骨架、心脏、肾单位等示意图）
- [ ] 答题后刷新页面，学习进度还在
- [ ] 题库页能新增题目、能导出 JSON
- [ ] 手机上打开排版正常（按钮不会被裁切）
