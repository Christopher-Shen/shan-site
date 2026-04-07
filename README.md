# shan-site

Small static site for `shan.longvol.com`.

## How it works

This repo is intentionally plain HTML and CSS so it can be hosted directly from
GitHub Pages without a build step.

## Update workflow

1. Edit `index.html` or `styles.css`.
2. Commit and push to `main`.
3. GitHub Pages serves the latest version from the default branch.

## GitHub Pages setup

In the repository settings:

1. Open `Settings` -> `Pages`.
2. Under `Build and deployment`, choose `Deploy from a branch`.
3. Select branch `main` and folder `/ (root)`.
4. Set the custom domain to `shan.longvol.com`.
5. After DNS propagates, enable HTTPS.
