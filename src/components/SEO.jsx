import { Helmet } from 'react-helmet-async'

const META = {
  home: {
    title: 'ENTER Konsult | Tech Consultancy & Software Development | South Africa',
    description: 'Cape Town technology consultancy. Custom software development, technical strategy, digital transformation. We speak business, not just code.',
    canonical: 'https://enterkonsult.com/'
  },
  services: {
    title: 'Software Development Services | ENTER Konsult | South Africa',
    description: 'Custom software development, technical strategy, fractional CTO. Enterprise solutions for South African businesses. Strategy before code.',
    canonical: 'https://enterkonsult.com/services'
  },
  work: {
    title: 'Portfolio | Custom Software Projects | ENTER Konsult',
    description: 'Case studies: PropTech Dubai, ConstructionTech, Social Impact. See how we solve real business problems.',
    canonical: 'https://enterkonsult.com/work'
  },
  about: {
    title: 'About ENTER Konsult | Cape Town Software Consultancy',
    description: 'Founded 2023, rebranded 2025. 20+ years experience. From Mxit to enterprise.',
    canonical: 'https://enterkonsult.com/about'
  },
  contact: {
    title: 'Contact ENTER Konsult | Start Your Project',
    description: 'Ready to build? Contact our Cape Town team. Free consultation. Response within 24 hours.',
    canonical: 'https://enterkonsult.com/contact'
  }
}

export function SEO({ page }) {
  const m = META[page]
  if (!m) return null

  return (
    <Helmet>
      <title>{m.title}</title>
      <meta name="description" content={m.description} />
      <link rel="canonical" href={m.canonical} />
      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.description} />
      <meta property="og:url" content={m.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ENTER Konsult" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={m.title} />
      <meta name="twitter:description" content={m.description} />
    </Helmet>
  )
}
