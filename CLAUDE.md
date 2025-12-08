# ENTER Konsult Website

## PROJECT IDENTITY

**Company**: ENTER Konsult (rebrand of CodeTonight, 2025)
**Type**: Technology Consultancy - Business Strategy + Technical Execution
**Philosophy**: "We speak business. Not just code."
**Visual Identity**: Swiss Nihilist Design - stark, asymmetric, intentional tension

## CURRENT STATE

**Status**: Production Ready (v2 Styling Complete)
**Branch**: main
**Deployment**: Vercel (auto-deploy on push)
**Last Updated**: 2025-12-08

## TECH STACK

| Layer | Technology |
|-------|------------|
| Framework | React 18 + Vite |
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
| Production | https://enter-konsult-website.vercel.app |
| Legacy | https://www.codetonight.co.za |
| Form Backend | https://formspree.io/f/mrbnkdjd |
| Repository | https://github.com/LaurieScheepers/enter-konsult-website |

## ARCHITECTURE

```
src/
  App.jsx           # Single-file React app (pages, components, data)
  index.css         # Tailwind imports + custom animations
  main.jsx          # React entry point
public/
  images/           # Static assets
  *.svg, *.ico      # Favicon set
```

**Design Decision**: Single-file architecture for simplicity. All pages (Landing, Showcase, About) and components in one file. No routing library - state-driven navigation.

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

1. **No routing library** - State-based navigation only
2. **Single App.jsx** - All code in one file
3. **No comments in code** - Self-documenting patterns
4. **British English** - Spellings and conventions
5. **Swiss Nihilism** - Every element must have visual purpose and tension

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
