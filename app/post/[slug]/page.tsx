import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllSlugs, getPostDataBySlug } from '@/lib/posts'
import { allPosts } from '@/lib/postData'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Edge8 Blog`,
    description: `${post.readTime} · ${post.category}`,
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostDataBySlug(params.slug)
  if (!post) notFound()

  // Sidebar: recent posts from same category (excluding this post)
  const relatedPosts = allPosts
    .filter((p) => p.categorySlug === post.categorySlug && p.slug !== post.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  return (
    <main>
      {/* ═══ POST HERO ══════════════════════════════════════════ */}
      <section className="post-hero">
        <div className="container">
          <div className="post-meta">
            <Link href="/blog" className="post-tag">{post.category}</Link>
            <span className="post-date">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="post-read-time">{post.readTime}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
        </div>
      </section>

      {/* ═══ FEATURED IMAGE ═════════════════════════════════════ */}
      <div className="container" style={{ paddingTop: 0 }}>
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={480}
          className="post-featured-img"
          priority
        />
      </div>

      {/* ═══ POST BODY ══════════════════════════════════════════ */}
      <section className="post-body">
        <div className="container">
          <div className="post-layout">
            <article
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Sidebar */}
            <aside className="post-sidebar">
              <div className="post-sidebar-card">
                <div className="post-sidebar-title">More in {post.category}</div>
                <div className="post-sidebar-list">
                  {relatedPosts.map((p) => (
                    <Link key={p.slug} href={`/post/${p.slug}`} className="post-sidebar-item">
                      <div className="post-sidebar-item-title">{p.title}</div>
                      <div className="post-sidebar-item-date">
                        {new Date(p.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="post-sidebar-card" style={{ background: 'var(--dark)', border: 'none' }}>
                <div className="post-sidebar-title" style={{ color: 'var(--tint)' }}>Ready to Be Tech-Forward?</div>
                <p style={{ fontSize: 13, color: 'var(--grey-mid)', lineHeight: 1.65, marginBottom: 16 }}>
                  Schedule a free AI Capabilities Audit with our team.
                </p>
                <Link href="/ai-capabilities-audit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}>
                  Book Your Audit
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
