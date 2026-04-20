import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { allPosts, PostMeta } from './postData'

export type { PostMeta }
export { allPosts }

export interface Post extends PostMeta {
  contentHtml: string
}

const contentDir = path.join(process.cwd(), 'content', 'blog')

export async function getPostDataBySlug(slug: string): Promise<Post | null> {
  const post = allPosts.find((p) => p.slug === slug)
  if (!post) return null

  const fullPath = path.join(contentDir, `${post.mdFile}.md`)

  if (!fs.existsSync(fullPath)) {
    return { ...post, contentHtml: '<p>Content coming soon.</p>' }
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content } = matter(fileContents)

  const processedContent = await remark().use(remarkHtml).process(content)
  const contentHtml = processedContent.toString()

  return { ...post, contentHtml }
}

export function getAllSlugs(): string[] {
  return allPosts.map((p) => p.slug)
}
