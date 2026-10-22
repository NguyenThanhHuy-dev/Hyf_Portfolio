# Huy Portfolio

Static site. No build step. Files: `index.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/banners/*.svg`.

## Preview locally

```bash
cd ~/Documents/HuyPortfolio && python3 -m http.server 8000
```

Open http://localhost:8000.

## Deploy with GitHub Pages

Create a repo named `NguyenThanhHuy-dev.github.io` for the root URL (https://nguyenthanhhuy-dev.github.io), or any other repo name for a project URL.

```bash
cd ~/Documents/HuyPortfolio
git init -b main
git add .
git commit -m "Add portfolio site"
git remote add origin git@github.com:NguyenThanhHuy-dev/NguyenThanhHuy-dev.github.io.git
git push -u origin main
```

Then in the repo: Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.

## Edit content

- Text (EN and VI): dictionary `T` in `assets/js/main.js`.
- Project cards: array `REPOS` in the same file.
- Banners: see `PROMPTS.md`.
- Colors: CSS variables at the top of `assets/css/style.css`.
