// script.js - Storefront functionality for Miss Olympia

// Product Data Structure
const products = [
    {
        id: 1,
        name: "Noir Absolu — Eau de Parfum 100 ml",
        category: "meshkuj",
        price: 6900,
        originalPrice: 8500,
        image: "images/products/noir-absolu.svg",
        badge: "I Ri",
        description: "Një aromë e thellë dhe elegante për meshkuj, me hapje të freskët dhe fund të ngrohtë e të qëndrueshëm. Ideale për mbrëmje dhe raste speciale.",
        usage: "Spërkate në pikat e pulsit: qafë, kyçe të duarve dhe pas veshëve.",
        ingredients: "Hapje: bergamot, piper i zi · Zemër: lavandë, vetiver · Bazë: qëndër druri, ambër."
    },
    {
        id: 2,
        name: "Rose Velours — Eau de Parfum 75 ml",
        category: "femra",
        price: 6500,
        originalPrice: null,
        image: "images/products/rose-velours.svg",
        badge: null,
        description: "Aromë floreale dhe e butë me trëndafil damask dhe pak vaniljë. Një parfum femëror që të shoqëron gjithë ditën.",
        usage: "Spërkate në qafë dhe kyçe; mos e fërkoni pas spërkatjes.",
        ingredients: "Hapje: kajsi, pjeshkë · Zemër: trëndafil damask, jasemin · Bazë: vanilje, mosk i bardhë."
    },
    {
        id: 3,
        name: "Oud Royale — Parfum Arab 50 ml",
        category: "arabe",
        price: 9800,
        originalPrice: null,
        image: "images/products/oud-royale.svg",
        badge: "Më i Shituri",
        description: "Parfum oriental i koncentruar me oud të pasur, i njohur për qëndrueshmërinë dhe gjurmën e tij të fortë.",
        usage: "Disa spërkatje mjaftojnë. Aplikojeni në lëkurë dhe në rroba.",
        ingredients: "Hapje: safran · Zemër: oud, trëndafil · Bazë: ambër, sandal, mosk."
    },
    {
        id: 4,
        name: "Ambre Nuit — Eau de Parfum 100 ml",
        category: "unisex",
        price: 7400,
        originalPrice: null,
        image: "images/products/ambre-nuit.svg",
        badge: null,
        description: "Aromë ambër e ngrohtë, e përshtatshme për të gjithë. Fund i butë, pak i ëmbël dhe shumë i qëndrueshëm.",
        usage: "Spërkate në pikat e pulsit dhe në qafë.",
        ingredients: "Hapje: kardamom · Zemër: ambër, lule portokalli · Bazë: vanilje, dru kedri."
    },
    {
        id: 5,
        name: "Musk Blanc — Body Mist 200 ml",
        category: "mist",
        price: 2800,
        originalPrice: null,
        image: "images/products/musk-blanc.svg",
        badge: null,
        description: "Body mist i lehtë me aromë mosku të bardhë, për freski të përditshme në çdo moment të ditës.",
        usage: "Spërkate në trup pas dushit ose gjatë ditës sipas dëshirës.",
        ingredients: "Hapje: pambuk · Zemër: lule të bardha · Bazë: mosk i bardhë."
    },
    {
        id: 6,
        name: "Santal Bleu — Eau de Toilette 100 ml",
        category: "meshkuj",
        price: 4900,
        originalPrice: null,
        image: "images/products/santal-bleu.svg",
        badge: null,
        description: "Aromë e pastër dhe e freskët me sandal e akorde detare. Një zgjedhje e përkryer për përditshmëri dhe për zyrë.",
        usage: "Spërkate në qafë dhe në kyçe të duarve.",
        ingredients: "Hapje: limon, mente · Zemër: sandal, sherebelë · Bazë: dru i lehtë, mosk."
    },
    {
        id: 7,
        name: "Fleur d'Or — Eau de Parfum 50 ml",
        category: "femra",
        price: 5900,
        originalPrice: 7200,
        image: "images/products/fleur-dor.svg",
        badge: "Ofertë",
        description: "Një buqetë e ndritshme lulesh të bardha me prekje mielli e frutash. Elegante, e ndritshme dhe e qëndrueshme.",
        usage: "Spërkate në qafë dhe në kyçe; mund ta përsërisni gjatë ditës.",
        ingredients: "Hapje: dardhë, portokall · Zemër: lule portokalli, tuberozë · Bazë: mjaltë, mosk."
    },
    {
        id: 8,
        name: "Set Dhuratë Elegance — 2 × 30 ml",
        category: "set",
        price: 6200,
        originalPrice: null,
        image: "images/products/set-elegance.svg",
        badge: "Dhuratë",
        description: "Set me dy parfume në format udhëtimi, në kuti elegante dhuratë. Zgjedhja ideale për ditëlindje dhe festa.",
        usage: "Çdo shishe përdoret veçmas; zgjidhni aromën sipas rastit.",
        ingredients: "Set me dy aroma të përzgjedhura nga koleksioni ynë."
    },
    {
        id: 9,
        name: "Bakhoor & Attar — Set Oriental",
        category: "arabe",
        price: 4500,
        originalPrice: null,
        image: "images/products/bakhoor-attar.svg",
        badge: null,
        description: "Set oriental me bakhoor dhe vaj parfumi (attar), për të mbushur shtëpinë dhe rrobat me aromë të ngrohtë dhe të pasur.",
        usage: "Bakhoor-i digjet mbi qymyr aromatik; attar-i aplikohet në pika të pulsit.",
        ingredients: "Oud, ambër, mosk, trëndafil."
    },
    {
        id: 10,
        name: "Citrus Aqua — Eau Fraîche 100 ml",
        category: "unisex",
        price: 3900,
        originalPrice: null,
        image: "images/products/citrus-aqua.svg",
        badge: null,
        description: "Aromë citrike e freskët dhe e lehtë, perfekte për verë dhe për ditët e nxehta.",
        usage: "Spërkate sa herë të doni freski; ideale pas dushit.",
        ingredients: "Hapje: limon, grejpfrut · Zemër: çaj jeshil · Bazë: mosk i lehtë."
    },
    {
        id: 11,
        name: "Vanille Café — Body Mist 200 ml",
        category: "mist",
        price: 2600,
        originalPrice: 3200,
        image: "images/products/vanille-cafe.svg",
        badge: "Ofertë",
        description: "Body mist i ëmbël me vanilje dhe kafe të pjekur. Aromë e ngrohtë dhe ngushëlluese.",
        usage: "Spërkate në trup dhe në flokë nga një distancë 15–20 cm.",
        ingredients: "Hapje: kafe · Zemër: vanilje · Bazë: karamel, mosk."
    },
    {
        id: 12,
        name: "Set Dhuratë Prestige — 3 × 25 ml",
        category: "set",
        price: 7800,
        originalPrice: null,
        image: "images/products/set-prestige.svg",
        badge: "Dhuratë",
        description: "Tre aroma ekskluzive në një kuti prestigjioze. Mënyra më e mirë për të zbuluar koleksionin tonë ose për të bërë një dhuratë të veçantë.",
        usage: "Provojini një nga një në ditë të ndryshme për të gjetur aromën tuaj.",
        ingredients: "Tre aroma të përzgjedhura nga koleksioni ekskluziv."
    }
];

const fmt = n => Number(n).toLocaleString('de-DE') + ' L';

// State Management
let cart = JSON.parse(localStorage.getItem('missOlympiaCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('missOlympiaWishlist')) || [];

// Display names for category keys
const CATEGORY_LABELS = { meshkuj: "Për Meshkuj", femra: "Për Femra", unisex: "Unisex", arabe: "Parfume Arabe", mist: "Body Mist", set: "Sete Dhuratë" };
const categoryLabel = key => CATEGORY_LABELS[key] || key;

// Brand silver, used for filled wishlist hearts
const GOLD = '#d4d4d9';

// Shop filters combine, so a category, a price cap and a sort order can all apply at once
const shopState = { category: 'all', maxPrice: Infinity, sort: 'featured' };

// DOM Elements
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');
const searchInput = document.getElementById('searchInput');
const searchResults = document.createElement('div');
searchResults.className = 'search-results-dropdown';
if (document.querySelector('.search-box')) {
    document.querySelector('.search-box').appendChild(searchResults);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    if (document.getElementById('featuredProducts')) {
        loadFeaturedProducts();
    }
    
    if (document.getElementById('shopProducts')) {
        loadShopProducts();
    }
    
    if (document.querySelector('.cart-items')) {
        loadCartItems();
    }

    if (window.location.pathname.includes('product.html')) {
        loadProductDetail();
    }

    if (document.querySelector('.hero-slider')) {
        initHeroSlider();
    }

    if (document.getElementById('checkoutSummary')) {
        loadCheckoutSummary();
    }
    
    setupEventListeners();
    setupStickyHeader();
    createQuickViewModal();
    initReveal();
});

// Event Listeners
function setupEventListeners() {
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) toggleMobileMenu();
            });
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        const modal = document.getElementById('quickViewModal');
        if (modal) modal.style.display = 'none';
    });
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-box')) {
                searchResults.style.display = 'none';
            }
        });
    }
    
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            document.getElementById('priceValue').textContent = fmt(e.target.value);
            filterByPrice(e.target.value);
        });
    }
    
    const filterLinks = document.querySelectorAll('.filter-link');
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            filterLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            filterProducts(e.target.dataset.category);
        });
    });
    
    const sortBy = document.getElementById('sortBy');
    if (sortBy) {
        sortBy.addEventListener('change', sortProducts);
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }
}

// Sticky Header
function setupStickyHeader() {
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile Menu
function toggleMobileMenu() {
    const open = nav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active', open);
    mobileMenuBtn.setAttribute('aria-expanded', open);
}

// Cart Functions
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    // header bag and the mobile bottom-nav bag share the same badge class
    document.querySelectorAll('.cart-count').forEach(badge => {
        badge.textContent = count;
        badge.classList.toggle('is-zero', count === 0);
    });
    localStorage.setItem('missOlympiaCart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
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
    
    updateCartCount();
    showNotification('Produkti u shtua në shportë!', 'success');
}

// Wishlist Functions
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('U hoq nga lista e dëshirave');
    } else {
        wishlist.push(productId);
        showNotification('U shtua në listën e dëshirave', 'success');
    }
    localStorage.setItem('missOlympiaWishlist', JSON.stringify(wishlist));
    updateWishlistIcons();
}

function updateWishlistIcons() {
    document.querySelectorAll('.action-btn .fa-heart').forEach(icon => {
        const card = icon.closest('.product-card');
        if (card) {
            const id = parseInt(card.dataset.id);
            if (wishlist.includes(id)) {
                icon.classList.add('fas');
                icon.classList.remove('far');
                icon.style.color = GOLD;
            } else {
                icon.classList.add('far');
                icon.classList.remove('fas');
                icon.style.color = '';
            }
        }
    });
}

// Product Card UI
function createProductCard(product) {
    const isWishlisted = wishlist.includes(product.id);
    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onclick="goToProduct(${product.id})" style="cursor: pointer;" loading="lazy" decoding="async">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-actions">
                    <button class="action-btn" onclick="addToCart(${product.id}); event.stopPropagation();" title="Shto në shportë" aria-label="Shto ${product.name} në shportë">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                    <button class="action-btn" onclick="openQuickView(${product.id}); event.stopPropagation();" title="Shiko shpejt" aria-label="Shiko shpejt ${product.name}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn" onclick="toggleWishlist(${product.id}); event.stopPropagation();" title="Shto te të preferuarat" aria-label="Ruaj ${product.name} te të preferuarat">
                        <i class="${isWishlisted ? 'fas' : 'far'} fa-heart" style="${isWishlisted ? `color: ${GOLD};` : ''}"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${categoryLabel(product.category)}</div>
                <h3 class="product-title" onclick="goToProduct(${product.id})" style="cursor: pointer;">${product.name}</h3>
                <div class="product-price">
                    <span class="price-current">${fmt(product.price)}</span>
                    ${product.originalPrice ? `<span class="price-original">${fmt(product.originalPrice)}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Navigation
function goToProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

// Shop Logic
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    const featured = products.slice(0, 4);
    container.innerHTML = featured.map(product => createProductCard(product)).join('');
}

function loadShopProducts() {
    // Links such as shop.html?category=korean (used by the hero slides) open pre-filtered
    const requested = new URLSearchParams(window.location.search).get('category');
    const filterLinks = document.querySelectorAll('.filter-link');
    if (requested && Array.from(filterLinks).some(l => l.dataset.category === requested)) {
        shopState.category = requested;
        filterLinks.forEach(l => l.classList.toggle('active', l.dataset.category === requested));
    }
    renderShop();
}

function renderShop() {
    const container = document.getElementById('shopProducts');
    if (!container) return;
    const list = products.filter(p =>
        (shopState.category === 'all' || p.category === shopState.category) &&
        p.price <= shopState.maxPrice
    );
    if (shopState.sort === 'price-low') list.sort((a, b) => a.price - b.price);
    else if (shopState.sort === 'price-high') list.sort((a, b) => b.price - a.price);
    else if (shopState.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

    container.innerHTML = list.length
        ? list.map(product => createProductCard(product)).join('')
        : `<div class="empty-state"><i class="fas fa-spray-can-sparkles"></i><h3>Asnjë produkt këtu</h3><p>Asnjë produkt nuk përputhet me filtrat. Provoni një kategori tjetër ose një çmim më të lartë.</p></div>`;
    document.getElementById('productCount').textContent = list.length;
}

function filterProducts(category) {
    shopState.category = category;
    renderShop();
}

function filterByPrice(maxPrice) {
    shopState.maxPrice = Number(maxPrice);
    renderShop();
}

function sortProducts() {
    shopState.sort = document.getElementById('sortBy').value;
    renderShop();
}

// Search & Recommendations
function handleSearch(e) {
    const term = e.target.value.toLowerCase();
    if (term.length < 1) {
        searchResults.style.display = 'none';
        return;
    }

    const matches = products.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.category.toLowerCase().includes(term)
    );

    if (matches.length > 0) {
        searchResults.innerHTML = `
            <div class="search-results-header">Products found (${matches.length})</div>
            ${matches.slice(0, 5).map(p => `
                <div class="search-item" onclick="goToProduct(${p.id})">
                    <img src="${p.image}" alt="${p.name}">
                    <div class="search-item-info">
                        <div class="search-item-name">${p.name}</div>
                        <div class="search-item-price">${fmt(p.price)}</div>
                    </div>
                </div>
            `).join('')}
            ${matches.length > 5 ? `<div class="search-more">And ${matches.length - 5} more...</div>` : ''}
            <div class="search-recommendations">
                <div class="search-results-header">Recommended for you</div>
                ${getRecommendations(term).map(p => `
                    <div class="search-item" onclick="goToProduct(${p.id})">
                        <i class="fas fa-star" style="color: var(--gold-500); margin-right: 10px;"></i>
                        <div class="search-item-info">
                            <div class="search-item-name">${p.name}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = `
            <div class="search-no-results">Nuk u gjet asnjë produkt për "${term}"</div>
            <div class="search-recommendations">
                <div class="search-results-header">Provoni këto</div>
                ${products.slice(0, 3).map(p => `
                    <div class="search-item" onclick="goToProduct(${p.id})">
                        <div class="search-item-info">
                            <div class="search-item-name">${p.name}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        searchResults.style.display = 'block';
    }
}

function getRecommendations(term) {
    // Simple recommendation logic: products in same category as first match
    const firstMatch = products.find(p => p.name.toLowerCase().includes(term));
    if (firstMatch) {
        return products.filter(p => p.category === firstMatch.category && p.id !== firstMatch.id).slice(0, 3);
    }
    return products.slice(0, 3);
}

// Quick View Modal
function createQuickViewModal() {
    const modal = document.createElement('div');
    modal.id = 'quickViewModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div id="quickViewBody"></div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-modal').onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };
}

function openQuickView(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const body = document.getElementById('quickViewBody');
    body.innerHTML = `
        <div class="quick-view-layout">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="quick-view-info">
                <span class="product-category">${categoryLabel(product.category)}</span>
                <h2 class="product-title">${product.name}</h2>
                <div class="product-price">
                    <span class="price-current">${fmt(product.price)}</span>
                    ${product.originalPrice ? `<span class="price-original">${fmt(product.originalPrice)}</span>` : ''}
                </div>
                <p class="product-description">${product.description}</p>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Shto në shportë</button>
                <button class="btn btn-secondary" onclick="goToProduct(${product.id})">Shiko detajet</button>
            </div>
        </div>
    `;
    document.getElementById('quickViewModal').style.display = 'flex';
}

// Product Detail Page
function loadProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = products.find(p => p.id === id);

    if (!product) {
        document.getElementById('productDetailContent').innerHTML = '<h2>Produkti nuk u gjet</h2>';
        return;
    }

    document.title = `${product.name} | Miss Olympia`;

    // Same-category picks first, topped up from the rest of the range
    const related = [
        ...products.filter(p => p.category === product.category && p.id !== product.id),
        ...products.filter(p => p.category !== product.category)
    ].slice(0, 4);
    
    const container = document.getElementById('productDetailContent');
    if (container) {
        container.innerHTML = `
            <div class="product-detail-grid">
                <div class="product-detail-gallery">
                    <img src="${product.image}" alt="${product.name}" class="main-image">
                </div>
                <div class="product-detail-info">
                    <nav class="breadcrumb">
                        <a href="index.html">Kryefaqja</a> / <a href="shop.html">Koleksioni</a> / ${product.name}
                    </nav>
                    <span class="product-category">${categoryLabel(product.category)}</span>
                    <h1 class="product-title">${product.name}</h1>
                    <div class="product-price">
                        <span class="price-current">${fmt(product.price)}</span>
                        ${product.originalPrice ? `<span class="price-original">${fmt(product.originalPrice)}</span>` : ''}
                    </div>
                    <div class="product-description">
                        <h3>Përshkrimi</h3>
                        <p>${product.description}</p>
                    </div>
                    <div class="product-meta">
                        <div class="meta-item"><strong>Përdorimi:</strong> ${product.usage}</div>
                        <div class="meta-item"><strong>Notat:</strong> ${product.ingredients}</div>
                    </div>
                    <div class="product-actions-detail">
                        <div class="quantity-control">
                            <button class="qty-btn" onclick="this.nextElementSibling.stepDown()">-</button>
                            <input type="number" value="1" min="1" class="qty-input" id="detailQty">
                            <button class="qty-btn" onclick="this.previousElementSibling.stepUp()">+</button>
                        </div>
                        <button class="btn btn-primary btn-lg" onclick="addDetailToCart(${product.id})">Shto në shportë</button>
                        <button class="btn btn-secondary" onclick="toggleWishlist(${product.id})">
                            <i class="far fa-heart"></i> Të preferuarat
                        </button>
                    </div>
                </div>
            </div>
            <section class="related-products section">
                <h2 class="section-title">Mund t'ju <em>pëlqejnë</em></h2>
                <div class="products-grid">
                    ${related.map(p => createProductCard(p)).join('')}
                </div>
            </section>
        `;
    }
}

function addDetailToCart(id) {
    const qty = parseInt(document.getElementById('detailQty').value);
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: qty
        });
    }
    updateCartCount();
    showNotification(`${qty} × ${product.name} u shtua në shportë!`, 'success');
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    const icon = { success: 'fa-circle-check', error: 'fa-circle-exclamation' }[type] || 'fa-circle-info';
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Existing logic for Cart, Checkout, etc. remains same but uses expanded data...
function loadCartItems() {
    const container = document.querySelector('.cart-items');
    const summaryContainer = document.querySelector('.cart-summary');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-bag"></i>
                <h3>Shporta juaj është bosh</h3>
                <p>Zbuloni parfumet tona origjinale.</p>
                <a href="shop.html" class="btn btn-primary">Shiko koleksionin</a>
            </div>`;
        if (summaryContainer) summaryContainer.style.display = 'none';
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <a href="product.html?id=${item.id}" class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </a>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>${fmt(item.price)}</p>
                <div class="quantity-control">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="Pakëso sasinë">&minus;</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="Shto sasinë">+</button>
                </div>
            </div>
            <div class="cart-item-actions">
                <span class="cart-item-total">${fmt(item.price * item.quantity)}</span>
                <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i> Hiq</button>
            </div>
        </div>
    `).join('');

    // Delivery cost is confirmed with the order
    const subtotal = cart.reduce((t, i) => t + (i.price * i.quantity), 0);
    const shipping = 0;
    if (summaryContainer) {
        summaryContainer.style.display = 'block';
        summaryContainer.innerHTML = `
            <h3>Përmbledhja</h3>
            <div class="summary-row"><span>Nëntotali</span><span>${fmt(subtotal)}</span></div>
            <div class="summary-row"><span>Dërgesa</span><span>Konfirmohet me porosinë</span></div>
            <div class="summary-row total"><span>Totali</span><span>${fmt(subtotal + shipping)}</span></div>
            <a href="checkout.html" class="btn btn-primary btn-full">Vazhdo te porosia</a>
        `;
    }
}

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
        updateCartCount();
        loadCartItems();
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartCount();
    loadCartItems();
}

function handleContactForm(e) {
    e.preventDefault();
    showNotification('Mesazhi u dërgua!', 'success');
    e.target.reset();
}

function handleCheckout(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        showNotification('Shporta juaj është bosh!', 'error');
        return;
    }
    
    showNotification('Porosia u regjistrua me sukses!', 'success');
    cart = [];
    updateCartCount();
    localStorage.removeItem('missOlympiaCart');
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Hero Slider Functionality
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    let timer;

    function showSlide(n) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Auto slide; a manual choice restarts the clock so the next slide doesn't jump in early
    function restartAutoplay() {
        clearInterval(timer);
        timer = setInterval(() => showSlide(currentSlide + 1), 6000);
    }

    function goTo(n) {
        showSlide(n);
        restartAutoplay();
    }

    if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentSlide + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentSlide - 1));

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => goTo(idx));
    });

    restartAutoplay();
}

// Checkout Summary
function loadCheckoutSummary() {
    const summary = document.getElementById('checkoutSummary');
    if (!summary) return;
    
    if (cart.length === 0) {
        summary.innerHTML = '<p>Shporta juaj është bosh</p>';
        return;
    }
    
    const subtotal = cart.reduce((t, i) => t + (i.price * i.quantity), 0);
    const shipping = 0;
    const total = subtotal + shipping;
    
    summary.innerHTML = `
        <div class="checkout-items-mini">
            ${cart.map(item => `
                <div class="summary-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <div class="summary-item-name">${item.name}</div>
                        <div class="summary-item-meta">${item.quantity} x ${fmt(item.price)}</div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="summary-divider"></div>
        <div class="summary-row">
            <span>Nëntotali</span>
            <span>${fmt(subtotal)}</span>
        </div>
        <div class="summary-row">
            <span>Dërgesa</span>
            <span>Konfirmohet me porosinë</span>
        </div>
        <div class="summary-row total">
            <span>Totali</span>
            <span>${fmt(total)}</span>
        </div>
    `;
}

function getCartTotal() {
    return cart.reduce((t, i) => t + (i.price * i.quantity), 0);
}

// --- NEW FUNCTIONALITY ---

// Wishlist Button Logic (for mobile nav and header)
const wishlistBtns = document.querySelectorAll('.wishlist-btn');
wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.tagName === 'A' && btn.getAttribute('href') === '#') {
            e.preventDefault();
            window.location.href = 'wishlist.html';
        }
    });
});

// Account Button Logic
const accountBtns = document.querySelectorAll('.account-btn');

function updateAccountStatus() {
    const user = localStorage.getItem('missOlympiaUser');
    if (user) {
        accountBtns.forEach(btn => {
            btn.innerHTML = '<i class="fas fa-user-check" style="color: var(--success-color);"></i>' + (btn.classList.contains('mobile-nav-item') ? '<span>Llogaria</span>' : '');
            btn.title = `I kyçur si ${user}`;
            // If logged in, the dropdown could show a logout option
            const dropdown = btn.nextElementSibling;
            if (dropdown && dropdown.classList.contains('account-dropdown')) {
                dropdown.innerHTML = `
                    <a href="account.html">Profili im</a>
                    <a href="wishlist.html">Të preferuarat</a>
                    <div class="divider"></div>
                    <a href="#" onclick="handleLogout(event)">Dil</a>
                `;
            }
        });
    }
}

function handleLogout(e) {
    if (e) e.preventDefault();
    localStorage.removeItem('missOlympiaUser');
    showNotification('U çkyçët me sukses', 'info');
    setTimeout(() => location.reload(), 1000);
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    updateAccountStatus();
});

// Wishlist Count Logic
function updateWishlistCount() {
    const counts = document.querySelectorAll('.wishlist-count');
    counts.forEach(c => {
        c.textContent = wishlist.length;
        c.classList.toggle('is-zero', wishlist.length === 0);
    });
}

// Header and mobile bottom-nav badges
function updateAllCounts() {
    updateCartCount();
    updateWishlistCount();
}

// Fade sections in as they scroll into view
function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => observer.observe(el));
}

// Update the original toggleWishlist to include count update
const originalToggleWishlist = toggleWishlist;
toggleWishlist = function(productId) {
    originalToggleWishlist(productId);
    updateWishlistCount();
};

// Update the original addToCart to include count update
const originalAddToCart = addToCart;
addToCart = function(productId) {
    originalAddToCart(productId);
    updateAllCounts();
};

// Initial calls
document.addEventListener('DOMContentLoaded', () => {
    updateWishlistCount();
    
    // Set active class on mobile bottom nav based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});


// Mobile Filter Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const mobileFilterBtn = document.getElementById('mobileFilterBtn');
    const shopSidebar = document.querySelector('.shop-sidebar');
    
    if (mobileFilterBtn && shopSidebar) {
        // Create overlay if it doesn't exist
        let overlay = document.querySelector('.sidebar-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'sidebar-overlay';
            document.body.appendChild(overlay);
        }

        mobileFilterBtn.addEventListener('click', () => {
            shopSidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });

        overlay.addEventListener('click', () => {
            shopSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        });

        // Close sidebar when a filter is clicked
        const filterLinks = shopSidebar.querySelectorAll('.filter-link');
        filterLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    shopSidebar.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }
});
