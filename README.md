# T Jatin Raj — Portfolio Website

A modern, responsive, single-page developer portfolio for **T Jatin Raj — Full Stack Developer @ Cognizant**
(dark theme + teal/sky accent). Built with plain **HTML5, CSS3 and vanilla JavaScript** — no build step,
no dependencies. Sections: About · Skills · Experience · Projects · Achievements · Education · Contact.

## Files
- `index.html` — page structure and content
- `style.css` — all styling (design tokens at the top in `:root`)
- `script.js` — nav, scroll-spy, reveal animations, back-to-top
- `CNAME` — custom domain for GitHub Pages (`jatinrajwebsite.dev`)

## Run locally
Just open `index.html` in any browser. (Skill icons load from a CDN, so keep internet on.)

---

## ✅ Before you go live — 2 quick steps

### 1. Add your profile photo
Drop a **square** photo named **`profile.jpg`** into this folder.
It appears automatically in the About section. Until then a styled "JR" monogram shows instead.

### 2. Enable the contact form (optional but recommended)
The form uses [Formspree](https://formspree.io) (free, no backend):
1. Sign up at formspree.io and create a form → you get an ID like `xyzabcd`.
2. In `index.html`, find `action="https://formspree.io/f/YOUR_FORM_ID"` and replace
   `YOUR_FORM_ID` with your real ID.

If you skip this, the email and phone links still work fine.

---

## 🚀 Deploy to GitHub Pages

1. **Push these files to a GitHub repo** (e.g. `jatinraj2407.github.io` or any repo name):
   ```bash
   git init
   git add .
   git commit -m "Modern portfolio redesign"
   git branch -M main
   git remote add origin https://github.com/jatinraj2407/<your-repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/ (root)**, then **Save**.
5. Wait ~1 minute. Your site is live at `https://jatinraj2407.github.io/<repo>/`.

### Custom domain (jatinrajwebsite.dev)
The `CNAME` file is already set. To use the domain:
- In **Settings → Pages → Custom domain**, confirm `jatinrajwebsite.dev`.
- At your domain registrar, add DNS records pointing to GitHub Pages:
  - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - or a `CNAME` record for `www` → `jatinraj2407.github.io`
- Enable **Enforce HTTPS** once the domain verifies.

> If you don't own `jatinrajwebsite.dev` yet, just delete the `CNAME` file and use the
> free `*.github.io` URL.

---

## Customize
- **Colors:** edit the variables in `:root` at the top of `style.css` (`--accent`, `--bg`, …).
- **Content:** all text lives in `index.html` under clearly-labelled `<section>` blocks.
- **Resume:** the "Download Résumé" button points to your Google Drive PDF — update the link in the About section if it changes.
