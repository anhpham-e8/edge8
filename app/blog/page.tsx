'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { allPosts, PostMeta } from '@/lib/postData'

const ITEMS_PER_PAGE = 4

const categories = [
  { slug: 'ai-business', label: 'AI in Business', id: 'ai-business' },
  { slug: 'founders', label: "Founders' Secrets", id: 'founders' },
  { slug: 'vietnam', label: 'Doing Business in Vietnam', id: 'vietnam' },
  { slug: 'cultures', label: 'High Performing Cultures', id: 'cultures' },
]

function getPostsByCategory(catSlug: string) {
  return allPosts
    .filter((p) => p.categorySlug === catSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function CategorySection({ cat }: { cat: typeof categories[0] }) {
  const posts = getPostsByCategory(cat.slug)
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(Math.max(posts.length - 1, 0) / (ITEMS_PER_PAGE - 1)) || 1

  const featured = posts[0]
  const listStart = 1 + page * (ITEMS_PER_PAGE - 1)
  const listEnd = listStart + (ITEMS_PER_PAGE - 1)
  const listPosts = posts.slice(listStart, listEnd)

  if (!featured) return null

  return (
    <section className="blog-category" id={cat.id}>
      <div className="container">
        <div className="blog-category-header">
          <h2 className="blog-category-title">{cat.label}</h2>
        </div>
        <div className="cat-layout">
          {/* Featured post */}
          <Link href={`/post/${featured.slug}`} className="cat-featured">
            <Image
              src={featured.image}
              alt={featured.title}
              width={600}
              height={338}
              className="cat-featured-img"
            />
            <div className="cat-featured-body">
              <div className="cat-featured-title">{featured.title}</div>
              <div className="cat-featured-meta">{new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
            </div>
          </Link>

          {/* Post list */}
          <div>
            <div className="cat-post-list">
              {listPosts.map((post) => (
                <Link key={post.slug} href={`/post/${post.slug}`} className="cat-post-item">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={72}
                    height={72}
                    className="cat-post-img"
                  />
                  <div className="cat-post-body">
                    <div className="cat-post-title">{post.title}</div>
                    <div className="cat-post-meta">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>
                  </div>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="cat-pagination">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    className={i === page ? 'active' : ''}
                    onClick={() => setPage(i)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function BlogPage() {
  const featured = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      {/* ═══ HERO ═══════════════════════════════════════════════ */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-inner">
            <h1 className="section-title" style={{ color: '#fff' }}>AI Insights &amp; Business Intelligence</h1>
            <p className="blog-hero-sub">Expert perspectives on AI strategy, leadership, and implementation from the Edge8 team.</p>

            {featured && (
              <Link href={`/post/${featured.slug}`} className="hero-featured-card">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={600}
                  height={338}
                  className="hero-featured-img"
                />
                <div className="hero-featured-body">
                  <h2 className="hero-featured-title">{featured.title}</h2>
                  <p className="hero-featured-excerpt">{new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  <span className="hero-featured-more">Read Article →</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ═══ CATEGORY SECTIONS ══════════════════════════════════ */}
      {categories.map((cat) => (
        <CategorySection key={cat.slug} cat={cat} />
      ))}
    </main>
  )
}
