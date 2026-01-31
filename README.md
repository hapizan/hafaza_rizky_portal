# Company Profile Website

A modern, professional static website for your business company profile built with Next.js, optimized for Vercel deployment, featuring:

- ✅ **SEO Optimized** - Comprehensive metadata, structured data, and sitemap
- ✅ **Mobile Responsive** - Fully responsive design with mobile-first approach
- ✅ **PWA Support** - Progressive Web App with offline capabilities
- ✅ **Modern Design** - Tech startup aesthetic with vibrant colors and animations
- ✅ **Fast Performance** - Optimized images, code splitting, and static generation

## Features

### Single-Page Application (SPA)
- All content consolidated into a single page with smooth anchor-based navigation
- Sections: Home (Hero), Services, About, Portfolio, Team, Testimonials, Contact
- Smooth scrolling navigation between sections
- Mobile-friendly navigation menu

### Pages/Sections
- **Home (Hero)** - Hero section with call-to-action buttons
- **Services** - Web Application, Mobile Application, and Training services
- **About** - Company mission, vision, values, and registration information
- **Portfolio** - Showcase of projects and case studies
- **Team** - Team member profiles with LinkedIn links
- **Testimonials** - Client reviews and feedback
- **Contact** - Contact form with mailto functionality and company information

### SEO Features
- Dynamic metadata for each page
- Open Graph and Twitter Card support
- JSON-LD structured data (Organization, WebSite, Service, Person, Review, BreadcrumbList)
- Auto-generated sitemap
- robots.txt configuration
- Semantic HTML5 elements
- Optimized images with alt text

### PWA Features
- Web App Manifest
- Service Worker with caching strategies
- Offline support
- Install prompt
- Update notifications
- Offline indicator

### Mobile Responsive
- Mobile-first design approach
- Touch-friendly interactions
- Responsive navigation menu
- Optimized for all screen sizes
- Viewport configuration

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Update company information in `lib/seo.ts`:
- Company name
- Description
- URL
- Social media links

3. Update `public/manifest.json` with your company details

4. Add your company logo and images to `public/images/`

5. Create PWA icons:
- `public/icons/icon-192x192.png`
- `public/icons/icon-512x512.png`
- `public/icons/apple-touch-icon.png` (180x180)

6. Run development server:
```bash
npm run dev
```

7. Build for production:
```bash
npm run build
```

The static files will be in the `out/` directory.

## Configuration

### SEO Configuration
Edit `lib/seo.ts` to update:
- Site name and description
- Default metadata
- Social media links
- Open Graph defaults

### PWA Configuration
Edit `public/manifest.json` to update:
- App name and description
- Theme colors
- Icons

### Styling
Edit `tailwind.config.js` to customize:
- Color palette
- Typography
- Breakpoints

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx        # Home page
│   └── [pages]/        # Other pages
├── components/         # React components
│   ├── SEO/           # SEO components
│   └── PWA/           # PWA components
├── lib/               # Utilities
│   ├── seo.ts         # SEO configuration
│   └── pwa.ts         # PWA utilities
└── public/            # Static assets
    ├── icons/         # PWA icons
    ├── images/        # Company images
    ├── manifest.json  # Web App Manifest
    └── robots.txt     # Robots file
```

## Customization

### Update Content
1. Replace placeholder content in `app/page.tsx` (single-page application)
2. Update team member information and LinkedIn links in `app/page.tsx` (teamMembers array)
3. Update services in `app/page.tsx` (services array)
4. Update portfolio items in `app/page.tsx` (portfolioItems array)
5. Update testimonials in `app/page.tsx` (testimonials array)
6. Update contact information in `app/page.tsx` (contactInfo array)
7. Update company email in contact form (currently: hafazarizky@gmail.com)

### Update Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: { ... },
  accent: { ... },
}
```

### Update Navigation
Edit `components/Header.tsx` to modify navigation links.

## Deployment

### Vercel Deployment (Recommended)

The project is optimized for Vercel deployment. Vercel automatically detects Next.js projects and handles static exports seamlessly.

#### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

#### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

#### Vercel Configuration

The project includes `vercel.json` with:
- Proper service worker headers
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- Manifest.json content type
- Cache control for PWA files

#### Environment Variables (if needed)

If you need environment variables:
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

### Other Static Hosting Services

The project is configured for static export. After building:
```bash
npm run build
```

Deploy the `out/` directory to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages
- Any static file server

### Important Notes for Vercel Deployment
- **HTTPS is automatically enabled on Vercel** - Required for PWA features
- Update `siteConfig.url` in `lib/seo.ts` with your Vercel production URL (e.g., `https://your-project.vercel.app`)
- Update `public/robots.txt` with your production URL (replace `https://yourdomain.com`)
- Service worker will be automatically generated during build on Vercel
- Test PWA installation on mobile devices after deployment
- Verify all structured data with Google Rich Results Test
- Vercel automatically handles static exports - no additional configuration needed

## SEO Checklist

Before going live:
- [ ] Update all page titles and descriptions
- [ ] Add real images with descriptive alt text
- [ ] Update company information in structured data
- [ ] Submit sitemap to Google Search Console
- [ ] Test mobile responsiveness
- [ ] Verify PWA installation
- [ ] Test offline functionality
- [ ] Run Lighthouse audit

## Recent Updates

### Latest Changes
- ✅ Converted to single-page application (SPA) with anchor-based navigation
- ✅ Updated team member LinkedIn profiles
- ✅ Fixed ESLint errors (unescaped entities)
- ✅ Improved CSS configuration for static exports
- ✅ Enhanced Vercel deployment configuration with proper CSS headers
- ✅ Contact form configured with mailto functionality
- ✅ Fixed structured data components for better SEO

### Company Information
- **Company Name**: Hafaza Rizky Trading
- **Registration Number**: 002898689-P
- **Contact Email**: hafazarizky@gmail.com
- **Services**: Web Application, Mobile Application, Training

### Team Members
- **Ts. Mohammad Izzat** - Head of Project Management
- **Noorfaiz Kadir** - Head of Solution Expertise  
- **Hapizan Seman** - Head of Technology

## License

This project is open source and available under the MIT License.
