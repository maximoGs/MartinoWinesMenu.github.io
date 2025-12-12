document.addEventListener('DOMContentLoaded', () => {

    /* --- Data: Menu Items --- */
    const menuData = {
        classic_pizzas: [
            { 
                id: 'cp1', 
                price: 12.00, 
                img: 'https://images.unsplash.com/photo-1574071318000-8595d03fd19a?q=80&w=600&auto=format&fit=crop',
                name: { es: "Muzzarella Clásica", en: "Classic Mozzarella", pt: "Mussarela Clássica" }, 
                desc: { es: "Nuestra masa madre de 48hs, salsa de tomates italianos, abundante muzzarella premium y aceitunas deshuesadas.", en: "Our 48h sourdough, Italian tomato sauce, abundant premium mozzarella, and pitted olives.", pt: "Nossa massa madre de 48h, molho de tomates italianos, muita mussarela premium e azeitonas sem caroço." } 
            },
            { 
                id: 'cp2', 
                price: 13.50, 
                img: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=600&auto=format&fit=crop',
                name: { es: "Napolitana al Ajo", en: "Garlic Napolitana", pt: "Napolitana ao Alho" }, 
                desc: { es: "Rodajas de tomate perita fresco, ajo asado, aceite de oliva virgen extra y hojas de albahaca fresca.", en: "Fresh pear tomato slices, roasted garlic, extra virgin olive oil, and fresh basil leaves.", pt: "Fatias de tomate fresco, alho assado, azeite de oliva extra virgem e folhas de manjericão fresco." } 
            },
            { 
                id: 'cp3', 
                price: 13.00, 
                img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=600&auto=format&fit=crop',
                name: { es: "Fugazzeta Rellena", en: "Stuffed Onion Pizza", pt: "Fugazzeta Recheada" }, 
                desc: { es: "Doble masa rellena de queso cuartirolo, cubierta con cebollas caramelizadas y parmesano gratinado.", en: "Double dough stuffed with soft cheese, topped with caramelized onions and grated parmesan.", pt: "Massa dupla recheada com queijo macio, coberta com cebolas caramelizadas e parmesão gratinado." } 
            }
        ],
        special_pizzas: [
            { 
                id: 'sp1', 
                price: 16.50, 
                img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop',
                name: { es: "Shagui Suprema", en: "Shagui Supreme", pt: "Shagui Suprema" }, 
                desc: { es: "La favorita: bondiola ahumada, cebolla morada, queso provolone, huevo y pimientos rojos asados.", en: "The favorite: smoked pork shoulder, red onion, provolone cheese, egg, and roasted red peppers.", pt: "A favorita: copa lombo defumada, cebola roxa, queijo provolone, ovo e pimentões vermelhos assados." } 
            },
            { 
                id: 'sp2', 
                price: 17.00, 
                img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop',
                name: { es: "Cuatro Quesos Luxury", en: "Luxury Four Cheese", pt: "Quatro Queijos Luxo" }, 
                desc: { es: "Una mezcla decadente de Muzzarella, Roquefort francés, Parmesano Reggiano y Provolone picante.", en: "A decadent blend of Mozzarella, French Roquefort, Parmesan Reggiano, and spicy Provolone.", pt: "Uma mistura decadente de Mussarela, Roquefort francês, Parmesão Reggiano e Provolone picante." } 
            },
            { 
                id: 'sp3', 
                price: 18.00, 
                img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop',
                name: { es: "Rúcula y Crudo", en: "Arugula & Prosciutto", pt: "Rúcula e Presunto Cru" }, 
                desc: { es: "Base de tomate y muzzarella, terminada con rúcula fresca, jamón crudo di parma y lascas de parmesano.", en: "Tomato and mozzarella base, finished with fresh arugula, Parma prosciutto, and parmesan shavings.", pt: "Base de tomate e mussarela, finalizada com rúcula fresca, presunto de Parma e lascas de parmesão." } 
            }
        ],
        calzones: [
            { 
                id: 'cz1', 
                price: 15.00, 
                img: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=600&auto=format&fit=crop',
                name: { es: "Calzone Calabresa", en: "Calabrese Calzone", pt: "Calzone Calabresa" }, 
                desc: { es: "Masa crujiente rellena de rodajas de longaniza calabresa, muzzarella fundida y un toque de ají molido.", en: "Crispy dough filled with calabrese sausage slices, melted mozzarella, and a touch of chili flakes.", pt: "Massa crocante recheada com fatias de linguiça calabresa, mussarela derretida e um toque de pimenta calabresa." } 
            },
            { 
                id: 'cz2', 
                price: 14.50, 
                img: 'https://images.unsplash.com/photo-1571407921820-2c2628dd5384?q=80&w=600&auto=format&fit=crop', 
                name: { es: "Calzone Vegetariano", en: "Veggie Calzone", pt: "Calzone Vegetariano" }, 
                desc: { es: "Espinaca salteada con ajo, ricota suave, nueces tostadas y nuez moscada. Una delicia ligera.", en: "Sautéed spinach with garlic, smooth ricotta, toasted walnuts, and nutmeg. A light delight.", pt: "Espinafre salteado com alho, ricota suave, nozes tostadas e noz-moscada. Uma delícia leve." } 
            }
        ],
        drinks: [
            { 
                id: 'dr1', 
                price: 3.50, 
                img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop',
                name: { es: "Coca Cola", en: "Coke", pt: "Coca Cola" }, 
                desc: { es: "Lata 354ml bien fría, ideal para acompañar tu pizza.", en: "Cold 354ml can, perfect to accompany your pizza.", pt: "Lata 354ml bem gelada, ideal para acompanhar sua pizza." } 
            },
            { 
                id: 'dr2', 
                price: 5.00, 
                img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=600&auto=format&fit=crop',
                name: { es: "Cerveza Lager Artesanal", en: "Craft Lager Beer", pt: "Cerveja Lager Artesanal" }, 
                desc: { es: "Pinta de cerveza rubia, ligera y refrescante. Notas de malta y miel.", en: "Blonde beer pint, light and refreshing. Notes of malt and honey.", pt: "Pint de cerveja loira, leve e refrescante. Notas de malte e mel." } 
            },
            { 
                id: 'dr3', 
                price: 4.00, 
                img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop',
                name: { es: "Limonada con Menta", en: "Mint Lemonade", pt: "Limonada com Hortelã" }, 
                desc: { es: "Jugo de limón natural, menta fresca y jengibre.", en: "Natural lemon juice, fresh mint, and ginger.", pt: "Suco de limão natural, hortelã fresca e gengibre." } 
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
    let cart = [];

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
