import type {
	ExpressiveCodeConfig,
	FriendsConfig,
	GiscusConfig,
	GlassConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	SponsorConfig,
} from "./types/config";
import { HomeSectionPreset, LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "镜面迷宫",
	subtitle: "Akuyo's Personal Blog",
	siteStartDate: "2024-01-01",
	dateTime: {
		timeZone: "+08:00",
		defaultTime: "16:00",
	},
	/**
	 * 站点语言代码：用于导航/按钮等 UI 文案的 i18n。
	 * 可选值见 `SiteConfig.lang` 类型定义（如：'en', 'zh_CN', 'ja' 等）。
	 */
	lang: "zh_CN",
	themeColor: {
		/**
		 * 默认主题色 Hue（0~360）。
		 * 例如：红 0，青绿 200，青蓝 250，粉 345。
		 */
		hue: 250,
		/**
		 * 是否对访客隐藏主题色选择器。
		 * - true：访客不能调主题色（固定为 hue）
		 * - false：允许访客在前端面板里调整
		 */
		fixed: false,
	},
	banner: {
		/**
		 * 是否启用顶部横幅图（通常在首页/列表页更明显）。
		 */
		enable: true,
		/**
		 * 横幅图片路径：
		 * - 不以 '/' 开头：相对 `src/`（例如 `assets/images/...`）
		 * - 以 '/' 开头：相对 `public/`（例如 `/images/...`）
		 */
		src: "assets/images/demo-banner.svg",
		/**
		 * 等价于 CSS 的 `object-position`（仅支持：'top' | 'center' | 'bottom'）。
		 */
		position: "center",
		credit: {
			/** 是否展示横幅图片署名/来源信息 */
			enable: false,
			/** 署名文案 */
			text: "",
			/** （可选）跳转到原图/作者页面的链接 */
			url: "",
		},
	},
	toc: {
		/** 是否在文章页右侧展示目录（TOC） */
		enable: true,
		/** TOC 最大标题层级深度（1~3） */
		depth: 3,
	},
	background: {
		type: "image",
		/** 背景资源路径：`src/` 下相对路径或 `public/` 绝对路径 */
		src: "assets/images/bg.svg",
		/** 背景图位置（等价 object-position） */
		position: "center",
		/** 背景图不透明度（0~1） */
		opacity: 0.7,
	},
	mouseSpark: {
		/** 是否启用全局鼠标特效 */
		enable: true,
		/** RGB 格式："R,G,B" */
		color: "45,175,255",
		/** 效果尺寸缩放 */
		scale: 1.4,
		/** 全局透明度（0~1） */
		opacity: 0.9,
		/** 动画速度倍率 */
		speed: 1,
		/** 尾迹最大点数 */
		maxTrail: 18,
		/** 是否始终显示移动尾迹 */
		enableTrail: true,
		/** Canvas 层级 */
		zIndex: 9999,
	},
	favicon: [
		{
			/** 浏览器标签页图标（相对 `public/`） */
			src: "/icons/favicon.png",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	/**
	 * 导航栏菜单配置：
	 * - 顺序：按 `links` 数组从左到右显示（移动数组元素即可调整顺序）
	 * - 既支持内置预设（`LinkPreset.*`，会走 i18n），也支持自定义对象（`{ name, url }`）
	 *
	 * 自定义页面示例：
	 * 1) 先创建页面文件：`src/pages/projects.astro` -> 访问路径通常为 `/projects/`
	 * 2) 再把链接加到下面数组中，例如：
	 *    { name: "项目", url: "/projects/" },
	 *
	 * 外部链接示例：
	 *    { name: "GitHub", url: "https://github.com/<name>", external: true },
	 */
	links: [
		LinkPreset.Home,
		LinkPreset.About,
		LinkPreset.Archive,
		LinkPreset.Passage,
		LinkPreset.Notes,
		LinkPreset.Essays,
		LinkPreset.Friends,
		{
			name: "GitHub",
			url: "https://github.com/Sheyiyuan/astro-theme-kirari",
			external: true,
		},
	],
};

/**
 * 首页展示配置：
 * - sections：控制首页展示顺序/显示哪些板块（类似导航栏 links 数组）
 * - recentPosts：控制各板块展示数量
 */
export const homePageConfig = {
	sections: [HomeSectionPreset.Essays, HomeSectionPreset.Posts],
	recentEssays: {
		count: 4,
	},
	recentPosts: {
		count: 4,
	},
} as const;

export const profileConfig: ProfileConfig = {
	/**
	 * 头像路径：
	 * - 不以 '/' 开头：相对 `src/`
	 * - 以 '/' 开头：相对 `public/`
	 */
	avatar: "assets/images/avatar.png",
	name: "作者",
	bio: "一个博客作者",
	/** 社交链接：`icon` 使用 iconify 图标名（项目中通过 `astro-icon` 渲染） */
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/yourusername",
		},
	],
};

export const friendsConfig: FriendsConfig = {
	/**
	 * 友人帐（友情链接）列表：
	 * - 顺序：按数组顺序展示
	 */
	links: [
		{
			name: "Astro",
			url: "https://astro.build/",
			description: "The web framework for content-driven websites",
			avatar: "https://astro.build/favicon.svg",
			newTab: true,
		},
		{
			name: "友链名称",
			url: "https://example.com/",
			description: "友链描述",
			avatar: "/images/friend-avatar.png",
			newTab: true,
		},
	],
};

export const licenseConfig: LicenseConfig = {
	/** 是否在文章页展示许可协议模块 */
	enable: true,
	/** 许可名称展示文本 */
	name: "CC BY-NC-SA 4.0",
	/** 许可链接 */
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	/**
	 * 代码块高亮（Expressive Code）主题配置。
	 * 注意：部分样式（例如背景色）可能在 astro 配置或全局样式里被覆盖。
	 * 建议选择深色主题：本主题目前主要以深色代码背景为基准做了适配。
	 */
	theme: "github-dark",
};

/**
 * 毛玻璃（半透明 + backdrop blur）效果配置。
 * 说明：
 * - enable=false 会自动回退为不透明背景 + 无模糊。
 * - opacity 建议在 0.7~0.9，太低会影响可读性。
 */
export const glassConfig: GlassConfig = {
	/** 是否启用毛玻璃（半透明 + backdrop blur） */
	enable: true,
	/** blur 半径（px） */
	blur: 14,
	/**
	 * 卡片背景不透明度（0~1）。
	 * 值越小越"透"，但对比度会下降。
	 */
	cardOpacity: 0.75,
	/** 顶栏弹出面板/浮层不透明度（0~1） */
	panelOpacity: 0.75,
	/** 是否显示细边框（提升玻璃边缘层次） */
	border: true,
};

export const giscusConfig: GiscusConfig = {
	/**
	 * Giscus 评论系统配置。
	 * - 先填好 repo/repoId/category/categoryId
	 * - 再将 enable 改为 true 即可启用
	 */
	enable: false,
	repo: "yourusername/yourrepo",
	repoId: "",
	category: "Comments",
	categoryId: "",
	/**
	 * 文章与 Discussion 的映射方式。
	 * - pathname：用 URL 路径（不含域名）做映射，通常更适合博客迁移时保持稳定。
	 */
	mapping: "pathname",
	/** 是否严格匹配（Giscus 参数，字符串形式） */
	strict: "0",
	/** 是否启用表情反应（Giscus 参数，字符串形式） */
	reactionsEnabled: "1",
	/** 是否输出页面元数据（Giscus 参数，字符串形式） */
	emitMetadata: "0",
	/** 评论框位置：'top' 或 'bottom' */
	inputPosition: "top",
	/** Giscus UI 语言 */
	lang: "zh-CN",
	/** 加载策略 */
	loading: "lazy",
	theme: {
		light: "light",
		dark: "transparent_dark",
	},
};

export const sponsorConfig: SponsorConfig = {
	/** 是否启用赞助入口 */
	enable: true,
	/** 导航/按钮展示的文字 */
	buttonText: "赞助",
	/** 弹窗标题 */
	title: "感谢你的支持",
	/** 弹窗提示文案 */
	tip: "如果这篇文章对你有帮助，可以请我喝杯咖啡～",
	/** 赞助方式列表（可放多种：微信/支付宝/爱发电等） */
	methods: [
		{
			name: "这里是赞助方式的名称，下面是赞助二维码",
			qrImage: "/images/sponsor/example-qr-code.png",
		},
	],
};
