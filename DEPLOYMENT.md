# Deployment Guide for itsme.thepracticalapps.com

## 📋 Prerequisites
- GitHub repository created and pushed
- Domain `itsme.thepracticalapps.com` ready for CNAME configuration

## 🚀 Deployment Steps

### 1. DNS Configuration
Add this CNAME record to your DNS provider:
```
Type: CNAME
Name: itsme
Value: jzon-03.github.io
TTL: Auto or 3600
```

### 2. GitHub Repository Setup
1. Push this code to your GitHub repository
2. Go to repository **Settings** → **Pages**
3. Set **Source** to "GitHub Actions"
4. The workflow will automatically deploy on push to main/master

### 3. Manual Deployment (Alternative)
If you prefer manual deployment:

```bash
# Install Angular GitHub Pages deployer
npm install -g angular-cli-ghpages

# Build and deploy
ng build --prod
npx angular-cli-ghpages --dir=dist/about-me --cname=itsme.thepracticalapps.com
```

### 4. Verify Deployment
1. Check GitHub Actions tab for deployment status
2. Visit `https://itsme.thepracticalapps.com`
3. Verify HTTPS is working properly

## 🔧 Configuration Files Created

### `/src/CNAME`
Contains your custom domain for GitHub Pages

### `/.github/workflows/deploy.yml`
Automated deployment workflow that:
- Builds the Angular app
- Copies CNAME file
- Deploys to GitHub Pages

### `angular.json` (Updated)
Added CNAME to assets array for automatic inclusion in build

## 🎯 Next Steps

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment configuration"
   git push origin main
   ```

2. **Configure DNS**: Set up CNAME record with your domain provider

3. **Enable GitHub Pages**: Repository Settings → Pages → Source: GitHub Actions

4. **Wait for DNS**: Allow 24-48 hours for DNS propagation

## 🔍 Troubleshooting

### Common Issues:
- **404 Error**: Check base href in build command
- **DNS Issues**: Verify CNAME record is correct
- **Build Fails**: Check GitHub Actions logs
- **Assets Not Loading**: Ensure proper base href configuration

### GitHub Pages Settings:
- Source: GitHub Actions
- Custom domain: itsme.thepracticalapps.com
- Enforce HTTPS: Enabled (after DNS propagates)

## 📱 Performance Optimization

The deployment includes:
- Optimized production build
- Compressed assets
- CDN delivery via GitHub Pages
- HTTPS enforcement

Your portfolio will be live at **https://itsme.thepracticalapps.com** once DNS propagates!