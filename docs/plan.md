# Foldara – Landing Page Plan

## About
Foldara is a fictional AI-powered protein structure prediction tool (similar to AlphaFold).
It predicts 3D arrangements of protein assemblies, protein-protein, and protein-ligand 
interactions from amino acid sequences. The tool is currently in development, learning 
from user inputs. Users must request access.

## Tech stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4

## Design
- Logo: /public/images/logo.png (PNG, use Next.js Image component)
- Style reference: yeldra.com, shattucklabs.com

## Fonts
- Headings (h1–h3): Space Grotesk — `import { Space_Grotesk } from 'next/font/google'`
- Body: Inter — `import { Inter } from 'next/font/google'`
- CSS variables: --font-heading, --font-body

## Colors
Defined in `src/app/globals.css`

## Task
Convert the attached HTML prototype into a Next.js landing page (single page, 
one component per section). Keep SVG illustrations as placeholders for now. 
No additional pages yet.

## Sections (from prototype)
1. Navbar – logo + navigation links
2. Hero – main headline, subheadline, "Request Access" CTA button
3. [to be continued in the next task]

## File structure
src/
  app/
    page.tsx                        – landing page (importuje všechny sekce)
    layout.tsx                      – metadata, fonts, global styles
    globals.css                     – theme, base styles, utilities
    research/
      page.tsx
    about/
      page.tsx
    contact/
      page.tsx
    request-access/
      page.tsx

  components/
    layout/
      navbar.tsx                    – navigace, logo
      footer.tsx

    sections/                       – sekce landing page (v pořadí)
      hero.tsx
      platform.tsx                  – scroll target přes id
      how-it-works.tsx              – scroll target přes id
      features.tsx
      cta.tsx                       – Request Access výzva

    ui/                            
      button.tsx
      card.tsx
      section-label.tsx             – ten malý uppercase label

public/
  images/
    logo.png

docs/
  plan.md
  prototype.html

## Out of scope for now
- Additional pages (Research, About, Contact)
- Real SVG illustrations

## Progress
- [x] Project scaffolding (Next.js 15, TypeScript, Tailwind v4)
- [x] globals.css – theme, base styles, utilities
- [x] layout.tsx – fonts, metadata
- [ ] ui/button.tsx
- [ ] components/layout/navbar.tsx
- [ ] sections/hero.tsx
- [ ] ...