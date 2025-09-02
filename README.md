# KlipAI Landing Page

A modern, responsive landing page for KlipAI - an AI-powered decentralized wallet built with Next.js 15 and TypeScript.

## Setup & Installation

```bash
# Clone repository
git clone <https://github.com/asfarwaheed01/klipai.git>
cd klipai-landing

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Icon library

## Design Implementation

### Figma to Code Decisions

- **Navigation**: Implemented floating navbar with rounded corners and backdrop blur
- **Hero Section**: Created layered iPhone mockup with absolute positioned floating cards
- **Green Glow Effects**: Used multiple gradient layers with blur effects for authentic lighting
- **Grid Layout**: Benefits section uses CSS Grid with responsive breakpoints
- **Partner Carousel**: Horizontal sliding animation with seamless infinite loop

### Responsive Breakpoints

- **Mobile**: `< 768px` - Single column layout, stacked elements
- **Tablet**: `768px - 1024px` - Two-column grid, adjusted spacing
- **Desktop**: `> 1024px` - Full multi-column layouts, larger typography

### Design Assumptions

- **Container Width**: Used standard container class with max-width constraints
- **Color Values**: Interpreted green shades from Figma (#12ED39, #FF8933, #D2EAE4, #F4F2F0)
- **Typography**: Used system fonts with bold weights for headings
- **Spacing**: Applied consistent 16px/24px padding systems
- **Shadow Effects**: Enhanced with multiple blur layers for depth

## AI Development Process

Built collaboratively with Claude AI assistance for:

- Component structure and TypeScript interfaces
- Tailwind CSS responsive utilities
- Framer Motion animation implementations
- Image optimization and Next.js best practices
- Cross-browser compatibility solutions

## Known Limitations

- **Animation Performance**: Complex animations may impact performance on older devices
- **Image Dependencies**: Requires all SVG/PNG assets to be properly imported
- **Browser Support**: Modern browsers only (ES2020+ features used)
- **Static Content**: No CMS integration, content is hardcoded
