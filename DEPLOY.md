# Deploy the Project Apex clip demo to GitHub Pages

This folder is a self-contained static site: two clip pages (`normal.html`, `fast.html`),
a landing page (`index.html`), and the six MP4 clips in `assets/`.
Each MP4 is well under GitHub's 100 MB per-file limit, so **plain Git is enough (no Git LFS).**

## 1. Publish (you run these)

```bash
cd ~/Documents/GitHub/projectapex-demo
git init
git add .
git commit -m "Project Apex training-clip demo site"

# Create the repo under your personal account and push.
# Change "projectapex-demo" if you want a different repo name (see step 3).
gh repo create projectapex-demo --public --source=. --remote=origin --push
```

## 2. Enable GitHub Pages (serve from main branch root)

```bash
gh api -X POST repos/karrar3ziz/projectapex-demo/pages \
  -f source.branch=main -f source.path=/
```

(Or via the web UI: repo **Settings -> Pages -> Build and deployment -> Branch: `main` / `/ (root)`**.)

Give it ~1 minute, then your site is live at:

```
https://karrar3ziz.github.io/projectapex-demo/
```

Open it, click through to **Normal Speed** / **Fast Speed**, and confirm the three clips
autoplay and loop. On a phone, scan the QR code from the slide to test the mobile layout.

## 3. If you choose a different account or repo name

The live URL becomes `https://<account>.github.io/<repo-name>/`.
The presentation references this URL in exactly **one place**:

- File: `01-Reinforcement/Presentations/ProjectApexPresentation/slides/Training.tex`
- Look for the line: `\newcommand{\DemoURL}{https://karrar3ziz.github.io/projectapex-demo/}`

Update that URL, then recompile the deck (`pdflatex ProjectApexPresentation.tex`) so the
clickable buttons **and** the QR code both point to the new address.

## Notes
- `.nojekyll` is included so GitHub Pages serves the `assets/` folder as-is.
- The clips are muted + looping (browsers require muted for autoplay).
- "Restart all" on each page re-syncs the three clips to the same start point.
