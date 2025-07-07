# Deploying to Cloudflare Pages

This Next.js application is configured for static export and deployment to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Go to Cloudflare Dashboard**

   - Log in to your Cloudflare account
   - Navigate to "Pages" in the sidebar

2. **Create a new project**

   - Click "Create a project"
   - Choose "Connect to Git"
   - Select your repository

3. **Configure build settings**

   - **Project name**: `tryston-net` (or your preferred name)
   - **Production branch**: `main` (or your default branch)
   - **Framework preset**: `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave empty if your project is in the root)

4. **Environment variables** (if needed)

   - Add any environment variables your app requires

5. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler CLI**

   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**

   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   wrangler pages deploy out
   ```

## Build Configuration

The project is configured with:

- `output: 'export'` in `next.config.ts` for static generation
- `trailingSlash: true` for Cloudflare Pages compatibility
- `images.unoptimized: true` for static export compatibility

## Custom Domain

After deployment:

1. Go to your Pages project settings
2. Navigate to "Custom domains"
3. Add your domain (e.g., `tryston.net`)
4. Update your DNS settings as instructed

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## Troubleshooting

- **Build fails**: Check that all dependencies are installed and the build command works locally
- **404 errors**: Ensure your `next.config.ts` has `trailingSlash: true`
- **PDF not loading**: The PDF is served directly from the `public` folder, no API routes needed
