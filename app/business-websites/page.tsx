'use client'

import { useEffect } from 'react'
import Image from 'next/image'

const caseStudies = [
  { name: 'Vespa Adventures', image: '/case studies/images/case studies-business website-Vespa Adventures.jpeg', highlights: ['Conversion Optimization', 'AI SEO', 'Booking Engine'], desc: 'Adventure travel website transformed with AI marketing to drive 3x booking growth.' },
  { name: 'PHO24', image: '/case studies/images/case studies-business website-PHO24.jpeg', highlights: ['Brand Refresh', 'Digital Presence', 'AI Content'], desc: 'Restaurant chain digital transformation with AI-powered content and CRM integration.' },
  { name: 'InvestMigrate', image: '/case studies/images/case studies-business website-InvestMigrate.jpeg', highlights: ['Lead Generation', 'SEO', 'GEO Optimization'], desc: 'Investment migration platform generating 5x more qualified leads through AI marketing.' },
  { name: 'Grady Golf', image: '/case studies/images/case studies-business website-Grady Golf.jpeg', highlights: ['E-commerce', 'AI Personalization', 'Conversion Uplift'], desc: 'Golf equipment brand with AI-driven personalization increasing average order value by 40%.' },
  { name: 'Nhau Vodka', image: '/case studies/images/case studies-business website-Nhau Vodka.jpeg', highlights: ['Brand Launch', 'Digital Strategy', 'AI Content'], desc: 'Premium spirits brand launched with AI marketing that generated immediate market traction.' },
  { name: 'AI Officer Institute', image: '/case studies/images/case studies-business website-AI Officer Institute.jpeg', highlights: ['Education Platform', 'SEO', 'Lead Generation'], desc: 'AI education platform built for scale, driving enrollment across Asia and North America.' },
  { name: 'Fab Four Academy', image: '/case studies/images/case studies-business website-Fab Four Academy.jpeg', highlights: ['Music Education', 'AI Marketing', 'Enrollment Growth'], desc: 'Music academy grown with AI-powered digital strategy, doubling enrollment in 6 months.' },
]

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
              <h2 className="section-title">Ready to Build a Website That Converts?</h2>
              <p>Let&apos;s talk about transforming your digital presence with AI-powered marketing.</p>
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
