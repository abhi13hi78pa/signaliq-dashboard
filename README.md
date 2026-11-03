[<img src="https://saas-analytics-admin.vercel.app/aysodev.png" alt="AysoDev" width="50" height="50">](https://aysodev.vercel.app)

# SignalIQ

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-13.0+-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-4.9+-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Open%20Source-Yes-green?style=for-the-badge" alt="Open Source">
  <img src="https://img.shields.io/github/stars/AysoDev/saas-analytics?style=for-the-badge" alt="GitHub stars">
  <img src="https://img.shields.io/github/license/AysoDev/saas-analytics?style=for-the-badge" alt="License">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Demo%20Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel" />
</p>

<p align="center">
  <strong>A modern, open-source analytics dashboard for SaaS companies</strong><br/>
  Monitor revenue, track user behavior, and measure product health — built with <code>Next.js App Router</code> & <code>TypeScript</code>.
</p>

---

## 🎯 Purpose

This platform empowers **founders, product managers, and internal admin teams** with comprehensive insights into their SaaS business, including:

- 📈 **Revenue Metrics**: MRR, ARR, LTV, and growth trends  
- 👥 **User Analytics**: Acquisition, activation, retention, churn  
- 🔄 **Conversion Tracking**: Funnels, drop-offs, and conversion optimization  
- ⚡ **Real-time Updates**: Live dashboards that refresh automatically  

---

## ✨ Features

### 📊 Analytics & Reporting
- **Business Performance**: MRR/ARR, churn rate, cohort analysis  
- **User Analytics**: Acquisition channels, product usage statistics  
- **Conversion Tracking**: Funnels & conversion optimization insights  
- **Customizable Charts**: Line, bar, pie, area — powered by Chart.js  

### 🎨 User Experience
- **Responsive UI**: Works seamlessly across devices  
- **Theme Support**: Light + dark mode out of the box  
- **Interactive Dashboard**: Drill-down analytics with smooth navigation  
- **Modern Design System**: Clean, consistent UI using CSS variables  

### 🔧 Technical Highlights
- ⚛️ **Next.js 13+ (App Router)** for performance & scalability  
- 🛡 **TypeScript** with full type safety  
- 📦 **Modular Components** for reusability  
- 🎨 **Tailwind + CSS Variables** for theming and customization  
- ✅ **Future-ready**: Easily extendable for APIs, multi-tenant SaaS, and custom integrations  

---
<!-- Project Structure -->
## 🏗️ Project Structure - Last Update @ 8/26/2025

```
saas-analytics/
├─ public/
├─ src/
│  ├─ app/
│  │  ├─ dashboard/
│  │  │  ├─ customers/
│  │  │  │  ├─ layout.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ revenue/
│  │  │  │  ├─ layout.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  ├─ LayoutWrapper.tsx
│  │  │  └─ page.tsx
│  │  ├─ forgot-password/
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ theme.css
│  └─ components/
│     ├─ pages/
│     │  ├─ CustomerFilter/
│     │  │  ├─ Main.css
│     │  │  ├─ Main.tsx
│     │  │  └─ Types.ts
│     │  ├─ Customers/
│     │  │  ├─ Main.css
│     │  │  ├─ Main.tsx
│     │  │  ├─ Metrics.tsx
│     │  │  └─ Types.ts
│     │  ├─ CustomerTable/
│     │  │  ├─ CustomerDetails/
│     │  │  │  ├─ Main.css
│     │  │  │  ├─ Main.tsx
│     │  │  │  └─ Types.ts
│     │  │  ├─ Main.css
│     │  │  ├─ Main.tsx
│     │  │  └─ Types.ts
│     │  ├─ Dashboard/
│     │  │  ├─ Main.css
│     │  │  ├─ Main.tsx
│     │  │  ├─ Metrics.tsx
│     │  │  └─ Types.ts
│     │  ├─ FPassword/
│     │  │  ├─ Main.css
│     │  │  ├─ Main.tsx
│     │  │  └─ Types.ts
│     │  ├─ Header/
│     │  │  ├─ Main.css
│     │  │  ├─ Main.tsx
│     │  │  └─ Types.ts
│     │  ├─ Login/
│     │  │  ├─ Main.css
│     │  │  ├─ Main.tsx
│     │  │  └─ Types.ts
│     │  ├─ revenue/
│     │  │  ├─ Main.css
│     │  │  ├─ Main.tsx
│     │  │  └─ Types.ts
│     │  ├─ RevenueChart/
│     │  │  ├─ Main.css
│     │  │  ├─ Main.tsx
│     │  │  └─ Types.ts
│     │  ├─ RevenueMetrics/
│     │  │  ├─ Main.css
│     │  │  ├─ Main.tsx
│     │  │  ├─ MetricCard.tsx
│     │  │  └─ Types.ts
│     │  └─ Sidenav/
│     │     ├─ Main.css
│     │     ├─ Main.tsx
│     │     └─ Types.ts
│     └─ widgets/
│        ├─ Card/
│        │  ├─ Main.css
│        │  ├─ Main.tsx
│        │  └─ Types.ts
│        ├─ Chart/
│        │  ├─ Main.css
│        │  ├─ Main.tsx
│        │  └─ Types.ts
│        ├─ Metric/
│        │  ├─ Main.css
│        │  ├─ Main.tsx
│        │  └─ Types.ts
│        ├─ Modal/
│        │  ├─ Main.css
│        │  ├─ Main.tsx
│        │  └─ Types.ts
│        ├─ PathTracker/
│        │  ├─ Main.css
│        │  ├─ Main.tsx
│        │  └─ Types.ts
│        └─ UserTracker/
│           ├─ Main.css
│           ├─ Main.tsx
│           └─ Types.ts
├─ .gitignore
├─ eslint.config.mjs
├─ next-env.d.ts
├─ next.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
├─ README.md
└─ tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js 18.17+](https://nodejs.org/)  
- pnpm  

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/abhi13hi78pa/signaliq-dashboard.git
cd signaliq-dashboard/saas-analytics
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Run the development server**
```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser 🚀  

---

## Upstream Demo

> [View Live Demo](https://saas-analytics-admin.vercel.app)

---

## 🛡 License
This project is open source and available under the [MIT License](LICENSE).  

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
- Fork the project  
- Create your feature branch (`git checkout -b feature/amazing-feature`)  
- Commit your changes (`git commit -m 'Add amazing feature'`)  
- Push to the branch (`git push origin feature/amazing-feature`)  
- Open a Pull Request  

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.  

---

## 🌟 Support & Community

If you find this project useful, please give it a ⭐ on GitHub to help others discover it!  

Original author: [GitHub @AysoDev](https://github.com/AysoDev)
