# Al Mazeen Gutter LTD — Website

A static, no-build website for Al Mazeen Gutter LTD (gutter, siding, roofing, and soffit &
fascia services in Halifax, Nova Scotia), built to be hosted on GitHub Pages.

## Structure

```
index.html          Main one-page site (hero, services, homeowners, partnerships, about, service area, contact)
404.html             Custom not-found page
css/style.css        All styling
js/main.js           Mobile nav toggle, scroll reveal, footer year
resources/           Logo, favicon, and image assets
  logo.svg           Finished logo mark (charcoal/copper)
  favicon.svg         Browser tab icon
  images/             Placeholder photos — see images/README.md for what to replace
sitemap.xml           For search engines
robots.txt             For search engines
```

## Before you go live — checklist

1. **Domain**: search-and-replace `https://www.your-domain-here.com` with your real domain
   across `index.html`, `sitemap.xml`, and `robots.txt`.
2. **Custom domain on GitHub Pages** (optional): if using a custom domain, add a `CNAME`
   file at the repo root containing just the domain (e.g. `almazeengutter.ca`), then
   configure DNS per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. **Images**: replace the placeholder SVGs in `resources/images/` with real photos (see
   `resources/images/README.md`), and add a real `og-image.jpg` (1200x630) for social
   share previews.
4. **Address**: no exact street address was included in the site's structured data
   (`index.html`, the `<script type="application/ld+json">` block) — add one if you want
   it, for stronger local SEO / Google Business Profile alignment.
5. **Contact section**: the site has no submission form — the Contact section is just
   tap-to-call / tap-to-email tiles, since GitHub Pages can't run server code. If you'd
   rather collect submissions directly, a free service like [Formspree](https://formspree.io)
   or [Getform](https://getform.io) can add a working form back in later.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set Source to **Deploy from a branch**, pick the branch
   (e.g. `main`) and root folder `/`.
4. Save — GitHub will publish the site at `https://<username>.github.io/<repo-name>/`
   (or your custom domain, once configured).

## Local preview

No build step is required. Just open `index.html` in a browser, or serve the folder with
any static server, e.g.:

```
npx serve .
```
