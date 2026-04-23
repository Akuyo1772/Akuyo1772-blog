# Kirari

A modern, glass-morphism style blog theme for Astro.

English | [简体中文](./README.md)

## Features

- Glass-morphism design with blur effects
- Dark/Light mode support with customizable theme color
- Responsive layout with sidebar widgets
- MDX support with custom components
- Code highlighting with Expressive Code
- Math equations with KaTeX
- Mermaid diagrams
- Giscus comments integration
- Multi-language support (i18n)
- RSS feed
- Sitemap
- Search with Pagefind
- Swup smooth page transitions

## Quick Start

### Use Template

Click the "Use this template" button on GitHub to create a new repository.

### Use CLI

```bash
npm create kirari@latest
# or
pnpm create kirari
# or
npx create-kirari
```

### Manual Setup

1. Clone this repository
2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open `http://localhost:4321` in your browser

## Configuration

Edit `src/config.ts` to customize your blog:

- `siteConfig` - Site title, subtitle, language, theme color, etc.
- `navBarConfig` - Navigation links
- `profileConfig` - Your profile information
- `giscusConfig` - Comments configuration
- `sponsorConfig` - Sponsor/donation settings

## Writing Content

Create new posts with:

```bash
pnpm new
```

Or manually create files in `src/content/posts/` or `src/content/essays/`.

### Post Frontmatter

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

### Essay Frontmatter

```yaml
---
published: 2024-01-01
title: "随笔标题"
tags: ["随笔"]
comments: true
---
```

## Customization

### Theme Color

Adjust the `hue` value in `siteConfig.themeColor` to change the primary color:

- Red: 0
- Cyan-green: 200
- Cyan-blue: 250
- Pink: 345

### Background

Set `siteConfig.background` to use an image:

```typescript
background: {
  type: "image",
  src: "assets/images/bg.jpg",
  position: "center",
  opacity: 0.7,
}
```

Or use a solid color:

```typescript
background: {
  type: "color",
  color: "#1a1a2e",
  opacity: 1,
}
```

### Glass Effect

Configure in `glassConfig`:

```typescript
glassConfig: {
  enable: true,    // Enable glass effect
  blur: 14,        // Blur radius (px)
  cardOpacity: 0.75, // Card opacity (0~1)
  panelOpacity: 0.75, // Panel opacity (0~1)
  border: true,    // Show border
}
```

## License

MIT License - see [LICENSE](LICENSE) for details.