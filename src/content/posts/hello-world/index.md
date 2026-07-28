---
title: Hello World
published: 2024-01-01
description: '我的第一篇博客文章'
image: './images/cover.png'
tags: ['hello', 'blog']
category: '入门'
draft: false
pin: 1
lang: ""
comments: true
sponsor: true

---

欢迎来到你的新博客！这是 **Kirari** 主题的第一篇文章。

## 特性

Kirari 是一个现代化的的 Astro 博客主题，具有以下特性：

- 毛玻璃设计，带模糊效果
- 支持深色/浅色模式
- 响应式布局
- MDX 支持
- Expressive Code 代码高亮
- KaTeX 数学公式
- Mermaid 流程图
- Giscus 评论集成

## 使用说明

### 新建内容

你可以通过以下命令快速创建新文章：

```bash
pnpm new
```

之后按照提示输入文章标题、描述、标签等信息，系统会自动生成一个新的 Markdown 文件。

### Markdown 功能

Kirari 支持丰富的 Markdown 语法和扩展功能。具体内容请参考 [Markdown 功能指南](/notes/markdown-features/)。

### 文章发布

在文章开头的元数据中，参数可以调节。简单对各个参数进行介绍：
- `title` - 文章标题
- `published` - 文章发布时间，格式为 `YYYY-MM-DD HH:mm:ss`
- `description` - 文章描述
- `image` - 文章封面图
- `tags` - 文章标签
- `category` - 文章分类
- `draft` - 是否为草稿
- `pin` - 文章置顶优先级，数值越大优先级越高
- `lang` - 文章语言（默认为站点语言）
- `comments` - 是否启用评论
- `sponsor` - 是否在文章页显示赞助信息

新生成的文章默认是草稿状态，你可以随时编辑并发布它们。你可以在预览（pnpm dev）中看见所有草稿文章，但是它们在构建产物中是不可见的。

完成写作后，确保 `draft` 字段设置为 `false`，然后提交你的更改。文章将自动发布到你的网站上。

## 开始使用

编辑这篇文章开始写作！

```javascript
console.log('你好，Kirari！');
```

祝你写作愉快！