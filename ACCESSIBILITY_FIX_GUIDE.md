# Accessibility Audit Fix Guide for enterkonsult.com

Current accessibility score: 86/100. Target: 100%.

## Issue 1: Buttons do not have an accessible name

**Severity**: High
**Location**: Line 665 in `src/App.jsx`

```jsx
// BEFORE
<button className="sm:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>

// AFTER
<button
  className="sm:hidden p-2"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
>
```

## Issue 2: Insufficient contrast ratio

### 2.1 Gray text (text-gray-500)

**Failing elements**:
- Line 92: `text-gray-500` on "REBRAND 2025"
- Line 147: `text-gray-500` on "PRIVATE AND PUBLIC."
- Line 64: NavLink inactive state

**Fix**: Replace `text-gray-500` with `text-gray-600` or `text-gray-700`

### 2.2 Orange text (text-orange-600)

**Failing elements**:
- Line 96: "ACCEPTING CLIENTS"
- Line 152: "LET'S BUILD"
- Line 170: "01", "02", "03" numbers

**Fix**: Replace `text-orange-600` with `text-orange-700` or custom `text-[#c2410c]`

### 2.3 Text on dark backgrounds

**Failing elements**:
- Lines 86-91: "BUSINESS STRATEGY", "TECH CONSULTANCY", "2023"
- Lines 109-111: "NOT JUST CODE."
- Line 699: "© 2025 ENTER KONSULT"

**Fix**: Ensure text on dark backgrounds uses `text-white` or sufficient contrast

## Issue 3: Heading hierarchy

**Problem**: `<h3>` used at line 171 without proper `<h1>` → `<h2>` → `<h3>` flow

**Fix**: Change value prop headings from `<h3>` to `<h2>` or ensure proper hierarchy:

```jsx
// Line 171 - change h3 to h2 for value props section
<h2 className="font-sans font-bold text-xl tracking-tight mb-2">{item.title}</h2>
```

## Quick Checklist

- [ ] Add `aria-label` to hamburger menu button (line 665)
- [ ] Replace `text-gray-500` with `text-gray-700` globally
- [ ] Replace `text-orange-600` with `text-orange-700` for better contrast
- [ ] Fix heading hierarchy (h3 → h2 where appropriate)
- [ ] Verify all text on dark backgrounds has sufficient contrast
- [ ] Add visible focus states to all interactive elements

## Focus States (Add to index.css)

```css
/* Visible focus states for accessibility */
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid #f97316;
  outline-offset: 2px;
}
```

## Testing After Fixes

1. Re-run PageSpeed Insights accessibility audit
2. Test with keyboard navigation (Tab through all elements)
3. Test with VoiceOver (Cmd+F5 on Mac)

## Command to Run

```bash
ut++ fix accessibility issues using this guide
```
