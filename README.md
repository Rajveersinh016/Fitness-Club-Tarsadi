# J3 Fitness Studio

> **Official Website & Management Dashboard Prototype**  
> Location: Shop No. 309-318, Shrddha Plaza, Near V. S. Patel School, Tarsadi, Kosamba, Gujarat 394120

---

## 📌 Project Overview

**J3 Fitness Studio** is a lightweight, responsive, multi-page public gym website coupled with a feature-rich Gym Management Admin Portal prototype. Built strictly with vanilla web standards, it offers a zero-dependency frontend experience for members and gym administrators.

---

## 🛠️ Technology Stack

- **HTML5**: Semantic document structure
- **CSS3**: Vanilla CSS design tokens, HSL colors, responsive grid/flexbox, off-canvas mobile drawer
- **Vanilla JavaScript (ES6+)**: Interactive DOM controls, SVG chart generators, client-side routing & modal engine
- **LocalStorage & SessionStorage**: Client-side state persistence for members, attendance, payments, and inquiry tracking

---

## 🚀 Quick Start (Run Locally)

You can run the project using any standard static file server:

### Using Python:
```bash
python -m http.server 5500
```
Then open your browser to:
[http://localhost:5500](http://localhost:5500)

### Using Node / npx:
```bash
npx serve .
```

---

## 🔐 Admin Portal Access

- **Public Website**: `index.html`
- **Admin Login**: `admin/login.html`
- **Demo Credentials**:
  - **Username**: `admin`
  - **Password**: `demo123`

---

## ⚠️ Prototype Transparency & Demo Mode

> [!IMPORTANT]
> **THIS IS A FRONTEND DEMO PROTOTYPE.**
> - **Authentication**: Frontend SessionStorage auth guard (Demo Mode). Secure hashing & JWT authentication will be integrated in Phase 2.
> - **Data Storage**: Data is persisted in browser LocalStorage. Database integration (PostgreSQL / MongoDB) will occur in Phase 2.
> - **Biometric Systems**: Attendance displays demo data. Hardware biometric machine API integration is planned for Phase 2.
> - **WhatsApp & Email**: WhatsApp links open pre-filled messages via WhatsApp Web/App; Email links open mailto clients. Automated WhatsApp Business API & SMTP email integration are planned for Phase 2.

---

## 📂 Project Structure

```
Fitness Club Gym/
├── index.html                  # Main Public Landing Page
├── about.html                  # About J3 Fitness Studio
├── facilities.html             # Equipment & Gym Zones
├── membership.html             # Gym Plans & Pricing Options
├── gallery.html                # Interactive Lightbox Gallery
├── contact.html                # Inquiry Form & Location Map
├── trainers.html               # Navigation Handler
│
├── css/
│   ├── style.css               # Core Tokens & Public Styles
│   ├── admin.css               # Admin Portal Components & Theme
│   └── responsive.css          # Multi-Breakpoint Layout Rules
│
├── js/
│   ├── data.js                 # Initial Seed Data & LocalStorage Service
│   ├── main.js                 # Toast, Modal Engine & SVG Charts
│   ├── navigation.js           # Public Nav & ScrollSpy
│   ├── sidebar.js              # Admin Sidebar Component
│   ├── members.js              # Member Management Logic
│   ├── attendance.js           # Attendance Logic
│   └── admin.js                # Admin Shell & Auth Guard
│
├── admin/
│   ├── login.html              # Admin Login
│   ├── dashboard.html          # Main KPI Dashboard
│   ├── members.html            # Member List & Registration
│   ├── member-profile.html     # Member Deep-dive & Receipts
│   ├── attendance.html         # Attendance Logs
│   ├── fees.html               # Pending Fee Tracking & WhatsApp
│   ├── payments.html           # Payment History
│   ├── receipts.html           # Printable Member Receipts
│   ├── reports.html            # Revenue & Member Reports
│   ├── inquiries.html          # Lead Management
│   └── settings.html           # Gym Configuration
│
└── assets/
    └── images/
        └── generated/          # Facility & Hero Visual Assets
```

---

## 🌐 Deployment (Vercel Ready)

This repository is structured for static deployment on **Vercel** or **GitHub Pages**:
- Repository: `https://github.com/Rajveersinh016/Fitness-Club-Tarsadi.git`
- Root directory contains `index.html`
- Relative file paths ensure smooth navigation without base URL conflicts.

---

## 📞 Gym Details

- **Name**: J3 Fitness Studio
- **Address**: Shop No. 309-318, Shrddha Plaza, Near V. S. Patel School, Tarsadi, Kosamba, Gujarat 394120
- **Google Maps**: [Location Pin](https://maps.app.goo.gl/LFLDBzjK2vURk8VM6)
- **Instagram**: [@j3fitnessstudio](https://www.instagram.com/j3fitnessstudio/)
