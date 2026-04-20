'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const testimonials = [
  { text: "The team Edge8 placed for us has been exceptional. They came AI-trained and ready to contribute from day one. We've doubled our output while cutting costs dramatically.", name: 'David Niu', role: 'Co-Founder, TINYpulse', avatar: '/services/images/services-global-staffing-testimonials-David Niu.jpg' },
  { text: "We were skeptical about remote global talent, but Edge8 changed our minds. The quality, professionalism, and AI capabilities of our new team members have exceeded every expectation.", name: 'Henry Albrecht', role: 'CEO, Limeade', avatar: '/services/images/services-global-staffing-testimonials-Henry Albrecht.jpg' },
]

export default function GlobalStaffingPage() {
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
            <span className="section-label">Global Staffing</span>
            <h1 className="section-title">Let&apos;s Build Your AI-Ready Team</h1>
            <p className="page-hero-sub">Access Vietnam&apos;s top AI-trained professionals — at 75% less than US market rates. Start in weeks, not months.</p>
            <a href="https://ai-officer.typeform.com/letstalk" className="btn btn-mint" target="_blank" rel="noopener noreferrer">Build Your Team →</a>
          </div>
        </div>
      </section>

      {/* WHY EDGE8 */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Why Edge8</span>
            <h2 className="section-title">AI-Trained Talent at a Fraction of the Cost</h2>
          </div>
          <div className="who-grid-4" style={{ marginTop: 48 }}>
            <div className="who-card-4 reveal">
              <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--blue)', lineHeight: 1, marginBottom: 8 }}>75%</div>
              <div className="who-card-title">Cost Savings</div>
              <p className="who-card-desc">Save up to 75% compared to equivalent US or European talent — without sacrificing quality.</p>
            </div>
            <div className="who-card-4 reveal">
              <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--blue)', lineHeight: 1, marginBottom: 8 }}>AI</div>
              <div className="who-card-title">AI-Trained</div>
              <p className="who-card-desc">Every team member is trained in our AI Officer methodology before they join your team.</p>
            </div>
            <div className="who-card-4 reveal">
              <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--blue)', lineHeight: 1, marginBottom: 8 }}>Weeks</div>
              <div className="who-card-title">Start Fast</div>
              <p className="who-card-desc">Onboard your first team member in 2–4 weeks. No 6-month hiring cycles.</p>
            </div>
            <div className="who-card-4 reveal">
              <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--blue)', lineHeight: 1, marginBottom: 8 }}>Flex</div>
              <div className="who-card-title">Flexible Models</div>
              <p className="who-card-desc">Part-time, full-time, or project-based. Scale your team up or down as your needs evolve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE ROLES */}
      <section className="section" style={{ background: 'var(--tint)' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">The Roles</span>
            <h2 className="section-title">Specialized AI-Empowered Talent</h2>
          </div>
          <div className="choice-grid" style={{ marginTop: 48 }}>
            <div className="choice-card reveal">
              <div className="choice-label">Role 1</div>
              <div className="choice-role-title">AI Officers</div>
              <ul className="choice-role-bullets">
                <li>AI program design & management</li>
                <li>Process automation implementation</li>
                <li>Team AI training & coaching</li>
                <li>ROI measurement & reporting</li>
                <li>AI tools evaluation & selection</li>
              </ul>
            </div>
            <div className="choice-card featured reveal">
              <div className="choice-label">Role 2 · Most Requested</div>
              <div className="choice-role-title">AI Engineers</div>
              <ul className="choice-role-bullets">
                <li>Custom AI agent development</li>
                <li>CRM & workflow automation</li>
                <li>Data pipeline construction</li>
                <li>API integrations & connectors</li>
                <li>AI model fine-tuning & deployment</li>
              </ul>
            </div>
            <div className="choice-card reveal">
              <div className="choice-label">Role 3</div>
              <div className="choice-role-title">Marketing Professionals</div>
              <ul className="choice-role-bullets">
                <li>AI-powered content creation</li>
                <li>SEO & GEO optimization</li>
                <li>Social media management</li>
                <li>Email campaign automation</li>
                <li>Performance analytics & reporting</li>
              </ul>
            </div>
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
              <h2 className="section-title">Ready to Build Your AI-Ready Team?</h2>
              <p>Start with a free consultation to find the right global talent for your needs.</p>
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
