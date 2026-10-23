# Banking Products Dashboard

A single-screen dashboard that shows different banking products (savings, credit cards, loans, wealth) in one view.

## Tech used

- React 18 with functional components and hooks
- Vite (dev server and build)
- Plain CSS (flexbox, no UI library)
- Mock API: a JSON file in `public/api/products.json`, loaded with `fetch`

## How to run

```bash
npm install
npm run dev
```

Open the link shown in the terminal (usually http://localhost:5173).

## Features

- 12 products in 4 categories: Savings, Credit Card, Loan, Wealth
- Each card shows name, category, status, two key metrics and a button
- Category tabs with product counts
- Search by product name or category
- Status filter
- Summary of active, pending and available products
- Loading, error and "no products found" messages
- Works on desktop, tablet and mobile

## Folder structure

```
public/api/products.json     mock data
src/api/productsApi.js       fetches the data
src/utils/format.js          formats currency, percent and dates
src/components/
  SummaryBar.jsx
  CategoryTabs.jsx
  Toolbar.jsx
  ProductCard.jsx
src/App.jsx                  state, filtering and page layout
src/styles.css               styles
```

## Data and UI separation

The components only receive data as props. Fetching is done in `productsApi.js`, so using a real backend later only needs a URL change there.
