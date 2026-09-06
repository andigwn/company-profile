# Company Profile - Next.js

A modern company profile website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern and responsive design
- 🎨 Green primary color theme
- 🎬 Smooth animations with Framer Motion
- 🌙 Dark mode support
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js 16
- 🎯 SEO optimized

## Project Structure

```
company-profile/
├── app/
│   ├── home/          # Home page
│   ├── about/         # About page
│   ├── services/      # Services page
│   ├── contact/       # Contact page
│   ├── components/    # Reusable components
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── layout.tsx     # Root layout
│   └── globals.css    # Global styles
├── config/
│   └── environments.ts # Environment configurations
├── scripts/
│   ├── build-staging.sh
│   └── build-prod.sh
└── public/            # Static assets
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

For staging:
```bash
npm run build:staging
```

For production:
```bash
npm run build:prod
```

### Start Production Server

For staging:
```bash
npm run start:staging
```

For production:
```bash
npm run start:prod
```

## Environment Variables

Copy `.env.example` to create your environment files:

- `.env.development` - Development environment
- `.env.staging` - Staging environment
- `.env.production` - Production environment

### Required Variables

```
NEXT_PUBLIC_SITE_URL=your-site-url
NEXT_PUBLIC_ENV=development|staging|production
STAGING_API_KEY=your-staging-api-key
PRODUCTION_API_KEY=your-production-api-key
```

## Pages

### Home (`/` or `/home`)
- Hero section with CTA buttons
- Features showcase
- Call to action section

### About (`/about`)
- Company overview
- Mission and values
- Team members
- Statistics

### Services (`/services`)
- Service offerings
- Detailed features
- Custom solution CTA

### Contact (`/contact`)
- Contact form
- Contact information
- Social media links

## Technologies

- **Framework:** Next.js 16.3.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Font:** Geist Sans & Geist Mono

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build:prod
npm run start:prod
```

## Customization

### Colors

Edit `app/globals.css` to change the primary color:

```css
:root {
  --primary: #22c55e;        /* Main green */
  --primary-dark: #16a34a;   /* Dark green */
  --primary-light: #86efac;  /* Light green */
}
```

### Content

Update content in respective page files:
- `app/home/page.tsx`
- `app/about/page.tsx`
- `app/services/page.tsx`
- `app/contact/page.tsx`

### Components

Reusable components are in `app/components/`:
- `navbar.tsx` - Navigation bar
- `footer.tsx` - Footer section

## License

MIT

## Support

For support, email info@companyprofile.com
