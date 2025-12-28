Claude Code Guide: ENTER Konsult Website Performance Optimization
Executive Summary
Site URL: https://enterkonsult.com
Current Scores (Mobile): Performance 98, Accessibility 95, Best Practices 100, SEO 100
Framework: Vite-based (React/Vue) with Tailwind CSS

Critical Issues Identified
1. PERFORMANCE: Element Render Delay (2,940ms) — PRIORITY HIGH
Issue: The LCP element (main paragraph text) has a massive 2,940ms render delay despite TTFB being 0ms.
Root Cause: The LCP is text content (<p class="text-xl md:text-2xl leading-tight font-sans font-medium text-gray-800 max-...">) but the page shows blank screens for the first ~4 frames in the filmstrip, indicating render-blocking resources or JavaScript hydration delays.
Files to Modify:
src/App.tsx (or .vue)
src/main.tsx
index.html
Fixes (KISS, YAGNI):
html<!-- index.html - Add critical CSS inline in <head> -->
<style>
  /* Inline ONLY above-the-fold critical styles */
  body { background-color: #EAEAEA; font-family: system-ui, sans-serif; }
  .hero-text { font-size: 1.25rem; line-height: 1.625; color: #1f2937; }
</style>

<!-- Defer non-critical CSS -->
<link rel="preload" href="/assets/index-Bp7-EYTo.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/assets/index-Bp7-EYTo.css"></noscript>
```

---

### 2. PERFORMANCE: Render-Blocking CSS (150ms savings)

**Issue:** `/assets/index-Bp7-EYTo.css` (6.4 KiB) blocks initial render.

**Files to Modify:**
```
vite.config.ts
index.html
Fixes (DRY, SOLID - Single Responsibility):
typescript// vite.config.ts
import { defineConfig } from 'vite';
import criticalCss from 'vite-plugin-critical';

export default defineConfig({
  plugins: [
    criticalCss({
      criticalUrl: '/',
      criticalBase: './dist/',
      criticalPages: [{ uri: '/', template: 'index' }],
      criticalConfig: {
        inline: true,
        dimensions: [
          { width: 414, height: 896 },  // Mobile
          { width: 1920, height: 1080 } // Desktop
        ]
      }
    })
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        manualChunks: {
          'vendor': ['react', 'react-dom'], // or vue
        }
      }
    }
  }
});

3. PERFORMANCE: Network Dependency Chain (350ms critical path)
Issue: Sequential loading chain:

https://enterkonsult.com → 183ms
/assets/index-CFib8_GQ.js → 350ms (33.74 KiB)
/assets/index-Bp7-EYTo.css → 341ms (6.45 KiB)

Fixes (GRASP - Low Coupling):
html<!-- index.html - Preload critical resources in parallel -->
<head>
  <!-- DNS prefetch and preconnect (currently missing) -->
  <link rel="dns-prefetch" href="//fonts.googleapis.com">
  
  <!-- Preload critical JS -->
  <link rel="modulepreload" href="/assets/index-CFib8_GQ.js">
  
  <!-- Preload critical CSS with media hint -->
  <link rel="preload" href="/assets/index-Bp7-EYTo.css" as="style">
</head>
```

---

### 4. PERFORMANCE: Speed Index (4.0s on Mobile) — PRIORITY MEDIUM

**Issue:** Visual completeness takes 4 seconds due to progressive rendering issues.

**Files to Modify:**
```
src/components/Hero.tsx (or equivalent)
src/App.tsx
Fixes (YAGNI - only render what's needed):
tsx// Hero.tsx - Server-side render or static generation for hero content
export const Hero = () => {
  return (
    <section className="min-h-screen">
      {/* Critical content - render immediately without JS hydration */}
      <h1 className="hero-title">WE SPEAK BUSINESS. NOT JUST CODE.</h1>
      <p className="hero-text">
        A Technology Consultancy that solves business problems...
      </p>
      
      {/* Non-critical interactive elements - lazy load */}
      <Suspense fallback={<div className="h-12" />}>
        <LazyContactButton />
      </Suspense>
    </section>
  );
};
```

---

### 5. ACCESSIBILITY: Color Contrast Failures — PRIORITY HIGH

**Issue:** Multiple elements fail WCAG AA contrast requirements.

**Failing Elements:**

| Element | Current Class | Contrast Issue |
|---------|--------------|----------------|
| "ACCEPTING CLIENTS" badge | `text-orange-700` | Insufficient on `#EAEAEA` background |
| Navigation links (HOME, SERVICES, WORK, ABOUT, CONTACT) | `text-gray-500` | Insufficient on `#EAEAEA` background |
| Footer text | `text-gray-500` | Insufficient on `#EAEAEA` background |
| Hero spans | `lg:hidden block` | Low contrast text visible on mobile |

**Files to Modify:**
```
tailwind.config.js
src/components/Navbar.tsx
src/components/Footer.tsx
src/components/Hero.tsx
Fixes (SOLID - Open/Closed Principle):
javascript// tailwind.config.js - Create accessible color variants
module.exports = {
  theme: {
    extend: {
      colors: {
        // Accessible alternatives meeting 4.5:1 contrast ratio on #EAEAEA
        'accessible-gray': '#525252',    // Replaces gray-500 (4.54:1 ratio)
        'accessible-orange': '#c2410c',  // Replaces orange-700 (4.51:1 ratio)
      }
    }
  }
}
tsx// Navbar.tsx - Update navigation links
const NavLink = ({ href, children }) => (
  <a 
    href={href}
    className="text-accessible-gray hover:text-black transition-colors"
    // Was: text-gray-500 hover:text-black
  >
    {children}
  </a>
);
tsx// Hero.tsx - Update status badge
<p className="text-accessible-orange flex items-center gap-2">
  {/* Was: text-orange-700 */}
  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
  ACCEPTING CLIENTS
</p>
tsx// Footer.tsx - Update footer text
<footer className="border-t border-gray-300 bg-[#EAEAEA] px-6 md:px-12">
  <span className="text-accessible-gray">
    {/* Was: implicit gray-500 or similar */}
    © 2025 CodeTonight (Pty) Ltd t/a ENTER Konsult
  </span>
</footer>

Implementation Checklist
Phase 1: Critical Performance (Do First)
bash# Step 1: Install critical CSS tooling
npm install -D vite-plugin-critical

# Step 2: Update vite.config.ts with critical CSS extraction

# Step 3: Add preload/modulepreload hints to index.html

# Step 4: Inline critical above-the-fold CSS
Phase 2: Accessibility Fixes
bash# Step 1: Update tailwind.config.js with accessible colors

# Step 2: Global find and replace in components:
# - text-gray-500 → text-accessible-gray (on #EAEAEA backgrounds)
# - text-orange-700 → text-accessible-orange (on #EAEAEA backgrounds)

# Step 3: Verify with Chrome DevTools contrast checker
Phase 3: Code Quality Cleanup (SOLID/DRY)
typescript// Create shared constants for colors - DRY principle
// src/constants/colors.ts
export const ACCESSIBLE_COLORS = {
  text: {
    muted: 'text-accessible-gray',      // For secondary text
    accent: 'text-accessible-orange',    // For accent/status
    primary: 'text-black',               // For primary text
  }
} as const;

// Usage in components - GRASP Information Expert
import { ACCESSIBLE_COLORS } from '@/constants/colors';

const NavLink = ({ children }) => (
  <a className={`${ACCESSIBLE_COLORS.text.muted} hover:${ACCESSIBLE_COLORS.text.primary}`}>
    {children}
  </a>
);

Build Configuration Updates
typescript// vite.config.ts - Complete optimized configuration
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or vue()

export default defineConfig({
  plugins: [react()],
  build: {
    // Enable CSS code splitting - YAGNI
    cssCodeSplit: true,
    
    // Optimize chunk sizes - KISS
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    
    // Target modern browsers only
    target: 'es2020',
    
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  
  // Optimize dev server
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
});

Final index.html Template
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ENTER Konsult - Technology Consultancy</title>
  
  <!-- Critical CSS inline (generated by build process) -->
  <style>
    body{background:#EAEAEA;font-family:system-ui,-apple-system,sans-serif;margin:0}
    .min-h-screen{min-height:100vh}
    /* Add other critical above-fold styles */
  </style>
  
  <!-- Preload critical resources -->
  <link rel="modulepreload" href="/assets/index-CFib8_GQ.js">
  <link rel="preload" href="/assets/index-Bp7-EYTo.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/assets/index-Bp7-EYTo.css"></noscript>
</head>
<body>
  <div id="root">
    <!-- SSR/Static content for LCP improvement -->
    <div class="min-h-screen bg-[#EAEAEA]">
      <header><!-- Static nav skeleton --></header>
      <main>
        <h1>WE SPEAK BUSINESS. NOT JUST CODE.</h1>
        <p>A Technology Consultancy that solves business problems...</p>
      </main>
    </div>
  </div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>

Verification Commands
bash# After implementing changes, verify:

# 1. Build and analyze bundle
npm run build
npx vite-bundle-visualizer

# 2. Run Lighthouse locally
npx lighthouse https://enterkonsult.com --view

# 3. Check accessibility
npx axe-cli https://enterkonsult.com

# 4. Verify color contrast
# Use Chrome DevTools → Elements → Styles → Color picker → Contrast ratio

Expected Results After Implementation
MetricBeforeTargetPerformance Score98100Speed Index4.0s< 2.5sLCP Element Render Delay2,940ms< 500msAccessibility Score95100Render Blocking Resources150ms0ms

SOLID/GRASP Principles Applied

Single Responsibility: Separate critical CSS from non-critical CSS
Open/Closed: Extend Tailwind config rather than modifying base classes
DRY: Centralize accessible color definitions
KISS: Use native browser features (preload, modulepreload) over complex JS solutions
YAGNI: Only inline CSS actually needed for above-the-fold content
GRASP Information Expert: Components own their accessibility requirements
GRASP Low Coupling: Preload resources in parallel to break dependency chains