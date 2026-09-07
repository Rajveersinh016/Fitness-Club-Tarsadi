# J3 Fitness Studio — Project Documentation & Overview

---

## 📌 Executive Summary

**J3 Fitness Studio** is a comprehensive, production-ready website and Gym Management System designed for a modern fitness facility located in Kosamba, Gujarat. 

The project consists of two core components:
1. **Public Website**: A modern, high-converting public platform for prospective and current members to explore equipment, facilities, membership options, location, and submit inquiries.
2. **Admin Dashboard**: An operational dashboard for gym owners and staff to manage member records, track attendance, monitor pending fees, record payments, generate printable receipts, view financial reports, and manage website inquiries.

---

## 🏢 Business & Location Profile

- **Official Name**: J3 Fitness Studio
- **Exact Address**: Shop No. 309-318, Shrddha Plaza, Near V. S. Patel School, Tarsadi, Kosamba, Gujarat 394120
- **Instagram**: [https://www.instagram.com/j3fitnessstudio/](https://www.instagram.com/j3fitnessstudio/)
- **Google Maps Pin**: [https://maps.app.goo.gl/LFLDBzjK2vURk8VM6](https://maps.app.goo.gl/LFLDBzjK2vURk8VM6)

---

## 🛠️ Technology Stack

| Component | Technology Used | Description |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic HTML5 structure with ARIA accessibility labels |
| **Styling** | Vanilla CSS3 | Custom Design System using CSS variables, flexbox, grid, glassmorphism |
| **Scripts** | JavaScript (ES6+) | Vanilla JS for dynamic data rendering, modal handling, local data management |
| **Data Engine** | LocalStorage API | Global data store (`GYM_CONFIG`, `MOCK_MEMBERS`, `MOCK_PAYMENTS`, `MOCK_INQUIRIES`) |
| **Typography** | Google Fonts (Inter) | Clean, athletic, highly readable modern typography |
| **Icons** | Custom Inline SVG | Crisp, resolution-independent SVG icons for equipment, features, and UI controls |

---

## 🎨 Visual Design System & Aesthetics

The application uses an athletic, high-contrast dark color palette:

- **Primary Background (Dark)**: `#0E100F` (Deep Charcoal)
- **Secondary Background**: `#1A1D1B` (Dark Card Gray)
- **Accent Color**: `#C8F536` (Electric Lime)
- **Accent Dark / Hover**: `#9ECE19` (Vibrant Green-Lime)
- **Light Canvas**: `#F4F5F2` (Off-White)
- **Text Primary**: `#FFFFFF` (Pure White) & `#0E100F` (Charcoal)
- **Text Secondary**: `#A1A39D` (Muted Gray)

---

## 🌐 Public Website Architecture (`/`)

### 1. Homepage (`index.html`)
- **Hero Section**: Eyebrow badge (`J3 FITNESS STUDIO`), main headline (`TRAIN HARD. LIVE STRONG.`), grounded stats strip (`Strength Zone`, `Cardio Suite`, `Kosamba Location`), and a glassmorphism address card with direct Google Maps navigation.
- **Facilities Section**: Highlights core equipment areas including heavy weight racks, cable stations, cardio machines, and free weights.
- **Studio Gallery**: Interactive preview connected to high-resolution photorealistic gym studio assets.
- **Membership Plans**: Displays available membership options with "Contact for pricing".
- **Location & Google Maps Card**: Full address display with one-click Google Maps directions.
- **Footer**: Includes copyright `© 2026 J3 Fitness Studio`, address, and Instagram link.

### 2. About Us (`about.html`)
- Dedicated page detailing the philosophy of J3 Fitness Studio.
- Focus on consistency, workout form, and building a supportive fitness community in Kosamba.

### 3. Facilities (`facilities.html`)
- In-depth descriptions of gym workout zones, weight training machines, free weights, and cardio equipment.
- Operating hours reference block.

### 4. Membership Plans (`membership.html`)
- Displays Monthly, Quarterly, Half-Yearly, and Annual membership options.
- Includes a FAQ accordion addressing location, inquiries, and operating hours.

### 5. Gallery (`gallery.html`)
- Filterable gallery (All, Equipment, Cardio Suite, Strength Area).
- Interactive Lightbox Modal to view gym photos in full screen.

### 6. Contact Us (`contact.html`)
- Interactive Inquiry Form allowing prospective members to submit inquiries (automatically saved to the admin inquiries database).
- Displays exact address, Instagram profile link, and Google Maps pin link.

---

## ⚙️ Admin Portal Architecture (`/admin`)

### 1. Login Screen (`admin/login.html`)
- Secure portal entry point.
- Default Admin Credentials: Username: `admin` | Password: `demo123`.

### 2. Admin Dashboard (`admin/dashboard.html`)
- **KPI Summary Cards**:
  - Total Members
  - Active Members
  - Pending Fees Total
  - Monthly Revenue
- **Analytics Charts**: Membership growth trend and payment status distribution.
- **Recent Activities**: Live feed of recent payments, check-ins, and new inquiries.

### 3. Member Management (`admin/members.html`)
- Complete table listing all registered members.
- Instant search by Name, Phone, or Member ID.
- Status Filters: All, Active, Expired, Expiring Soon.
- Action Buttons: Add Member, Edit Member, View Profile.

### 4. Member Profile (`admin/member-profile.html`)
- Detailed profile view for individual members.
- Displays membership status, join/expiry dates, emergency contacts.
- Attendance history log and fee payment ledger.
- Print Receipt trigger button.

### 5. Attendance Log (`admin/attendance.html`)
- Daily check-in tracker.
- Manual check-in modal for staff.
- Attendance statistics and monthly frequency percentages.

### 6. Fee Management (`admin/fees.html`)
- Dedicated view for members with overdue/pending fees.
- **One-Click WhatsApp Reminder**: Generates a pre-filled WhatsApp message sent to the member's mobile number.
- **Record Payment Modal**: Quick payment entry.

### 7. Payments History (`admin/payments.html`)
- Complete financial ledger of all completed transactions.
- Filterable by payment mode (Cash, UPI, Card) and date range.
- Export to CSV capability.

### 8. Receipts Generator (`admin/receipts.html`)
- Official payment receipts with gym address and member details.
- Browser print layout formatted for physical receipt printing or PDF export.

### 9. Reports & Analytics (`admin/reports.html`)
- Detailed financial breakdown, monthly revenue comparisons, and member retention metrics.

### 10. Inquiries Manager (`admin/inquiries.html`)
- Tracks form inquiries submitted via the public contact page.
- Status management: `New`, `Contacted`, `Converted`, `Closed`.

### 11. System Settings (`admin/settings.html`)
- Manage gym name, address, Instagram profile link, and reminder thresholds.
- Data export (CSV) and reset tools.

---

## 📂 Project Directory Structure

```
Fitness Club Gym/
├── index.html                  # Public Homepage
├── about.html                  # About J3 Fitness Studio
├── facilities.html             # Gym Facilities & Equipment
├── membership.html             # Membership Plans & FAQ
├── gallery.html                # Photo Gallery & Lightbox
├── contact.html                # Inquiry Form & Location Details
├── trainers.html               # Redirects to Homepage
│
├── css/
│   ├── style.css               # Main public stylesheet & design tokens
│   ├── admin.css               # Admin dashboard stylesheet & components
│   └── responsive.css          # Responsive layout breakpoints
│
├── js/
│   ├── data.js                 # Central GYM_CONFIG & LocalStorage engine
│   ├── main.js                 # UI interactions, navigation, modals, toasts
│   ├── navigation.js           # Navbar scroll effects & mobile menu drawer
│   ├── sidebar.js              # Admin sidebar layout component
│   ├── members.js              # Member table logic & profile rendering
│   ├── attendance.js           # Attendance check-in & statistics
│   └── admin.js                # Dashboard KPIs & charts renderer
│
├── admin/                      # Admin Management Portal
│   ├── login.html              # Admin Login
│   ├── dashboard.html          # Main Executive Dashboard
│   ├── members.html            # Member Directory
│   ├── member-profile.html     # Individual Member Profile
│   ├── attendance.html         # Attendance Management
│   ├── fees.html               # Pending Fees & WhatsApp Reminders
│   ├── payments.html           # Payment Ledger
│   ├── receipts.html           # Printable Payment Receipts
│   ├── reports.html            # Financial & Operational Reports
│   ├── inquiries.html          # Public Website Inquiries
│   └── settings.html           # Gym Settings & Data Export
│
└── assets/
    └── images/
        └── generated/          # Gym photography visual assets
            ├── hero_gym_studio.png
            ├── facility_heavy_weights.png
            └── facility_cardio_suite.png
```

---

## 🚀 How to Run the Project Locally

1. **Start Local Server**:
   Open a terminal in `g:\Fitness Club Gym` and run:
   ```bash
   python -m http.server 5500
   ```

2. **Access Public Website**:
   Open your browser and navigate to:
   [http://localhost:5500](http://localhost:5500)

3. **Access Admin Portal**:
   Navigate to:
   [http://localhost:5500/admin/login.html](http://localhost:5500/admin/login.html)
   - **Username**: `admin`
   - **Password**: `demo123`

---

## 📄 License & Ownership

© 2026 **J3 Fitness Studio**. All rights reserved.  
Shop No. 309-318, Shrddha Plaza, Near V. S. Patel School, Tarsadi, Kosamba, Gujarat 394120.
