# Deployment (GitHub Pages)

This repo deploys to GitHub Pages via GitHub Actions.

## Configure Pages

1. Go to **Repository Settings → Pages**
2. Under **Build and deployment**, choose **Source: GitHub Actions**
3. Push to `main`

The workflow in `.github/workflows/deploy-pages.yml` will publish the site.

## Result

Your site will be available at:

- [asafr-dev.github.io](https://asafr-dev.github.io)
