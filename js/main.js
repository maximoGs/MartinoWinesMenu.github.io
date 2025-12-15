document.addEventListener('DOMContentLoaded', () => {
    // Scroll Effect for Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Internationalization (i18n) ---
    let currentLang = 'es';

    const translations = {
        es: {
            nav_steps: "Menús",
            nav_tours: "Visitas",
            nav_tastings: "Degustaciones",
            nav_wines: "Vinos",
            hero_subtitle: "Bodega & Restaurante",
            section_steps: "Experiencias Gastronómicas",
            step_3_title: "Menú 3 Pasos",
            step_3_desc: "Una introducción a nuestra cocina de autor, maridada con nuestros clásicos.",
            step_4_title: "Menú 4 Pasos",
            step_4_desc: "La experiencia equilibrada. Sabores intensos y maridaje con vinos reserva.",
            step_7_title: "Menú 7 Pasos",
            step_7_desc: "Nuestra máxima expresión culinaria. Un viaje completo por los sentidos.",
            reserve_btn: "Reservar",
            section_tours: "Visitas & Tours",
            section_tastings: "Degustaciones",
            section_wines: "Nuestros Vinos",
            add_btn: "Agregar",
            cart_title: "Su Selección",
            cart_empty: "Su selección está vacía.",
            cart_notes_label: "Notas / Comentarios:",
            cart_notes_placeholder: "Aclaraciones, alergias, etc...",
            total: "Total:",
            checkout_whatsapp: "Confirmar por WhatsApp",
            footer_text: "&copy; 2025 Martino Wines. Est. 1901"
        },
        en: {
            nav_steps: "Menus",
            nav_tours: "Tours",
            nav_tastings: "Tastings",
            nav_wines: "Wines",
            hero_subtitle: "Winery & Restaurant",
            section_steps: "Gastronomic Experiences",
            step_3_title: "3-Step Menu",
            step_3_desc: "An introduction to our signature cuisine, paired with our classics.",
            step_4_title: "4-Step Menu",
            step_4_desc: "The balanced experience. Intense flavors paired with reserve wines.",
            step_7_title: "7-Step Menu",
            step_7_desc: "Our maximum culinary expression. A complete journey for the senses.",
            reserve_btn: "Book Now",
            section_tours: "Visits & Tours",
            section_tastings: "Tastings",
            section_wines: "Our Wines",
            add_btn: "Add",
            cart_title: "Your Selection",
            cart_empty: "Your selection is empty.",
            cart_notes_label: "Notes / Comments:",
            cart_notes_placeholder: "Special requests, allergies, etc...",
            total: "Total:",
            checkout_whatsapp: "Confirm via WhatsApp",
            footer_text: "&copy; 2025 Martino Wines. Est. 1901"
        },
        pt: {
            nav_steps: "Menus",
            nav_tours: "Visitas",
            nav_tastings: "Degustações",
            nav_wines: "Vinhos",
            hero_subtitle: "Vinícola & Restaurante",
            section_steps: "Experiências Gastronômicas",
            step_3_title: "Menu 3 Passos",
            step_3_desc: "Uma introdução à nossa cozinha de autor, harmonizada com nossos clássicos.",
            step_4_title: "Menu 4 Passos",
            step_4_desc: "A experiência equilibrada. Sabores intensos e harmonização com vinhos reserva.",
            step_7_title: "Menu 7 Passos",
            step_7_desc: "Nossa máxima expressão culinária. Uma viagem completa pelos sentidos.",
            reserve_btn: "Reservar",
            section_tours: "Visitas & Tours",
            section_tastings: "Degustações",
            section_wines: "Nossos Vinhos",
            add_btn: "Adicionar",
            cart_title: "Sua Seleção",
            cart_empty: "Sua seleção está vazia.",
            cart_notes_label: "Notas / Comentários:",
            cart_notes_placeholder: "Esclarecimentos, alergias, etc...",
            total: "Total:",
            checkout_whatsapp: "Confirmar por WhatsApp",
            footer_text: "&copy; 2025 Martino Wines. Est. 1901"
        }
    };

    function updateLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerText = translations[lang][key];
                }
            }
        });
        
        // Update specific static buttons that might not catch data-i18n if dynamically rendered
        // But for static HTML step buttons, we can add data-i18n to them in HTML or update here:
        document.querySelectorAll('.reserve-btn').forEach(btn => {
            btn.innerText = translations[lang]['reserve_btn'];
        });

        // Re-render Dynamic Sections to update texts
        renderWines(); 
        // renderTours(); // If tours have translations inside data
        // renderTastings(); 
        updateCartUI(); // To update total/empty text if dynamic
    }

    // Bind Language Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.closest('.lang-btn').getAttribute('data-lang');
            updateLanguage(lang);
        });
    });


    // --- Wine Data (Categorized) ---
    // Structure: Array of Category Objects to preserve order
    const wineCategories = [
        {
            id: 'martino-varietales',
            title: 'Martino Varietales',
            wines: [
                { id: 'mar-marselan', name: 'Martino Marselan', desc: 'Exótico y vibrante.', price: 38000, image: '' },
                { id: 'mar-sangiovese', name: 'Martino Sangiovese', desc: 'Fresco y vivaz.', price: 35000, image: '' },
                { id: 'mar-cf', name: 'Martino Cabernet Franc', desc: 'Tipicidad de Agrelo.', price: 38000, image: '' },
                { id: 'mar-px', name: 'Martino Pedro Ximénez', desc: 'Blanco seco Edición Limitada.', price: 32000, image: '' },
                { id: 'mar-rose', name: 'Martino Rosé', desc: 'Merlot & Malbec. Fresco.', price: 30000, image: '' }
            ]
        },
        {
            id: 'fruto',
            title: 'Fruto',
            wines: [
                { id: 'fruto-malbec', name: 'Fruto Malbec', desc: 'Fruta fresca y jugosa.', price: 28000, image: '' },
                { id: 'fruto-blanco', name: 'Fruto Blanco', desc: 'Cítrico y floral.', price: 28000, image: '' },
                { id: 'fruto-rosado', name: 'Fruto Rosado', desc: 'Suave y refrescante.', price: 28000, image: '' }
            ]
        },
        {
            id: 'molteni',
            title: 'Molteni',
            wines: [
                { id: 'molteni-andino', name: 'Molteni Andino', desc: 'Blend. Malbec & Cabernet.', price: 55000, image: '' },
                { id: 'molteni-bordeaux', name: 'Molteni Bordeaux', desc: 'Estilo clásico francés.', price: 60000, image: '' },
                { id: 'molteni-toscana', name: 'Molteni Toscana', desc: 'Inspiración italiana.', price: 60000, image: '' }
            ]
        },
        {
            id: 'superiore',
            title: 'Martino Superiore',
            wines: [
                { id: 'sup-malbec', name: 'Martino Superiore Malbec', desc: 'D.O.C. Luján de Cuyo. 18 meses.', price: 45000, image: '' },
                { id: 'sup-petit', name: 'Martino Superiore Petit Verdot', desc: 'Elegante y complejo.', price: 48000, image: '' },
                { id: 'sup-syrah', name: 'Martino Superiore Syrah', desc: 'Especiado y potente.', price: 46000, image: '' }
            ]
        },
        {
            id: 'baldomir',
            title: 'Baldomir',
            wines: [
                { id: 'baldomir-terroir', name: 'Baldomir Terroirs', desc: 'Serie de suelos únicos.', price: 85000, image: '' },
                { id: 'baldomir-gran', name: 'Baldomir Gran Reserva', desc: 'Icono de la bodega.', price: 120000, image: '' }
            ]
        }
    ];

    // Combine all for easy search/cart usage if needed, or Cart works by ID? 
    // We need a flat lookup for addToCart to work easily if strictly by ID
    const allWines = wineCategories.flatMap(c => c.wines);

    function renderWines() {
        const grid = document.getElementById('wines-grid');
        grid.innerHTML = ''; // Clear existing

        // Render by Category
        wineCategories.forEach(cat => {
            // Category Header
            const catHeader = document.createElement('div');
            catHeader.className = 'wine-category-header';
            catHeader.innerHTML = `<h3>${cat.title}</h3><hr>`;
            catHeader.style.gridColumn = "1 / -1"; // Full width
            catHeader.style.marginTop = "2rem";
            grid.appendChild(catHeader);

            // Wines in this category
            cat.wines.forEach(wine => {
                const card = document.createElement('div');
                card.className = 'menu-card wine-card';
                card.innerHTML = `
                    <div class="card-image">
                       ${wine.image ? `<img src="${wine.image}" alt="${wine.name}">` : '<div class="img-placeholder-bottle"></div>'}
                    </div>
                    <div class="card-header">
                        <h3>${wine.name}</h3>
                        <p class="desc">${wine.desc}</p>
                        <span class="card-price">$${wine.price.toLocaleString('es-AR')}</span>
                    </div>
                    <button class="add-btn" onclick="addToCart('${wine.id}', '${wine.name}', ${wine.price})">
                        ${translations[currentLang]['add_btn']}
                    </button>
                `;
                grid.appendChild(card);
            });
        });
    }

    // Tours Data
    const tours = [
        {
            title: 'Visita Histórica',
            desc: 'Recorrido por la bodega de 1901, cava subterránea y museo.',
            price: '$15.000',
            duration: '1h'
        },
        {
            title: 'Experiencia Enólogo',
            desc: 'Visita técnica con degustación de barricas en proceso.',
            price: '$25.000',
            duration: '1.5h'
        }
    ];

    // Tastings Data
    const tastings = [
        {
            title: 'Degustación Clásica',
            desc: '3 Vinos de la línea Estate. Introducción perfecta.',
            price: '$20.000'
        },
        {
            title: 'Degustación Premium',
            desc: '4 Vinos de alta gama incluyendo Gran Reserva.',
            price: '$35.000'
        }
    ];

    // Render Functions
    const winesGrid = document.getElementById('wines-grid');
    const toursGrid = document.getElementById('tours-content');
    const tastingsGrid = document.getElementById('tastings-content');

    // --- CART LOGIC ---
    let cart = [];
    
    // DOM Elements
    const cartFab = document.getElementById('cart-fab');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPriceEl = document.getElementById('cart-total-price');
    const cartCountEl = document.getElementById('cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Toggle Cart
    cartFab.addEventListener('click', () => {
        cartModal.classList.add('active');
    });

    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) cartModal.classList.remove('active');
    });

    // Add to Cart
    window.addToCart = (id, title, priceStr) => {
        // Parse price
        const price = parseInt(priceStr.replace(/[^0-9]/g, ''));
        
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.qty++;
        } else {
            cart.push({
                id: id,
                title: title,
                price: price,
                qty: 1
            });
        }
        updateCartUI();
        cartModal.classList.add('active'); // Auto open cart feedback
    };

    // Remove/Decrease
    window.removeFromCart = (id) => {
        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            if (cart[index].qty > 1) {
                cart[index].qty--;
            } else {
                cart.splice(index, 1);
            }
        }
        updateCartUI();
    };

    // Update UI
    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-msg">Su selección está vacía.</p>';
            cartCountEl.classList.remove('visible');
        } else {
            cart.forEach(item => {
                total += item.price * item.qty;
                count += item.qty;

                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item-row';
                itemEl.innerHTML = `
                    <div class="cart-item-info">
                        <strong>${item.title}</strong>
                        <small>$${item.price.toLocaleString('es-AR')}</small>
                    </div>
                    <div class="cart-item-actions">
                         <button class="cart-action-btn" onclick="removeFromCart('${item.id}')">-</button>
                         <span class="qty-val">${item.qty}</span>
                         <button class="cart-action-btn" onclick="addToCart('${item.id}', '${item.title}', '${item.price}')">+</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemEl);
            });
            cartCountEl.textContent = count;
            cartCountEl.classList.add('visible');
        }

        cartTotalPriceEl.textContent = '$' + total.toLocaleString('es-AR');
    }

    // Checkout (WhatsApp)
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;

        const notes = document.getElementById('cart-note').value;
        let message = "Hola Martino Wines! Me gustaría reservar lo siguiente:\n\n";
        let total = 0;

        cart.forEach(item => {
            message += `- ${item.qty}x ${item.title} ($${(item.price * item.qty).toLocaleString('es-AR')})\n`;
            total += item.price * item.qty;
        });

        message += `\n*Total: $${total.toLocaleString('es-AR')}*`;
        
        if(notes && notes.trim() !== "") {
            message += `\n\n*Notas:* ${notes}`;
        }

        // Add Date/Name placeholder if needed, for now just the list
        message += "\n\nQuedo a la espera de confirmación.";

        const phoneNumber = "5492615555555"; // Replace with real number
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });

    // --- RENDER UPDATES ---

    function renderWines(filter = 'all') {
        winesGrid.innerHTML = '';
        wines.forEach(wine => {
            if (filter === 'all' || wine.category === filter) {
                const card = document.createElement('div');
                card.className = 'menu-card';
                card.innerHTML = `
                    <div class="card-image">
                        <!-- Custom Bottle SVG with filter color -->
                       <svg width="60" height="180" viewBox="0 0 60 180" fill="${wine.category === 'white' ? '#e2d2b5' : '#4a1118'}" xmlns="http://www.w3.org/2000/svg">
                         <path d="M30 180C15 180 15 170 15 150V60C15 40 20 30 25 30V10H20V0H40V10H35V30C40 30 45 40 45 60V150C45 170 45 180 30 180Z" opacity="0.9"/>
                       </svg>
                    </div>
                    <div class="card-content">
                        <div class="card-header">
                            <h3>${wine.name}</h3>
                        </div>
                        <p class="desc">${wine.desc}</p>
                        <span class="card-price">${wine.price}</span>
                        <br><br>
                        <button class="reserve-btn" onclick="addToCart('${wine.id}', '${wine.name}', '${wine.price}')">Agregar</button>
                    </div>
                `;
                winesGrid.appendChild(card);
            }
        });
    }

    function renderTours() {
        if(!toursGrid) return;
        toursGrid.innerHTML = '';
        tours.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'step-card'; 
            card.innerHTML = `
                <div class="step-header">
                    <h3>${item.title}</h3>
                    <span class="price">${item.price}</span>
                </div>
                <p class="step-desc">${item.desc}</p>
                 <div style="margin-top:auto; margin-bottom: 1rem;">
                     <small>Duración: ${item.duration}</small>
                </div>
                <button class="reserve-btn" onclick="addToCart('tour-${index}', '${item.title}', '${item.price}')">Reservar</button>
            `;
            toursGrid.appendChild(card);
        });
    }

    function renderTastings() {
        if(!tastingsGrid) return;
        tastingsGrid.innerHTML = '';
        tastings.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'step-card';
            card.innerHTML = `
                <div class="step-header">
                    <h3>${item.title}</h3>
                    <span class="price">${item.price}</span>
                </div>
                <p class="step-desc">${item.desc}</p>
                <div style="margin-top:auto; margin-bottom: 1rem;"></div>
                <button class="reserve-btn" onclick="addToCart('taste-${index}', '${item.title}', '${item.price}')">Reservar</button>
            `;
            tastingsGrid.appendChild(card);
        });
    }

    // Attach to HTML static elements (Step Menus)
    // We need to make the static HTML buttons interactive or re-render them. 
    // Easier to re-render them or just attach listeners to the existing ones.
    // Let's attach listeners to the static buttons:
    const stepButtons = document.querySelectorAll('#step-menus .reserve-btn');
    const stepData = [
        { id: 'step-3', title: 'Menú 3 Pasos', price: '$60.000' },
        { id: 'step-4', title: 'Menú 4 Pasos', price: '$90.000' },
        { id: 'step-7', title: 'Menú 7 Pasos', price: '$120.000' }
    ];
    
    stepButtons.forEach((btn, index) => {
        if(stepData[index]) {
            btn.onclick = () => addToCart(stepData[index].id, stepData[index].title, stepData[index].price);
        }
    });



    // Initialize
    renderWines();
    renderTours();
    renderTastings();
    updateCartUI();

    // Filters
    const filterBtns = document.querySelectorAll('.wine-cat-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderWines(btn.dataset.filter);
        });
    });
});
