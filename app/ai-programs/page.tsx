'use client'

import { useEffect } from 'react'
import Image from 'next/image'

const caseStudies = [
  { name: 'Kyungbang', image: '/case studies/images/case studies-ai programs-Kyungbang.jpeg', highlights: ['Manufacturing AI', 'Data Systems', 'Process Automation'], desc: 'Enterprise AI program for global textile manufacturer, automating complex data workflows and decision-making.' },
  { name: 'Veracity', image: '/case studies/images/case studies-ai programs-Veracity.jpeg', highlights: ['AI Agents', 'Market Intelligence', 'Automation'], desc: 'AI intelligence program that automated research synthesis and client report generation at scale.' },
  { name: 'Wink Hotels (Travel Buddy)', image: '/case studies/images/case studies-ai programs-Wink Hotels (Travel Buddy).jpeg', highlights: ['AI Concierge', 'Hospitality', 'Guest Experience'], desc: 'Travel Buddy AI concierge deployed across Wink Hotels portfolio, enhancing guest experience and driving upsells.' },
  { name: 'OnTarget (Abound Health)', image: '/case studies/images/case studies-ai programs-OnTarget (Abound Health).jpeg', highlights: ['Healthcare AI', 'Patient Engagement', 'Data Analytics'], desc: 'AI program for health-focused enterprise that transformed patient engagement and operational efficiency.' },
  { name: 'EO APAC Region (HubSpot)', image: '/case studies/images/case studies-ai programs-EO APAC Region (HubSpot).jpeg', highlights: ['CRM AI', 'APAC Growth', 'HubSpot Integration'], desc: 'AI-enhanced CRM program deployed across EO APAC region, driving member engagement and operational scale.' },
]

export default function AiProgramsPage() {
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
            <h1 className="section-title">We Build Your Team of AI Agents</h1>
            <p className="page-hero-sub">AI Programs are the operating system of the modern business. We design, build, and deploy yours — then train your team to run it.</p>
          </div>
        </div>
      </section>

      {/* WHAT IS AN AI PROGRAM */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">What Is an AI Program</span>
            <h2 className="section-title">More Than Tools. A System of AI Agents.</h2>
            <p style={{ fontSize: 17, color: 'var(--grey-mid)', lineHeight: 1.75, marginTop: 16, maxWidth: 760 }}>
              An AI Program is a coordinated system of AI agents that work together to automate your business processes, analyze your data, and execute your marketing — running 24/7 without human intervention. Think of it as building a team of AI employees, each trained for a specific function.
            </p>
          </div>
          <div className="ai-program-stats" style={{ marginTop: 48 }}>
            <div className="ai-stat-card reveal">
              <div className="ai-stat-num">Route</div>
              <p className="ai-stat-label">Information through your organization with intelligent AI routing agents that know where data needs to go</p>
            </div>
            <div className="ai-stat-card reveal">
              <div className="ai-stat-num">Monitor</div>
              <p className="ai-stat-label">Critical business data 24/7 with AI agents that alert, analyze, and act on what matters most</p>
            </div>
            <div className="ai-stat-card reveal">
              <div className="ai-stat-num">Execute</div>
              <p className="ai-stat-label">Marketing, sales, and operations tasks automatically — so your team focuses on strategy, not execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section" style={{ background: 'var(--tint)' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Case Studies</span>
            <h2 className="section-title">AI Programs We&apos;ve Built</h2>
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
    </main>
  )
}
