document.addEventListener('DOMContentLoaded', () => {

    /* --- Data: Menu Items --- */
    const menuData = {
        classic_pizzas: [
            { 
                id: 'cp1', 
                price: 12.00, 
                img: 'https://images.unsplash.com/photo-1574071318000-8595d03fd19a?q=80&w=500&auto=format&fit=crop',
                name: { es: "Muzzarella Clásica", en: "Classic Mozzarella", pt: "Mussarela Clássica" }, 
                desc: { es: "Salsa de tomate casera, abundante muzzarella, orégano y aceitunas.", en: "Homemade tomato sauce, abundant mozzarella, oregano, and olives.", pt: "Molho de tomate caseiro, muita mussarela, orégano e azeitonas." } 
            },
            { 
                id: 'cp2', 
                price: 13.50, 
                img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop',
                name: { es: "Napolitana con Ajo", en: "Napolitana with Garlic", pt: "Napolitana com Alho" }, 
                desc: { es: "Rodajas de tomate fresco, ajo picado, muzzarella y aceite de oliva.", en: "Fresh tomato slices, minced garlic, mozzarella, and olive oil.", pt: "Fatias de tomate fresco, alho picado, mussarela e azeite de oliva." } 
            }
        ],
        special_pizzas: [
            { 
                id: 'sp1', 
                price: 16.00, 
                img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=500&auto=format&fit=crop',
                name: { es: "Shagui Suprema", en: "Shagui Supreme", pt: "Shagui Suprema" }, 
                desc: { es: "Nuestra especialidad: panceta crujiente, cebolla caramelizada, huevo y pimientos.", en: "Our specialty: crispy bacon, caramelized onion, egg, and peppers.", pt: "Nossa especialidade: bacon crocante, cebola caramelizada, ovo e pimentões." } 
            },
            { 
                id: 'sp2', 
                price: 15.50, 
                img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500&auto=format&fit=crop',
                name: { es: "Cuatro Quesos Luxury", en: "Luxury Four Cheese", pt: "Quatro Queijos Luxo" }, 
                desc: { es: "Mozzarella, Roquefort, Parmesano y Provolone de primera calidad.", en: "Mozzarella, Roquefort, Parmesan, and premium Provolone.", pt: "Mussarela, Roquefort, Parmesão e Provolone de primeira qualidade." } 
            }
        ],
        calzones: [
            { 
                id: 'cz1', 
                price: 14.00, 
                img: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=500&auto=format&fit=crop',
                name: { es: "Calzone Calabresa", en: "Calabrese Calzone", pt: "Calzone Calabresa" }, 
                desc: { es: "Relleno explosivo de longaniza calabresa, queso fundido y salsa picante.", en: "Explosive filling of calabrese sausage, melted cheese, and spicy sauce.", pt: "Recheio explosivo de linguiça calabresa, queijo derretido e molho picante." } 
            },
            { 
                id: 'cz2', 
                price: 14.50, 
                img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500&auto=format&fit=crop', // Reusing pizza image as placeholder
                name: { es: "Calzone Vegetariano", en: "Veggie Calzone", pt: "Calzone Vegetariano" }, 
                desc: { es: "Espinaca fresca, ricota suave, nueces y toque de nuez moscada.", en: "Fresh spinach, smooth ricotta, walnuts, and a touch of nutmeg.", pt: "Espinafre fresco, ricota suave, nozes e toque de noz-moscada." } 
            }
        ],
        drinks: [
            { 
                id: 'dr1', 
                price: 3.50, 
                img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=500&auto=format&fit=crop',
                name: { es: "Coca Cola", en: "Coke", pt: "Coca Cola" }, 
                desc: { es: "Lata 354ml bien fría.", en: "Cold 354ml can.", pt: "Lata 354ml bem gelada." } 
            },
            { 
                id: 'dr2', 
                price: 5.00, 
                img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=500&auto=format&fit=crop',
                name: { es: "Cerveza Lager", en: "Lager Beer", pt: "Cerveja Lager" }, 
                desc: { es: "Pinta artesanal rubia y refrescante.", en: "Refreshing craft blonde pint.", pt: "Pint artesanal loira e refrescante." } 
            }
        ]
    };

    /* --- Translations --- */
    const translations = {
        es: {
            menu_title: "SHAGUI PIZZAS",
            menu_subtitle: "El verdadero sabor casero",
            cat_classic_pizzas: "Pizzas Clásicas",
            cat_special_pizzas: "Pizzas Especiales",
            cat_calzones: "Calzones",
            cat_drinks: "Bebidas",
            cart_title: "Tu Pedido",
            cart_empty: "Aún no elegiste tu pizza.",
            total: "Total:",
            checkout_whatsapp: "Pedir por WhatsApp",
            add_btn: "AGREGAR",
            currency: "$"
        },
        en: {
            menu_title: "SHAGUI PIZZAS",
            menu_subtitle: "True homemade taste",
            cat_classic_pizzas: "Classic Pizzas",
            cat_special_pizzas: "Special Pizzas",
            cat_calzones: "Calzones",
            cat_drinks: "Drinks",
            cart_title: "Your Order",
            cart_empty: "No pizza chosen yet.",
            total: "Total:",
            checkout_whatsapp: "Order via WhatsApp",
            add_btn: "ADD",
            currency: "$"
        },
        pt: {
            menu_title: "SHAGUI PIZZAS",
            menu_subtitle: "O verdadeiro sabor caseiro",
            cat_classic_pizzas: "Pizzas Clássicas",
            cat_special_pizzas: "Pizzas Especiais",
            cat_calzones: "Calzones",
            cat_drinks: "Bebidas",
            cart_title: "Seu Pedido",
            cart_empty: "Ainda não escolheu sua pizza.",
            total: "Total:",
            checkout_whatsapp: "Pedir pelo WhatsApp",
            add_btn: "ADICIONAR",
            currency: "$"
        }
    };

    let currentLang = 'es';
    let currentCategory = 'classic_pizzas'; // Updated default category

    // DOM Elements
    const menuGrid = document.getElementById('menu-grid');
    const langBtn = document.getElementById('lang-toggle');
    const langSpan = langBtn.querySelector('.current-lang');
    const catBtns = document.querySelectorAll('.cat-btn');
    const cartFab = document.getElementById('cart-fab');
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    /* --- Core Functions --- */

    function formatPrice(price) {
        return `${translations[currentLang].currency}${price.toFixed(2)}`;
    }

    function renderMenu() {
        menuGrid.innerHTML = '';
        const items = menuData[currentCategory];

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            
            // Check if item is in cart to show quantity
            const cartItem = cart.find(i => i.id === item.id);
            const qty = cartItem ? cartItem.qty : 0;

            card.innerHTML = `
                <div class="card-image">
                    <img src="${item.img}" alt="${item.name[currentLang]}" loading="lazy">
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h3>${item.name[currentLang]}</h3>
                        <span class="price">${formatPrice(item.price)}</span>
                    </div>
                    <p class="desc">${item.desc[currentLang]}</p>
                    <div class="card-actions">
                        ${qty > 0 ? `
                            <div class="qty-control">
                                <button class="qty-btn minus" data-id="${item.id}">-</button>
                                <span class="qty-val">${qty}</span>
                                <button class="qty-btn plus" data-id="${item.id}">+</button>
                            </div>
                        ` : `
                            <button class="add-btn" data-id="${item.id}">${translations[currentLang].add_btn}</button>
                        `}
                    </div>
                </div>
            `;
            menuGrid.appendChild(card);
        });

        // Attach event listeners to new buttons
        document.querySelectorAll('.add-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                addToCart(e.target.dataset.id);
            });
        });

        document.querySelectorAll('.qty-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                addToCart(e.target.dataset.id);
            });
        });

        document.querySelectorAll('.qty-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                removeFromCart(e.target.dataset.id);
            });
        });
    }

    function addToCart(id) {
        const item = findItemById(id);
        const existing = cart.find(i => i.id === id);

        if (existing) {
            existing.qty++;
        } else {
            cart.push({ ...item, qty: 1 });
        }
        updateCartState();
    }

    function removeFromCart(id) {
        const existing = cart.find(i => i.id === id);
        if (existing) {
            existing.qty--;
            if (existing.qty <= 0) {
                cart = cart.filter(i => i.id !== id);
            }
        }
        updateCartState();
    }

    function findItemById(id) {
        for (const cat in menuData) {
            const found = menuData[cat].find(i => i.id === id);
            if (found) return found;
        }
        return null;
    }

    function updateCartState() {
        // Update total count in FAB
        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCount.textContent = totalQty;
        cartCount.classList.toggle('visible', totalQty > 0);

        // Re-render menu to show updated quantities
        renderMenu();

        // Re-render cart if open
        if (cartModal.classList.contains('active')) {
            renderCartItems();
        }
    }

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p class="empty-msg">${translations[currentLang].cart_empty}</p>`;
        } else {
            cart.forEach(item => {
                const itemTotal = item.price * item.qty;
                total += itemTotal;

                const row = document.createElement('div');
                row.className = 'cart-item-row';
                row.innerHTML = `
                    <div class="cart-item-info">
                        <strong>${item.name[currentLang]}</strong>
                        <small>${formatPrice(item.price)} x ${item.qty}</small>
                    </div>
                    <div class="cart-item-actions">
                        <button class="cart-action-btn minus" data-id="${item.id}">-</button>
                        <span>${formatPrice(itemTotal)}</span>
                        <button class="cart-action-btn plus" data-id="${item.id}">+</button>
                    </div>
                `;
                cartItemsContainer.appendChild(row);
            });
        }

        cartTotalPrice.textContent = formatPrice(total);

        // Attach listeners in cart
        document.querySelectorAll('.cart-action-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => addToCart(e.target.dataset.id));
        });
        document.querySelectorAll('.cart-action-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => removeFromCart(e.target.dataset.id));
        });
    }

    function updateLanguage(lang) {
        currentLang = lang;
        langSpan.textContent = lang.toUpperCase();
        
        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Re-render views
        renderMenu();
        if (cartModal.classList.contains('active')) {
            renderCartItems();
        }
    }

    /* --- Event Listeners --- */

    // Category Switching
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderMenu();
        });
    });

    // Language Toggle
    langBtn.addEventListener('click', () => {
        const langs = ['es', 'en', 'pt'];
        let idx = langs.indexOf(currentLang);
        idx = (idx + 1) % langs.length;
        updateLanguage(langs[idx]);
    });

    // Cart Modal
    cartFab.addEventListener('click', () => {
        renderCartItems();
        cartModal.classList.add('active');
    });

    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    // WhatsApp Checkout
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;

        let message = `*Hola! Quiero realizar un pedido:*\n\n`;
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            message += `- ${item.qty}x ${item.name[currentLang]} (${formatPrice(item.price)})\n`;
        });

        message += `\n*Total: ${formatPrice(total)}*`;

        // Replace with actual merchant number if provided, currently placeholder
        const phoneNumber = "5491112345678"; 
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });

    /* --- Init --- */
    renderMenu();
});
