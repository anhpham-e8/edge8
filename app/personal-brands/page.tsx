'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const caseStudies = [
  { name: 'Rich Pham', image: '/case studies/images/case studies-personal brands-Rich Pham.jpeg', highlights: ['Thought Leadership', 'SEO Optimization', 'GEO Strategy'], desc: 'Built a dominant personal brand in the tech leadership space with AI-powered content and distribution.' },
  { name: 'Angi Hurt', image: '/case studies/images/case studies-personal brands-Angi Hurt.jpeg', highlights: ['Executive Branding', 'LinkedIn Growth', 'Content Automation'], desc: 'Transformed an executive into a recognized industry voice with AI-driven content strategy.' },
  { name: 'David Jackson', image: '/case studies/images/case studies-personal brands-David Jackson.jpeg', highlights: ['Authority Building', 'SEO', 'Community Growth'], desc: 'Systematically built authority and search visibility using AI agent-driven content production.' },
  { name: 'Steve Muller', image: '/case studies/images/case studies-personal brands-Steve Muller.jpeg', highlights: ['Thought Leadership', 'Content Strategy', 'Brand Voice'], desc: 'Developed a distinctive AI-powered leadership brand that drives business development.' },
]

export default function PersonalBrandsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="section-label">Case Studies</span>
            <h1 className="section-title">How AI Agents Power Leadership Branding</h1>
            <p className="page-hero-sub">We don&apos;t just build personal brands — we build AI-powered content engines that position leaders as industry authorities.</p>
          </div>
        </div>
      </section>

      {/* THE APPROACH */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">The Approach</span>
            <h2 className="section-title">Two Strategies. One Dominant Presence.</h2>
          </div>
          <div className="who-grid" style={{ marginTop: 48 }}>
            <div className="who-card reveal">
              <div className="who-card-title">SEO — Search Engine Optimization</div>
              <p className="who-card-desc">AI agents produce high-quality, keyword-optimized content at scale. Your brand appears when people search for your expertise — driving organic discovery and credibility.</p>
            </div>
            <div className="who-card reveal">
              <div className="who-card-title">GEO — Generative Engine Optimization</div>
              <p className="who-card-desc">As AI search engines like ChatGPT and Perplexity become the discovery layer, we optimize your content to appear in AI-generated answers — the next frontier of personal branding.</p>
            </div>
          </div>
          <div className="approach-callout reveal" style={{ marginTop: 24 }}>
            <p>The leaders who build their AI-powered personal brand today will own their category in the next 3 years. <strong>The window is still open — but it&apos;s closing fast.</strong></p>
          </div>
        </div>
      </section>

      {/* WHY AI AGENTS */}
      <section className="section" style={{ background: 'var(--tint)' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Why AI Agents</span>
            <h2 className="section-title">What Makes This Different</h2>
          </div>
          <div className="who-grid-4" style={{ marginTop: 48 }}>
            {[
              { title: 'Scale', desc: 'AI agents produce 10x the content of a human team — at a fraction of the cost.' },
              { title: 'Consistency', desc: 'Your brand voice is codified and delivered consistently across every channel.' },
              { title: 'Speed', desc: 'From interview to published content in hours, not weeks.' },
              { title: 'Optimization', desc: 'Continuous SEO and GEO optimization as algorithms evolve.' },
            ].map((card) => (
              <div key={card.title} className="who-card-4 reveal">
                <div className="who-card-title">{card.title}</div>
                <p className="who-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">The Process</span>
            <h2 className="section-title">How We Build Your AI-Powered Brand</h2>
          </div>
          <div className="process-steps" style={{ marginTop: 48, maxWidth: 720 }}>
            {[
              { title: 'Brand Interview & Voice Extraction', desc: 'We extract your expertise, stories, and perspective through a structured brand interview. This becomes the foundation for all content.' },
              { title: 'AI Agent Setup & Content Architecture', desc: 'We deploy custom AI agents trained on your brand voice and target audience. We design your content calendar and distribution strategy.' },
              { title: 'Content Production at Scale', desc: 'AI agents produce articles, social posts, newsletters, and more — all in your voice. Every piece is optimized for SEO and GEO.' },
              { title: 'Distribution & Amplification', desc: 'Content is published across your channels with platform-specific optimization. We track what works and double down.' },
              { title: 'Measurement & Iteration', desc: 'Monthly reporting on brand reach, search rankings, and business impact. Continuous refinement as your authority grows.' },
            ].map((step, i) => (
              <div key={i} className="process-step">
                <div className="process-step-dot">{i + 1}</div>
                <div className="process-step-body">
                  <div className="process-step-title">{step.title}</div>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section" style={{ background: 'var(--tint)' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Case Studies</span>
            <h2 className="section-title">Leaders We&apos;ve Built</h2>
          </div>
          <div className="cs-grid" style={{ marginTop: 48 }}>
            {caseStudies.map((cs) => (
              <div key={cs.name} className="cs-card reveal">
                <Image src={cs.image} alt={cs.name} width={600} height={220} className="cs-card-img" />
                <div className="cs-card-body">
                  <div className="cs-card-title">{cs.name}</div>
                  <p className="cs-card-desc">{cs.desc}</p>
                  <div className="cs-card-highlights">
                    {cs.highlights.map((h) => (
                      <span key={h} className="cs-card-highlight">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="audit-cta section">
        <div className="container">
          <div className="audit-inner">
            <div className="audit-text reveal">
              <h2 className="section-title">Ready to Build Your AI-Powered Brand?</h2>
              <p>The best time to build your personal brand was yesterday. The second best time is today.</p>
            </div>
            <div className="audit-cta-btn reveal">
              <a href="https://www.edge8.ai" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Schedule A Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
