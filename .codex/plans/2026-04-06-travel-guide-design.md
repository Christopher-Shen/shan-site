# Travel Guide Design

Date: 2026-04-06

## Goal

Replace the temporary static landing page with a travel guide and
recommendation website hosted on GitHub Pages at `shan.longvol.com`.

The site should support:

- a list view with recommendation cards
- a real interactive map view with pins
- category tabs
- city filters
- a shared data model that powers both the list and the map

## Stack

- React
- Vite
- Leaflet
- OpenStreetMap tiles

## Why This Approach

The first static placeholder proved the domain and Pages setup, but it is too
limited for a recommendation app with shared filtering, multiple views, and a
map. React + Vite keeps the project modern and easier to evolve than the older
Create React App setup used on the existing personal site.

Leaflet is the recommended map choice for v1 because it works well on static
hosting, supports real interactive pins and popups, and does not require a
backend.

## Product Shape

The app will be a single-page experience with:

1. A top navigation bar with:
   - brand/title
   - category tabs
   - a toggle between list and map view
2. A left sidebar with city filters
3. A main panel that shows either:
   - a responsive card grid
   - an interactive map with matching pins

## Data Model

Recommendations will be stored locally in code for now. Each item should
include:

- `id`
- `name`
- `category`
- `city`
- `address`
- `note`
- `lat`
- `lng`
- `image`

This keeps the site easy to deploy on GitHub Pages while making it straightforward
to add more places later.

## Interaction Model

- Selecting a category filters recommendations
- Selecting a city filters recommendations
- The active filters affect both list and map views
- Each recommendation renders as a card in list view
- Each recommendation renders as a pin in map view
- Clicking a pin opens a popup with a summary of the recommendation

## Scope for V1

Build now:

- React + Vite app shell
- category tabs
- city sidebar
- responsive recommendation cards
- Leaflet map with pins and popups
- local seed data
- GitHub Pages deployment setup

Do not build now:

- backend or CMS
- search
- user accounts
- editing UI
- database

## Deployment

The site will continue to deploy to GitHub Pages from the repository and remain
reachable at `shan.longvol.com`.
