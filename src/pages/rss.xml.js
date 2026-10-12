import rss from "@astrojs/rss";
import { siteConfig } from "../data/content";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: `${siteConfig.siteName} 的博客`,
    description: '记录阅读、想法与学习笔记',
    site: context.site,
    stylesheet: '/rss/pretty-feed-v3.xsl',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      // ...post.data,
      link: `/blog/${post.slug}/`,

    })),
  });
}