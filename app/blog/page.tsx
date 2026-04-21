'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { allPosts, categories } from '@/lib/postData'

const allTabs = [{ slug: 'all', label: 'All Posts' }, ...categories]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const featured = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0]

  const filteredPosts = (
    activeCategory === 'all'
      ? [...allPosts]
      : allPosts.filter((p) => p.categorySlug === activeCategory)
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
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
                  <p className="hero-featured-excerpt">
                    {new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <span className="hero-featured-more">Read Article →</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ═══ POSTS SECTION ══════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          {/* Category filter tabs */}
          <div className="blog-filter-tabs">
            {allTabs.map((cat) => (
              <button
                key={cat.slug}
                className={`blog-filter-tab${activeCategory === cat.slug ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat.slug)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Card grid */}
          {filteredPosts.length > 0 ? (
            <div className="blog-cards-grid">
              {filteredPosts.map((post) => (
                <Link key={post.slug} href={`/post/${post.slug}`} className="blog-card reveal">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={338}
                    className="blog-card-img"
                  />
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span className="blog-card-cat">{post.category}</span>
                      <span className="blog-card-date">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <div className="blog-card-title">{post.title}</div>
                    <span className="blog-card-more">Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <p>No posts in this category yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
