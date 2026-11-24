#!/usr/bin/env bash
# =========================================================
# 自动把 sitemap.xml / robots.txt 里的站点地址改成你的真实地址
#
# 用法（在项目目录下执行其中一种）：
#   bash tools/set-site-url.sh
#   bash tools/set-site-url.sh https://github.com/你的用户名/anatomy-quiz.git
# =========================================================
set -euo pipefail

cd "$(dirname "$0")/.."

url="${1:-}"
if [ -z "$url" ]; then
  url="$(git remote get-url origin 2>/dev/null || true)"
fi

if [ -z "$url" ]; then
  echo "❌ 没有找到 git remote origin，也没传入地址。"
  echo ""
  echo "请先执行："
  echo "  git remote add origin https://github.com/你的用户名/anatomy-quiz.git"
  echo "或者直接把仓库地址作为参数传进来："
  echo "  bash tools/set-site-url.sh https://github.com/你的用户名/anatomy-quiz.git"
  exit 1
fi

# 支持 https://github.com/user/repo(.git) 和 git@github.com:user/repo.git
clean="${url%.git}"
clean="${clean%/}"
if [[ "$clean" =~ github\.com[:/]+([A-Za-z0-9_.-]+)/([A-Za-z0-9_.-]+)$ ]]; then
  user="${BASH_REMATCH[1]}"
  repo="${BASH_REMATCH[2]}"
else
  echo "❌ 无法解析仓库地址：$url"
  echo "   期望形如 https://github.com/用户名/anatomy-quiz.git"
  exit 1
fi

site="https://${user}.github.io/${repo}"

# 替换占位符，同时保证多次运行也安全（幂等）
for f in robots.txt sitemap.xml; do
  [ -f "$f" ] || continue
  sed -i "s|https://YOUR-USERNAME\.github\.io/anatomy-quiz|${site}|g" "$f"
  sed -i "s|https://[A-Za-z0-9_.-]*\.github\.io/[A-Za-z0-9_.-]*|${site}|g" "$f"
done

echo "✅ 站点地址已设置：${site}"
echo ""
echo "已更新："
echo "  - robots.txt   （Sitemap 指向 ${site}/sitemap.xml）"
echo "  - sitemap.xml  （4 个页面地址）"
echo ""

if git rev-parse --git-dir >/dev/null 2>&1; then
  if ! git diff --quiet -- robots.txt sitemap.xml; then
    git add robots.txt sitemap.xml
    git commit -q -m "更新站点地址为 ${site}"
    echo "已自动提交。接下来推送："
    echo "  git push"
  else
    echo "文件内容没有变化，无需提交。"
  fi
fi

echo ""
echo "开启 Pages 后，访问地址就是："
echo "  ${site}/"
