# Vercel Deployment Guide

This guide will help you deploy your company profile website to Vercel.

## Quick Start

### Prerequisites
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your code pushed to GitHub, GitLab, or Bitbucket

### Deployment Steps

#### Method 1: Vercel Dashboard (Easiest)

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Wait for Build**
   - Vercel will automatically:
     - Install dependencies
     - Run `npm run build`
     - Deploy to production
   - Your site will be live at `https://your-project.vercel.app`

#### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   For production:
   ```bash
   vercel --prod
   ```

## Post-Deployment Configuration

### 1. Update Site URL

After deployment, update your production URL:

**File: `lib/seo.ts`**
```typescript
export const siteConfig = {
  url: 'https://your-project.vercel.app', // Update this
  // ... rest of config
};
```

**File: `public/robots.txt`**
```
User-agent: *
Allow: /
Sitemap: https://your-project.vercel.app/sitemap.xml
```

### 2. Custom Domain (Optional)

1. Go to your project on Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Update `lib/seo.ts` with your custom domain

### 3. Environment Variables (if needed)

If you need environment variables:

1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

## Vercel Configuration

The project includes `vercel.json` which configures:

- **Service Worker Headers**: Proper caching and service worker permissions
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- **Manifest.json**: Correct content type for PWA
- **Cache Control**: Optimized caching for PWA files

## Build Settings

Vercel automatically detects:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `out` (from static export)
- **Install Command**: `npm install`

No manual configuration needed!

## PWA on Vercel

### Service Worker
- Automatically generated during build
- Served from `/sw.js`
- Headers configured in `vercel.json`

### HTTPS
- Automatically enabled on Vercel
- Required for PWA features
- Works out of the box

### Testing PWA
1. Deploy to Vercel
2. Open site on mobile device
3. Test "Add to Home Screen"
4. Test offline functionality

## Troubleshooting

### Build Fails

**Error: Module not found**
- Ensure all dependencies are in `package.json`
- Run `npm install` locally to verify

**Error: TypeScript errors**
- Fix TypeScript errors locally first
- Run `npm run build` locally to test

### Service Worker Not Working

**Check:**
1. Site is served over HTTPS (automatic on Vercel)
2. Service worker file exists at `/sw.js`
3. Headers are configured in `vercel.json`

### PWA Not Installable

**Check:**
1. `manifest.json` is accessible
2. Icons are in `public/icons/` directory
3. Manifest has correct icon paths
4. Site is served over HTTPS

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization (if using Next.js Image)
- ✅ Edge caching
- ✅ Automatic compression

## Monitoring

Vercel provides:
- Build logs
- Deployment history
- Analytics (if enabled)
- Performance metrics

## Continuous Deployment

Once connected to Git:
- Every push to `main` triggers production deployment
- Pull requests get preview deployments
- Automatic rollback on build failure

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
