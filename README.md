# 🪙 Crypto Portfolio Dashboard

> **Hamady** — Développeur Fullstack Web3 & Automatisation

A professional Crypto Portfolio Dashboard built with **React**, **TypeScript**, **Vite** and **Tailwind CSS**. Features live cryptocurrency prices, a portfolio simulator, and a personal landing page.

![React](https://img.shields.io/badge/React-18-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178c6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff?logo=vite)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-Ready-f38020?logo=cloudflare)

## ✨ Features

- **Live Crypto Dashboard** — Real-time BTC, ETH & SOL prices via CoinGecko API with 7-day sparkline charts
- **Portfolio Simulator** — Input your crypto holdings to see live portfolio value and allocation
- **Professional Landing Page** — Skills showcase, services overview, and contact form
- **Responsive Design** — Glass-morphism UI with dark theme, mobile-first
- **Cloudflare Pages** — Production-ready deployment with `wrangler.jsonc`

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

## 📂 Project Structure

```
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── wrangler.jsonc           # Cloudflare Pages config
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── LandingPage.tsx
│   │   ├── Dashboard.tsx
│   │   ├── PriceCard.tsx
│   │   ├── PortfolioSimulator.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useCryptoPrices.ts
│   └── types/
│       └── index.ts
```

## 🔌 API

Uses the free [CoinGecko API](https://www.coingecko.com/en/api) for live market data. No API key required for basic usage.

## 🌐 Deployment

Configured for Cloudflare Pages via `wrangler.jsonc`. Build output directory: `dist`.

```bash
npx wrangler pages deploy dist
```

## 📝 License

MIT — Built by Hamady
