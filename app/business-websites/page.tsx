'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getCaseStudiesByCategory } from '@/lib/caseStudies'

const caseStudies = getCaseStudiesByCategory('business-websites')

export default function BusinessWebsitesPage() {
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
            <h1 className="section-title">How AI in Marketing Transforms Websites Into Conversion Engines</h1>
            <p className="page-hero-sub">We don&apos;t build pretty websites. We build AI-powered marketing systems that generate leads, drive sales, and compound over time.</p>
          </div>
        </div>
      </section>

      {/* HOW AI IN MARKETING */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">The Approach</span>
            <h2 className="section-title">How AI in Marketing Changes Everything</h2>
          </div>
          <div className="problem-cards" style={{ marginTop: 48 }}>
            {[
              { title: 'Audience Intelligence', desc: 'AI analyzes your audience behavior in real time, identifying who converts and why — then optimizes every touchpoint accordingly.' },
              { title: 'SEO + GEO', desc: 'We optimize for both traditional search engines and AI-powered search like ChatGPT and Perplexity — covering all discovery channels.' },
              { title: 'Automated Content', desc: 'AI agents produce SEO-optimized content at scale, keeping your site fresh and your authority growing month after month.' },
              { title: 'Smart Personalization', desc: 'AI customizes the website experience based on visitor behavior, industry, and intent — turning browsers into buyers.' },
            ].map((card) => (
              <div key={card.title} className="problem-card reveal">
                <div className="problem-card-title">{card.title}</div>
                <p className="problem-card-desc">{card.desc}</p>
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
            <h2 className="section-title">Websites We&apos;ve Transformed</h2>
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
      <section className="audit-cta section">
        <div className="container">
          <div className="audit-inner">
            <div className="audit-text reveal">
              <h2 className="section-title">Ready to Build a Website That Converts?</h2>
              <p>Let&apos;s talk about transforming your digital presence with AI-powered marketing.</p>
            </div>
            <div className="audit-cta-btn reveal">
              <a href="https://ai-officer.typeform.com/letstalk" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Schedule A Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
