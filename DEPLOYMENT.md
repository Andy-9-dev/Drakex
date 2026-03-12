# Deploying Drakex University to Vercel

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Drakex University"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

That's it! Your site will be live in minutes.

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd NerdFord-main
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **drakex-university** (or your choice)
   - In which directory is your code? **./**
   - Want to override settings? **N**

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Configuration

The project includes:
- ✅ `vercel.json` - Vercel configuration with SPA routing
- ✅ `.vercelignore` - Files to exclude from deployment
- ✅ Vite build configuration
- ✅ React Router setup with proper routing

## Build Settings (Auto-detected)

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Development Command:** `npm run dev`

## Environment Variables

If you need environment variables:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables (e.g., API keys)

## Custom Domain

To add a custom domain:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add your domain and follow DNS instructions

## Automatic Deployments

Once connected to GitHub:
- **Every push to `main`** triggers a production deployment
- **Pull requests** get preview deployments
- **Branches** get their own preview URLs

## Troubleshooting

### Routes not working (404 errors)
The `vercel.json` file includes rewrites to handle React Router. All routes redirect to `index.html`.

### Build fails
Make sure all dependencies are in `package.json`:
```bash
npm install
npm run build
```

### Images not loading
Ensure images are in the `public` folder or properly imported in components.

## Performance Tips

Your site is already optimized with:
- ✅ Vite for fast builds
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Optimized images
- ✅ Tailwind CSS purging

## Monitoring

After deployment, monitor your site:
- **Analytics:** Vercel Analytics (enable in dashboard)
- **Speed Insights:** Vercel Speed Insights
- **Logs:** Real-time function logs in dashboard

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router on Vercel](https://vercel.com/guides/deploying-react-with-vercel)

---

Your Drakex University website is now ready for deployment! 🚀
