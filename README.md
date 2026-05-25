# 思柔之乡官方文档

[![Deploy](https://github.com/SnowSwordScholar/THMC-Doc/actions/workflows/deploy.yml/badge.svg)](https://github.com/SnowSwordScholar/THMC-Doc/actions/workflows/deploy.yml)

ThroughHome-MC 公益 Minecraft 服务器的官方文档站。

线上地址：[https://doc.th-mc.cn](https://doc.th-mc.cn)

## 本地预览

需要 Node.js 18+。

```bash
npm install
npm run docs:dev
```

启动后访问 `http://localhost:5173/`。

## 构建

```bash
npm run docs:build
```

构建产物输出到 `docs/.vitepress/dist`，可用 `npm run docs:preview` 在本地预览构建结果。

## 部署

推送到 `main` 分支会自动通过 GitHub Actions 构建并发布到 GitHub Pages（自定义域名 `doc.th-mc.cn`）。

## 目录结构

```
docs/
├── .vitepress/config.ts    站点配置（侧栏 / 导航 / 主题）
├── public/                 静态资源（CNAME、PDF 等会原样复制到站点根）
├── index.md                站点首页（hero 布局）
├── 开始/                    新人引导
├── 加入服务器/              入服流程相关
├── 进阶玩家/                插件、命令等进阶内容
└── 常见问题/                FAQ
```

## 编辑

每个页面底部有「在 GitHub 上编辑此页」链接，点击会直接跳转到对应文件的编辑页。也欢迎直接提 PR。

## 上一代文档

[查看 PDF 版使用手册](/思柔之乡-ThroughHomeMC使用手册.pdf)
