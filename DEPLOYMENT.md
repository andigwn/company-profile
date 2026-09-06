# Deployment Guide

## Staging Environment

### Vercel

1. **Connect Repository**
   ```bash
   # Push to GitHub
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build:staging`
     - Output Directory: .next

3. **Environment Variables**
   Add in Vercel dashboard:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-project-staging.vercel.app
   NEXT_PUBLIC_ENV=staging
   STAGING_API_KEY=your-staging-api-key
   ```

4. **Deploy**
   - Click "Deploy"
   - Your staging site will be live at `https://your-project-staging.vercel.app`

### Netlify

1. **Build Settings**
   - Build command: `npm run build:staging`
   - Publish directory: `.next`

2. **Environment Variables**
   ```
   NEXT_PUBLIC_SITE_URL=https://your-project-staging.netlify.app
   NEXT_PUBLIC_ENV=staging
   STAGING_API_KEY=your-staging-api-key
   ```

### AWS / DigitalOcean / VPS

1. **Build**
   ```bash
   npm run build:staging
   ```

2. **Deploy**
   ```bash
   # Upload .next, public, package.json, node_modules
   npm run start:staging
   ```

3. **Process Manager (PM2)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "company-profile-staging" -- run start:staging
   pm2 save
   pm2 startup
   ```

## Production Environment

### Vercel

1. **Create Production Project**
   - Import repository again or use same project
   - Create new environment for production

2. **Environment Variables**
   ```
   NEXT_PUBLIC_SITE_URL=https://www.companyprofile.com
   NEXT_PUBLIC_ENV=production
   PRODUCTION_API_KEY=your-production-api-key
   ```

3. **Custom Domain**
   - Add your domain in Vercel dashboard
   - Update DNS records:
     ```
     A Record: @ → 76.76.21.21
     CNAME: www → cname.vercel-dns.com
     ```

4. **Deploy**
   - Push to `main` branch for auto-deploy
   - Or manually trigger deployment

### Docker Deployment

1. **Create Dockerfile**
   ```dockerfile
   FROM node:20-alpine AS base
   
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   
   COPY . .
   RUN npm run build:prod
   
   EXPOSE 3000
   CMD ["npm", "run", "start:prod"]
   ```

2. **Build & Run**
   ```bash
   docker build -t company-profile .
   docker run -p 3000:3000 --env-file .env.production company-profile
   ```

### CI/CD Pipeline (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches:
      - main
      - staging

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build (Staging)
        if: github.ref == 'refs/heads/staging'
        run: npm run build:staging
        env:
          NEXT_PUBLIC_SITE_URL: ${{ secrets.STAGING_SITE_URL }}
          STAGING_API_KEY: ${{ secrets.STAGING_API_KEY }}
          
      - name: Build (Production)
        if: github.ref == 'refs/heads/main'
        run: npm run build:prod
        env:
          NEXT_PUBLIC_SITE_URL: ${{ secrets.PRODUCTION_SITE_URL }}
          PRODUCTION_API_KEY: ${{ secrets.PRODUCTION_API_KEY }}
          
      - name: Deploy to Vercel
        run: npx vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

## Environment Setup Checklist

### Staging
- [ ] Repository connected
- [ ] Environment variables set
- [ ] Build command configured
- [ ] Domain configured (optional)
- [ ] SSL certificate active
- [ ] Test deployment successful

### Production
- [ ] Production environment created
- [ ] Environment variables set
- [ ] Custom domain added
- [ ] DNS records updated
- [ ] SSL certificate active
- [ ] Monitoring setup
- [ ] Backup strategy in place
- [ ] Test deployment successful

## Post-Deployment

### Monitoring
- Setup error tracking (Sentry)
- Configure analytics (Google Analytics)
- Monitor performance (Vercel Analytics)

### Testing
- Run full QA on staging
- Test all forms and interactions
- Check mobile responsiveness
- Verify SEO meta tags
- Test dark mode

### Maintenance
- Regular dependency updates
- Security patches
- Performance optimization
- Content updates

## Rollback

### Vercel
- Go to Deployments
- Select previous deployment
- Click "Promote to Production"

### Manual
```bash
git revert HEAD
git push origin main
```

## Support

For deployment issues:
- Check build logs
- Verify environment variables
- Test locally with production build
- Contact support if needed
