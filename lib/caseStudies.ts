export interface CaseStudyMeta {
  slug: string
  title: string
  category: 'personal-brands' | 'business-websites' | 'ai-programs'
  image: string
  highlights: string[]
  description: string
}

export const allCaseStudies: CaseStudyMeta[] = [
  // Personal Brands
  {
    slug: 'rich-pham-personal-brand',
    title: 'Rich Pham',
    category: 'personal-brands',
    image: '/case studies/images/case studies-personal brands-Rich Pham.jpeg',
    highlights: ['Thought Leadership', 'SEO', 'GEO'],
    description: 'Personal branding strategy powered by AI agents.',
  },
  {
    slug: 'angi-hurt-personal-brand',
    title: 'Angi Hurt',
    category: 'personal-brands',
    image: '/case studies/images/case studies-personal brands-Angi Hurt.jpeg',
    highlights: ['Content Automation', 'LinkedIn Growth'],
    description: 'AI-driven personal brand for executive leader.',
  },
  {
    slug: 'david-jackson-personal-brand',
    title: 'David Jackson',
    category: 'personal-brands',
    image: '/case studies/images/case studies-personal brands-David Jackson.jpeg',
    highlights: ['SEO', 'Authority Building'],
    description: 'Systematic personal brand built with AI agents.',
  },
  {
    slug: 'steve-muller-personal-brand',
    title: 'Steve Muller',
    category: 'personal-brands',
    image: '/case studies/images/case studies-personal brands-Steve Muller.jpeg',
    highlights: ['Thought Leadership', 'Content Strategy'],
    description: 'AI-powered leadership brand at scale.',
  },

  // Business Websites
  {
    slug: 'vespa-adventures',
    title: 'Vespa Adventures',
    category: 'business-websites',
    image: '/case studies/images/case studies-business website-Vespa Adventures.jpeg',
    highlights: ['Conversion Optimization', 'SEO', 'AI Content'],
    description: 'Adventure travel website transformed by AI marketing.',
  },
  {
    slug: 'pho24',
    title: 'PHO24',
    category: 'business-websites',
    image: '/case studies/images/case studies-business website-PHO24.jpeg',
    highlights: ['Brand Refresh', 'Digital Presence', 'AI Content'],
    description: 'Restaurant chain digital transformation with AI.',
  },
  {
    slug: 'investmigrate',
    title: 'InvestMigrate',
    category: 'business-websites',
    image: '/case studies/images/case studies-business website-InvestMigrate.jpeg',
    highlights: ['Lead Generation', 'SEO', 'GEO'],
    description: 'Investment migration platform powered by AI.',
  },
  {
    slug: 'grady-golf',
    title: 'Grady Golf',
    category: 'business-websites',
    image: '/case studies/images/case studies-business website-Grady Golf.jpeg',
    highlights: ['E-commerce', 'AI Personalization', 'Conversion'],
    description: 'Golf equipment brand with AI-driven marketing.',
  },
  {
    slug: 'nhau-vodka',
    title: 'Nhau Vodka',
    category: 'business-websites',
    image: '/case studies/images/case studies-business website-Nhau Vodka.jpeg',
    highlights: ['Brand Launch', 'Digital Strategy', 'AI Content'],
    description: 'Premium spirits brand launched with AI marketing.',
  },
  {
    slug: 'ai-officer-institute',
    title: 'AI Officer Institute',
    category: 'business-websites',
    image: '/case studies/images/case studies-business website-AI Officer Institute.jpeg',
    highlights: ['Education Platform', 'SEO', 'Lead Generation'],
    description: 'AI education platform built for scale.',
  },
  {
    slug: 'fab-four-academy',
    title: 'Fab Four Academy',
    category: 'business-websites',
    image: '/case studies/images/case studies-business website-Fab Four Academy.jpeg',
    highlights: ['Music Education', 'AI Marketing', 'Enrollment'],
    description: 'Music academy grown with AI-powered digital strategy.',
  },

  // AI Programs
  {
    slug: 'kyungbang-ai-program',
    title: 'Kyungbang',
    category: 'ai-programs',
    image: '/case studies/images/case studies-ai programs-Kyungbang.jpeg',
    highlights: ['AI Program', 'Manufacturing', 'Data Systems'],
    description: 'Enterprise AI program for global manufacturing.',
  },
  {
    slug: 'veracity-ai-program',
    title: 'Veracity',
    category: 'ai-programs',
    image: '/case studies/images/case studies-ai programs-Veracity.jpeg',
    highlights: ['AI Agents', 'Market Intelligence', 'Automation'],
    description: 'AI intelligence program for market research firm.',
  },
  {
    slug: 'wink-hotels-travel-buddy',
    title: 'Wink Hotels (Travel Buddy)',
    category: 'ai-programs',
    image: '/case studies/images/case studies-ai programs-Wink Hotels (Travel Buddy).jpeg',
    highlights: ['AI Concierge', 'Hospitality', 'Guest Experience'],
    description: 'Travel Buddy AI concierge for hotel group.',
  },
  {
    slug: 'ontarget-abound-health',
    title: 'OnTarget (Abound Health)',
    category: 'ai-programs',
    image: '/case studies/images/case studies-ai programs-OnTarget (Abound Health).jpeg',
    highlights: ['Healthcare AI', 'Patient Engagement', 'Data'],
    description: 'AI program for health-focused enterprise.',
  },
  {
    slug: 'eo-apac-hubspot',
    title: 'EO APAC Region (HubSpot)',
    category: 'ai-programs',
    image: '/case studies/images/case studies-ai programs-EO APAC Region (HubSpot).jpeg',
    highlights: ['CRM AI', 'APAC Growth', 'HubSpot Integration'],
    description: 'AI-enhanced CRM program for EO APAC region.',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudyMeta | undefined {
  return allCaseStudies.find((cs) => cs.slug === slug)
}

export function getCaseStudiesByCategory(
  category: CaseStudyMeta['category']
): CaseStudyMeta[] {
  return allCaseStudies.filter((cs) => cs.category === category)
}

export function getAllCaseStudySlugs(): string[] {
  return allCaseStudies.map((cs) => cs.slug)
}
