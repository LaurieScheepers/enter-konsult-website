import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://enterkonsult.com'
const OG_IMAGE = `${BASE_URL}/og-image.png`

const META = {
  home: {
    title: 'ENTER Konsult | Tech Consultancy & Software Development | South Africa',
    description: 'Cape Town technology consultancy. Custom software development, technical strategy, digital transformation. We speak business, not just code.',
    canonical: `${BASE_URL}/`,
    keywords: 'software development, technology consulting, Cape Town, South Africa, digital transformation, custom software, fractional CTO'
  },
  services: {
    title: 'Software Development Services | ENTER Konsult | South Africa',
    description: 'Custom software development, technical strategy, fractional CTO. Enterprise solutions for South African businesses. Strategy before code.',
    canonical: `${BASE_URL}/services`,
    keywords: 'software development services, technical strategy, fractional CTO, enterprise software, South Africa'
  },
  work: {
    title: 'Portfolio | Custom Software Projects | ENTER Konsult',
    description: 'Case studies: PropTech Dubai, ConstructionTech, Social Impact. See how we solve real business problems.',
    canonical: `${BASE_URL}/work`,
    keywords: 'software portfolio, case studies, PropTech, ConstructionTech, custom software projects'
  },
  about: {
    title: 'About ENTER Konsult | Cape Town Software Consultancy',
    description: 'Founded 2023, rebranded 2025. 20+ years experience. From Mxit to enterprise.',
    canonical: `${BASE_URL}/about`,
    keywords: 'about ENTER Konsult, Cape Town software company, technology consultancy, software developers'
  },
  contact: {
    title: 'Contact ENTER Konsult | Start Your Project',
    description: 'Ready to build? Contact our Cape Town team. Free consultation. Response within 24 hours.',
    canonical: `${BASE_URL}/contact`,
    keywords: 'contact ENTER Konsult, software consultation, Cape Town developers, project inquiry'
  }
}

export function SEO({ page }) {
  const m = META[page]
  if (!m) return null

  return (
    <Helmet>
      <title>{m.title}</title>
      <meta name="description" content={m.description} />
      <meta name="keywords" content={m.keywords} />
      <link rel="canonical" href={m.canonical} />
      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.description} />
      <meta property="og:url" content={m.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ENTER Konsult" />
      <meta property="og:locale" content="en_ZA" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={m.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={m.title} />
      <meta name="twitter:description" content={m.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  )
}
