# YiFeng 的个人网站

[访问网站](https://yindfeng.github.io/) · [English](README_EN.md) · [维护与部署说明](项目说明.md)

基于 Astro 的个人作品站与博客，用于记录阅读、学习和思考。网站包含首页、作品列表、博客、个人介绍，以及支持 WASD / 触屏操作、背景音乐和本地最高分记录的贪吃蛇小游戏。

## 技术与结构

- Astro 5、TypeScript、Sass；Markdown/MDX 内容管理。
- 构建结果为静态文件，使用 GitHub Pages 托管。
- Supabase 为可选在线人数服务；不配置时显示 `--`，不影响静态页面和本地游戏。
- 深浅色主题、RSS、站点地图；桌面侧栏包含需要浏览器定位许可的天气信息。

| 文件或目录 | 用途 |
| --- | --- |
| `src/data/content.ts` | 导航、简介、社交链接与页面标题 |
| `src/data/home.json` | 首页卡片 |
| `src/data/project.ts` | 项目列表 |
| `src/content/blog/` | 博客文章 |
| `src/pages/about.astro` | 关于页面 |
| `src/pages/game.astro` | 贪吃蛇游戏 |
| `public/` | 图片、音频等静态资源 |
| `.github/workflows/deploy.yml` | 自动构建及发布 |

## 本地运行

使用 Node.js 22.12 或以上版本（自动部署使用 Node.js 22），以 npm 和提交的 package-lock.json 为准。

```sh
npm ci
cp .env.example .env
npm run dev
```

Windows PowerShell 可用 `Copy-Item .env.example .env`。开发地址默认是 http://localhost:4321。

```sh
npm run build
npm run preview
```

`build` 会先检查 Astro/TypeScript，再生成 `dist/`。不要把 `node_modules/`、`dist/` 或真实的 `.env` 提交到仓库。

## 发布

仓库使用 `Yindfeng.github.io` 名称，因此网站位于域名根路径。每次向 `main` 推送，GitHub Actions 会安装依赖、检查构建，再发布到 GitHub Pages。首次配置选择 **Settings → Pages → Source → GitHub Actions**。状态在 **Actions → Deploy website** 查看。

线上域名在工作流中明确设置，避免本地 `.env` 的 localhost 地址进入 RSS 和站点地图。更换域名时同时更新工作流、Astro 配置及站点信息。

## 可选服务

在线人数需要仓库 **Settings → Secrets and variables → Actions → Variables** 中的 `PUBLIC_SUPABASE_URL` 与 `PUBLIC_SUPABASE_ANON_KEY`。本地使用 `.env`。这些值会进入浏览器，只能使用 publishable/anon key，不能使用管理员密钥。

`supabase/game_scores.sql` 包含在线状态和历史游戏排行榜表定义。当前贪吃蛇仅保存本地最高分，未使用排行榜表。脚本的匿名策略较宽松，不提供可信排名或防作弊能力；公开服务应独立评估访问策略，不要在敏感业务数据库上直接套用。

## 来源与许可

本项目基于 [Ricocc/public-portfolio-site](https://github.com/ricocc/public-portfolio-site) 修改，保留原始 MIT LICENSE 与版权声明。游戏页面保留原有 Fariat 署名。仓库代码许可不自动覆盖个人文章、照片、音频和第三方素材；复用这些内容前请确认各自授权。
