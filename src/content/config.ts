import { defineCollection, z } from "astro:content";
import { parseFrontmatterDateTime } from "../utils/date-utils";

const frontmatterDateTime = z.preprocess((v) => {
	try {
		return parseFrontmatterDateTime(v);
	} catch {
		return v;
	}
}, z.date());

/**
 * 篇章集合配置
 * 用于长文章、技术博客等
 */
const postsCollection = defineCollection({
	schema: z.object({
		/** 标题 */
		title: z.string(),
		/** 发布时间 */
		published: frontmatterDateTime,
		/** 更新时间（可选） */
		updated: frontmatterDateTime.optional(),
		/** 置顶优先级（数字越大越靠前，0 为不置顶） */
		pin: z.number().int().optional().default(0),
		/** 是否为草稿 */
		draft: z.boolean().optional().default(false),
		/** 文章描述/摘要 */
		description: z.string().optional().default(""),
		/** 封面图片路径 */
		image: z.string().optional().default(""),
		/** 首行缩进（如 "2em"） */
		firstLineIndent: z.string().optional().default("0em"),
		/** 标签列表 */
		tags: z.array(z.string()).optional().default([]),
		/** 分类名称 */
		category: z.string().optional().nullable().default(""),
		/** 文章语言代码 */
		lang: z.string().optional().default(""),
		/** 是否启用评论 */
		comments: z.boolean().optional().default(true),
		/** 是否显示赞助入口 */
		sponsor: z.boolean().optional().default(true),

		/* 内部使用字段 */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

/**
 * 笔记集合配置
 * 用于短笔记、速记等
 */
const notesCollection = defineCollection({
	schema: z.object({
		/** 标题 */
		title: z.string(),
		/** 发布时间 */
		published: frontmatterDateTime,
		/** 更新时间（可选） */
		updated: frontmatterDateTime.optional(),
		/** 置顶优先级（数字越大越靠前，0 为不置顶） */
		pin: z.number().int().optional().default(0),
		/** 是否为草稿 */
		draft: z.boolean().optional().default(false),
		/** 笔记描述/摘要 */
		description: z.string().optional().default(""),
		/** 封面图片路径 */
		image: z.string().optional().default(""),
		/** 首行缩进（如 "2em"） */
		firstLineIndent: z.string().optional().default("0em"),
		/** 标签列表 */
		tags: z.array(z.string()).optional().default([]),
		/** 分类名称 */
		category: z.string().optional().nullable().default(""),
		/** 笔记语言代码 */
		lang: z.string().optional().default(""),
		/** 是否启用评论 */
		comments: z.boolean().optional().default(true),
		/** 是否显示赞助入口 */
		sponsor: z.boolean().optional().default(true),

		/* 内部使用字段 */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

/**
 * 随笔集合配置
 * 用于随笔、日记、碎片化记录等
 */
const essaysCollection = defineCollection({
	schema: z.object({
		/**
		 * 标题（可选）。
		 * 如果未填写，UI 会从第一行有意义的内容/摘要中提取。
		 */
		title: z.string().optional().default(""),
		/** 发布时间 */
		published: frontmatterDateTime,
		/** 更新时间（可选） */
		updated: frontmatterDateTime.optional(),
		/** 置顶优先级（数字越大越靠前，0 为不置顶） */
		pin: z.number().int().optional().default(0),
		/** 是否为草稿 */
		draft: z.boolean().optional().default(false),
		/** 随笔语言代码 */
		lang: z.string().optional().default(""),
		/** 标签列表 */
		tags: z.array(z.string()).optional().default([]),
		/** 是否启用评论 */
		comments: z.boolean().optional().default(true),
		/**
		 * URL 种子（可选）。
		 * 用于保持 URL 稳定，即使内容发生变化。
		 * 如果未填写，会从标题/第一行/摘要中提取。
		 */
		slugSeed: z.string().optional().default(""),
	}),
});

/**
 * 特殊页面集合配置
 * 用于 about 等特殊页面
 */
const specCollection = defineCollection({
	schema: z.object({}),
});

export const collections = {
	posts: postsCollection,
	notes: notesCollection,
	essays: essaysCollection,
	spec: specCollection,
};