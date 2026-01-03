# Digital Marketing Agency Website

A modern, professional, conversion-focused website for a Digital Marketing Agency specializing in SEO, Google Ads, Social Media Marketing, Content Creation, and Analytics.

## Features

### Pages
- **Homepage** - Hero section, client logos, testimonials, services overview, and statistics
- **Services** - Detailed service descriptions with benefits and comparison table
- **About Us** - Company mission, story timeline, team profiles, and achievements
- **Case Studies** - Filterable portfolio with real client results and metrics
- **Blog** - Article listing with search, filtering, and pagination
- **Contact** - Lead capture form with validation, contact info, and Google Maps

### Key Features
- 🎨 Clean, minimal, responsive design
- 📱 Mobile-first approach with hamburger menu
- 🎯 Conversion-focused CTAs throughout
- ✨ Smooth scrolling and transitions
- 🔍 SEO-optimized with meta tags and JSON-LD structured data
- 📊 Google Analytics ready
- 🗺️ Google Maps integration
- 📧 Newsletter subscription
- ✅ Form validation with React Hook Form + Zod
- 🚀 Performance optimized
- ♿ Accessible design (WCAG 2.1 AA)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Poppins, Open Sans)

## Color Palette

- Primary Blue: `#0066CC`
- White: `#FFFFFF`
- Gray Background: `#F5F5F5`
- Accent Orange: `#FF6B35`
- Dark Text: `#1a1a1a`
- Light Text: `#666666`

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
/app
  /about - About Us page
  /blog - Blog listing page
  /case-studies - Case Studies page
  /contact - Contact page with form
  /services - Services page
  /api/contact - Contact form API endpoint
  layout.tsx - Root layout with fonts and metadata
  page.tsx - Homepage
  globals.css - Global styles and Tailwind config

/components
  Header.tsx - Navigation header
  Footer.tsx - Site footer with newsletter
  Button.tsx - Reusable button component
  StructuredData.tsx - SEO structured data

/data
  services.ts - Services data
  testimonials.ts - Client testimonials and logos
  caseStudies.ts - Case study data
  blog.ts - Blog posts data
  team.ts - Team member profiles
```

## CRM Integration

The contact form is ready for CRM integration. The `/api/contact` endpoint logs form submissions and can be easily connected to:

- HubSpot
- Zapier
- Salesforce
- Mailchimp
- Or any webhook-based CRM

To integrate:
1. Add your CRM webhook URL to environment variables
2. Update `/app/api/contact/route.ts` to send data to your CRM
3. Handle responses and errors appropriately

Example for Zapier:

```typescript
// In /app/api/contact/route.ts
const response = await fetch(process.env.ZAPIER_WEBHOOK_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(contactData),
});
```

## Google Maps Integration

The contact page includes a Google Maps embed. To use your own location:

1. Get your location's embed URL from Google Maps
2. Update the iframe src in `/app/contact/page.tsx`

## SEO Features

- Meta tags optimized for search engines
- Open Graph tags for social media sharing
- JSON-LD structured data for Organization and Services
- Semantic HTML structure
- Optimized page titles and descriptions
- Fast loading times with Next.js optimization

## Analytics Integration

To add Google Analytics:

1. Create a Google Analytics account
2. Add your tracking ID to environment variables
3. Install `@next/third-parties` package
4. Add the GoogleAnalytics component to layout.tsx

```bash
npm install @next/third-parties
```

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

## Environment Variables

Create a `.env.local` file:

```env
# Google Maps API (if using Maps API instead of embed)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# CRM Integration (optional)
ZAPIER_WEBHOOK_URL=your_webhook_url
HUBSPOT_API_KEY=your_api_key
```

## Performance Optimization

- Next.js automatic code splitting
- Image optimization with Next.js Image component (ready to implement)
- Font optimization with `next/font`
- CSS purging with Tailwind CSS
- Static page generation where possible

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Heroku

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this project for your own purposes.

## Support

For questions or issues, please contact info@dma.com or visit our website.
