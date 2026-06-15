// Product Database
const PRODUCTS = [
    {
        id: 1,
        name: "Cozy Matching Family Pajamas",
        category: "clothing",
        price: 49.99,
        image: "assets/product_pajamas.png",
        rating: 4.8,
        reviewsCount: 32,
        badge: "Best Seller",
        description: "Crafted from 100% organic cotton, these matching pajama sets bring the whole family closer in comfort. Breathable, hypoallergenic, and featuring a beautiful hand-drawn grid pattern.",
        features: ["100% GOTS Certified Organic Cotton", "Available in all sizes (infant to adult)", "Elastic waistband for maximum comfort", "Machine washable and pre-shrunk"],
        reviews: [
            { author: "Elena R.", stars: 5, text: "Absolutely love these! Super soft and fits the kids perfectly." },
            { author: "Marcus T.", stars: 4, text: "Great quality cotton. Shrunk a tiny bit in hot dryer, but still comfy." }
        ]
    },
    {
        id: 2,
        name: "Minimalist Wooden Board Game Set",
        category: "experiences",
        price: 34.99,
        image: "assets/product_board_game.png",
        rating: 4.9,
        reviewsCount: 18,
        badge: "Designer Edition",
        description: "Reimagine family game night with this heirloom-quality wooden board game set. Featuring elegant geometric playing blocks and a solid oak base, it serves as beautiful home decor when not in play.",
        features: ["Solid white oak and walnut wood", "Eco-friendly natural wax finish", "Includes velvet storage pouch for pieces", "Designed for ages 6 to 99"],
        reviews: [
            { author: "Liam K.", stars: 5, text: "Stunning craftsmanship. Looks gorgeous on the coffee table!" },
            { author: "Sarah P.", stars: 5, text: "The kids actually put their tablets away for this game." }
        ]
    },
    {
        id: 3,
        name: "Aesthetic Ceramic Parent Coffee Mugs (Set of 2)",
        category: "parents",
        price: 28.00,
        image: "assets/parents.png",
        rating: 4.7,
        reviewsCount: 45,
        badge: "New Arrival",
        description: "Start your morning ritual together. These hand-thrown stoneware coffee mugs feature a custom terracotta and cream glaze. Designed to sit comfortably in your hands, holding 12oz of your favorite brew.",
        features: ["Handmade ceramic stoneware", "Dishwasher and microwave safe", "Comfort-grip ergonomic handle", "Unique variations in glaze pattern"],
        reviews: [
            { author: "David H.", stars: 5, text: "Excellent weight and texture. Keep my coffee warm longer." },
            { author: "Emily G.", stars: 4, text: "Beautiful glaze. One mug is slightly larger than the other, unique handmade touch." }
        ]
    },
    {
        id: 4,
        name: "Organic Cotton Linen Blend Throw Blanket",
        category: "parents",
        price: 65.00,
        image: "assets/parents.png",
        rating: 4.6,
        reviewsCount: 22,
        badge: "Cozy Essential",
        description: "Add a layer of warmth to your family room. This heavy-knit blend of cotton and linen offers beautiful texture and breathable warmth. Sized generously for family snuggles on the couch.",
        features: ["55% organic cotton, 45% natural linen", "Dimensions: 60\" x 80\"", "Oeko-Tex certified (free of harmful chemicals)", "Tassel edge detailing"],
        reviews: [
            { author: "Clara V.", stars: 5, text: "Perfect weight for summer. Terracotta color matches our sofa perfectly." },
            { author: "Julian S.", stars: 4, text: "Soft, though slightly rougher than 100% cotton due to the linen. Very aesthetic." }
        ]
    },
    {
        id: 5,
        name: "Organic Pastel Wooden Building Blocks",
        category: "kids",
        price: 39.99,
        image: "assets/kids.png",
        rating: 4.9,
        reviewsCount: 61,
        badge: "Eco-Friendly",
        description: "Encourage open-ended creative play with this set of 30 solid wood blocks. Hand-painted in non-toxic water-based pastel colors, these blocks help develop fine motor skills and spatial awareness.",
        features: ["Sustainably harvested beechwood", "Non-toxic, lead-free water glazes", "Includes organic cotton drawstring storage bag", "Meets all ASTM and EN71 safety standards"],
        reviews: [
            { author: "Jessica M.", stars: 5, text: "So much better than plastic. The colors are beautiful and muted." },
            { author: "Toby F.", stars: 5, text: "Extremely durable. My toddler builds towers for hours." }
        ]
    },
    {
        id: 6,
        name: "Handcrafted Wooden Toy Racing Car",
        category: "kids",
        price: 18.50,
        image: "assets/kids.png",
        rating: 4.5,
        reviewsCount: 14,
        badge: "",
        description: "A timeless classic for your child's toy chest. This sleek wooden racer rolls smoothly on any surface, built robustly to survive generations of imaginative playtime adventures.",
        features: ["Made from single-piece cherry wood", "Smooth rolling rubber-rimmed wheels", "Sized perfectly for little hands", "Zero metal parts or screws"],
        reviews: [
            { author: "Oliver N.", stars: 4, text: "Good simple toy. Moves very smoothly." },
            { author: "Grace W.", stars: 5, text: "Beautiful minimalist lines. Looks nice sitting on the shelf too." }
        ]
    },
    {
        id: 7,
        name: "Minimalist Stoneware Pet Food Bowl",
        category: "pets",
        price: 22.00,
        image: "assets/pets.png",
        rating: 4.8,
        reviewsCount: 29,
        badge: "Top Rated",
        description: "Give your family pet the premium dining experience. This heavy-bottomed stoneware bowl stays in place during feeding, featuring a sleek, easy-to-clean semi-matte food-grade glaze.",
        features: ["High-durability stoneware ceramic", "Weighted base prevents tipping/sliding", "Lead-free food-safe glaze", "Dishwasher safe for easy cleanup"],
        reviews: [
            { author: "Arthur C.", stars: 5, text: "Excellent dog bowl. My Golden Retriever doesn't slide this across the floor!" },
            { author: "Maya L.", stars: 4, text: "Love the minimal design. Super easy to wipe clean." }
        ]
    },
    {
        id: 8,
        name: "Premium Full-Grain Leather Dog Collar",
        category: "pets",
        price: 29.99,
        image: "assets/pets.png",
        rating: 4.7,
        reviewsCount: 19,
        badge: "",
        description: "A blend of luxury and durability. Crafted from vegetable-tanned full-grain leather, this collar ages beautifully, developing a rich patina over time. Finished with heavy-duty brass hardware.",
        features: ["100% full-grain vegetable-tanned leather", "Solid brass buckle and D-ring", "Reinforced stitching at stress points", "Adjustable length for a perfect fit"],
        reviews: [
            { author: "Winston G.", stars: 5, text: "High quality leather. Smells great and looks amazing on my labrador." },
            { author: "Chloe R.", stars: 4, text: "Slightly stiff initially, but softened up beautifully after a week." }
        ]
    }
];

// App State
let cart = JSON.parse(localStorage.getItem('family_store_cart')) || [];
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'default';
let activePriceFilter = 'all'; // 'all', 'under-1500', '1500-3500', 'over-3500'
let activeRatingFilter = 'all'; // 'all', 4.8, 4.6

// Currency Setup (1 USD = 83.5 INR)
let currentCurrency = localStorage.getItem('currency') || 'USD';
const EXCHANGE_RATE = 83.5;

// Firebase Auth Simulation & Setup
let currentUser = JSON.parse(localStorage.getItem('family_store_current_user')) || null;
let isRealFirebase = false;

// DOM Selectors
const productsGrid = document.getElementById('products-grid');
const filterPills = document.querySelectorAll('.filter-pill');
const sortSelect = document.getElementById('sort-select');
const searchInput = document.getElementById('search-input');
const cartBtn = document.getElementById('cart-btn');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCountBadge = document.getElementById('cart-count');
const cartSubtotalVal = document.getElementById('cart-subtotal-val');
const cartShippingVal = document.getElementById('cart-shipping-val');
const cartTotalVal = document.getElementById('cart-total-val');
const checkoutBtn = document.getElementById('checkout-btn');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');
const modalOverlay = document.getElementById('modal-overlay');
const modalWrapper = document.getElementById('modal-wrapper');
const toastNotification = document.getElementById('toast-notification');
const toastMessage = document.getElementById('toast-message');

const currencySelect = document.getElementById('currency-select');
const authStatusDot = document.getElementById('auth-status-dot');
const authModalOverlay = document.getElementById('auth-modal-overlay');

// Carousel Slide State
let currentSlideIndex = 0;
let carouselInterval;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCurrency();
    initFirebaseConnection();
    renderProducts();
    updateCartUI();
    setupEventListeners();
    startCarouselAutoPlay();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Currency Conversion & Format Helper
function initCurrency() {
    currencySelect.value = currentCurrency;
    updateCurrencyLabelLabels();
}

function handleCurrencyChange(e) {
    currentCurrency = e.target.value;
    localStorage.setItem('currency', currentCurrency);
    updateCurrencyLabelLabels();
    renderProducts();
    updateCartUI();
}

function formatPrice(usdPrice) {
    if (currentCurrency === 'INR') {
        const inrPrice = Math.round(usdPrice * EXCHANGE_RATE);
        return `₹${inrPrice.toLocaleString('en-IN')}`;
    }
    return `$${usdPrice.toFixed(2)}`;
}

// Helper to update the static texts displaying currency equivalents
function updateCurrencyLabelLabels() {
    const labels = document.querySelectorAll('.price-range-lbl');
    labels.forEach(lbl => {
        const usdVal = parseFloat(lbl.dataset.usd);
        lbl.textContent = formatPrice(usdVal);
    });

    const note = document.getElementById('free-shipping-note');
    note.textContent = `Free shipping on orders over ${formatPrice(75.00)}`;
}

// SPA View Page Router
function switchTab(tabId) {
    // 1. Toggle active classes on SPA views
    const sections = document.querySelectorAll('.spa-section');
    sections.forEach(sec => sec.classList.remove('active'));
    
    const targetSection = document.getElementById(`section-${tabId}`);
    if (targetSection) targetSection.classList.add('active');

    // 2. Toggle active classes on header nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.getElementById(`tab-${tabId}`);
    if (activeLink) activeLink.classList.add('active');

    // 3. Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 4. Hide/Show search bar depending on whether we are in the shop section
    const searchBar = document.querySelector('.search-bar-container');
    if (tabId === 'shop') {
        searchBar.style.opacity = '1';
        searchBar.style.pointerEvents = 'auto';
    } else {
        searchBar.style.opacity = '0.3';
        searchBar.style.pointerEvents = 'none';
    }
}

// Hero Carousel controls
function startCarouselAutoPlay() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        moveSlide(1);
    }, 6000);
}

function moveSlide(delta) {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    
    let newIndex = currentSlideIndex + delta;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;
    
    setSlide(newIndex);
}

function setSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    if (slides.length === 0) return;

    currentSlideIndex = index;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add('active');
    
    startCarouselAutoPlay(); // Reset interval timer on click
}

// Multi-Filter Configurations
function setPriceFilter(range) {
    activePriceFilter = range;
    renderProducts();
}

function setRatingFilter(minRating) {
    activeRatingFilter = minRating === 'all' ? 'all' : parseFloat(minRating);
    renderProducts();
}

// Render Products Grid combining ALL active filters
function renderProducts() {
    let filtered = PRODUCTS.filter(p => {
        // 1. Category Filter
        const matchesCategory = (currentCategory === 'all') || (p.category === currentCategory);
        
        // 2. Search Query Filter
        const query = searchQuery.trim().toLowerCase();
        const matchesSearch = (query === '') || 
            p.name.toLowerCase().includes(query) || 
            p.description.toLowerCase().includes(query);
            
        // 3. Price Filter (Ranges in USD limits)
        // 'under-1500' -> < $20
        // '1500-3500' -> $20 - $45
        // 'over-3500' -> > $45
        let matchesPrice = true;
        if (activePriceFilter === 'under-1500') {
            matchesPrice = p.price < 20;
        } else if (activePriceFilter === '1500-3500') {
            matchesPrice = p.price >= 20 && p.price <= 45;
        } else if (activePriceFilter === 'over-3500') {
            matchesPrice = p.price > 45;
        }

        // 4. Rating Filter
        let matchesRating = true;
        if (activeRatingFilter !== 'all') {
            matchesRating = p.rating >= activeRatingFilter;
        }

        return matchesCategory && matchesSearch && matchesPrice && matchesRating;
    });

    // Sort Products
    if (currentSort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    productsGrid.innerHTML = '';
    
    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-cart-message" style="grid-column: 1 / -1; padding: 4rem 0;">
                <i class="fas fa-search empty-cart-icon"></i>
                <p>No products match your active compound filters.</p>
                <button onclick="resetFilters()" class="filter-pill active" style="margin-top: 1rem; cursor: pointer;">Reset All Filters</button>
            </div>
        `;
        return;
    }

    filtered.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let starsHTML = '';
        const roundedRating = Math.round(product.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= roundedRating) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }

        productCard.innerHTML = `
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-img-wrapper" onclick="openProductDetail(${product.id})">
                <img class="product-img" src="${product.image}" alt="${product.name}">
                <button class="product-quickview-btn">
                    <i class="fas fa-eye"></i> Details View
                </button>
            </div>
            <div class="product-details">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title" onclick="openProductDetail(${product.id})">${product.name}</h3>
                <div class="product-rating">
                    ${starsHTML}
                    <span>(${product.reviewsCount})</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart-btn" aria-label="Add to Cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

function resetFilters() {
    currentCategory = 'all';
    searchQuery = '';
    currentSort = 'default';
    activePriceFilter = 'all';
    activeRatingFilter = 'all';
    
    searchInput.value = '';
    sortSelect.value = 'default';
    
    // Reset inputs & buttons in HTML
    document.querySelectorAll('.filter-pill').forEach(pill => {
        if (pill.dataset.category === 'all') pill.classList.add('active');
        else pill.classList.remove('active');
    });

    const priceRadios = document.getElementsByName('price-range');
    priceRadios.forEach(radio => {
        if (radio.value === 'all') radio.checked = true;
    });

    const ratingRadios = document.getElementsByName('rating-filter');
    ratingRadios.forEach(radio => {
        if (radio.value === 'all') radio.checked = true;
    });
    
    renderProducts();
}

// Shopping Bag Management
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`Added "${product.name}" to bag!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('family_store_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadge.textContent = totalQty;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-bag empty-cart-icon"></i>
                <p>Your bag is empty.</p>
            </div>
        `;
        cartSubtotalVal.textContent = formatPrice(0);
        cartShippingVal.textContent = formatPrice(0);
        cartTotalVal.textContent = formatPrice(0);
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.5';
        checkoutBtn.style.cursor = 'not-allowed';
    } else {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img class="cart-item-img" src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">${formatPrice(item.price * item.quantity)}</span>
                    <div class="cart-item-controls">
                        <div class="quantity-selector">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash-alt"></i> Remove
                        </button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemEl);
        });

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal >= 75 ? 0 : 5.99;
        const total = subtotal + shipping;

        cartSubtotalVal.textContent = formatPrice(subtotal);
        cartShippingVal.textContent = shipping === 0 ? "Free" : formatPrice(shipping);
        cartTotalVal.textContent = formatPrice(total);
        
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = '1';
        checkoutBtn.style.cursor = 'pointer';
    }
}

// Toast Notification
let toastTimeout;
function showToast(message) {
    clearTimeout(toastTimeout);
    toastMessage.textContent = message;
    toastNotification.classList.add('show');
    toastTimeout = setTimeout(() => {
        toastNotification.classList.remove('show');
    }, 3000);
}

// Cart Drawer open/close
function openCartDrawer() {
    cartDrawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
    cartDrawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

// Modal Details View
function openProductDetail(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Build features bullet points
    const featuresHTML = product.features.map(f => `<li><i class="fas fa-check-circle" style="color: var(--secondary);"></i> ${f}</li>`).join('');
    
    // Build simulated customer reviews
    const reviewsHTML = product.reviews.map(r => `
        <div class="modal-review-item">
            <div class="review-author-row">
                <span>${r.author}</span>
                <span class="review-author-stars">
                    ${'<i class="fas fa-star"></i>'.repeat(r.stars)}
                </span>
            </div>
            <p class="review-content">"${r.text}"</p>
        </div>
    `).join('');

    // Filter related products (same category, excluding current)
    const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 2);
    let relatedHTML = '';
    if (related.length > 0) {
        relatedHTML = `
            <h4 class="modal-review-heading" style="margin-top: 1.5rem;">Related Family Goods</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 0.5rem;">
                ${related.map(rel => `
                    <div style="display: flex; gap: 0.5rem; align-items: center; cursor: pointer; border: 1px solid var(--border-color); padding: 0.5rem; border-radius: var(--radius-sm);" onclick="openProductDetail(${rel.id})">
                        <img src="${rel.image}" style="width: 44px; height: 44px; border-radius: 4px;" alt="${rel.name}">
                        <div style="overflow: hidden;">
                            <h5 style="font-size: 0.8rem; font-weight:600; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">${rel.name}</h5>
                            <span style="font-size: 0.75rem; color: var(--primary); font-weight:700;">${formatPrice(rel.price)}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    modalWrapper.innerHTML = `
        <div class="quickview-layout">
            <div class="quickview-img-side">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="quickview-info-side">
                <span class="product-category" style="margin-bottom: 0.25rem; display: block;">${product.category}</span>
                <h2 class="quickview-title">${product.name}</h2>
                <div class="product-rating" style="margin-bottom: 1rem;">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span style="color: var(--text-muted)">(${product.reviewsCount} reviews)</span>
                </div>
                <div class="quickview-price">${formatPrice(product.price)}</div>
                <p class="quickview-desc">${product.description}</p>
                <ul class="quickview-features">
                    ${featuresHTML}
                </ul>
                <div class="quickview-buy-row">
                    <button class="quickview-add-btn" onclick="addToCart(${product.id}); closeModal();">
                        <i class="fas fa-shopping-bag"></i> Add to Bag
                    </button>
                </div>
                
                <!-- Expanded: customer reviews -->
                <h4 class="modal-review-heading">Verified Family Reviews</h4>
                <div class="modal-reviews-list">
                    ${reviewsHTML}
                </div>

                <!-- Expanded: related recommendations -->
                ${relatedHTML}
            </div>
        </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function openCheckoutSuccess(paymentId) {
    modalWrapper.innerHTML = `
        <div class="success-modal-layout">
            <div class="success-icon-wrapper">
                <i class="fas fa-check"></i>
            </div>
            <h2 class="success-title">Order Confirmed!</h2>
            <p class="success-message">Thank you for shopping at Kin & Co. We have processed your payment securely via Razorpay.</p>
            ${paymentId ? `<div style="font-family: monospace; font-size: 0.8rem; background-color: var(--bg-main); padding: 0.5rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); color: var(--text-muted); margin-bottom: 0.5rem;">Payment ID: ${paymentId}</div>` : ''}
            <div style="font-size: 0.8rem; color: var(--primary); font-weight: 700; background-color: rgba(211,84,0,0.08); padding: 0.5rem 1rem; border-radius: var(--radius-sm); border: 1px dashed var(--primary); margin-bottom: 1.25rem; max-width: 400px; text-align: center; margin-left: auto; margin-right: auto;">
                <i class="fas fa-info-circle"></i> Policy Reminder: All sales are final. No returns, exchanges, or refunds are accepted for this order.
            </div>
            <button class="success-btn" onclick="closeModal(); resetCart();">Back to Store</button>
        </div>
    `;
    closeCartDrawer();
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function triggerRazorpayPayment() {
    // 1. Calculate checkout total in USD
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 75 ? 0 : 5.99;
    const totalUSD = subtotal + shipping;
    
    // Amount in INR for Razorpay (paise conversion)
    let totalINR = Math.round(totalUSD * EXCHANGE_RATE);
    
    // Razorpay standard options
    const options = {
        key: "rzp_test_familyStoreKey101", // Demo sandbox key
        amount: totalINR * 100, // in paise
        currency: "INR",
        name: "Kin & Co.",
        description: "Payment for family essentials purchase",
        image: "https://cdn-icons-png.flaticon.com/512/3069/3069474.png",
        handler: function (response) {
            openCheckoutSuccess(response.razorpay_payment_id);
        },
        prefill: {
            name: currentUser ? currentUser.name : "",
            email: currentUser ? currentUser.email : "",
            contact: "9999999999"
        },
        notes: {
            policy: "No returns accepted. All sales final."
        },
        theme: {
            color: "#d35400" // Terracotta primary accent
        }
    };
    
    if (window.Razorpay) {
        try {
            const rzp = new Razorpay(options);
            rzp.open();
        } catch(e) {
            console.error("Razorpay initiation failed:", e);
            runMockCheckout();
        }
    } else {
        runMockCheckout();
    }
    
    function runMockCheckout() {
        console.warn("Razorpay script not loaded. Running Sandbox payment simulation...");
        showToast("Razorpay sandbox simulation active...");
        
        checkoutBtn.innerHTML = 'Connecting to Razorpay... <i class="fas fa-spinner fa-spin"></i>';
        checkoutBtn.disabled = true;
        
        setTimeout(() => {
            checkoutBtn.innerHTML = 'Proceed to Checkout <i class="fas fa-lock"></i>';
            checkoutBtn.disabled = false;
            openCheckoutSuccess("pay_mocksandbox" + Math.floor(Math.random() * 1000000));
        }, 1500);
    }
}

function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

function resetCart() {
    cart = [];
    saveCart();
    updateCartUI();
}

// Support accordion FAQ toggles
function toggleFaq(btn) {
    btn.classList.toggle('active');
    const answer = btn.nextElementSibling;
    
    if (answer.classList.contains('open')) {
        answer.classList.remove('open');
        answer.style.maxHeight = '0';
    } else {
        answer.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}

// Support Contact Form Submit
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    alert(`Thank you, ${name}! Your family inquiry has been sent. We will get back to you within 24 hours.`);
    document.getElementById('contact-form').reset();
}

// Firebase Config - User Provided
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDQUo2lYv98TQ7plOmNKYTV6sYKqI4yZJY",
  authDomain: "kinco-c53d5.firebaseapp.com",
  projectId: "kinco-c53d5",
  storageBucket: "kinco-c53d5.firebasestorage.app",
  messagingSenderId: "760015852020",
  appId: "1:760015852020:web:f6a6f144ce6ef9e65be9a1",
  measurementId: "G-K5898VEZTN"
};

// Firebase Auth Operations: Dynamic Mock vs CDN Configuration
function initFirebaseConnection() {
    let config = null;
    const savedConfig = localStorage.getItem('firebase_config');
    
    if (savedConfig) {
        try {
            config = JSON.parse(savedConfig);
        } catch(e) {
            console.error("Invalid local Firebase config:", e);
        }
    }
    
    // Default to the user's hardcoded credentials if no local override
    if (!config && FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== "") {
        config = FIREBASE_CONFIG;
    }

    if (config) {
        try {
            if (window.firebase && !firebase.apps.length) {
                firebase.initializeApp(config);
                isRealFirebase = true;
                
                // Real listener
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        currentUser = {
                            name: user.displayName || "Family Member",
                            email: user.email
                        };
                    } else {
                        currentUser = null;
                    }
                    localStorage.setItem('family_store_current_user', JSON.stringify(currentUser));
                    updateAuthUI();
                });
                
                document.getElementById('auth-mode-label').textContent = "Mode: Connected to Firebase";
            }
        } catch (e) {
            console.error("Firebase startup failed, falling back to Sandbox Mode:", e);
            isRealFirebase = false;
        }
    }
    updateAuthUI();
}

function updateAuthUI() {
    const dot = document.getElementById('auth-status-dot');
    
    if (currentUser) {
        dot.classList.add('active');
        document.getElementById('profile-display-name').textContent = `Hello, ${currentUser.name}!`;
        document.getElementById('profile-display-email').textContent = currentUser.email;
        
        // Show profile state, hide login/signup forms
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('auth-profile-state').style.display = 'flex';
    } else {
        dot.classList.remove('active');
        
        // Show login form, hide profile state
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('auth-profile-state').style.display = 'none';
    }
}

function openAuthModal() {
    authModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    hideAuthAlert();
}

function closeAuthModal() {
    authModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

function switchAuthTab(tab) {
    const loginBtn = document.getElementById('auth-tab-login');
    const signupBtn = document.getElementById('auth-tab-signup');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    hideAuthAlert();

    if (currentUser) return; // Ignore tab switching if already logged in

    if (tab === 'login') {
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginBtn.classList.remove('active');
        signupBtn.classList.add('active');
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

function toggleFirebaseConfigPanel() {
    const panel = document.getElementById('firebase-config-panel');
    panel.classList.toggle('open');
    
    const savedConfig = localStorage.getItem('firebase_config');
    if (savedConfig && panel.classList.contains('open')) {
        document.getElementById('firebase-config-json').value = savedConfig;
    }
}

function saveFirebaseConfig() {
    const jsonStr = document.getElementById('firebase-config-json').value.trim();
    if (jsonStr === '') {
        localStorage.removeItem('firebase_config');
        alert("Cleared Firebase configuration. Sandbox Mode is now active.");
        location.reload();
        return;
    }
    
    try {
        JSON.parse(jsonStr);
        localStorage.setItem('firebase_config', jsonStr);
        alert("Firebase project configured successfully! The page will now reload to initialize connection.");
        location.reload();
    } catch(e) {
        alert("Invalid JSON format! Please copy-paste the exact Firebase SDK configuration object.");
    }
}

// Authentication Forms submission handlers (Combines simulated mock + real connection support)
function handleLoginSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    
    if (isRealFirebase) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                showAuthAlert("Login successful!", "success");
                setTimeout(closeAuthModal, 1500);
            })
            .catch(error => {
                showAuthAlert(error.message, "error");
            });
    } else {
        // Sandbox Simulation Logic
        const users = JSON.parse(localStorage.getItem('family_store_sandbox_users')) || [];
        const matchedUser = users.find(u => u.email === email && u.password === password);
        
        if (matchedUser) {
            currentUser = {
                name: matchedUser.name,
                email: matchedUser.email
            };
            localStorage.setItem('family_store_current_user', JSON.stringify(currentUser));
            updateAuthUI();
            showAuthAlert("Welcome back family! Login successful.", "success");
            setTimeout(closeAuthModal, 1500);
        } else {
            showAuthAlert("Invalid email or password. (For sandbox, please Sign Up first!)", "error");
        }
    }
}

function handleSignupSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    
    if (isRealFirebase) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                return userCredential.user.updateProfile({ displayName: name });
            })
            .then(() => {
                showAuthAlert("Account created successfully!", "success");
                setTimeout(closeAuthModal, 1500);
            })
            .catch(error => {
                showAuthAlert(error.message, "error");
            });
    } else {
        // Sandbox Simulation Logic
        const users = JSON.parse(localStorage.getItem('family_store_sandbox_users')) || [];
        
        if (users.some(u => u.email === email)) {
            showAuthAlert("Email already registered in Sandbox database.", "error");
            return;
        }

        users.push({ name, email, password });
        localStorage.setItem('family_store_sandbox_users', JSON.stringify(users));
        
        currentUser = { name, email };
        localStorage.setItem('family_store_current_user', JSON.stringify(currentUser));
        updateAuthUI();
        showAuthAlert("Sandbox account created and signed in!", "success");
        setTimeout(closeAuthModal, 1500);
    }
}

function handleLogout() {
    if (isRealFirebase) {
        firebase.auth().signOut()
            .then(() => {
                currentUser = null;
                localStorage.removeItem('family_store_current_user');
                updateAuthUI();
                closeAuthModal();
                showToast("Signed out successfully.");
            });
    } else {
        currentUser = null;
        localStorage.removeItem('family_store_current_user');
        updateAuthUI();
        closeAuthModal();
        showToast("Signed out from Sandbox session.");
    }
}

function showAuthAlert(msg, type) {
    const alertBox = document.getElementById('auth-alert');
    alertBox.textContent = msg;
    alertBox.className = `auth-alert ${type}`;
    alertBox.style.display = 'block';
}

function hideAuthAlert() {
    document.getElementById('auth-alert').style.display = 'none';
}

// Event Listeners Setup
function setupEventListeners() {
    // Theme Toggle
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Currency Switcher
    currencySelect.addEventListener('change', handleCurrencyChange);

    // Search input handler
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // Sidebar Category pills handler
    document.querySelectorAll('.filter-pills-vertical .filter-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-pills-vertical .filter-pill').forEach(p => p.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            renderProducts();
        });
    });

    // Sort select handler
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    // Cart opening/closing
    cartBtn.addEventListener('click', openCartDrawer);
    cartCloseBtn.addEventListener('click', closeCartDrawer);
    cartDrawerOverlay.addEventListener('click', (e) => {
        if (e.target === cartDrawerOverlay) closeCartDrawer();
    });

    // Modal overlay close handler
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    
    authModalOverlay.addEventListener('click', (e) => {
        if (e.target === authModalOverlay) closeAuthModal();
    });

    // Checkout click handler (plugs in Razorpay integration)
    checkoutBtn.addEventListener('click', triggerRazorpayPayment);
}
