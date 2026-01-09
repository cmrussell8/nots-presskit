# Night on the Sun — Press Kit Development Spec

## Project Overview

An interactive web-based press kit that functions like an InDesign presentation. Built to be viewed online and exported as PDF.

**Prototype file:** `press-kit-v12.html` (source of truth for all visual specs)

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Slide Engine:** Reveal.js
- **Deployment:** Vercel

---

## Design Tokens

### Fonts

| Name | Font Family | Usage |
|------|-------------|-------|
| `font-old-world` | Cormorant Garamond | Titles, body text, pull quotes |
| `font-modern` | Inter | Labels, captions, UI elements |

**Google Fonts import:**
```
Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400
Inter:wght@200;300;400;500
```

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `page-bg` | `#252422` | Outer page background |
| `slide-bg` | `#1a1918` | Slide background |
| `text-primary` | `#e8e6e1` | Titles |
| `text-body` | `#c5c0b8` | Primary body text |
| `text-body-secondary` | `#a09a92` | Secondary paragraphs |
| `text-body-tertiary` | `#8a857e` | Tertiary/muted paragraphs |
| `text-muted` | `#5a5650` | Fine print |
| `accent-clay` | `#a08d7d` | Labels, dividers, UI accents |
| `burgundy` | `#8b4a4a` | "Inquiries" accent |
| `burgundy-light` | `#a06565` | Tagline accent |
| `divider` | `rgba(255,255,255,0.08)` | Thin lines |
| `corner-frame` | `rgba(160,141,125,0.15)` | Corner decorations |

---

## Slide Frame Specifications

### Dimensions
- **Aspect ratio:** 16:9
- **Base resolution:** 1920 × 1080
- **Responsive width:** `min(92vw, 164vh)`
- **Responsive height:** `min(51.75vw, 92vh)`
- **Border radius:** 2px

### Shadow
```css
box-shadow: 0 8px 60px rgba(0, 0, 0, 0.4);
```

### Grain Texture Overlay
Applied via `::before` pseudo-element:
- **Opacity:** 1.2% (`opacity: 0.012`)
- **SVG noise filter** (see prototype for exact implementation)
- **z-index:** 100
- **pointer-events:** none

### Corner Frame Decorations
L-shaped marks in all four corners:
- **Size:** 20px × 20px
- **Inset:** 20px from edges
- **Color:** `rgba(160, 141, 125, 0.15)`
- **Stroke:** 1px

---

## Typography Scale

| Element | Classes |
|---------|---------|
| Page title | `font-old-world text-[4vw] leading-[0.95] text-[#e8e6e1] tracking-[-0.01em]` |
| Section title | `font-old-world text-[3.5vw] leading-[1] text-[#e8e6e1] tracking-[-0.01em]` |
| Tagline | `font-modern text-[9px] tracking-[0.3em] uppercase text-burgundy-light` |
| Location/date | `font-modern text-[9px] tracking-[0.2em] uppercase text-[#a08d7d]/70` |
| Label (Press Release) | `font-modern text-[8px] tracking-[0.35em] uppercase text-[#a08d7d]/70` |
| Body primary | `font-old-world text-[1.3vw] leading-[1.5] text-[#c5c0b8]` |
| Body secondary | `font-old-world text-[1.1vw] leading-[1.6] text-[#a09a92]` |
| Body tertiary | `font-old-world text-[1.05vw] leading-[1.6] text-[#8a857e]` |
| Pull quote | `font-old-world text-[1.2vw] leading-[1.55] text-[#9a958d] italic` |
| Fine print | `font-modern text-[8px] leading-[1.9] tracking-[0.06em] uppercase text-[#5a5650]` |
| Image caption | `font-modern text-[9px] tracking-[0.2em] text-white/40 uppercase` |

---

## Layout Patterns

### Slide 1: Image Left (55/45 split)
```
┌─────────────────────────────────────────────────────┐
│ ┌─                                             ─┐   │
│                                                     │
│   ┌──────────────┐  │  — PRESS RELEASE             │
│   │              │  │                               │
│   │    IMAGE     │  │  Night on the Sun            │
│   │    (55%)     │  │  A DESTINATION FOR...        │
│   │              │  │                               │
│   │              │  │  Body text...                 │
│   └──────────────┘  │                               │
│   CAPTION           │  Inquiries                    │
│                                                     │
│ └─                                             ─┘   │
└─────────────────────────────────────────────────────┘
```

### Slide 2: Image Right (42/58 split)
```
┌─────────────────────────────────────────────────────┐
│ ┌─                                             ─┐   │
│                                                     │
│   — PRESS RELEASE  │  ┌──────────────────────┐     │
│                    │  │                      │     │
│   The Story        │  │       IMAGE          │     │
│                    │  │       (58%)          │     │
│   Body text...     │  │                      │     │
│                    │  │                      │     │
│   Pull quote...    │  └──────────────────────┘     │
│                    │  CAPTION                       │
│                                                     │
│ └─                                             ─┘   │
└─────────────────────────────────────────────────────┘
```

### Spacing
- **Slide padding:** 4% all sides
- **Column gap:** 3% (with 1px divider)
- **Vertical divider:** `w-[1px] bg-white/[0.08]`

---

## UI Elements

### Download PDF Button
- **Position:** 56px above slide, right-aligned with slide edge
- **Style:** `bg-transparent border border-white/10 text-white/40 hover:text-white/70 hover:bg-white/5`
- **Text:** `font-modern text-[8px] tracking-[0.2em] uppercase`
- **Padding:** `px-5 py-2`
- **Action:** Trigger browser print dialog (Reveal.js `?print-pdf` method)

### Navigation Arrows
- **Position:** 56px below slide, aligned with slide edges
- **Size:** 32px × 32px
- **Stroke:** 2px
- **Color:** `#a08d7d` at 70% opacity, 100% on hover
- **Visibility:** Hide prev on first slide, hide next on last slide

### Page Count
- **Position:** Centered, 56px below slide
- **Format:** Roman numerals ("I of VI")
- **Style:** `font-old-world text-[11px] tracking-[0.2em] text-white/30`

---

## Image Specifications

### Shadow
```css
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
```

### Caption Positioning
- **Position:** Absolute, bottom-left of image
- **Offset:** 12px from bottom, 12px from left

### Current Assets (Cloudinary)

| Slide | Image | URL |
|-------|-------|-----|
| 1 | Main Room, Looking South | `https://res.cloudinary.com/dl3nvfmil/image/upload/v1767472315/MainRoom_IntoFront_mmhmxl.png` |
| 2 | The Jungle Room, Morning Light | `https://res.cloudinary.com/dl3nvfmil/image/upload/v1767476042/LookingTowards_Jungle_qmq8eu.png` |
| 3–6 | TBD | — |

---

## Reveal.js Configuration

```javascript
Reveal.initialize({
  width: 1920,
  height: 1080,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 2.0,
  controls: false,      // Using custom navigation
  progress: false,
  center: true,
  hash: true,
  transition: 'fade',
  backgroundTransition: 'fade'
});
```

---

## Slide Content

### Slide 1: Introduction

**Label:** Press Release  
**Title:** Night on the Sun  
**Tagline:** A Destination for the Curious  
**Location:** Cairo, New York — Est. Spring 2026  

**Body:**
> Night on the Sun is a new retail and gallery destination. Uniting the vitality of a garden store, the intention of a gallery, and the wonder of a museum, it offers a carefully curated collection of objects for interiors, gardens, and the spaces in between.

**Pull quote:**
> *Rooted in craft, curiosity, and discovery, it is a place where objects are not simply bought, but found.*

**Fine print:**
> Founded by the team behind Hort & Pott, Night on the Sun represents a natural evolution—an expansion of a deeply personal studio practice into a broader curatorial world.

**Contact:**  
*Inquiries*  
press@nightonthesun.com

---

### Slide 2: The Story

**Label:** Press Release  
**Title:** The Story  

**Body (paragraph 1):**
> Night on the Sun was born from a long-held desire to create a physical space devoted to discovery.

**Body (paragraph 2):**
> After years of working through Hort & Pott—building a studio practice grounded in seasonality, material exploration, and handmade process—founders Todd Carr and Carter Harrington found themselves drawn toward something larger: a place that could hold not only their own work, but a wider constellation of objects, makers, and ideas.

**Body (paragraph 3):**
> As the vision expanded to include larger-scale works, collaborative pieces, and a more immersive retail experience, it became clear that this next chapter required its own identity. Night on the Sun was created to hold that expansion—adjacent in spirit to Hort & Pott, yet distinct in purpose.

**Pull quote:**
> *More than a storefront, Night on the Sun is an invitation to slow down, look closer, and engage with objects that carry presence, history, and intention.*

---

### Slides 3–6: TBD

Planned sections:
- The Founders (Todd Carr & Carter Harrington)
- The Space (gallery of interior shots)
- Categories (Botanica, Furniture, Relics, Artwork, Ornament)
- Contact / Press Assets

---

## Print / PDF Export

- Hide `.no-print` elements (navigation, download button)
- Use Reveal.js built-in print stylesheet
- Append `?print-pdf` to URL to trigger print layout
- Test in Chrome for best PDF output

---

## File Structure (Suggested)

```
/nots-presskit
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── PressKitDeck.tsx
│   ├── CornerFrames.tsx
│   ├── SlideNavigation.tsx
│   └── slides/
│       ├── Slide1Introduction.tsx
│       ├── Slide2Story.tsx
│       └── ...
├── public/
│   └── (local assets if needed)
├── tailwind.config.ts
└── package.json
```

---

## Reference Materials

- **Visual prototype:** `press-kit-v12.html`
- **Brand deck:** `NIGHT_ON_THE_SUN_DECK.pdf`
- **Reveal.js docs:** https://revealjs.com/

---

## Contact

Questions about design intent → [your email]  
Questions about content → [your email]
