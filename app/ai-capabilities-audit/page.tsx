'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const testimonials = [
  { text: "I invited Dave to speak at the AI Summit in Sabah, and he was a natural on stage, bringing a fresh style the audience loved.", name: 'Dato George Lim', role: 'Founder & CEO — G&A GROUP & GA SPACE', avatar: '/services/images/services-ai-capabilities-audit-testimonials-Dato.jpg' },
  { text: "Dave was able to greatly expand our general knowledge of AI and demystify the challenges of implementation. I highly recommend Edge8.ai as a YPO resource.", name: 'John VanNewkirk', role: 'YPO Gold Seattle, Forum 6', avatar: '/homepage/images/home-page-testimonials-John.jpg' },
  { text: "He was extremely knowledgeable and engaging. Real-world experiences complemented our class discussions perfectly.", name: 'Dr. Brooks Holtom', role: 'Professor of Management, Georgetown', avatar: '/homepage/images/home-page-testimonials-Dr Holtom.jpg' },
  { text: "Love the new look and branding. The website looks so good. I'm deeply grateful.", name: 'Dao Nguyen', role: 'Founder, DN Legal', avatar: '/homepage/images/home-page-testimonials-Dao Nguyen.jpg' },
]

export default function AiCapabilitiesAuditPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    setTimeout(() => {
      setFormStatus('sent')
      ;(e.target as HTMLFormElement).reset()
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1200)
  }

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="section-label">AI Capabilities Audit</span>
            <h1 className="section-title">Turn Your AI Experiments Into ROI-Driving Systems</h1>
            <p className="page-hero-sub">Stop guessing about AI. Get a clear roadmap from experts who&apos;ve built real AI programs — not just consultants who theorize about them.</p>
            <a href="#audit-form" className="btn btn-mint">Book Your Free Audit →</a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">The Problem</span>
            <h2 className="section-title">95% of Companies See Zero ROI from AI</h2>
          </div>
          <div className="stat-pullquote reveal" style={{ maxWidth: 640, marginTop: 48 }}>
            <div className="stat-num">95%</div>
            <p>of companies report ZERO return on investment despite massive AI investment — MIT Sloan Research</p>
          </div>
          <div className="problem-cards" style={{ marginTop: 48 }}>
            {[
              { title: 'No Strategic Direction', desc: 'AI tools are adopted ad hoc, with no alignment to business goals or measurable outcomes.' },
              { title: 'Data Problems Disguised as AI Problems', desc: 'Companies invest in AI models but have data that\'s unstructured, incomplete, or siloed.' },
              { title: 'No Ownership', desc: 'AI initiatives lack a dedicated leader, so experiments never scale into programs.' },
              { title: 'Wrong Metrics', desc: 'Teams measure AI by adoption, not by business impact — so they never know if it\'s working.' },
            ].map((card) => (
              <div key={card.title} className="problem-card reveal">
                <div className="problem-card-title">{card.title}</div>
                <p className="problem-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: 'var(--tint)' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Three Levels of AI Transformation</h2>
          </div>
          <div className="how-steps" style={{ marginTop: 48 }}>
            {[
              { num: '01', title: 'Discovery', desc: 'We audit your current AI usage, data infrastructure, team capabilities, and business processes to identify gaps and opportunities.' },
              { num: '02', title: 'Design', desc: 'We create a customized AI roadmap with prioritized initiatives, success metrics, and implementation timelines tailored to your business.' },
              { num: '03', title: 'Build & Deploy', desc: 'We implement your highest-ROI AI programs, train your team, and establish the processes to sustain and scale your results.' },
            ].map((step) => (
              <div key={step.num} className="how-step reveal">
                <div className="how-step-num">{step.num}</div>
                <div className="how-step-title">{step.title}</div>
                <p className="how-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Pricing</span>
            <h2 className="section-title">Choose Your Path to AI Excellence</h2>
          </div>
          <div className="pricing-grid" style={{ marginTop: 48 }}>
            <div className="pricing-card reveal">
              <div className="pricing-name">Foundation</div>
              <div className="pricing-price">$4,999</div>
              <div className="pricing-period">One-time investment</div>
              <div className="pricing-features">
                {['AI readiness assessment', 'Data audit & gap analysis', 'Top 3 AI opportunities identified', '90-day implementation roadmap', '2-hour strategy session'].map((f) => (
                  <div key={f} className="pricing-feature">{f}</div>
                ))}
              </div>
              <a href="https://www.edge8.ai" className="btn pricing-cta-ghost" target="_blank" rel="noopener noreferrer">Get Started →</a>
            </div>
            <div className="pricing-card featured reveal">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-name">Standard</div>
              <div className="pricing-price">$9,999</div>
              <div className="pricing-period">One-time investment</div>
              <div className="pricing-features">
                {['Everything in Foundation', 'Full team interviews', 'Process mapping & automation opportunities', 'Custom AI tools evaluation', 'Priority implementation support', '30-day follow-up session'].map((f) => (
                  <div key={f} className="pricing-feature">{f}</div>
                ))}
              </div>
              <a href="https://www.edge8.ai" className="btn pricing-cta-filled" target="_blank" rel="noopener noreferrer">Get Started →</a>
            </div>
            <div className="pricing-card reveal">
              <div className="pricing-name">Peak</div>
              <div className="pricing-price">$24,999</div>
              <div className="pricing-period">Comprehensive engagement</div>
              <div className="pricing-features">
                {['Everything in Standard', 'Full AI program design', 'First AI implementation included', 'AI Officer placement', '90-day implementation support', 'Board-ready AI strategy presentation'].map((f) => (
                  <div key={f} className="pricing-feature">{f}</div>
                ))}
              </div>
              <a href="https://www.edge8.ai" className="btn pricing-cta-ghost" target="_blank" rel="noopener noreferrer">Get Started →</a>
            </div>
          </div>
        </div>
      </section>

      {/* INTAKE FORM */}
      <section className="section" style={{ background: 'var(--tint)' }} id="audit-form">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 640, margin: '0 auto' }}>
            <span className="section-label" style={{ display: 'block' }}>Apply Now</span>
            <h2 className="section-title">Book Your AI Capabilities Audit</h2>
            <p className="section-sub" style={{ marginTop: 16 }}>Tell us about your biggest AI challenges and we&apos;ll design a custom plan.</p>
          </div>
          <div className="form-card reveal" style={{ maxWidth: 640, margin: '48px auto 0' }}>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="auditFirstName">First Name</label>
                  <input type="text" id="auditFirstName" name="firstName" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label htmlFor="auditLastName">Last Name</label>
                  <input type="text" id="auditLastName" name="lastName" placeholder="Smith" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="auditCompany">Company</label>
                <input type="text" id="auditCompany" name="company" placeholder="Acme Corp" required />
              </div>
              <div className="form-group">
                <label htmlFor="auditEmail">Email</label>
                <input type="email" id="auditEmail" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>What are your biggest AI challenges? (Select all that apply)</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
                  {[
                    'No AI strategy or roadmap',
                    'Data quality and organization issues',
                    'No AI leadership or ownership',
                    'Struggling to measure AI ROI',
                    'Failed AI experiments or pilots',
                    'Need to scale existing AI programs',
                  ].map((challenge) => (
                    <label key={challenge} className="checkbox-label">
                      <input type="checkbox" name="challenges" value={challenge} />
                      {challenge}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="auditRevenue">Annual Revenue Range</label>
                <select id="auditRevenue" name="revenue">
                  <option value="" disabled>Select range...</option>
                  <option>Under $1M</option>
                  <option>$1M – $5M</option>
                  <option>$5M – $20M</option>
                  <option>$20M – $50M</option>
                  <option>$50M+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="auditMessage">Tell us about your AI goals</label>
                <textarea id="auditMessage" name="message" placeholder="What do you want AI to do for your business?" />
              </div>
              <div className="form-submit">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={formStatus !== 'idle'}
                  style={formStatus === 'sent' ? { background: '#0d9a5e' } : {}}
                >
                  {formStatus === 'idle' ? 'Book My Free Audit →' : formStatus === 'sending' ? 'Sending...' : 'Request Sent ✓'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid" style={{ marginTop: 48 }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card reveal">
                <span className="testimonial-quote">&ldquo;</span>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-person">
                  <Image src={t.avatar} alt={t.name} width={52} height={52} className="testimonial-avatar" />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
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
              <h2 className="section-title">Ready to Scale AI That Actually Works?</h2>
              <p>Join the companies already seeing real ROI from structured AI programs.</p>
            </div>
            <div className="audit-cta-btn reveal">
              <a href="#audit-form" className="btn btn-primary">Book Your AI Capabilities Audit</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
