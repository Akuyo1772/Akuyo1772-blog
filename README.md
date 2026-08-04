# Kirari

一个现代化的 Astro 博客主题。基于 [Fuwari](https://github.com/saicaca/fuwari) 进行开发，添加了更多功能和自定义选项。

[English](./README.en.md) | 简体中文

## 特性

- 毛玻璃设计，带模糊效果
- 支持深色/浅色模式，可自定义主题色
- 响应式布局，带侧边栏组件
- 支持 MDX 和自定义组件
- Expressive Code 代码高亮
- KaTeX 数学公式
- Mermaid 流程图
- Giscus 评论集成
- 多语言支持 (i18n)
- RSS 订阅
- 网站地图
- Pagefind 搜索
- Swup 页面平滑过渡

## 快速开始

### 使用模板

在 GitHub 上点击 "Use this template" 按钮创建新仓库。

### 使用脚手架

```bash
npm create kirari@latest
# 或
pnpm create kirari
# 或
npx create-kirari
```

### 手动安装

1. 克隆本仓库
2. 安装依赖：

```bash
pnpm install
```

3. 启动开发服务器：

```bash
pnpm dev
```

4. 打开浏览器访问 `http://localhost:4321`

## 配置

编辑 `src/config.ts` 自定义你的博客：

- `siteConfig` - 网站标题、副标题、语言、主题色等
- `navBarConfig` - 导航链接
- `profileConfig` - 个人信息
- `giscusConfig` - 评论配置
- `sponsorConfig` - 赞助设置

## 写作

创建新文章：

```bash
pnpm new
```

或在 `src/content/posts/` 或 `src/content/essays/` 中手动创建文件。

### 文章 Frontmatter

```yaml
---
title: 文章标题
published: 2024-01-01
description: '文章描述'
image: ''
tags: ['标签1', '标签2']
category: '分类名称'
draft: false
comments: true
---
```

### 随笔 Frontmatter

```yaml
---
published: 2024-01-01
title: "随笔标题"
tags: ["随笔"]
comments: true
---
```

## 自定义

### 主题色

调整 `siteConfig.themeColor` 中的 `hue` 值改变主题色：

- 红色: 0
- 青绿: 200
- 青蓝: 250
- 粉色: 345

### 背景

在 `siteConfig.background` 中配置：

```typescript
background: {
  type: "image",
  src: "assets/images/bg.jpg",
  position: "center",
  opacity: 0.7,
}
```

或使用纯色：

```typescript
background: {
  type: "color",
  color: "#1a1a2e",
  opacity: 1,
}
```

### 毛玻璃效果

在 `glassConfig` 中配置：

```typescript
glassConfig: {
  enable: true,
  blur: 14,
  cardOpacity: 0.75,
  panelOpacity: 0.75,
  border: true,
}
```

## 更多详细用法

请查看 `astro-theme-kirari/src/content/posts/hello-world/index.md` 了解更多功能和用法示例。

## 许可证

MIT 许可证 - 详情见 [LICENSE](LICENSE)