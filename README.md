# DataPulse

### Full-Stack Admin Analytics Dashboard

![Version](https://img.shields.io/badge/Version-1.0.0-white?style=for-the-badge&color=008b8b)
![Stack](https://img.shields.io/badge/Stack-MERN-white?style=for-the-badge&color=ff9141)
![License](https://img.shields.io/badge/License-MIT-white?style=for-the-badge&color=008b8b)

A full-stack analytics dashboard built with the MERN stack. Visualize business data with interactive charts, data grids, and real-time KPI metrics.

---

## Features

- 📊 **Interactive Charts** — Line, bar, pie, and geographic visualizations powered by Nivo
- 📋 **Data Grids** — Sortable, filterable tables for products, customers, and transactions
- 🌍 **Geography View** — World map showing customer distribution
- 📈 **KPI Ticker** — Live scrolling metrics bar showing real-time business performance
- 🌙 **Dark / Light Mode** — Toggle between themes
- 🔐 **Admin Panel** — User management with role-based access
- 📅 **Daily & Monthly** — Time-series revenue analysis
- 🎨 **Teal + Orange Theme** — Clean, modern color palette

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Redux Toolkit, MUI v5 |
| Charts | Nivo (line, bar, pie, geo) |
| Backend | Node.js, Express |
| Database | MongoDB + Mongoose |
| Styling | MUI theming, Poppins font |

---

## Getting Started

### Prerequisites

- Node.js 16+
- MongoDB (local or Atlas)

### Install & Run

```bash
# Clone
git clone https://github.com/YOUR_USERNAME/DataPulse.git
cd DataPulse

# Backend
cd server
npm install
cp .env.example .env      # Add your MONGO_URL and PORT
npm run dev

# Frontend (new terminal)
cd ../client
npm install
npm start
```

Open **http://localhost:3000**

### Environment Variables

Create `server/.env`:

```env
MONGO_URL=mongodb+srv://YOUR_CONNECTION_STRING
PORT=9000
```

---

## Pages

| Route | Description |
|---|---|
| `/dashboard` | Overview with stats, charts, recent transactions |
| `/products` | Product catalog with ratings and stats |
| `/customers` | Customer list with data grid |
| `/transactions` | All transactions with search and pagination |
| `/geography` | Customer location world map |
| `/overview` | Revenue overview chart |
| `/daily` | Daily revenue line chart |
| `/monthly` | Monthly revenue bar chart |
| `/breakdown` | Revenue breakdown pie chart |
| `/admin` | Admin user management |
| `/performance` | Affiliate performance stats |

---

## Extra Features

### KPI Ticker
A horizontally scrolling ticker bar at the top of every page showing live key metrics — revenue, active users, transactions, margin, and more. Pauses on hover.

### Animated Brand Logo
The sidebar brand name "DATAPULSE" has an animated pulsing dot that reflects live system activity.

---

## Project Structure

```
DataPulse/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── scenes/          # Page components
│   │   ├── state/           # Redux store + API
│   │   └── theme.js         # MUI theme (teal/orange)
└── server/                  # Express backend
    ├── controllers/         # Route handlers
    ├── models/              # Mongoose schemas
    ├── routes/              # API routes
    └── data/                # Seed data
```
