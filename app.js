/* ============================================================
   Catálogo Digital · Lógica y datos
   ============================================================ */

/* ---------- Datos de los negocios demo -------------------- */
const DEMOS = {
  taqueria: {
    name: "Taquería El Corazón",
    tagline: "Sabor que se lleva al alma 🌮",
    emoji: "🌮",
    phone: "5215512345678",
    address: "Av. Insurgentes Sur 123, CDMX",
    hours: "Mar–Dom · 18:00 – 02:00",
    delivery: 25,
    freeDeliveryOver: 300,
    promo: "¡Promo 2x1 en tacos al pastor los martes!",
    categories: ["Tacos", "Tortas", "Antojitos", "Bebidas"],
    products: [
      { id: "t1", cat: "Tacos",    name: "Taco al Pastor",   desc: "3 piezas con piña, cebolla y cilantro",          price: 45,  emoji: "🌮" },
      { id: "t2", cat: "Tacos",    name: "Taco de Asada",    desc: "3 piezas de res asada con guacamole",            price: 55,  emoji: "🥩" },
      { id: "t3", cat: "Tacos",    name: "Taco de Pollo",    desc: "3 piezas de pollo a la plancha",                 price: 45,  emoji: "🍗" },
      { id: "t4", cat: "Tacos",    name: "Taco de Chorizo",  desc: "3 piezas con queso Oaxaca derretido",            price: 50,  emoji: "🌶️" },
      { id: "t5", cat: "Tacos",    name: "Taco de Barbacoa", desc: "3 piezas de res en su caldo",                    price: 55,  emoji: "🍖" },
      { id: "t6", cat: "Tacos",    name: "Taco de Camarón",  desc: "3 piezas empanizados con chipotle",              price: 70,  emoji: "🦐" },
      { id: "t7", cat: "Tacos",    name: "Taco Veggie",      desc: "3 piezas de nopal, champiñón y queso",            price: 45,  emoji: "🌽" },

      { id: "t8", cat: "Tortas",   name: "Torta de Pastor",  desc: "Con piña, cebolla, cilantro y aguacate",          price: 65,  emoji: "🥖" },
      { id: "t9", cat: "Tortas",   name: "Torta de Asada",   desc: "Res asada con queso Oaxaca",                     price: 70,  emoji: "🥪" },
      { id: "t10", cat: "Tortas",  name: "Torta Cubana",     desc: "Pastor, asada, chorizo, jamón y queso",          price: 95,  emoji: "🍔" },
      { id: "t11", cat: "Tortas",  name: "Torta de Jamón",   desc: "Clásica con queso y aguacate",     price: 55,  emoji: "🥙" },

      { id: "t12", cat: "Antojitos", name: "Quesadilla",      desc: "Maíz con queso Oaxaca y epazote",                price: 35,  emoji: "🧀" },
      { id: "t13", cat: "Antojitos", name: "Sopes (3pz)",     desc: "Con frijol, queso y salsa verde",                price: 50,  emoji: "🥟" },
      { id: "t14", cat: "Antojitos", name: "Huarache",        desc: "Frijol, pastor y queso gratinado",               price: 60,  emoji: "🫓" },
      { id: "t15", cat: "Antojitos", name: "Nachos Supremo",  desc: "Totopos con queso, jalapeño y crema",            price: 75,  emoji: "🌮" },
      { id: "t16", cat: "Antojitos", name: "Guacamole",       desc: "Con totopos recién hechos",                      price: 65,  emoji: "🥑" },

      { id: "t17", cat: "Bebidas", name: "Refresco",         desc: "Coca, Sprite, Fanta · 600ml",                    price: 25,  emoji: "🥤" },
      { id: "t18", cat: "Bebidas", name: "Agua de Horchata", desc: "1L · recién preparada",                          price: 35,  emoji: "🥛" },
      { id: "t19", cat: "Bebidas", name: "Agua de Jamaica",  desc: "1L · natural",                                   price: 30,  emoji: "🍹" },
      { id: "t20", cat: "Bebidas", name: "Cerveza",          desc: "Corona, Victoria o Modelo",                      price: 35,  emoji: "🍺" },
      { id: "t21", cat: "Bebidas", name: "Michelada",        desc: "Con clamato y chile en polvo",                   price: 55,  emoji: "🍻" }
    ]
  },

  tienda: {
    name: "Abarrotes Doña Mary",
    tagline: "Todo lo que necesitas, cerca de ti 🛒",
    emoji: "🛒",
    phone: "5215519876543",
    address: "Calle Olivar 56, Col. Centro",
    hours: "Lun–Dom · 07:00 – 22:00",
    delivery: 30,
    freeDeliveryOver: 500,
    promo: "Envío gratis en compras mayores a $500 🚚",
    categories: ["Despensa", "Bebidas", "Botanas", "Lácteos", "Limpieza"],
    products: [
      { id: "d1", cat: "Despensa", name: "Arroz 1kg",         desc: "Calidad premium",                    price: 32,  emoji: "🍚" },
      { id: "d2", cat: "Despensa", name: "Frijol negro 1kg",  desc: "Del bueno",                          price: 42,  emoji: "🫘" },
      { id: "d3", cat: "Despensa", name: "Aceite 1L",         desc: "Puro de canola",                     price: 58,  emoji: "🛢️" },
      { id: "d4", cat: "Despensa", name: "Azúcar 1kg",        desc: "Estándar",                           price: 35,  emoji: "🍬" },
      { id: "d5", cat: "Despensa", name: "Sal 1kg",           desc: "De mesa",                            price: 18,  emoji: "🧂" },
      { id: "d6", cat: "Despensa", name: "Café soluble 200g", desc: "Para los buenos días",               price: 95,  emoji: "☕" },
      { id: "d7", cat: "Despensa", name: "Atún en lata",      desc: "En agua · 140g",                     price: 28,  emoji: "🐟" },
      { id: "d8", cat: "Despensa", name: "Chiles jalapeños",  desc: "Lata · 220g",                        price: 22,  emoji: "🌶️" },

      { id: "d9",  cat: "Bebidas", name: "Coca-Cola 2L",      desc: "Bien fría",                          price: 48,  emoji: "🥤" },
      { id: "d10", cat: "Bebidas", name: "Coca-Cola 600ml",   desc: "Retornable",                         price: 22,  emoji: "🥤" },
      { id: "d11", cat: "Bebidas", name: "Agua 1L",           desc: "Natural",                            price: 15,  emoji: "💧" },
      { id: "d12", cat: "Bebidas", name: "Jugo de naranja 1L", desc: "100% natural",                      price: 38,  emoji: "🍊" },
      { id: "d13", cat: "Bebidas", name: "Cerveza seis",      desc: "Pack de 6 latas",                    price: 145, emoji: "🍺" },
      { id: "d14", cat: "Bebidas", name: "Té frío",           desc: "Limón o durazno · 600ml",            price: 25,  emoji: "🧃" },

      { id: "d15", cat: "Botanas", name: "Sabritas Original", desc: "50g",                                price: 22,  emoji: "🥔" },
      { id: "d16", cat: "Botanas", name: "Cheetos",           desc: "50g",                                price: 22,  emoji: "🌽" },
      { id: "d17", cat: "Botanas", name: "Galletas Marías",   desc: "Paquete familiar",                   price: 28,  emoji: "🍪" },
      { id: "d18", cat: "Botanas", name: "Chicles Trident",   desc: "Pack de 10 piezas",                  price: 25,  emoji: "🍬" },
      { id: "d19", cat: "Botanas", name: "Chocolate Carlos V", desc: "20g",                                price: 12,  emoji: "🍫" },

      { id: "d20", cat: "Lácteos", name: "Leche entera 1L",   desc: "Lala",                               price: 28,  emoji: "🥛" },
      { id: "d21", cat: "Lácteos", name: "Huevo 12pz",        desc: "San Juan · rojos",                   price: 48,  emoji: "🥚" },
      { id: "d22", cat: "Lácteos", name: "Queso Oaxaca 250g", desc: "Fresco del día",                     price: 55,  emoji: "🧀" },
      { id: "d23", cat: "Lácteos", name: "Yogurt natural 1L", desc: "Sin azúcar",                         price: 42,  emoji: "🥄" },
      { id: "d24", cat: "Lácteos", name: "Mantequilla 200g",  desc: "Con sal",                            price: 38,  emoji: "🧈" },

      { id: "d25", cat: "Limpieza", name: "Detergente 1kg",   desc: "Ropa delicada",                      price: 65,  emoji: "🧺" },
      { id: "d26", cat: "Limpieza", name: "Fabuloso 1L",      desc: "Aroma lavanda",                      price: 38,  emoji: "🧴" },
      { id: "d27", cat: "Limpieza", name: "Papel 4pz",        desc: "Doble hoja",                         price: 55,  emoji: "🧻" },
      { id: "d28", cat: "Limpieza", name: "Jabón de manos",   desc: "250ml",                              price: 32,  emoji: "🧼" },
      { id: "d29", cat: "Limpieza", name: "Cloro 1L",         desc: "Desinfectante",                      price: 28,  emoji: "🧪" },
      { id: "d30", cat: "Limpieza", name: "Trapeador",        desc: "Microfibra con mango",               price: 95,  emoji: "🧹" }
    ]
  },

  barberia: {
    name: "Barbería El Navajazo",
    tagline: "Estilo y tradición en cada corte 💈",
    emoji: "💈",
    phone: "5215521234567",
    address: "Calle Hidalgo 45, Roma Norte",
    hours: "Lun–Sáb · 10:00 – 21:00",
    delivery: 0,
    promo: "Reserva tu cita por WhatsApp y obtén un café de cortesía ☕",
    categories: ["Cortes", "Barba", "Servicios extra", "Combos"],
    products: [
      { id: "b1", cat: "Cortes",          name: "Corte clásico",     desc: "Máquina y tijera, lavado incluido",          price: 100, emoji: "✂️" },
      { id: "b2", cat: "Cortes",          name: "Corte moderno",     desc: "Degradado, diseño o rapado",                 price: 130, emoji: "💇" },
      { id: "b3", cat: "Cortes",          name: "Corte niño",        desc: "Hasta 12 años",                              price: 80,  emoji: "👦" },
      { id: "b4", cat: "Cortes",          name: "Corte ejecutivo",   desc: "Acabado premium con navaja",                 price: 160, emoji: "👔" },

      { id: "b5", cat: "Barba",           name: "Arreglo de barba",  desc: "Perfilado con navaja y toalla caliente",     price: 80,  emoji: "🧔" },
      { id: "b6", cat: "Barba",           name: "Barba completa",    desc: "Diseño, navaja y aceite hidratante",          price: 120, emoji: "🪒" },
      { id: "b7", cat: "Barba",           name: "Diseño de cejas",   desc: "Perfilado profesional",                       price: 50,  emoji: "👁️" },

      { id: "b8", cat: "Servicios extra", name: "Lavado de cabello", desc: "Champú premium + masaje",                    price: 60,  emoji: "🚿" },
      { id: "b9", cat: "Servicios extra", name: "Mascarilla negra",  desc: "Carbón activado",                             price: 80,  emoji: "😷" },
      { id: "b10", cat: "Servicios extra", name: "Tinte de cabello", desc: "Color completo a elección",                    price: 280, emoji: "🎨" },
      { id: "b11", cat: "Servicios extra", name: "Planchado",        desc: "Acabado liso profesional",                    price: 90,  emoji: "🔥" },

      { id: "b12", cat: "Combos",          name: "Combo clásico",    desc: "Corte + Barba",                              price: 160, emoji: "🎯", badge: "Popular" },
      { id: "b13", cat: "Combos",          name: "Combo premium",    desc: "Corte ejecutivo + Barba completa + Mascarilla", price: 320, emoji: "👑", badge: "Top" },
      { id: "b14", cat: "Combos",          name: "Combo padre e hijo", desc: "2 cortes clásicos",                       price: 170, emoji: "👨\u200d👦", badge: "-15%" }
    ]
  }
};

/* ---------- Estado -------------------------------------- */
let currentDemo = null;
let cart = [];

/* ---------- Helpers ----------------------------------- */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const money = (n) => `$${n.toLocaleString("es-MX")}`;
const formatPhone = (p) => {
  if (!p) return "—";
  const s = String(p);
  if (s.startsWith("52") && s.length === 13) {
    return `+52 ${s.slice(2, 6)} ${s.slice(6, 9)} ${s.slice(9)}`;
  }
  return s;
};

const cartTotals = () => {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count    = cart.reduce((sum, i) => sum + i.qty, 0);
  return { subtotal, count };
};

/* ---------- Init -------------------------------------- */
function initDemo(key) {
  currentDemo = DEMOS[key];
  if (!currentDemo) return;

  $("[data-business-name]").textContent    = currentDemo.name;
  $("[data-business-tagline]").textContent = currentDemo.tagline;
  $("[data-business-emoji]").textContent   = currentDemo.emoji;
  $("[data-business-address]").textContent = currentDemo.address || "—";
  $("[data-business-hours]").textContent   = currentDemo.hours;
  $("[data-business-phone]").textContent   = formatPhone(currentDemo.phone);
  document.title = `${currentDemo.name} · Pedidos por WhatsApp`;

  renderCategories();
  renderProducts("all");
  renderCart();
}

/* ---------- Categorías ------------------------------- */
function renderCategories() {
  const wrap = $("[data-categories]");
  if (!wrap) return;
  wrap.innerHTML = "";
  const allBtn = document.createElement("button");
  allBtn.className = "chip active";
  allBtn.textContent = "Todo";
  allBtn.dataset.cat = "all";
  wrap.appendChild(allBtn);
  currentDemo.categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.textContent = cat;
    btn.dataset.cat = cat;
    wrap.appendChild(btn);
  });
}

function setActiveCategory(cat) {
  $$(".chip").forEach((c) => c.classList.toggle("active", c.dataset.cat === cat));
  renderProducts(cat);
}

/* ---------- Productos ------------------------------- */
function renderProducts(category) {
  const grid = $("[data-products]");
  if (!grid) return;
  const items = category === "all"
    ? currentDemo.products
    : currentDemo.products.filter((p) => p.cat === category);

  grid.innerHTML = items.map((p) => `
    <article class="card">
      <div class="card-emoji">${p.emoji}</div>
      <div class="card-head">
        <h3>${p.name}</h3>
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
      </div>
      <p class="card-desc">${p.desc}</p>
      <div class="card-foot">
        <span class="price">${money(p.price)}</span>
        <button class="add-btn" data-add="${p.id}" aria-label="Agregar ${p.name} al pedido">+</button>
      </div>
    </article>
  `).join("");
}

/* ---------- Carrito ---------------------------------- */
function addToCart(id) {
  const product = currentDemo.products.find((p) => p.id === id);
  if (!product) return;
  const existing = cart.find((i) => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ id: product.id, name: product.name, price: product.price, qty: 1, emoji: product.emoji });
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  renderCart();
}

function renderCart() {
  const { subtotal, count } = cartTotals();

  $$("[data-cart-count]").forEach((el) => {
    el.textContent = count;
    el.style.display = count > 0 ? "grid" : "none";
  });
  $("[data-cart-fab]")?.classList.toggle("visible", count > 0);
  $("[data-cart-fab-total]").textContent = money(subtotal);

  const cartItems = $("[data-cart-items]");
  if (cartItems) {
    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="empty">
          <div class="empty-icon">🛒</div>
          <p>Tu pedido está vacío</p>
          <span>Agrega productos del menú para empezar</span>
        </div>`;
    } else {
      cartItems.innerHTML = cart.map((i) => `
        <div class="cart-item">
          <div class="cart-item-emoji">${i.emoji}</div>
          <div class="cart-item-body">
            <h4>${i.name}</h4>
            <span class="cart-item-price">${money(i.price * i.qty)}</span>
          </div>
          <div class="qty">
            <button data-action="dec" data-id="${i.id}" aria-label="Quitar uno">−</button>
            <span>${i.qty}</span>
            <button data-action="inc" data-id="${i.id}" aria-label="Agregar uno">+</button>
          </div>
        </div>
      `).join("");
    }
  }

  $$("[data-cart-total]").forEach((el) => el.textContent = money(subtotal));
  const checkoutBtn = $("[data-checkout-btn]");
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
  updateDeliveryInfo();
}

function updateDeliveryInfo() {
  const { subtotal } = cartTotals();
  const freeOver = currentDemo.freeDeliveryOver;
  const delivery = currentDemo.delivery || 0;
  const info = $("[data-delivery-info]");
  if (!info || !freeOver) {
    if (info) info.innerHTML = "";
    return;
  }
  const remaining = freeOver - subtotal;
  if (subtotal >= freeOver) {
    info.innerHTML = `<div class="delivery-ok">✅ ¡Envío gratis! Tu pedido supera ${money(freeOver)}</div>`;
  } else {
    info.innerHTML = `<div class="delivery-progress">🚚 Te faltan <strong>${money(remaining)}</strong> para envío gratis</div>`;
  }
}

/* ---------- Paneles (abrir/cerrar) ---------------- */
function openPanel(selector) {
  $("[data-overlay]")?.classList.add("visible");
  $(selector)?.classList.add("open");
}
function closeAllPanels() {
  $("[data-overlay]")?.classList.remove("visible");
  $$(".panel.open").forEach((p) => p.classList.remove("open"));
}
function openCart()       { openPanel("[data-cart-panel]"); }
function openCheckout()   { openPanel("[data-checkout-panel]"); }

/* ---------- Enviar pedido por WhatsApp -------------- */
function placeOrder() {
  if (cart.length === 0) return;
  const name     = $("[data-name]")?.value.trim()     || "";
  const phone    = $("[data-phone]")?.value.trim()    || "";
  const address  = $("[data-address]")?.value.trim()  || "";
  const notes    = $("[data-notes]")?.value.trim()    || "";
  const mode     = $("[data-mode]:checked")?.value    || "pickup";
  const payment  = $("[data-payment]:checked")?.value || "cash";

  if (!name) {
    $("[data-name]").focus();
    $("[data-name]").reportValidity();
    return;
  }

  const { subtotal } = cartTotals();
  let delivery = 0;
  if (mode === "delivery" && currentDemo.delivery) {
    const freeOver = currentDemo.freeDeliveryOver || 0;
    delivery = subtotal >= freeOver ? 0 : currentDemo.delivery;
  }
  const total = subtotal + delivery;

  const lines = cart.map((i) => `• ${i.qty}× ${i.name} — ${money(i.price * i.qty)}`);
  const date = new Date().toLocaleString("es-MX", {
    dateStyle: "full",
    timeStyle: "short"
  });

  let msg = `¡Hola *${currentDemo.name}*! 👋 Quiero hacer un pedido:\n\n`;
  msg += lines.join("\n") + "\n";
  msg += `\nSubtotal: ${money(subtotal)}`;
  if (mode === "delivery") {
    msg += `\nEnvío: ${delivery === 0 ? "GRATIS 🎁" : money(delivery)}`;
  }
  msg += `\n*Total: ${money(total)}*\n`;
  msg += `\n*Cliente:* ${name}`;
  if (phone) msg += `\n*Teléfono:* ${phone}`;
  msg += `\n*Entrega:* ${mode === "delivery" ? "A domicilio 🛵" : "Recoger en local 🏪"}`;
  if (mode === "delivery" && address) msg += `\n*Dirección:* ${address}`;
  const payLabel = { cash: "Efectivo 💵", transfer: "Transferencia 📲", card: "Tarjeta 💳" }[payment] || payment;
  msg += `\n*Pago:* ${payLabel}`;
  if (notes) msg += `\n*Notas:* ${notes}`;
  msg += `\n\n_Pedido generado el ${date}_`;
  msg += `\n\n¿Podrían confirmar disponibilidad y tiempo? 🙌`;

  const url = `https://wa.me/${currentDemo.phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/* ---------- Listeners (delegación) ----------------- */
document.addEventListener("click", (e) => {
  const addBtn = e.target.closest("[data-add]");
  if (addBtn) {
    addToCart(addBtn.dataset.add);
    addBtn.animate(
      [{ transform: "scale(1)" }, { transform: "scale(1.3)" }, { transform: "scale(1)" }],
      { duration: 320, easing: "cubic-bezier(.34, 1.56, .64, 1)" }
    );
    return;
  }

  const chip = e.target.closest(".chip");
  if (chip) {
    setActiveCategory(chip.dataset.cat);
    return;
  }

  if (e.target.closest("[data-cart-fab]"))      return openCart();
  if (e.target.closest("[data-close-cart]"))     return closeAllPanels();
  if (e.target.closest("[data-overlay]"))       return closeAllPanels();
  if (e.target.closest("[data-checkout-btn]"))   return openCheckout();
  if (e.target.closest("[data-close-checkout]")) return closeAllPanels();
  if (e.target.closest("[data-place-order]"))    return placeOrder();

  const qtyBtn = e.target.closest("[data-action]");
  if (qtyBtn) {
    changeQty(qtyBtn.dataset.id, qtyBtn.dataset.action === "inc" ? 1 : -1);
    return;
  }
});

/* ---------- Arranque ------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const key = document.body.dataset.demo;
  if (key && DEMOS[key]) initDemo(key);
});