# The Bakers Farm (TBF) — Artisan Bakery & Café Website

> **Crafting Moments, Baking Happiness**  
> Premium Artisan Bakery, Café & Restaurant in Aliganj, Lucknow.

---

## 🌟 Overview

The official responsive web experience for **The Bakers Farm (TBF)**, showcasing fresh artisan bakery creations, celebration cakes, café savouries, authentic Chinese dishes, momos, beverages, and desserts with direct WhatsApp ordering and custom celebration cake enquiry.

---

## ✨ Features

- **Warm Luxury Bakery Hero Section**: Luminous morning bakery interior with 3D acrylic arch plaque, gold TBF emblem, balloons, marble counter, flour-dusted sourdough boule, and interactive feature badges.
- **Dynamic Digital Menu**: Over 120+ items categorized into 17 sections with instant search, category pill filtering, and dietary toggles (All, Veg, Non-Veg).
- **Celebration Cake Showcase**: Dual-price tier support (0.5 Kg / 1 Kg), flavor filtering, and instant cart integration.
- **Custom Cake Enquiry**: Interactive modal calculating estimates based on tiers, flavors, delivery dates, and custom design requests with one-tap WhatsApp dispatch.
- **Seamless WhatsApp Cart Drawer**: Real-time shopping cart with item quantity controls, pricing calculations, delivery notes, and structured WhatsApp message generator.
- **Customer Reviews & Photo Gallery**: High-end customer testimonials, interactive gallery with full-screen lightbox preview.
- **Responsive & Accessible Design**: Crafted with Vanilla CSS & JavaScript, mobile drawer navigation, glassmorphic headers, and optimized touch interactions.

---

## 📁 Project Structure

```
├── assets/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── hero-showcase.jpg
│   │   └── hero-reference.jpg
│   └── logo.jpg
├── css/
│   ├── style.css         # Global design system & typography tokens
│   └── components.css    # Header, Hero, Menu Cards, Modals & Drawer styles
├── data/
│   └── menu-data.js      # Complete catalog of 120+ menu items & cake tiers
├── js/
│   ├── app.js            # Menu filtering, instant search, modals, lightbox
│   └── cart.js           # Cart state management & WhatsApp payload generator
├── index.html            # Main semantic HTML structure
├── The Bakers Farm Menu.xlsx # Original client POS export reference
└── README.md
```

---

## 🚀 Getting Started

1. Clone or download the repository:
   ```bash
   git clone https://github.com/sayedsaadhusain/the-bakers-farm.git
   cd the-bakers-farm
   ```

2. Run locally using any local web server:
   ```bash
   # Python 3
   python -m http.server 3000

   # Or with Node.js
   npx serve .
   ```

3. Open your browser at `http://localhost:3000`.

---

© 2024 The Bakers Farm (TBF). All rights reserved.
