# ENTER Konsult Website

## PROJECT IDENTITY

**Company**: ENTER Konsult (rebrand of CodeTonight, 2025)
**Type**: Technology Consultancy - Business Strategy + Technical Execution
**Philosophy**: "We speak business. Not just code."
**Visual Identity**: Swiss Nihilist Design - stark, asymmetric, intentional tension

## CURRENT STATE

**Status**: Production Ready + SEO Multi-Page Architecture
**Branch**: main
**Deployment**: Vercel (auto-deploy on push)
**Last Updated**: 2025-12-28
**Latest Commit**: SEO overhaul

## TECH STACK

| Layer | Technology |
|-------|------------|
| Framework | React 18 + Vite |
| Routing | React Router DOM v7 |
| SEO | react-helmet-async |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Forms | Formspree |
| Hosting | Vercel |

## COMMANDS

```bash
npm run dev      # Local dev server (port 5173)
npm run build    # Production build
npm run preview  # Preview production build
```

## URLS

| Environment | URL |
|-------------|-----|
| Production | https://enterkonsult.com |
| Pledge Page | https://enterkonsult.com/pledge |
| Vercel | https://enter-konsult-website.vercel.app |
| Legacy | https://www.codetonight.co.za |
| Form Backend | https://formspree.io/f/mrbnkdjd |
| Repository | https://github.com/LaurieScheepers/enter-konsult-website |

## ARCHITECTURE

```text
src/
  App.jsx              # Router with Layout wrapper
  main.jsx             # React entry point with BrowserRouter + HelmetProvider
  index.css            # Tailwind imports + custom animations
  data.js              # LOGO_PROJECTS, TARGET_AUDIENCE, VALUE_PROPS, etc.
  pages/
    HomePage.jsx       # Landing page (/)
    ServicesPage.jsx   # Services page (/services) - NEW
    ShowcasePage.jsx   # Portfolio page (/work)
    AboutPage.jsx      # About page (/about)
    ContactPage.jsx    # Contact form (/contact) - extracted from About
  components/
    Icons.jsx          # ForwardEnterIcon
    NavLink.jsx        # Router-aware navigation link
    LogoGrid.jsx       # Portfolio grid + FloatingCLI
    Layout.jsx         # Header, Footer, main wrapper
    SEO.jsx            # react-helmet-async meta tags
public/
  images/              # Static assets
  pledge/              # Static pledge page (LinkedIn commitments)
  sitemap.xml          # SEO sitemap
  robots.txt           # Crawler directives
  *.svg, *.ico         # Favicon set
vercel.json            # SPA fallback rewrites
```

**Design Decision**: Multi-page architecture with React Router for SEO. Each route has unique meta tags via react-helmet-async. Vercel ISR handles prerendering. Static HTML pages in public/ for standalone content (e.g., /pledge).

## ROUTES

| Path | Page | SEO Title |
|------|------|-----------|
| `/` | HomePage | ENTER Konsult \| Tech Consultancy & Software Development \| South Africa |
| `/services` | ServicesPage | Software Development Services \| ENTER Konsult \| South Africa |
| `/work` | ShowcasePage | Portfolio \| Custom Software Projects \| ENTER Konsult |
| `/about` | AboutPage | About ENTER Konsult \| Cape Town Software Consultancy |
| `/contact` | ContactPage | Contact ENTER Konsult \| Start Your Project |
| `/pledge` | Static HTML | (standalone) |

## DESIGN SYSTEM

### Colours

| Name | Value | Usage |
|------|-------|-------|
| Paper Grey | #EAEAEA | Background |
| Black | #000000 | Primary text, buttons |
| Orange | orange-600 | Accents, CTAs, active states |
| Grey | gray-400/500/600 | Secondary text |

### Typography

| Element | Classes |
|---------|---------|
| Hero Heading | `text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.95]` |
| Section Heading | `text-5xl md:text-7xl font-bold tracking-tighter` |
| Body | `text-lg md:text-xl font-sans` |
| Labels | `font-mono text-xs uppercase tracking-widest` |

### Key Patterns

1. **Swiss Grid**: 12-column grid with asymmetric content placement
2. **Keyboard Metaphors**: ENTER button (right-aligned), SHOWCASE (spacebar, full-width mobile)
3. **Tension**: Right-align headings vs left-align subtitles on mobile
4. **Hover States**: `translate-x-2`, `tracking-wider`, colour transitions

## PORTFOLIO MAPPING

Internal codenames to real projects:

| Codename | Project |
|----------|---------|
| PROPTECH_GULF | REDR (UAE PropTech) |
| VISION_FACTORY | Skeg/CORT (Computer Vision) |
| MOTHER_TONGUE | AITSA (Afrikaans AI) |
| LEGACY_CLOUD | Oculus Tech (Desktop Licensing) |
| TALENT_MATCH | VerifiedTalent |
| WORD_PLAY | Kwartel |
| INTERNAL_OPS | Claude-Optim/CIPS |

## CUSTOM COMPONENTS

### ForwardEnterIcon

Custom SVG - mirrored return key pointing down-right. Brand icon representing "ENTER" action.

```jsx
<ForwardEnterIcon className="w-5 h-5" />
```

### NavLink

Navigation with active state indicator (underline).

### Divider

Full-width 1px grey line separator.

## CONSTRAINTS

1. **Swiss Nihilism** - Every element must have visual purpose and tension
2. **No comments in code** - Self-documenting patterns
3. **British English** - Spellings and conventions
4. **Modular pages** - Each page in separate file with SEO component
5. **Shared components** - Icons, NavLink, Layout in components/

## MOBILE CONSIDERATIONS

- Hero: 2-column grid (metadata left, heading right)
- Heading asymmetry: Right-aligned "WE SPEAK BUSINESS.", split "NOT JUST / CODE."
- Full-width SHOWCASE button (spacebar metaphor)
- Remove vertical borders on target audience matrix
- `last:border-b-0` to clean list endings

## CONTACT FORM

**Backend**: Formspree (ID: mrbnkdjd)
**Fields**: Name/Company, Email, Message
**Honeypot**: `_gotcha` field for spam protection
**Success State**: Inline confirmation message

## DEPLOYMENT

Push to `main` triggers Vercel auto-deploy. No staging environment - production direct.

## RECENT ADDITIONS (2025-12)

### Pledge Page (`/pledge`)

Static HTML page for LinkedIn commitments. Located at `public/pledge/index.html`.

**Sections**:

1. **Social Impact** - AITSA.ai (free Afrikaans AI)
2. **Community** - The Founders Collab membership
3. **How We Work** - IP ownership, remote-first, honest practice

Uses Tailwind CDN for standalone styling. Swiss Nihilist aesthetic with orange accents.

### LinkedIn Launch Assets

- `public/linkedin-logo.png` (300x300)
- `public/linkedin-banner.png` (1128x191)
- Company page copy in `next_up.md`
