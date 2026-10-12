# Ritu Jangid: Product Management Portfolio

A minimal, premium portfolio built with React, Vite, Tailwind CSS and Framer Motion. The hero uses CSS 3D transforms with mouse parallax (no Three.js, to keep the bundle small). All animation respects `prefers-reduced-motion`.

## 1. Requirements
- Node.js 18 or newer (check with `node -v`)
- npm 9 or newer

## 2. Install
```bash
cd ritu-portfolio
npm install
```

## 3. Run locally
```bash
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## 4. Build and preview
```bash
npm run build     # outputs to /dist
npm run preview   # serves the production build locally
```

## 5. Deploy on Vercel
**Option A: dashboard (easiest)**
1. Push this folder to a GitHub repository.
2. Go to vercel.com, choose **Add New > Project**, and import the repository.
3. Vercel detects Vite. Keep the defaults (build `npm run build`, output `dist`) and click **Deploy**.

**Option B: CLI**
```bash
npm i -g vercel
vercel          # follow the prompts
vercel --prod   # production deploy
```

## 6. Things to update before going live
Open `src/data/content.js`:
- `profile.linkedin` and `profile.github`: add your URLs. Empty values hide the link.
- `caseStudies[].link`: add the URL of each full case study. Until then, the cards show a clearly marked placeholder line.

After deploying, update `og:image` in `index.html` to an absolute URL (for example `https://your-domain.com/images/ritu.png`) so link previews show your photo.

## 7. Replace the resume or photo
- Resume: overwrite `public/resume/Ritu_Jangid_Resume.pdf` (keep the file name).
- Photo: overwrite `public/images/ritu.png` and `public/images/ritu.webp`.

## Folder structure
```
index.html            SEO meta, fonts, JSON-LD
vercel.json           Vercel build and cache headers
public/               resume PDF, images, favicon, robots.txt
src/
  main.jsx, App.jsx, index.css
  data/content.js     all text, links and lists (edit here)
  components/         Nav, Hero, HeroScene, About, CaseStudies, TiltCard,
                      Experience, Skills, Contact, Reveal
```

## Content source
All work history, skills, education and case study metrics come from `APM_Ritu_Final.pdf`. The case study metrics are the success metrics proposed in the resume and are labelled "proposed" on the site.
