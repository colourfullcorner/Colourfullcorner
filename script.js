/* ==========================================================
   Colourfull Corner — script.js
   ========================================================== */

// ---- CONFIGURE YOUR CONTACT DETAILS HERE ----
const CONFIG = {
  whatsappNumber: "01679317465",     // full number, no + or spaces
  messengerUsername: "colourfullcorner" // your Facebook Page/Messenger username
};

// ---- PRODUCT DATA ----
const PRODUCTS = [
  {
    id: "p1",
    name: "Sunset Weave Tote",
    category: "bags",
    price: 1450,
    desc: "Hand-woven canvas tote in a coral-to-sun gradient, roomy enough for a full day out.",
    img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=600&auto=format&fit=crop",
    featured: true
  },
  {
    id: "p2",
    name: "Turquoise Drop Earrings",
    category: "jewelry",
    price: 590,
    desc: "Lightweight resin drops in a deep teal, finished with brass hooks.",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",
    featured: true
  },
  {
    id: "p3",
    name: "Rainbow Stack Mug",
    category: "home",
    price: 750,
    desc: "Ceramic mug hand-dipped in three colours, no two are ever identical.",
    img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600&auto=format&fit=crop",
    featured: true
  },
  {
    id: "p4",
    name: "Confetti Notebook",
    category: "stationery",
    price: 420,
    desc: "A5 dot-grid notebook with a speckled colour-block cover.",
    img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "p5",
    name: "Lilac Knot Bracelet",
    category: "jewelry",
    price: 380,
    desc: "Adjustable braided bracelet in soft lilac and gold thread.",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "p6",
    name: "Citrus Crossbody Bag",
    category: "bags",
    price: 1650,
    desc: "Compact crossbody in sunflower yellow with a woven strap.",
    img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "p7",
    name: "Colour Block Cushion",
    category: "home",
    price: 980,
    desc: "Cotton cushion cover with a bold three-tone panel design.",
    img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "p8",
    name: "Paint Chip Sticky Notes",
    category: "stationery",
    price: 250,
    desc: "Set of 6 sticky note pads shaped like paint swatches.",
    img: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?q=80&w=600&auto=format&fit=crop"
  }
];

const currency = (n) => `৳${n.toLocaleString("en-BD")}`;

// ---- BUILD CHAT LINKS ----
function waLink(message){
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
function messengerLink(){
  return `https://m.me/${CONFIG.messengerUsername}`;
}

function wireChatButtons(){
  const generalMsg = "Hi Colourfull Corner! I'd like to know more about your products.";
  document.getElementById("heroWhatsapp").href = waLink(generalMsg);
  document.getElementById("contactWhatsapp").href = waLink(generalMsg);
  document.getElementById("contactMessenger").href = messengerLink();
  document.getElementById("footerWhatsapp").href = waLink(generalMsg);
  document.getElementById("footerMessenger").href = messengerLink();
  document.getElementById("fabWhatsapp").href = waLink(generalMsg);
  document.getElementById("fabMessenger").href = messengerLink();
}

// ---- PRODUCT CARD RENDERING ----
function productCard(p){
  const buyMsg = `Hi! I'd like to order: ${p.name} (${currency(p.price)}). Is it in stock?`;
  return `
    <article class="product-card" data-category="${p.category}">
      <div class="product-media">
        <span class="category-tag">${p.category}</span>
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <span class="price-tag">${currency(p.price)}</span>
          <a class="btn btn-buy" href="${waLink(buyMsg)}" target="_blank" rel="noopener">Buy Now</a>
        </div>
      </div>
    </article>
  `;
}

function renderFeatured(){
  const el = document.getElementById("featuredGrid");
  el.innerHTML = PRODUCTS.filter(p => p.featured).map(productCard).join("");
}

function renderProducts(filter = "all"){
  const el = document.getElementById("productGrid");
  const list = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  el.innerHTML = list.map(productCard).join("");
}

function wireFilters(){
  const bar = document.getElementById("filterBar");
  bar.addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if(!chip) return;
    bar.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    renderProducts(chip.dataset.filter);
  });
}

// ---- PAGE NAVIGATION (single-page app style) ----
function goToPage(name){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const target = document.getElementById(`page-${name}`);
  if(target) target.classList.add("active");

  document.querySelectorAll(".nav-link").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.nav === name);
  });

  const nav = document.getElementById("mainNav");
  nav.classList.remove("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");

  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  history.replaceState(null, "", `#${name}`);
}

function wireNavigation(){
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      goToPage(el.dataset.nav);
    });
  });

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  const initial = window.location.hash.replace("#", "") || "home";
  goToPage(["home","products","about","contact"].includes(initial) ? initial : "home");
}

// ---- CONTACT FORM VALIDATION ----
function wireContactForm(){
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  const fields = {
    name: { input: document.getElementById("cf-name"), error: document.getElementById("err-name") },
    email: { input: document.getElementById("cf-email"), error: document.getElementById("err-email") },
    message: { input: document.getElementById("cf-message"), error: document.getElementById("err-message") }
  };

  function setError(key, message){
    const row = fields[key].input.closest(".form-row");
    fields[key].error.textContent = message || "";
    row.classList.toggle("invalid", Boolean(message));
  }

  function validate(){
    let ok = true;
    const name = fields.name.input.value.trim();
    const email = fields.email.input.value.trim();
    const message = fields.message.input.value.trim();

    if(!name){ setError("name", "Please enter your name."); ok = false; }
    else setError("name", "");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email){ setError("email", "Please enter your email."); ok = false; }
    else if(!emailPattern.test(email)){ setError("email", "Please enter a valid email."); ok = false; }
    else setError("email", "");

    if(!message || message.length < 10){ setError("message", "Message should be at least 10 characters."); ok = false; }
    else setError("message", "");

    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    if(!validate()){
      status.textContent = "Please fix the highlighted fields.";
      status.classList.add("error");
      return;
    }

    // No backend attached — simulate a successful send.
    status.textContent = "Thanks! Your message has been sent. We'll reply within a day.";
    status.classList.add("success");
    form.reset();
  });

  Object.keys(fields).forEach(key => {
    fields[key].input.addEventListener("input", () => setError(key, ""));
  });
}

// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  wireChatButtons();
  renderFeatured();
  renderProducts();
  wireFilters();
  wireNavigation();
  wireContactForm();
});
