/**
 * THE BAKERS FARM (TBF) - Main Application Controller
 * Handles rendering, filtering, search, modals, gallery, and navigation.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderFeaturedCategories();
  renderBestSellers();
  initMenuSystem();
  initCakesSection();
  initGallery();
  initCustomCakeModal();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. NAVIGATION & SCROLLSPY
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. FEATURED CATEGORIES
   -------------------------------------------------------------------------- */
function renderFeaturedCategories() {
  const container = document.getElementById("featuredCategoriesGrid");
  if (!container || !window.FEATURED_CATEGORIES) return;

  container.innerHTML = window.FEATURED_CATEGORIES.map(cat => `
    <a href="#menu" class="category-card" onclick="switchMenuCategory('${cat.id}')">
      <div class="category-card-icon">${cat.icon}</div>
      <div class="category-card-name">${cat.name}</div>
      <div class="category-card-action">View Menu →</div>
    </a>
  `).join("");
}

/* --------------------------------------------------------------------------
   3. BEST SELLERS
   -------------------------------------------------------------------------- */
function renderBestSellers() {
  const container = document.getElementById("bestsellersGrid");
  if (!container || !window.BEST_SELLERS) return;

  container.innerHTML = window.BEST_SELLERS.map(item => `
    <div class="bestseller-card">
      <div class="bestseller-image-wrap">
        <span class="bestseller-badge badge-signature">${item.tag || "Signature"}</span>
        <img src="${item.image}" alt="${item.name}" class="bestseller-image" loading="lazy">
      </div>
      <div class="bestseller-content">
        <div class="product-header-row">
          <h3 class="product-name">${item.name}</h3>
          <span class="diet-indicator ${item.diet}"></span>
        </div>
        <p class="product-desc">${item.description}</p>
        <div class="product-footer">
          <div class="product-price-wrap">
            <span class="product-price">₹${item.price.toLocaleString("en-IN")}</span>
            <span class="product-unit">${item.unit || "Serving"}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="window.tbfCart.addItem(window.FULL_MENU_ITEMS.find(i => i.id === '${item.id}') || ${JSON.stringify(item).replace(/"/g, '&quot;')})">
            Add to Order ＋
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   4. DIGITAL MENU SYSTEM (Search, Filter Tabs, Dietary Toggle)
   -------------------------------------------------------------------------- */
let activeCategory = "all";
let activeDiet = "all";
let searchQuery = "";

function initMenuSystem() {
  renderCategoryTabs();
  renderFilteredMenu();

  const searchInput = document.getElementById("menuSearchInput");
  const clearBtn = document.getElementById("searchClearBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      if (clearBtn) clearBtn.style.display = searchQuery ? "block" : "none";
      renderFilteredMenu();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearBtn.style.display = "none";
      renderFilteredMenu();
      searchInput.focus();
    });
  }

  const dietButtons = document.querySelectorAll(".diet-filter-btn");
  dietButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      dietButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDiet = btn.dataset.diet;
      renderFilteredMenu();
    });
  });
}

function renderCategoryTabs() {
  const tabsContainer = document.getElementById("menuCategoryTabs");
  if (!tabsContainer || !window.MENU_CATEGORIES) return;

  tabsContainer.innerHTML = window.MENU_CATEGORIES.map(cat => `
    <button class="category-tab ${cat.id === activeCategory ? 'active' : ''}" onclick="switchMenuCategory('${cat.id}')">
      <span>${cat.icon}</span>
      <span>${cat.name}</span>
    </button>
  `).join("");
}

window.switchMenuCategory = function(catId) {
  activeCategory = catId;
  renderCategoryTabs();
  renderFilteredMenu();

  // Scroll smoothly to menu if clicked from elsewhere
  const menuSec = document.getElementById("menu");
  if (menuSec && window.scrollY < menuSec.offsetTop - 150) {
    menuSec.scrollIntoView({ behavior: "smooth" });
  }
};

function renderFilteredMenu() {
  const container = document.getElementById("fullMenuGrid");
  const countEl = document.getElementById("menuItemsCount");
  if (!container || !window.FULL_MENU_ITEMS) return;

  let filtered = window.FULL_MENU_ITEMS.filter(item => {
    // Category match
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    // Diet match
    let matchesDiet = true;
    if (activeDiet === "veg") matchesDiet = item.diet === "veg";
    if (activeDiet === "non-veg") matchesDiet = item.diet === "non-veg" || item.diet === "egg";

    // Search query match
    const matchesSearch = searchQuery === "" || 
      item.name.toLowerCase().includes(searchQuery) ||
      (item.description && item.description.toLowerCase().includes(searchQuery));

    return matchesCategory && matchesDiet && matchesSearch;
  });

  // Update item count indicator
  if (countEl) {
    const catName = window.MENU_CATEGORIES.find(c => c.id === activeCategory)?.name || "All";
    countEl.textContent = `Showing ${filtered.length} items (${catName})`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
        <div style="font-size: 3rem; margin-bottom: 0.8rem;">🍽️</div>
        <h3 style="font-size: 1.4rem; color: var(--color-brand-primary); margin-bottom: 0.4rem;">No matching items found</h3>
        <p>Try searching for something else or clear your dietary / category filter.</p>
        <button class="btn btn-secondary btn-sm" style="margin-top: 1rem;" onclick="resetMenuFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isDualPrice = item.price1kg !== undefined && item.priceHalfKg !== undefined;
    const isCookieDual = item.price250g !== undefined && item.price1kg !== undefined;

    let priceMarkup = "";
    let actionMarkup = "";

    if (item.isTBD) {
      priceMarkup = `<span class="badge-tbd">${item.priceNotice || "Price TBD (Coming Soon)"}</span>`;
      actionMarkup = `<button class="btn btn-secondary btn-sm" onclick="openCustomCakeModal('${item.name}')">Enquire</button>`;
    } else if (isDualPrice) {
      priceMarkup = `
        <div class="product-price-wrap">
          <span style="font-size: 0.72rem; color: var(--color-text-muted); text-transform: uppercase;">From</span>
          <span class="product-price">₹${item.priceHalfKg}</span>
        </div>
      `;
      actionMarkup = `
        <div style="display: flex; gap: 0.4rem;">
          <button class="btn btn-primary btn-sm" style="padding: 0.4rem 0.7rem; font-size: 0.78rem;" onclick="window.tbfCart.addItem(${JSON.stringify(item).replace(/"/g, '&quot;')}, ${item.priceHalfKg}, '½ kg')">+ ½ kg</button>
          <button class="btn btn-primary btn-sm" style="padding: 0.4rem 0.7rem; font-size: 0.78rem;" onclick="window.tbfCart.addItem(${JSON.stringify(item).replace(/"/g, '&quot;')}, ${item.price1kg}, '1 kg')">+ 1 kg</button>
        </div>
      `;
    } else if (isCookieDual) {
      priceMarkup = `
        <div class="product-price-wrap">
          <span style="font-size: 0.72rem; color: var(--color-text-muted); text-transform: uppercase;">From</span>
          <span class="product-price">₹${item.price250g}</span>
        </div>
      `;
      actionMarkup = `
        <div style="display: flex; gap: 0.4rem;">
          <button class="btn btn-primary btn-sm" style="padding: 0.4rem 0.7rem; font-size: 0.78rem;" onclick="window.tbfCart.addItem(${JSON.stringify(item).replace(/"/g, '&quot;')}, ${item.price250g}, '250g')">+ 250g</button>
          <button class="btn btn-primary btn-sm" style="padding: 0.4rem 0.7rem; font-size: 0.78rem;" onclick="window.tbfCart.addItem(${JSON.stringify(item).replace(/"/g, '&quot;')}, ${item.price1kg}, '1 kg')">+ 1 kg</button>
        </div>
      `;
    } else {
      priceMarkup = `
        <div class="product-price-wrap">
          <span class="product-price">₹${item.price}</span>
          <span class="product-unit">${item.unit || "Plate"}</span>
        </div>
      `;
      actionMarkup = `
        <button class="btn btn-primary btn-sm" onclick="window.tbfCart.addItem(${JSON.stringify(item).replace(/"/g, '&quot;')})">
          Add to Order ＋
        </button>
      `;
    }

    return `
      <div class="menu-card">
        <div class="menu-card-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy">
          <div class="menu-card-diet-badge">
            <span class="diet-indicator ${item.diet}"></span>
          </div>
          ${item.isSignature ? `<span class="bestseller-badge badge-signature">Chef Special</span>` : ''}
        </div>
        <div class="menu-card-details">
          <div class="menu-card-top">
            <h4 class="menu-card-name">${item.name}</h4>
          </div>
          <p class="menu-card-desc">${item.description || ""}</p>
          ${item.notice ? `<div class="badge-conflict" style="margin-bottom: 0.8rem;">⚠️ ${item.notice}</div>` : ""}
          <div class="menu-card-bottom">
            ${priceMarkup}
            ${actionMarkup}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

window.resetMenuFilters = function() {
  activeCategory = "all";
  activeDiet = "all";
  searchQuery = "";
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) searchInput.value = "";
  const dietButtons = document.querySelectorAll(".diet-filter-btn");
  dietButtons.forEach(b => b.classList.toggle("active", b.dataset.diet === "all"));
  renderCategoryTabs();
  renderFilteredMenu();
};

/* --------------------------------------------------------------------------
   5. CAKES SECTION & DUAL PRICING SHOWCASE
   -------------------------------------------------------------------------- */
let activeCakeFilter = "all";

function initCakesSection() {
  renderCakesGrid();

  const cakeFilterButtons = document.querySelectorAll(".cake-filter-btn");
  cakeFilterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      cakeFilterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCakeFilter = btn.dataset.tag;
      renderCakesGrid();
    });
  });
}

function renderCakesGrid() {
  const container = document.getElementById("cakesShowcaseGrid");
  if (!container || !window.FULL_MENU_ITEMS) return;

  const cakes = window.FULL_MENU_ITEMS.filter(item => {
    if (item.category !== "cakes") return false;
    if (activeCakeFilter === "all") return true;
    return item.cakeTag && item.cakeTag.toLowerCase() === activeCakeFilter.toLowerCase();
  });

  container.innerHTML = cakes.map(cake => `
    <div class="cake-card">
      <div class="cake-card-img-wrap">
        <img src="${cake.image}" alt="${cake.name}" class="cake-card-img" loading="lazy">
      </div>
      <div class="cake-card-body">
        <span class="cake-tag-pill">${cake.cakeTag || "Artisan"} Cake</span>
        <h3 class="product-name" style="color: #ffffff; margin-bottom: 0.4rem;">${cake.name}</h3>
        <p class="product-desc" style="color: #cad8e0;">${cake.description}</p>
        
        ${cake.isTBD ? `
          <div style="margin-top: auto; padding-top: 1rem;">
            <span class="badge-tbd" style="color: var(--color-gold-light);">${cake.priceNotice || "Price on Request"}</span>
            <button class="btn btn-secondary btn-sm" style="width: 100%; margin-top: 0.8rem;" onclick="openCustomCakeModal('${cake.name}')">Custom Order Enquiry</button>
          </div>
        ` : `
          <div class="cake-prices-dual">
            <div class="cake-price-col">
              <span class="cake-weight-label">½ KG Box</span>
              <span class="cake-price-val">₹${cake.priceHalfKg}</span>
              <button class="btn btn-primary btn-sm" style="margin-top: 0.4rem; padding: 0.35rem 0.8rem;" onclick="window.tbfCart.addItem(${JSON.stringify(cake).replace(/"/g, '&quot;')}, ${cake.priceHalfKg}, '½ kg')">
                + Add ½ kg
              </button>
            </div>
            <div class="cake-price-col">
              <span class="cake-weight-label">1 KG Box</span>
              <span class="cake-price-val">₹${cake.price1kg}</span>
              <button class="btn btn-primary btn-sm" style="margin-top: 0.4rem; padding: 0.35rem 0.8rem;" onclick="window.tbfCart.addItem(${JSON.stringify(cake).replace(/"/g, '&quot;')}, ${cake.price1kg}, '1 kg')">
                + Add 1 kg
              </button>
            </div>
          </div>
        `}
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   6. GALLERY & LIGHTBOX
   -------------------------------------------------------------------------- */
let activeGalleryCategory = "all";

function initGallery() {
  renderGallery();

  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeGalleryCategory = btn.dataset.category;
      renderGallery();
    });
  });

  // Lightbox elements
  const modal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxClose");
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
}

function renderGallery() {
  const container = document.getElementById("galleryGrid");
  if (!container || !window.GALLERY_ITEMS) return;

  const filtered = window.GALLERY_ITEMS.filter(item => {
    return activeGalleryCategory === "all" || item.category === activeGalleryCategory;
  });

  container.innerHTML = filtered.map(item => `
    <div class="gallery-item" onclick="openLightbox('${item.image}', '${item.title}', '${item.caption}')">
      <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy">
      <div class="gallery-overlay">
        <div class="gallery-overlay-title">${item.title}</div>
        <div class="gallery-overlay-caption">${item.caption}</div>
      </div>
    </div>
  `).join("");
}

window.openLightbox = function(src, title, caption) {
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImage");
  const captionEl = document.getElementById("lightboxCaption");

  if (modal && img && captionEl) {
    img.src = src;
    captionEl.innerHTML = `<strong>${title}</strong><br>${caption}`;
    modal.classList.add("active");
  }
};

/* --------------------------------------------------------------------------
   7. CUSTOM CAKE ENQUIRY MODAL
   -------------------------------------------------------------------------- */
function initCustomCakeModal() {
  const modal = document.getElementById("cakeEnquiryModal");
  const openBtn = document.getElementById("openCakeEnquiryBtn");
  const closeBtn = document.getElementById("closeCakeEnquiryBtn");
  const form = document.getElementById("customCakeForm");

  if (openBtn && modal) {
    openBtn.addEventListener("click", () => openCustomCakeModal());
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("cakeCustName").value.trim();
      const phone = document.getElementById("cakeCustPhone").value.trim();
      const flavour = document.getElementById("cakeFlavour").value;
      const weight = document.getElementById("cakeWeight").value;
      const message = document.getElementById("cakeMessage").value.trim();
      const date = document.getElementById("cakeDate").value;
      const notes = document.getElementById("cakeNotes").value.trim();

      const whatsappNum = (window.TBF_CONFIG && window.TBF_CONFIG.whatsappPlaceholder) || "917266914546";

      let waText = `🎂 *CUSTOM CAKE ENQUIRY — THE BAKERS FARM*\n`;
      waText += `👤 *Name:* ${name}\n`;
      waText += `📞 *Phone:* ${phone}\n`;
      waText += `🍰 *Flavour:* ${flavour}\n`;
      waText += `⚖️ *Weight:* ${weight}\n`;
      if (message) waText += `✍️ *Message on Cake:* "${message}"\n`;
      if (date) waText += `📅 *Needed by:* ${date}\n`;
      if (notes) waText += `📝 *Special Request:* ${notes}\n`;
      waText += `\n_Submitted via thebakersfarm.com custom cake builder_`;

      modal.classList.remove("active");
      form.reset();

      window.open(`https://wa.me/${whatsappNum}?text=${encodeURI(waText)}`, "_blank");
      if (window.tbfCart) window.tbfCart.showToast("Custom cake enquiry forwarded to WhatsApp!");
    });
  }
}

window.openCustomCakeModal = function(prefillFlavour = "") {
  const modal = document.getElementById("cakeEnquiryModal");
  const flavourSelect = document.getElementById("cakeFlavour");
  if (modal) {
    if (prefillFlavour && flavourSelect) {
      flavourSelect.value = prefillFlavour;
    }
    modal.classList.add("active");
  }
};

/* --------------------------------------------------------------------------
   8. CONTACT FORM
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const msg = document.getElementById("contactMessage").value.trim();

    const whatsappNum = (window.TBF_CONFIG && window.TBF_CONFIG.whatsappPlaceholder) || "917266914546";

    const text = `👋 *MESSAGE FROM WEBSITE — THE BAKERS FARM*\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `💬 *Message:* ${msg}\n`;

    form.reset();
    window.open(`https://wa.me/${whatsappNum}?text=${encodeURI(text)}`, "_blank");
    if (window.tbfCart) window.tbfCart.showToast("Thank you! Opening WhatsApp to send message.");
  });
}
