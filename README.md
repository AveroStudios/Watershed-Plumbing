# Watershed Plumbing website

A responsive React + TypeScript website for Watershed Plumbing, Cape Town.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it with `npm run preview`.

## Pages

- `/` — Home
- `/services` — Services and FAQ
- `/about-contact` — About, contact details and enquiry form

## Before launch

1. **Confirm business details:** verify the 24-hour availability claim, service coverage, and actual services offered. The service entries are intentionally placeholders.
2. **Configure the enquiry form:** set `ENQUIRY_ENDPOINT` in `src/config.ts` to a secure backend or form-provider endpoint that accepts JSON POST requests and delivers the enquiry. The form intentionally reports that it is not connected when the endpoint is blank; it never pretends an enquiry was sent. Configure spam protection/rate limiting and privacy handling on the server/provider side.
3. **Google review link:** set `GOOGLE_REVIEW_URL` in `src/config.ts` to the verified direct review-writing URL. Until configured, the website shows a setup note instead of a dead button.
4. **Verify rating:** the supplied listing reported 5.0/5 from 4 reviews. Verify before launch. This is labelled as supplied information, not presented as verified live data.
5. **Replace image placeholders:** replace the styled placeholder blocks with real, approved Watershed photography. No stock or generated imagery is included.
6. **Company story:** complete the owner story and confirm any qualifications, team information, service areas, warranties or claims before publishing.
7. **SEO and deployment:** add a canonical domain, sitemap, robots.txt, production analytics (if desired), and server-side redirects/SPA fallback appropriate to the hosting provider. Add a privacy notice that matches the configured enquiry processing.
8. **Test before launch:** verify mobile navigation, phone and WhatsApp links, form delivery, keyboard focus, and all routes on the chosen hosting platform.

## Configuration

All business details and launch-time integrations live in `src/config.ts`. Do not place API secrets in frontend code. If the form provider requires a secret, send submissions through a server-side function rather than exposing credentials in this React app.

## Notes

- The map link opens Google Maps directions to the supplied business address.
- WhatsApp uses the supplied international number and a prefilled enquiry message.
- Service descriptions, direct review URL, and form endpoint remain deliberately unconfigured until verified.
