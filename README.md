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
public-safe crops of the current Studio homepage, including its rendered WSDOT
ferry preview with sample data—not live departures, AI-generation evidence, or
hardware output. Studio is distinct from the original Go/HTMX/Postgres app.
Stockbear images are authentic public
production captures of deterministic synthetic examples, not market data or
investment advice. Archived project images are original site assets.

Pixbyt Studio is available at https://pixbyt-studio.vercel.app/. It implements
BYOK model generation, actual isolated Sandbox/Pixlet rendering, model image
critique with a shared two-repair budget, exact-revision human approval, and
personal Tidbyt image-push paths. Manual-source rendering needs no AI key or
signup. Projects are browser-local with exportable backups; generated applets
are offline, without hosted scheduling or live feeds. The older guest workshop's
explicit GitHub bundle save is separate from project storage, not automatic sync.
The source repository remains private.

The Pixbyt case study links to the captioned walkthrough at
https://pixbyt-studio.vercel.app/#/demo for a look at applet source and rendering.
Keep this stable player route rather than hosting a duplicate or linking an
internal media filename. Public rendering/editing/validation/approval have been
independently exercised; unit/mock coverage of paid-model and device paths is
not proof of paid inference or physical delivery with user credentials.

Stockbear's public synthetic demo is https://stockbear.vercel.app/. All displayed
prices, volumes, dates, and analytics are generated examples. Hosted personal
connections are disabled; the private Alpaca integration is only locally verified.
The source repository remains private. Do not add a Stockbear video link without
a verified public player URL.

Only link deployments as working demos after checking the actual user journey.
The résumé document and phone number are not
published as part of this site update.