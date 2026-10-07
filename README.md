<div align="center">

# ⚡ Archi Jain — Portfolio

**Data Science & Software Engineering Portfolio**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-lac-one-91.vercel.app)

<br />

[🌐 **Live Website**](https://portfolio-lac-one-91.vercel.app) • [📄 **Download Resume**](https://portfolio-lac-one-91.vercel.app/Archi_Jain_Resume.pdf) • [💼 **LinkedIn**](https://www.linkedin.com/in/archi-jain-552b20287/) • [🐙 **GitHub Profile**](https://github.com/Archi-jain19)

<br />

</div>

---

## 📌 Overview

This repository contains the source code for the personal portfolio of **Archi Jain**, a **B.Tech Computer Science Engineering (Data Science)** student at Jain University (2023–2027, CGPA: 8.023).

The website showcases practical engineering expertise across **Python, SQL, data analytics, AI/ML pipelines, ETL workflows, and software development**, featuring dynamic project synchronization with GitHub and smooth, modern user interactions.

---

## ✨ Key Features

- **🔄 Dynamic GitHub API Integration**:
  - Automatically fetches and displays public repositories from [`@Archi-jain19`](https://github.com/Archi-jain19) using a cached Next.js route handler (`/api/github`).
  - Automatically includes newly created public repositories without manual code edits.
  - Features real-time stars, updated years, tags, direct repository links, and live demo buttons.
  - Graceful fallback with zero latency and robust rate-limit protection.

- **🎯 Interactive Project Filtering**:
  - Filter projects dynamically by **Featured**, **AI & Data**, and **Software & Cloud**.
  - Highlights core flagship projects: **FarmEase** and **RiskRadar**.

- **🌊 Fluid Motion & Aesthetics**:
  - Smooth inertia scrolling powered by **Lenis**.
  - Pinned horizontal scroll runway for desktop projects powered by **GSAP ScrollTrigger**.
  - Staggered word-reveal and micro-interactions powered by **Framer Motion**.
  - Custom interactive cursor and draggable tool elements.

- **📱 Fully Responsive**:
  - Optimized for desktop, tablet, and mobile with dedicated touch-friendly cards and navigation.

- **🚀 Performance & SEO**:
  - Built on Next.js 16 with Turbopack, SSR, semantic HTML, and dynamic Open Graph metadata.

---

## 🛠️ Tech Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Framework & Core** | [Next.js 16 (App Router)](https://nextjs.org/), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/), CSS Custom Properties, Dark Mode Aesthetics |
| **Animation & Motion** | [GSAP](https://greensock.com/gsap/) (ScrollTrigger), [Framer Motion](https://www.framer.com/motion/), [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis) |
| **Typography** | Inter, Playfair Display, JetBrains Mono |
| **Data & APIs** | GitHub REST API v3, Next.js Route Handlers (`revalidate: 3600`) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── Archi_Jain_Resume.pdf   # Latest downloadable Data Science resume
│   └── images/                 # Project assets and webp previews
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── github/
│   │   │       └── route.ts    # Cached GitHub API sync endpoint
│   │   ├── globals.css         # Design tokens, color palette, animations
│   │   ├── layout.tsx          # Root layout & SEO OpenGraph metadata
│   │   └── page.tsx            # Main page assembly & preloader flow
│   └── components/
│       ├── Preloader.tsx       # Opening branding transition
│       ├── Navbar.tsx          # Responsive navigation & resume link
│       ├── HeroSection.tsx     # Hero banner with kinetic typography
│       ├── AboutSection.tsx    # Bio, word-reveal animation & milestone stats
│       ├── ProjectsSection.tsx # Dynamic GitHub gallery & horizontal scroll
│       ├── ExperienceSection.tsx # Timeline for BNNarratives & Infosys
│       ├── SkillsSection.tsx   # Curated 6-category technical skillset
│       ├── AchievementsSection.tsx # Ideathons, competitions & certifications marquee
│       ├── ContactSection.tsx  # Direct communication, socials & draggable badges
│       ├── CustomCursor.tsx    # Smooth desktop cursor follower
│       └── SmoothScroll.tsx    # Lenis smooth scroll provider
├── package.json
└── tsconfig.json
```

---

## 🌟 Featured Projects

| Project | Category | Tech Stack | Highlights |
| :--- | :--- | :--- | :--- |
| **[FarmEase](https://github.com/Archi-jain19)** | AI / Agriculture | Python, AI/ML, Data Analytics | AI-powered agriculture platform integrating crop recommendations, disease detection, fertilizer guidance, and yield insights. |
| **[RiskRadar](https://github.com/Archi-jain19/RiskRadar)** | Machine Learning | Python, Scikit-Learn, Pandas | ML classification model predicting student dropout risk using feature engineering, data preprocessing, and model evaluation. |
| **[Ganapati Build Mart](https://github.com/Archi-jain19/Ganapati-Build-Mart-Website)** | E-Commerce / Full-Stack | HTML5, CSS3, JavaScript, Flask, MySQL | Commercial web platform featuring interactive product catalogues, inquiry management, admin control dashboard, and [live deployment](https://ganapati-build-mart-website-git-main-archi-jain19s-projects.vercel.app/). |
| **[Google Drive Clone](https://github.com/Archi-jain19/Google_Drive_Clone)** | Cloud Storage | TypeScript, React, FastAPI | Full-stack cloud storage application with JWT authentication, file streaming, and separate frontend/backend modules. |
| **[FacetLens](https://github.com/Archi-jain19/Ai_Ml_Assignment)** | NLP / Pipeline | Python, Machine Learning | Scalable conversational facet scoring pipeline with principled abstention, automating dialogue analysis and evaluation. |

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js** (v18.18.0 or newer)
- **npm** or **pnpm** / **yarn**

### 1. Clone the repository
```bash
git clone https://github.com/Archi-jain19/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 📬 Contact & Connect

- **Email**: [archizn19@gmail.com](mailto:archizn19@gmail.com)
- **Phone**: `+91 9754839167`
- **LinkedIn**: [linkedin.com/in/archi-jain-552b20287](https://www.linkedin.com/in/archi-jain-552b20287/)
- **GitHub**: [github.com/Archi-jain19](https://github.com/Archi-jain19)
- **Location**: India

---

<div align="center">
  <sub>Designed & Built by <b>Archi Jain</b> • © 2026 All Rights Reserved</sub>
</div>
