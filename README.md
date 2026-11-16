# Animara — React + Vite

A responsive multi-page frontend concept for Animara, a platform connecting people who want to help stray/neglected animals with animal welfare organisations.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Pages

- `/` — Homepage
- `/about` — Mission and project rationale
- `/needs` — Current needs board with category filters and search
- `/ngos` — NGO directory with search and city filter
- `/report` — Structured rescue report form
- `/donate` — Contribution flow linked to a sample need
- `/contact` — NGO / volunteer contact form

## Important implementation notes

- This is a frontend prototype. Forms show local confirmation states only; they do not transmit or store submissions.
- Needs and NGO entries in `src/data.js` are sample content for layout demonstration, not verified live records.
- No payment gateway, NGO verification workflow, database, geolocation, file upload, notifications, or rescue routing backend is connected.
- Before launch, replace sample records and placeholder contact details, then connect secure APIs, authentication, database persistence, NGO verification, location-based routing and a payment provider.
- Photography is loaded from Unsplash URLs and requires an internet connection.
- Design direction is an original Animara interpretation of Atomicdust's editorial approach: oversized typography, strong visual blocks, asymmetric image-led sections, graphic accents, clear conversion paths and restrained motion. It does not copy Atomicdust's source code or proprietary assets.
