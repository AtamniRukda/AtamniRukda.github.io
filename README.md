# Attiq ur Rehman (CmDarri) — Portfolio Website

A static, single-page portfolio built for Pond5 creator verification. Plain HTML, CSS, and JavaScript — no build step, no backend, no frameworks.

## What's in this project

```
/index.html              The whole site (hero, work, process, about, contact)
/style.css                All styling
/script.js                 Mobile nav, footer year, scroll reveal
/assets/photo/             Your portrait
/assets/video/              Exported .webm previews of your three animations
/assets/projects/           Poster/thumbnail images for the video players
/assets/interactive/        The original playable HTML builds (opened via
                            "Open the interactive build" links on each project)
```

Everything is self-contained. You can open `index.html` directly in a browser to preview it before publishing.

## How to publish it on GitHub Pages

### 1. Create a GitHub repository

1. Go to [github.com](https://github.com) and log in (create a free account if you don't have one).
2. Click the **+** icon in the top right, then **New repository**.
3. Name it something like `portfolio` or `cmdarri-portfolio`.
4. Set it to **Public** (GitHub Pages on the free tier requires a public repo, unless you have GitHub Pro/Team).
5. Leave "Add a README" unchecked (you already have one).
6. Click **Create repository**.

### 2. Upload the files

**Easiest way (no command line):**

1. On your new repository's page, click **uploading an existing file** (or **Add file → Upload files**).
2. Drag in `index.html`, `style.css`, `script.js`, `README.md`, and the entire `assets` folder (with all its subfolders and files intact).
3. Scroll down and click **Commit changes**.

**Alternative (using git):**

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
# copy index.html, style.css, script.js, README.md, and the assets/ folder in here
git add .
git commit -m "Add portfolio site"
git push
```

### 3. Enable GitHub Pages

1. In your repository, click **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, select **main** (or **master**) and folder **/ (root)**, then click **Save**.
5. Wait 1–2 minutes for GitHub to build and deploy the site.

### 4. Get your public website URL

Refresh the **Settings → Pages** screen — GitHub will show a banner like:

> Your site is live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

That URL is your public portfolio link. Use it for Pond5 creator verification.

## Notes

- The video files are `.webm` exports of the actual canvas animations, recorded directly from the tools that generated them — the interactive builds linked under each project are the original, playable source files, so anyone can verify the work runs live in a browser rather than being a static clip.
- All text on the site is factual and describes only the process and work shown. If you add new projects later, follow the same pattern: a video/poster pair in `assets/video` and `assets/projects`, and a new `<article class="project">` block in `index.html`.
- If your photo or contact email ever change, edit them directly in `index.html` (search for the `hero-portrait`, `about-portrait`, and `contact-email` sections).
