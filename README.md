# NEXAVON TECH — Single-Page Website

A modern, responsive single-page marketing website for **NEXAVON TECH PRIVATE LIMITED**, built from the company brand brief. Built with **React + Vite + Tailwind CSS v4**.

## Tech Stack

- **React 19** — UI library
- **Vite 6** — dev server & build tool
- **Tailwind CSS v4** — utility-first styling (via `@tailwindcss/vite`)
- **lucide-react** — icon set

## Getting Started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

## Project Structure

```text
.
├── index.html
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              # app entry
    ├── App.jsx               # page composition
    ├── index.css             # Tailwind import + theme tokens + animations
    ├── hooks/
    │   └── useReveal.js       # scroll-reveal animations
    └── components/
        ├── Logo.jsx           # stylized NEXAVON "N" logo
        ├── Navbar.jsx         # sticky nav + mobile menu + CTA
        ├── Hero.jsx           # tagline, headline, CTAs, feature highlights
        ├── Services.jsx       # 7 service cards (Apps, Websites, UI/UX, ...)
        ├── Stats.jsx          # animated achievement metrics
        ├── GlobalPresence.jsx # India · Global services + benefits
        ├── Trust.jsx          # recognition badges
        ├── Contact.jsx        # consultation form
        └── Footer.jsx         # footer links
```

## Brand Palette

| Token        | Color     | Usage                  |
| ------------ | --------- | ---------------------- |
| Royal Blue   | `#2563eb` | Primary actions, links |
| Deep Navy    | `#0b1f4d` | Headings, dark panels  |
| Orange       | `#f97316` | Accent / swoosh        |
| White / Gray | `#ffffff` | Backgrounds            |

## Notes

- The logo is a recreated SVG interpretation of the described brand mark (stylized "N", pixel/circuit dots, orange orbital swoosh). Swap in an official logo asset under `public/` if available.
- The contact form is front-end only (no backend). Wire it to an email/API endpoint to make it functional.
