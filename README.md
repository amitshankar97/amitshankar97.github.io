# Amit Shankar's portfolio

Static, dependency-free portfolio published at https://amitshankar97.github.io/.
The opening positions Amit as an end-to-end product engineer currently building
Microsoft Teams; project and experience copy are grounded in the supplied résumé
and reviewed project evidence.

## Local preview

Run `python3 -m http.server 4182` from the repository root and open
http://localhost:4182/. No build step is required.

The main page is `index.html`; project details live in `pixbyt.html` and
`stockbear.html`. Shared styles and progressive project selection are in
`css/portfolio.css` and `js/portfolio.js`.

The project selector works with a keyboard and preserves shareable section URLs.
Without JavaScript, both projects remain visible. Reduced-motion preferences are
respected.

## Site details

- `favicon.svg`, `favicon.png`, and `apple-touch-icon.png` share the site's monogram.
- Page-specific descriptions, canonical URLs, and Open Graph metadata support search
  and sharing. `images/social-preview.png` is a capture of the portfolio opening;
  update it when the headline or portrait changes.
- `sitemap.xml` lists the three primary pages; `robots.txt` points crawlers to it.
- `404.html` provides a recovery link for unknown GitHub Pages routes.
- Contact uses a direct email link rather than the old third-party contact form.

## Publishing

GitHub Pages publishes the root of `master` using the existing legacy Pages
configuration. Changes must reach that branch to update the public website.

## Content

Experience is based on the owner's supplied résumé. Featured-project source
links may require repository access; do not describe them as public unless
visibility has been verified. Pixbyt images in `images/projects/` are optimized,
public-safe captures of the local Studio sample prototype, not the original
Go/HTMX app, live data, or hardware output. Stockbear's identity artwork is an
illustration, not a screenshot. Archived project images are original site assets.

Pixbyt Studio's public guest sample workshop is available at
https://pixbyt-studio.vercel.app/. Guest previews/configuration/review/export do
not imply autonomous agents, live feeds, or physical device delivery. Explicit
GitHub bundle saves require a scoped token; the source repository remains private.
The Pixbyt case study links to the caption-led walkthrough at
https://pixbyt-studio.vercel.app/#/demo. Keep this stable player route rather than
hosting a duplicate video or linking an internal media filename.

Pixbyt's agent-assisted development workflow is distinct from its implemented
applet-management capabilities. Only link deployments as working demos after
checking the actual user journey. The résumé document and phone number are not
published as part of this site update.