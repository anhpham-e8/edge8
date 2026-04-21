'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CaioLeadershipPage() {
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
      <section className="svc-hero">
        <div className="svc-hero-bg" />
        <div className="svc-hero-grid" />
        <div className="container">
          <div className="svc-hero-inner">
            <div className="svc-hero-text">
              <h1>Get C-Level AI Leadership Without the $300K Mistake</h1>
              <p className="svc-hero-sub">Most companies don&apos;t need a $300K full-time CAIO. They need strategic AI leadership that drives real results — without the risk of the wrong hire.</p>
              <a href="https://ai-officer.typeform.com/letstalk" className="btn btn-contact" target="_blank" rel="noopener noreferrer">Start with a Free Consultation →</a>
            </div>
            <div className="svc-hero-img">
              <Image src="/services/images/services-caio-leadership-hero.jpg" alt="CAIO Leadership" width={640} height={480} priority />
            </div>
          </div>
        </div>
      </section>

      {/* THE PATTERN */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">The Problem</span>
            <h2 className="section-title">You Wouldn&apos;t Hire a VP of Sales Without a Proven Sales System</h2>
            <p className="section-sub" style={{ marginTop: 16 }}>So why hire an AI executive before you have an AI system?</p>
          </div>
          <div className="problem-cards" style={{ marginTop: 48 }}>
            {[
              { icon: '📉', title: 'The VP Sales Trap', desc: 'Companies hire a VP Sales before they have a repeatable sales process. The hire fails. They blame the person, not the system.' },
              { icon: '📣', title: 'The CMO Trap', desc: 'Companies hire a CMO before they know their customer. Millions spent on campaigns. Zero ROI. The CMO is gone in 18 months.' },
              { icon: '📋', title: 'The CFO Trap', desc: 'Companies hire a CFO before they have clean books. The CFO spends all their time on cleanup instead of strategy.' },
              { icon: '🤖', title: 'The CAIO Trap', desc: 'Companies hire a CAIO before they have an AI program. The hire costs $300K+, takes 6 months, and often fails. We break this cycle.' },
            ].map((card) => (
              <div key={card.title} className="problem-card reveal">
                <div className="problem-card-icon">{card.icon}</div>
                <div className="problem-card-title">{card.title}</div>
                <p className="problem-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">The Comparison</span>
            <h2 className="section-title">Fractional CAIO vs Full-Time CAIO</h2>
          </div>
          <div className="comparison-wrap reveal" style={{ marginTop: 48 }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Full-Time CAIO</th>
                  <th>Edge8 Fractional CAIO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Annual Cost', '$200K–$350K + benefits + equity', 'Starting at $5,400 / quarter'],
                  ['Time to Start', '4–8 months to hire', 'Day 1'],
                  ['Risk', 'Wrong hire = $300K mistake', 'ROI guarantee or we work free'],
                  ['Scalability', 'Fixed headcount', 'Scale up or down as needed'],
                  ['Experience', 'One person\'s knowledge', 'Entire Edge8 team + methodology'],
                  ['First Results', '3–6 months minimum', 'Within 30–60 days'],
                ].map(([factor, bad, good]) => (
                  <tr key={factor}>
                    <td style={{ fontWeight: 500, color: 'var(--dark)' }}>{factor}</td>
                    <td style={{ color: '#ef4444' }}>{bad}</td>
                    <td style={{ color: 'var(--blue)', fontWeight: 500 }}>{good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* THREE PATHS */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Three Paths</span>
            <h2 className="section-title">Choose Your AI Leadership Model</h2>
          </div>
          <div className="choice-grid" style={{ marginTop: 48 }}>
            <div className="choice-card reveal">
              <div className="choice-label">Option A</div>
              <div className="choice-title">Strategic Advisory</div>
              <p className="choice-desc">Dave Hajdu serves as your advisory CAIO — attending key meetings, guiding AI strategy, and helping you build internal capability over time.</p>
              <div className="choice-outcome">Best for: Companies beginning their AI journey</div>
            </div>
            <div className="choice-card featured reveal">
              <div className="choice-label">Option B · Most Popular</div>
              <div className="choice-title">Fractional CAIO</div>
              <p className="choice-desc">Dedicated part-time AI leadership embedded in your organization. We own the AI program, manage the team, and drive results — just like a full-time executive.</p>
              <div className="choice-outcome">Best for: Companies scaling AI programs</div>
            </div>
            <div className="choice-card reveal">
              <div className="choice-label">Option C</div>
              <div className="choice-title">CAIO-in-Residence</div>
              <p className="choice-desc">Full-time embedded AI leadership for a fixed period. We build the program, hire and train internal talent, then transition out when you&apos;re self-sufficient.</p>
              <div className="choice-outcome">Best for: Companies ready to go all-in</div>
            </div>
          </div>
        </div>
      </section>

      {/* 90-DAY ROADMAP */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">The Roadmap</span>
            <h2 className="section-title">Your 90-Day AI Leadership Journey</h2>
          </div>
          <div className="timeline-steps" style={{ marginTop: 48, maxWidth: 720 }}>
            {[
              { month: 'Month 1', title: 'AI Landscape Assessment', desc: 'We audit your current AI usage, data infrastructure, and team capabilities. We establish quick wins and build your AI roadmap.' },
              { month: 'Month 2–3', title: 'Program Design & First Implementation', desc: 'We design and launch your highest-ROI AI program. Your team is trained. Processes are established. Results start appearing.' },
              { month: 'Month 4–6', title: 'Scale & Systematize', desc: 'We expand successful programs across your organization, build internal AI capability, and establish governance and measurement systems.' },
            ].map((step, i) => (
              <div key={i} className="timeline-step">
                <div className="timeline-left">
                  <div className={`timeline-dot${i === 2 ? ' mint' : ''}`}>{i + 1}</div>
                </div>
                <div className="timeline-right">
                  <div className="timeline-label">{step.month}</div>
                  <div className="timeline-title">{step.title}</div>
                  <div className="timeline-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Who It&apos;s For</span>
            <h2 className="section-title">Built for Ambitious Organizations</h2>
          </div>
          <div className="who-grid-4" style={{ marginTop: 48 }}>
            {[
              { icon: '🚀', title: 'Series A/B Startups', desc: 'Build AI into your product and operations before your competitors do.' },
              { icon: '🏢', title: 'Mid-Market Companies', desc: '$10M–$100M companies ready to use AI for competitive advantage.' },
              { icon: '💼', title: 'Private Equity Portfolio', desc: 'Deploy AI across your portfolio for faster value creation.' },
              { icon: '🏗️', title: 'Enterprise Divisions', desc: 'Move faster than corporate IT by building your own AI capability.' },
            ].map((card) => (
              <div key={card.title} className="who-card-4 reveal">
                <div className="problem-card-icon">{card.icon}</div>
                <div className="who-card-title">{card.title}</div>
                <p className="who-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-blue section">
        <div className="container">
          <div className="contact-blue-inner">
            <div className="reveal">
              <h2 className="section-title" style={{ marginBottom: 16 }}>Ready for AI Leadership That Delivers?</h2>
              <p className="section-sub">Schedule a free consultation to find the right CAIO model for your organization.</p>
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
