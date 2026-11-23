# Baked By Adeela

Floral cupcake bouquets, wedding and celebration cakes in Birmingham and the Midlands.

Website: https://bakedbyadeela.netlify.app/

## Open in Visual Studio Code
Choose File > Open Folder and select this repository folder. No npm installation is needed for the website.

## Edit and preview
- Shared layouts, content and SEO metadata: `build.py`.
- Styling: `dist/style.css`.
- Menu, gallery and enquiry interactions: `dist/app.js`.
- Original photographs and local fonts: `dist/assets/`.

Run:
```sh
python build.py
python -m http.server 4174 --directory dist
```
Open http://localhost:4174. Local Python preview cannot accept form submissions or run Netlify functions.

## Netlify deployment
Link this GitHub repository to the existing Netlify project, production branch `main`.
`netlify.toml` sets build command `python build.py`, publish directory `dist`, functions directory `netlify/functions`.
Changes to build.py regenerate automatically on a Git-connected Netlify deploy. CSS/JS edits are preserved by the generator.

### Activate enquiries — required before receiving customers
1. In Netlify, open Forms and enable form detection.
2. Deploy the new version (or redeploy after enabling detection).
3. Confirm `cake-enquiry` appears under Forms.
4. Send a test enquiry and verify it in Netlify's submissions dashboard.
5. Configure email notifications in Netlify for the actual business email address.

Only enquiry.html contains the form. Product URLs prefill the collection and design. Successful submissions redirect to thank-you.html. Failed submissions preserve the entered details and show an error. The repository does not configure a notification recipient.

### Optional live Instagram gallery
The supplied client photos remain as a linked portfolio unless the server returns authorised Instagram media. This is not yet a live feed.

Use Meta's Instagram API with Instagram Login for a professional account:
https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login/get-started

The account owner must authorise a Meta app for `instagram_business_basic` and obtain the Instagram user ID and access token. Set these in Netlify's environment variables (Functions scope), not in the repository:
- INSTAGRAM_USER_ID
- INSTAGRAM_ACCESS_TOKEN
- INSTAGRAM_API_VERSION (defaults to v27.0)

Redeploy after configuration. The server function returns up to four latest images/video thumbnails; the token never reaches the browser. Responses cache for five minutes. Missing credentials, expired access, network failures and empty results preserve the original portfolio. Long-lived tokens expire; renew/refresh them through Meta before expiry. Token refresh is not automated here. No account connection or credentials are included.

## SEO and content
Unique titles/descriptions, canonical URLs, Open Graph, image alt text, Bakery structured data, robots.txt and sitemap.xml are generated. Domain changes must be updated in build.py and regenerated. Submit the sitemap in Google Search Console after domain verification. Search rankings/indexing are not guaranteed by these files.

Flavour ideas remain explicitly draft pending confirmation. Pricing, exact collection address, delivery details and fuller biography still need the owner's final input. The privacy page describes the implemented data flow and should be reviewed against the owner's final operating policy.

## Assets
All visible photography was supplied by the client. See ASSETS.md. Font licences are in dist/assets.
