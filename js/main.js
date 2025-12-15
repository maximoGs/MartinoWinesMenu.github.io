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
            btn_all: "Todos",
            btn_reds: "Tintos",
            btn_whites: "Blancos",
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
            btn_all: "All",
            btn_reds: "Reds",
            btn_whites: "Whites",
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
             btn_all: "Todos",
            btn_reds: "Tintos",
            btn_whites: "Brancos",
            cart_title: "Sua Seleção",
            cart_empty: "Sua seleção está vazia.",
            cart_notes_label: "Notas / Comentários:",
            cart_notes_placeholder: "Esclarecimentos, alergias, etc...",
            total: "Total:",
            checkout_whatsapp: "Confirmar por WhatsApp",
            footer_text: "&copy; 2025 Martino Wines. Est. 1901"
        }
    };

    // --- Page Routing / Detection ---
    const path = window.location.pathname;
    const isWinesPage = path.includes('wines.html');
    const isExperiencesPage = path.includes('experiences.html');

    // --- Data ---
    const wineCategories = [
        {
            id: 'martino-varietales',
            title: 'Martino Varietales',
            wines: [
                { id: 'mar-px', name: 'Martino Pedro Ximénez', desc: 'Edición Limitada. Blanco frutado y fresco.', price: 19900, image: '' },
                { id: 'mar-rose', name: 'Martino Rosé', desc: 'Fresco, sutil y elegante.', price: 19900, image: '' },
                { id: 'mar-sangiovese', name: 'Martino Sangiovese', desc: 'Fresco y vivaz.', price: 19900, image: '' },
                { id: 'mar-tempranillo', name: 'Martino Tempranillo', desc: 'Estructurado y amable.', price: 19900, image: '' },
                { id: 'mar-marselan', name: 'Martino Marselan', desc: 'Exótico y vibrante.', price: 19900, image: '' },
                { id: 'mar-malbec', name: 'Martino Malbec', desc: 'El clásico argentino.', price: 19900, image: '' },
                { id: 'mar-cf', name: 'Martino Cabernet Franc', desc: 'Tipicidad de Agrelo.', price: 19900, image: '' }
            ]
        },
        {
            id: 'fruto',
            title: 'Fruto',
            wines: [
                { id: 'fruto-blanco', name: 'Fruto Blanco', desc: 'Cítrico y floral.', price: 23500, image: '' },
                { id: 'fruto-clarette', name: 'Fruto Clarette', desc: 'Un estilo único y ligero.', price: 23500, image: '' },
                { id: 'fruto-tinto', name: 'Fruto Tinto', desc: 'Fruta fresca y jugosa.', price: 23500, image: '' }
            ]
        },
        {
            id: 'molteni',
            title: 'Molteni',
            wines: [
                { id: 'molteni-toscana', name: 'Molteni Toscano', desc: 'Inspiración italiana.', price: 32000, image: '' },
                { id: 'molteni-bordeaux', name: 'Molteni Bordeaux', desc: 'Estilo clásico francés.', price: 32000, image: '' },
                { id: 'molteni-andino', name: 'Molteni Andino', desc: 'Blend. Malbec & Cabernet.', price: 32000, image: '' }
            ]
        },
        {
            id: 'superiore',
            title: 'Martino Superiore',
            wines: [
                { id: 'sup-malbec', name: 'Martino Superiore Malbec', desc: 'D.O.C. Luján de Cuyo. 18 meses.', price: 37500, image: '' },
                { id: 'sup-merlot', name: 'Martino Superiore Merlot', desc: 'Suave, redondo y complejo.', price: 37500, image: '' },
                { id: 'sup-syrah', name: 'Martino Superiore Syrah', desc: 'Especiado y potente.', price: 37500, image: '' },
                { id: 'sup-petit', name: 'Martino Superiore Petit Verdot', desc: 'Elegante y complejo.', price: 37500, image: '' }
            ]
        },
        {
            id: 'baldomir',
            title: 'Baldomir',
            wines: [
                { id: 'baldomir-chacayes', name: 'Baldomir Terroir Series Chacayes Malbec 2018', desc: 'Valle de Uco. Carácter mineral.', price: 85000, image: '' },
                { id: 'baldomir-vistalba', name: 'Baldomir Terroir Series Vistalba Malbec 2014', desc: 'Luján de Cuyo. Elegancia clásica.', price: 85000, image: '' },
                { id: 'baldomir-agrelo', name: 'Baldomir Terroir Series Agrelo Cabernet Franc 2019', desc: 'Tipicidad varietal única.', price: 85000, image: '' },
                { id: 'baldomir-gran', name: 'Baldomir Gran Malbec 2019', desc: 'Icono de la bodega.', price: 132000, image: '' }
            ]
        }
    ];

    const toursData = [
        {
            id: 'tour-clasica',
            title_es: "Visita y Degustación Clásica",
            desc_es: "Recorrido histórico por la bodega de 1901 + Degustación de 3 vinos Varietales.",
            title_en: "Classic Tour & Tasting",
            desc_en: "Historical tour of the 1901 winery + Tasting of 3 Varietal wines.",
            title_pt: "Visita e Degustação Clássica",
            desc_pt: "Tour histórico pela vinícola de 1901 + Degustação de 3 vinhos Varietais.",
            price: 20000,
            image: ''
        },
        {
            id: 'tour-premium',
            title_es: "Experiencia Martino Superiore",
            desc_es: "Visita privada + Degustación dirigida de línea Superiore y Baldomir. Incluye tabla de quesos.",
            title_en: "Martino Superiore Experience",
            desc_en: "Private tour + Guided tasting of Superiore and Baldomir lines. Cheese platter included.",
            title_pt: "Experiência Martino Superiore",
            desc_pt: "Visita privada + Degustação guiada das linhas Superiore e Baldomir. Inclui tábua de queijos.",
            price: 45000,
            image: ''
        }
    ];

    const tastingsData = [
         {
            id: 'tasting-varietales',
            title_es: "Flight Varietales Inusuales",
            desc_es: "Descubra nuestras cepas atípicas: Marselan, Sangiovese, Pedro Ximénez.",
            title_en: "Unusual Varietals Flight",
            desc_en: "Discover our atypical grapes: Marselan, Sangiovese, Pedro Ximénez.",
            title_pt: "Flight Variedades Incomuns",
            desc_pt: "Descubra nossas uvas atípicas: Marselan, Sangiovese, Pedro Ximénez.",
            price: 18000,
            image: ''
        },
        {
             id: 'tasting-vertical',
             title_es: "Vertical Martino Malbec",
             desc_es: "Cata vertical de 3 añadas históricas de nuestro Malbec D.O.C.",
             title_en: "Martino Malbec Vertical",
             desc_en: "Vertical tasting of 3 historical vintages of our D.O.C. Malbec.",
             title_pt: "Vertical Martino Malbec",
             desc_pt: "Degustação vertical de 3 safras históricas do nosso Malbec D.O.C.",
             price: 35000,
             image: ''
        }
    ];


    // --- Dynamic Step Menus Data ---
    const stepMenusData = [
        {
            id: 'step-3', 
            price: 59000,
            title_es: "Menú 3 Pasos a la Carta",
            desc_es: "<strong>Entrada</strong><br>Pastelito de Osobuco (Opc. Veg) / Ensalada / Babaganush<br><br><strong>Principal</strong><br>Ñoquis de Ricota / Cotoletta / Cerdo Laqueado (Ternera +$7.000)<br><br><strong>Postre</strong><br>Bavaroise / Chocolate / Pavlova<br><br><em>Incluye agua, café y una botella línea Martino cada 2 personas.</em>",
            title_en: "3-Course A la Carte",
            desc_en: "<strong>Starter</strong><br>Ossobuco Pastry / Salad / Babaganoush<br><br><strong>Main</strong><br>Ricotta Gnocchi / Cotoletta / Glazed Pork (Veal +$7.000)<br><br><strong>Dessert</strong><br>Strawberry Bavaroise / Chocolate / Pavlova<br><br><em>Includes water, coffee and one Martino bottle every 2 people.</em>",
            title_pt: "Menu 3 Passos à La Carte",
            desc_pt: "<strong>Entrada</strong><br>Pastel de Ossobuco / Salada / Babaganush<br><br><strong>Prato Principal</strong><br>Nhoque de Ricota / Cotoletta / Porco Laqueado (Vitela +$7.000)<br><br><strong>Sobremesa</strong><br>Bavaroise de Morango / Chocolate / Pavlova<br><br><em>Inclui água, café e uma garrafa Martino a cada 2 pessoas.</em>"
        },
        {
            id: 'step-4',
            price: 90000,
            title_es: "Menú 4 Pasos",
            desc_es: "<strong>Paso 1</strong><br>Langostino. Leche de tigre. Alga<br><em>Copa Fruto Blanco</em><br><br><strong>Paso 2</strong><br>Pesca blanca. Arveja. Pickle<br><em>Copa Rose</em><br><br><strong>Paso 3</strong><br>Tapa de asado. Aligot. Fondo<br><em>Copa Molteni Bordeaux / Baldomir Vistalba</em><br><br><strong>Paso 4</strong><br>Pistacho. Naranja. Algarroba<br><em>Copa Espumante</em>",
            title_en: "4-Course Menu",
            desc_en: "<strong>Step 1</strong><br>Prawn. Tiger milk. Seaweed<br><em>Fruto Blanco</em><br><br><strong>Step 2</strong><br>White fish. Peas. Pickle<br><em>Rose</em><br><br><strong>Step 3</strong><br>Rib cap. Aligot. Jus<br><em>Molteni Bordeaux / Baldomir Vistalba</em><br><br><strong>Step 4</strong><br>Pistachio. Orange. Carob<br><em>Sparkling Wine</em>",
            title_pt: "Menu 4 Passos",
            desc_pt: "<strong>Passo 1</strong><br>Camarão. Leite de tigre. Alga<br><em>Fruto Blanco</em><br><br><strong>Passo 2</strong><br>Peixe branco. Ervilha. Pickle<br><em>Rose</em><br><br><strong>Passo 3</strong><br>Tapa de asado. Aligot. Molho<br><em>Molteni Bordeaux / Baldomir Vistalba</em><br><br><strong>Passo 4</strong><br>Pistache. Laranja. Algarroba<br><em>Espumante</em>"
        },
        {
            id: 'step-7',
            price: 120000,
            title_es: "Menú 7 Pasos",
            desc_es: "<strong>Paso 1</strong> Snack del chef (Fruto Blanco)<br><strong>Paso 2</strong> Langostino (Rose)<br><strong>Paso 3</strong> Pesca blanca (Superiore Syrah)<br><strong>Paso 4</strong> Arroz negro (Molteni Bordeaux)<br><strong>Paso 5</strong> Tapa de asado (Baldomir Vistalba/Gran Malbec)<br><strong>Paso 6</strong> Limpia boca<br><strong>Paso 7</strong> Pistacho (Espumante)",
            title_en: "7-Course Menu",
            desc_en: "<strong>Step 1</strong> Chef Snack<br><strong>Step 2</strong> Prawn<br><strong>Step 3</strong> White Fish<br><strong>Step 4</strong> Black Rice<br><strong>Step 5</strong> Rib Cap<br><strong>Step 6</strong> Palate Cleanser<br><strong>Step 7</strong> Pistachio",
            title_pt: "Menu 7 Passos",
            desc_pt: "<strong>Passo 1</strong> Snack do chef<br><strong>Passo 2</strong> Camarão<br><strong>Passo 3</strong> Peixe branco<br><strong>Passo 4</strong> Arroz negro<br><strong>Passo 5</strong> Tapa de asado<br><strong>Passo 6</strong> Limpa paladar<br><strong>Passo 7</strong> Pistache"
        }
    ];

    function renderSteps() {
        const stepsGrid = document.querySelector('#step-menus .steps-grid');
        if (!stepsGrid) return;
        
        stepsGrid.innerHTML = ''; // Clear static HTML
        
        stepMenusData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'step-card';
            if (item.id === 'step-4') card.classList.add('featured'); // Keep featured style
            
            card.innerHTML = `
                <div class="step-image-container">
                    <div class="img-placeholder"></div>
                </div>
                <div class="step-details">
                    <div class="step-header">
                        <h3>${item[`title_${currentLang}`]}</h3>
                        <span class="price">$${item.price.toLocaleString('es-AR')}</span>
                    </div>
                    <div class="step-content">
                        <p class="step-desc">${item[`desc_${currentLang}`]}</p>
                    </div>
                    <div class="step-action">
                        <button class="reserve-btn" onclick="addToCart('${item.id}', '${item[`title_${currentLang}`]}', ${item.price})">
                            ${translations[currentLang]['reserve_btn']}
                        </button>
                    </div>
                </div>
            `;
            stepsGrid.appendChild(card);
        });
    }


    // --- Render Functions ---

    function renderWines() {
        const grid = document.getElementById('wines-grid');
        if (!grid) return;
        grid.innerHTML = '';

        wineCategories.forEach(cat => {
            const catHeader = document.createElement('div');
            catHeader.className = 'wine-category-header';
            catHeader.innerHTML = `<h3>${cat.title}</h3>`;
            grid.appendChild(catHeader);

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

    function renderExperiences() {
        const toursGrid = document.getElementById('tours-content');
        const tastingsGrid = document.getElementById('tastings-content');
        
        if (toursGrid) {
            toursGrid.innerHTML = '';
            toursData.forEach(item => {
                const card = document.createElement('div');
                card.className = 'step-card';
                 card.innerHTML = `
                    <div class="step-details" style="padding: 2rem; width:100%;">
                        <div class="step-header">
                            <h3>${item[`title_${currentLang}`]}</h3>
                            <span class="price">$${item.price.toLocaleString('es-AR')}</span>
                        </div>
                        <div class="step-content">
                            <p class="step-desc">${item[`desc_${currentLang}`]}</p>
                        </div>
                        <div class="step-action">
                             <button class="reserve-btn" onclick="addToCart('${item.id}', '${item[`title_${currentLang}`]}', ${item.price})">
                                ${translations[currentLang]['reserve_btn']}
                            </button>
                        </div>
                    </div>
                `;
                toursGrid.appendChild(card);
            });
        }

        if (tastingsGrid) {
            tastingsGrid.innerHTML = '';
             tastingsData.forEach(item => {
                const card = document.createElement('div');
                card.className = 'step-card'; 
                 card.innerHTML = `
                    <div class="step-details" style="padding: 2rem; width:100%;">
                        <div class="step-header">
                            <h3>${item[`title_${currentLang}`]}</h3>
                            <span class="price">$${item.price.toLocaleString('es-AR')}</span>
                        </div>
                        <div class="step-content">
                            <p class="step-desc">${item[`desc_${currentLang}`]}</p>
                        </div>
                        <div class="step-action">
                             <button class="reserve-btn" onclick="addToCart('${item.id}', '${item[`title_${currentLang}`]}', ${item.price})">
                                ${translations[currentLang]['reserve_btn']}
                            </button>
                        </div>
                    </div>
                `;
                tastingsGrid.appendChild(card);
            });
        }
    }

    // --- Language Update ---
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
        
        // Dynamic Renders
        // Check page to know what to render, but simple rule: try to render all if elements exist
        if (isWinesPage) renderWines(); 
        if (isExperiencesPage) renderExperiences();
        if (document.querySelector('#step-menus')) renderSteps(); // Always render steps if section exists (Index)

        // Update Filter Buttons Text
        const filters = {
            'all': 'btn_all',
            'red': 'btn_reds',
            'white': 'btn_whites'
        };
        document.querySelectorAll('.wine-cat-btn').forEach(btn => {
            const filter = btn.dataset.filter;
            if(filters[filter]) {
                btn.innerText = translations[lang][filters[filter]];
            }
        });

        updateCartUI(); 
    }

    // --- Cart Logic ---
    // Load from LocalStorage
    let cart = JSON.parse(localStorage.getItem('martinoCart')) || [];
    
    const cartFab = document.getElementById('cart-fab');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPriceEl = document.getElementById('cart-total-price');
    const cartCountEl = document.getElementById('cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');

    if(cartFab) {
        cartFab.addEventListener('click', () => cartModal.classList.add('active'));
    }
    if(closeCartBtn) {
        closeCartBtn.addEventListener('click', () => cartModal.classList.remove('active'));
    }
    if(cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) cartModal.classList.remove('active');
        });
    }

    function saveCart() {
        localStorage.setItem('martinoCart', JSON.stringify(cart));
        updateCartUI();
    }

    window.addToCart = (id, title, price) => {
        // Ensure price is number
        let finalPrice = price;
        if (typeof price === 'string') {
            finalPrice = parseInt(price.replace(/[^0-9]/g, ''));
        }

        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.qty++;
        } else {
            cart.push({ id, title, price: finalPrice, qty: 1 });
        }
        saveCart();
        cartModal.classList.add('active');
    };

    window.removeFromCart = (id) => {
        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            if (cart[index].qty > 1) {
                cart[index].qty--;
            } else {
                cart.splice(index, 1);
            }
        }
        saveCart();
    };

    function updateCartUI() {
        if(!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;

        if (cart.length === 0) {
            // Safe check for translations in case init is slow
            const emptyText = translations[currentLang] ? translations[currentLang]['cart_empty'] : "Su selección está vacía.";
            cartItemsContainer.innerHTML = `<p class="empty-msg">${emptyText}</p>`;
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
                         <button class="cart-action-btn" onclick="addToCart('${item.id}', '${item.title}', ${item.price})">+</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemEl);
            });
            cartCountEl.textContent = count;
            cartCountEl.classList.add('visible');
        }

        cartTotalPriceEl.textContent = '$' + total.toLocaleString('es-AR');
    }

    if(checkoutBtn) {
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
            if(notes && notes.trim() !== "") message += `\n\n*Notas:* ${notes}`;
            
            const phoneNumber = "5492615555555"; 
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    }

    // --- Init ---
    // Bind Language Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.closest('.lang-btn').getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // Initial Render
    if (isWinesPage) renderWines();
    if (isExperiencesPage) renderExperiences();
    if (document.querySelector('#step-menus')) renderSteps(); // Render static steps dynamically now
    
    // Check if we are on Index to render steps? 
    // The selector checks existence, so its safe.

    // Wine Filters
    const filterBtns = document.querySelectorAll('.wine-cat-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
             if(filter === 'all') {
                document.querySelectorAll('.wine-category-header, .wine-card').forEach(el => el.style.display = '');
            } else {
                 // No functional filter for now as discussed
            }
        });
    });
    
    updateCartUI(); // Init cart UI with loaded data
});
