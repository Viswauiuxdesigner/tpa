# Tirupur Photography Association — public website

Static HTML/CSS/JS front end (no build step, no framework). Design language: "Darkroom" — paper, ink and a safelight-vermilion accent; Fraunces + Manrope (Noto Serif/Sans Tamil for Tamil).

## Pages
index · about · committee · gallery · news · article?id=N · membership · login · join · contact · card

## What was tested (headless Chromium, desktop 1440 + mobile 390)
All pages load without script errors or horizontal overflow; EN/தமிழ் switching (persisted); gallery filters, lightbox (arrows, Esc, focus return, deep links `gallery.html#img-5`); news filter + article; registration wizard validation (required fields, mobile/PIN/email, file type + 2 MB size, payment reference/date, declaration), success + status lookup; contact + login validation and password toggle; membership card QR render, PNG download, print stylesheet; mobile drawer; reduced-motion; and the connected-API paths against a *mocked* server (login error / off-site redirect refusal, field-level server errors routing back to the right step, real reference shown, status lookup).

## What is NOT done / NOT tested
- **No backend exists in this project.** Login, registration, status, contact and card verification run in clearly-labelled DEMO mode until `js/config.js` endpoints are set. Nothing is stored or sent.
- **Security is the server's job.** Payment verification, password checking, rate limiting, CSRF, upload re-validation (MIME sniffing, size, malware), session cookies and the QR verification page must be implemented server-side. Client validation is convenience only.
- I could not inspect the existing site/admin portal; the endpoint contracts below are assumptions to align with it.
- Content is placeholder: no real photographs, names, dates, statistics, contact details, document list, eligibility rules or renewal terms. Bracketed text = to be supplied. Mission/vision are labelled drafts.
- Tamil is drafted and needs review by a native editor. Not tested with real Google Fonts (blocked in the test sandbox), on real iOS/Android devices, with a screen reader, or in Safari/Firefox.
- Header/footer are injected by JS; for SEO-critical deployment convert them to PHP includes.

## Wiring it up (js/config.js)
| key | request | expected JSON |
|---|---|---|
| loginUrl | POST form: mobile, password | `{ok:true, redirect:"/member/"}` or `{ok:false, message}` (redirect must be a same-site path) |
| registerUrl | POST multipart: plan, name, studio, work, mobile, email, address, pin, photo, idproof, bizproof, payref, paydate, payproof, decl, lang | `{ok:true, reference}` or `{ok:false, message, errors:{field:msg}}` |
| statusUrl | POST form: reference, mobile | `{ok:true, status:"submitted|verifying|approved|rejected"}` |
| contactUrl | POST form: name, contact, subject, message | `{ok:true}` |
| verifyBase | QR encodes `verifyBase + memberId` | server page that checks the official record |
Also: whatsappNumber, phone, email, address, officeHours, mapEmbedUrl (must start with https://www.google.com/maps/embed), adminUrl.

## Replacing placeholders
Edit `js/data.js` (plans, gallery, news, events, committee). Set `src` on any item to a real image path and the placeholder frame is replaced (lazy-loaded, with a skeleton until loaded). Add alt text via the title fields.
Vendor libs (self-hosted, MIT): qrcode-generator 1.4.4, html2canvas 1.4.1.
