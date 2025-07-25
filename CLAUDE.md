# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 15** static site that serves as a directory/navigation platform for remote work and Web3 recruitment websites. The project is built with TypeScript, Tailwind CSS, and shadcn/ui components, with content primarily in Chinese targeting Chinese-speaking users looking for remote/Web3 jobs.

## Tech Stack

- **Framework**: Next.js 15 with App Router (RSC enabled)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS variables
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Build**: Static export (`output: 'export'`)
- **Deployment**: GitHub Pages via `gh-pages` package

## Key Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run deploy       # Build and deploy to GitHub Pages
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage with job site listings
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles with Tailwind
│   ├── categories/        # Category pages
│   └── sites/            # All sites listing page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── site-card.tsx     # Reusable card component for job sites
│   └── theme-provider.tsx # Theme provider (unused)
├── lib/                  # Utilities
│   └── utils.ts          # Helper functions (cn, etc.)
├── public/              # Static assets
│   └── images/          # Logo and images
└── components.json      # shadcn/ui configuration
```

## Architecture Details

### Data Structure
- Job sites are defined as static data in `/app/page.tsx` and `/app/sites/page.tsx`
- Each site includes: name, logo, language, description, URL, and color scheme
- Sites are organized in a responsive grid layout (1-3 columns based on screen size)

### Routing
- `/` - Homepage with all job sites
- `/categories` - Category navigation page
- `/sites` - All sites with reusable card component
- Static export generates HTML files for GitHub Pages deployment

### Styling System
- Tailwind CSS with custom color variables defined in `tailwind.config.ts`
- Color scheme uses CSS variables for theming (background, foreground, primary, etc.)
- Responsive design with mobile-first approach
- Hover effects and transitions for interactive elements

### Deployment Configuration
- Static export enabled in `next.config.mjs`
- ESLint and TypeScript errors ignored during build (for deployment flexibility)
- Images are unoptimized for static export
- GitHub Pages deployment via `npm run deploy` command

## Development Notes

- The site is content-focused with static data - no API calls or dynamic content
- All job site data is hardcoded in Chinese with some English descriptions
- Uses placeholder images and logos from `/public/placeholder.svg`
- Built for Chinese-speaking Web3/remote job seekers
- Clean, card-based UI with external links to job platforms

## Key Components

- **SiteCard**: Reusable component for displaying job site information
- **Responsive Grid**: Uses Tailwind's grid system for responsive layouts
- **External Links**: All job site links open in new tabs with proper security attributes
- **SEO**: Basic metadata in Chinese for search engines

## Environment Setup

The project requires Node.js and npm. Install dependencies with:

```bash
npm install
# or
pnpm install
```

The project is configured for static hosting and doesn't require any environment variables or backend services.