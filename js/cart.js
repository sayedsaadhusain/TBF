/**
 * THE BAKERS FARM (TBF) - Shopping Cart & WhatsApp Ordering Engine
 */

class TBFCart {
  constructor() {
    this.items = this.loadCart();
    this.orderType = "pickup"; // "pickup" or "delivery"
    this.initElements();
    this.bindEvents();
    this.render();
  }

  loadCart() {
    try {
      const saved = localStorage.getItem("tbf_cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to parse cart storage", e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem("tbf_cart", JSON.stringify(this.items));
    } catch (e) {
      console.error("Failed to save cart storage", e);
    }
  }

  initElements() {
    this.drawer = document.getElementById("cartDrawer");
    this.overlay = document.getElementById("cartOverlay");
    this.triggerBtn = document.getElementById("cartTrigger");
    this.closeBtn = document.getElementById("cartClose");
    this.badge = document.getElementById("cartBadge");
    this.itemsList = document.getElementById("cartItemsList");
    this.emptyState = document.getElementById("cartEmptyState");
    this.totalEl = document.getElementById("cartTotalAmount");
    this.whatsappBtn = document.getElementById("cartWhatsappCheckout");
    
    // Customer Details
    this.nameInput = document.getElementById("customerName");
    this.phoneInput = document.getElementById("customerPhone");
    this.addressInput = document.getElementById("customerAddress");
    this.notesInput = document.getElementById("customerNotes");
    
    // Delivery Toggles
    this.pickupBtn = document.getElementById("togglePickup");
    this.deliveryBtn = document.getElementById("toggleDelivery");
  }

  bindEvents() {
    if (this.triggerBtn) {
      this.triggerBtn.addEventListener("click", () => this.open());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.close());
    }

    if (this.overlay) {
      this.overlay.addEventListener("click", () => this.close());
    }

    if (this.pickupBtn && this.deliveryBtn) {
      this.pickupBtn.addEventListener("click", () => {
        this.orderType = "pickup";
        this.pickupBtn.classList.add("active");
        this.deliveryBtn.classList.remove("active");
        if (this.addressInput) this.addressInput.placeholder = "Table No. or Pickup Note (optional)";
      });

      this.deliveryBtn.addEventListener("click", () => {
        this.orderType = "delivery";
        this.deliveryBtn.classList.add("active");
        this.pickupBtn.classList.remove("active");
        if (this.addressInput) this.addressInput.placeholder = "Delivery Address (Aliganj & nearby)";
      });
    }

    if (this.whatsappBtn) {
      this.whatsappBtn.addEventListener("click", () => this.checkoutViaWhatsApp());
    }
  }

  open() {
    if (this.drawer && this.overlay) {
      this.drawer.classList.add("active");
      this.overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  close() {
    if (this.drawer && this.overlay) {
      this.drawer.classList.remove("active");
      this.overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  addItem(product, chosenPrice = null, chosenUnit = null) {
    const price = chosenPrice !== null ? chosenPrice : product.price;
    const unit = chosenUnit || product.unit || "";
    const itemId = chosenUnit ? `${product.id}-${chosenUnit.replace(/\s+/g, '')}` : product.id;

    const existingIndex = this.items.findIndex(item => item.id === itemId);

    if (existingIndex > -1) {
      this.items[existingIndex].qty += 1;
    } else {
      this.items.push({
        id: itemId,
        baseId: product.id,
        name: product.name,
        price: price,
        unit: unit,
        diet: product.diet || "veg",
        qty: 1
      });
    }

    this.saveCart();
    this.render();
    this.showToast(`Added "${product.name}" to cart!`);
  }

  updateQty(itemId, delta) {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index > -1) {
      this.items[index].qty += delta;
      if (this.items[index].qty <= 0) {
        this.items.splice(index, 1);
      }
      this.saveCart();
      this.render();
    }
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  getTotalCount() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  }

  render() {
    const totalCount = this.getTotalCount();
    const totalPrice = this.getTotal();

    // Update Badge
    if (this.badge) {
      this.badge.textContent = totalCount;
      this.badge.style.display = totalCount > 0 ? "flex" : "none";
    }

    // Update Total Amount
    if (this.totalEl) {
      this.totalEl.textContent = `₹${totalPrice.toLocaleString("en-IN")}`;
    }

    // Toggle Empty State vs List
    if (this.items.length === 0) {
      if (this.emptyState) this.emptyState.style.display = "block";
      if (this.itemsList) this.itemsList.innerHTML = "";
      if (this.whatsappBtn) this.whatsappBtn.disabled = true;
      return;
    }

    if (this.emptyState) this.emptyState.style.display = "none";
    if (this.whatsappBtn) this.whatsappBtn.disabled = false;

    if (this.itemsList) {
      this.itemsList.innerHTML = this.items.map(item => `
        <div class="cart-item">
          <div class="cart-item-info">
            <div class="cart-item-title">
              <span class="diet-indicator ${item.diet}"></span>
              ${item.name}
            </div>
            <div class="cart-item-unit-price">
              ${item.unit ? `[${item.unit}] ` : ''}₹${item.price} × ${item.qty} = <strong>₹${(item.price * item.qty).toLocaleString("en-IN")}</strong>
            </div>
          </div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="window.tbfCart.updateQty('${item.id}', -1)" title="Decrease">－</button>
            <span class="cart-item-qty">${item.qty}</span>
            <button class="qty-btn" onclick="window.tbfCart.updateQty('${item.id}', 1)" title="Increase">＋</button>
          </div>
        </div>
      `).join("");
    }
  }

  checkoutViaWhatsApp() {
    if (this.items.length === 0) {
      alert("Your cart is empty. Please select some delicious items first!");
      return;
    }

    const name = this.nameInput ? this.nameInput.value.trim() : "";
    const phone = this.phoneInput ? this.phoneInput.value.trim() : "";
    const address = this.addressInput ? this.addressInput.value.trim() : "";
    const notes = this.notesInput ? this.notesInput.value.trim() : "";

    const whatsappNum = (window.TBF_CONFIG && window.TBF_CONFIG.whatsappPlaceholder) 
      ? window.TBF_CONFIG.whatsappPlaceholder 
      : "919000000000";

    const dateStr = new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });

    let message = `🍰 *NEW ORDER — THE BAKERS FARM (TBF)*\n`;
    message += `📍 *Time:* ${dateStr}\n`;
    message += `🛍️ *Order Type:* ${this.orderType === "delivery" ? "🚀 Home Delivery" : "🏪 Café Takeaway / Dine-in"}\n`;
    
    if (name) message += `👤 *Customer Name:* ${name}\n`;
    if (phone) message += `📞 *Phone:* ${phone}\n`;
    if (address) message += `🏠 *Address / Table:* ${address}\n`;
    if (notes) message += `📝 *Notes / Request:* ${notes}\n`;

    message += `\n📋 *ITEMS ORDERED:*\n`;
    this.items.forEach((item, idx) => {
      const unitPart = item.unit ? ` (${item.unit})` : "";
      message += `${idx + 1}. ${item.name}${unitPart} × ${item.qty} = ₹${(item.price * item.qty).toLocaleString("en-IN")}\n`;
    });

    message += `\n💰 *TOTAL BILL:* ₹${this.getTotal().toLocaleString("en-IN")}\n`;
    message += `--------------------------------\n`;
    message += `_Ordered via thebakersfarm.com website_`;

    const encoded = encodeURI(message);
    const waUrl = `https://wa.me/${whatsappNum}?text=${encoded}`;

    window.open(waUrl, "_blank");
  }

  showToast(message) {
    let container = document.getElementById("toastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "toastContainer";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>✨</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(20px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
}

// Instantiate globally
document.addEventListener("DOMContentLoaded", () => {
  window.tbfCart = new TBFCart();
});
