# Amit Shankar's portfolio

Static, dependency-free portfolio published at https://amitshankar97.github.io/.
The opening positions Amit as an AI-native software engineer currently building
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

**This revision is for branch review. The owner has authorized committing and
pushing the review branch, not merging or deploying it.** The supporting hero
sentence remains unchanged while wording is under discussion.

The owner has confirmed public-sharing clearance for the supplied Copilot
Chain-of-thought demo. `media/copilot/` contains the unmodified recording and an
optimized WebP poster extracted from its visible progress view. Its player uses
native controls, inline playback, metadata-only preload, and no autoplay. The
silent recording is nested under the Microsoft Teams role in a compact,
indented disclosure, with an optional visual description. Experience copy describes
contribution without asserting sole ownership. Media clearance does not approve
publication of this draft.
The social-preview image still reflects the live version; refresh it only when
the new headline and supporting copy are approved for publication.

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

The case studies are image-led walkthroughs, not single screenshots. Pixbyt adds
the current conversation/editor workbench with actual manual Pixlet output,
configuration editor, and scenario evidence;
the editor/evidence captures are cropped public-safe walkthrough frames without
the editorial band or player controls. They do not prove paid model critique or
device delivery. Stockbear shows the public watchlist, ticker chart, and an
AAPL/MSFT/QQQ comparison. Each capture links to its full-size WebP and has a
descriptive caption. New images are lazy-loaded below the opening.

Delivery stacks are checked against the current project manifests and reviewed
implementation evidence: Studio uses TypeScript/Vite, Node Vercel Functions,
Sandbox/Pixlet/Python, and OpenAI; Stockbear uses TypeScript/Next.js/React,
Recharts, and Zod on Vercel. Do not apply the original Go/HTMX/Postgres Pixbyt
stack to Studio. Archive entries include known stacks and clearly distinguish
historical captures and source from current product demos. Real News links to its
project website at https://realnewsapp.github.io/.

Technology chips share one informational style, below each project heading or
experience role and before its narrative. Stream Finder, Alexa smart home, and
GoFish retain their descriptions, stacks, and links inside native disclosures,
collapsed by default. Expanded projects come first: Foober, Real News, then
Pokémon in Java. Arizona Catering Hub is last, with its screenshot inside a
collapsed disclosure. Teams tags reflect explicit résumé evidence (WebSockets,
ChatGPT, MCP), not an inferred client framework. Azure Commerce technologies
(C#/.NET Core, Angular, Cosmos DB, Azure Functions) and Seller Insights technologies
(Node.js, Azure Bot Service, HDInsight, Azure Data Explorer) are owner-confirmed.
No global skills have been inferred as role-specific technologies.

Pixbyt Studio is available at https://pixbyt-studio.vercel.app/. It implements
BYOK model generation, actual isolated Sandbox/Pixlet rendering, model image
critique with a shared two-repair budget, exact-revision human approval, and
personal Tidbyt image-push paths. Manual-source rendering needs no AI key or
signup. Projects are browser-local with exportable backups; generated applets
are offline, without hosted scheduling or live feeds. The older guest workshop's
explicit GitHub bundle save is separate from project storage, not automatic sync.
The source repository remains private.

`pixbyt.html#quality-gates` explains the applet factory's validation contract,
native render/scenario verification, actual-pixel model critique, shared repair
budget, and exact-revision human release gate. Keep manual key-free runs distinct
from the current image review required for AI-built releases. Exported evidence
and historical previews are not reusable release authorization; subjective model
critique does not guarantee taste. These gate descriptions are product behavior,
not claims of paid-model or physical-device end-to-end verification.

The Pixbyt case study links to the captioned walkthrough at
https://pixbyt-studio.vercel.app/#/demo for a look at applet source and rendering.
Keep this stable player route rather than hosting a duplicate or linking an
internal media filename. Public rendering/editing/validation/approval have been
independently exercised; unit/mock coverage of paid-model and device paths is
not proof of paid inference or physical delivery with user credentials.

Stockbear's public synthetic demo is https://stockbear.vercel.app/. All displayed
prices, volumes, dates, and analytics are generated examples. Hosted personal
connections are disabled; the private Alpaca integration is only locally verified.
The source repository remains private. The approved 52-second synthetic film is
embedded at https://amitshankar97.github.io/stockbear.html#walkthrough.
`media/stockbear/` contains only its four approved public-safe deliverables:
`stockbear-synthetic-public.mp4`, `poster.jpg`, `captions.vtt`, and `transcript.txt`.
The MP4 SHA-256 is
`588d2152a7a6de8404625f8747dbb0a262cdf3086955ce68fd2081d3fe60e59e`.
It uses wholly generated synthetic data, not actual market observations.
Native controls, inline playback, a poster, and metadata-only preloading keep
playback visitor-initiated. Captions are burned in; the optional English VTT is
not enabled by default to avoid duplicate text. A plain-text transcript is linked.
Never add the rejected v2 film, real-data footage, or neighboring private assets
to the public site or Git history.

Only link deployments as working demos after checking the actual user journey.
The résumé document and phone number are not
published as part of this site update.