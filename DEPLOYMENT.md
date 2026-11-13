# Deploying Chandni Chowk Cheese Café to Vercel (Free Hobby Plan)

This project has been built and optimized for instant, zero-configuration deployment to Vercel.

---

## Method 1: Deploy via GitHub (Recommended - Automatic Free Updates)

1. **Sign in to GitHub**:
   - Go to [github.com](https://github.com) and create a new repository (e.g., `chandni-chowk-cheese-cafe`).
2. **Upload Project Files**:
   - Upload the files from this folder (`C:\Users\Dell\Documents\gravity`) to your GitHub repository.
3. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Select **"Import"** next to your GitHub repository `chandni-chowk-cheese-cafe`.
4. **Deploy**:
   - Vercel automatically detects `vercel.json` and configures:
     - **Build Command**: `node build.js`
     - **Output Directory**: `dist`
   - Click **"Deploy"**.
   - Within ~30 seconds, Vercel gives you a live global URL (e.g. `https://chandni-chowk-cheese-cafe.vercel.app`) that you can share with clients!

---

## Method 2: Deploy via Vercel CLI (Direct from Terminal)

If you have Node.js and Vercel CLI installed:

```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Deploy directly from the project directory
vercel

# 3. For instant production deployment
vercel --prod
```

Follow the prompts, log in via your browser, and your site goes live immediately.

---

## Method 3: Drag & Drop (Fastest 1-Minute No-Code Deploy)

1. Open [vercel.com/new](https://vercel.com/new).
2. If you don't want to use Git, you can install the Vercel CLI or deploy the pre-built `dist` folder:
   - Run `npx vercel deploy dist --prod`
3. Your site is live instantly on Vercel's global CDN!

---

## Production Verification Checklist

- [x] Pre-rendered `dist/` directory with `index.html` & `404.html` SPA routing.
- [x] Embedded inline menu data (`window.__MENU_DATA__`) for zero-latency first paint.
- [x] Dual asset mapping (`/images/...` and `/public/images/...`) preventing broken links.
- [x] 100% authentic 4-circle logo artwork (`logo-ccc.png`).
- [x] High-resolution Apple iOS emojis loaded locally without external dependencies.
- [x] Fully responsive 3D coverflow carousel, reviews, and FAQ accordions.
