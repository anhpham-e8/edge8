import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { allCaseStudies, getCaseStudyBySlug, getCaseStudiesByCategory, getAllCaseStudySlugs } from '@/lib/caseStudies'

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = getCaseStudyBySlug(params.slug)
  if (!cs) return {}
  return {
    title: `${cs.title} Case Study | Edge8`,
    description: cs.description,
  }
}

const categoryLabels: Record<string, string> = {
  'personal-brands': 'Personal Brands',
  'business-websites': 'Business Websites',
  'ai-programs': 'AI Programs',
}

const categoryRoutes: Record<string, string> = {
  'personal-brands': '/personal-brands',
  'business-websites': '/business-websites',
  'ai-programs': '/ai-programs',
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudyBySlug(params.slug)
  if (!cs) notFound()

  const related = allCaseStudies
    .filter((c) => c.category === cs.category && c.slug !== cs.slug)
    .slice(0, 4)

  const categoryLabel = categoryLabels[cs.category] ?? cs.category
  const categoryRoute = categoryRoutes[cs.category] ?? '/'

  return (
    <main>
      {/* ═══ CASE STUDY HERO ════════════════════════════════════ */}
      <section className="post-hero">
        <div className="container">
          <div className="post-meta">
            <Link href={categoryRoute} className="post-tag">{categoryLabel}</Link>
          </div>
          <h1 className="post-title">{cs.title}</h1>
          <p style={{ color: 'var(--grey-mid)', fontSize: 18, marginTop: 12 }}>{cs.description}</p>
        </div>
      </section>

      {/* ═══ FEATURED IMAGE ═════════════════════════════════════ */}
      <div className="container" style={{ paddingTop: 0 }}>
        <Image
          src={cs.image}
          alt={cs.title}
          width={1200}
          height={480}
          className="post-featured-img"
          priority
        />
      </div>

      {/* ═══ CASE STUDY BODY ════════════════════════════════════ */}
      <section className="post-body">
        <div className="container">
          <div className="post-layout">
            <article className="post-content">
              {/* Highlights */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
                {cs.highlights.map((h) => (
                  <span
                    key={h}
                    style={{
                      background: 'var(--tint)',
                      color: 'var(--dark)',
                      borderRadius: 4,
                      padding: '4px 12px',
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              <h2>About This Project</h2>
              <p>{cs.description}</p>

              <h2>What We Did</h2>
              <ul>
                {cs.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div style={{ marginTop: 48 }}>
                <Link href={categoryRoute} className="btn btn-secondary">
                  ← Back to {categoryLabel}
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="post-sidebar">
              {related.length > 0 && (
                <div className="post-sidebar-card">
                  <div className="post-sidebar-title">More {categoryLabel}</div>
                  <div className="post-sidebar-list">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/case-studies/${r.slug}`} className="post-sidebar-item">
                        <div className="post-sidebar-item-title">{r.title}</div>
                        <div className="post-sidebar-item-date">{r.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="post-sidebar-card" style={{ background: 'var(--dark)', border: 'none' }}>
                <div className="post-sidebar-title" style={{ color: 'var(--tint)' }}>Ready to Be Tech-Forward?</div>
                <p style={{ fontSize: 13, color: 'var(--grey-mid)', lineHeight: 1.65, marginBottom: 16 }}>
                  Schedule a free AI Capabilities Audit with our team.
                </p>
                <Link href="/ai-capabilities-audit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}>
                  Book Your Audit
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
