'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getCaseStudiesByCategory } from '@/lib/caseStudies'

const caseStudies = getCaseStudiesByCategory('personal-brands')

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
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Why AI Agents</span>
            <h2 className="section-title">What Makes This Different</h2>
          </div>
          <div className="problem-cards" style={{ marginTop: 48 }}>
            <div className="problem-card reveal">
              <div className="problem-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <div className="problem-card-title">Scale</div>
              <p className="problem-card-desc">AI agents produce 10x the content of a human team — at a fraction of the cost.</p>
            </div>
            <div className="problem-card reveal">
              <div className="problem-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="problem-card-title">Consistency</div>
              <p className="problem-card-desc">Your brand voice is codified and delivered consistently across every channel.</p>
            </div>
            <div className="problem-card reveal">
              <div className="problem-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <div className="problem-card-title">Speed</div>
              <p className="problem-card-desc">From interview to published content in hours, not weeks.</p>
            </div>
            <div className="problem-card reveal">
              <div className="problem-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
              </div>
              <div className="problem-card-title">Optimization</div>
              <p className="problem-card-desc">Continuous SEO and GEO optimization as algorithms evolve.</p>
            </div>
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
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Case Studies</span>
            <h2 className="section-title">Leaders We&apos;ve Built</h2>
          </div>
          <div className="cs-grid" style={{ marginTop: 48 }}>
            {caseStudies.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="cs-card reveal">
                <Image src={cs.image} alt={cs.title} width={600} height={220} className="cs-card-img" />
                <div className="cs-card-body">
                  <div className="cs-card-title">{cs.title}</div>
                  <p className="cs-card-desc">{cs.description}</p>
                  <div className="cs-card-highlights">
                    {cs.highlights.map((h) => (
                      <span key={h} className="cs-card-highlight">{h}</span>
                    ))}
                  </div>
                  <span className="cs-card-more">View Case Study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-blue section">
        <div className="container">
          <div className="contact-blue-inner">
            <div className="reveal">
              <h2 className="section-title" style={{ marginBottom: 16 }}>Ready to Build Your AI-Powered Brand?</h2>
              <p className="section-sub">The best time to build your personal brand was yesterday. The second best time is today.</p>
            </div>
            <div className="contact-blue-cta reveal">
              <a href="https://ai-officer.typeform.com/letstalk" className="btn btn-contact" target="_blank" rel="noopener noreferrer">Schedule A Consultation →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
