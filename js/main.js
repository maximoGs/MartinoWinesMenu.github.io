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

    // Data - Wines (Real Portfolio)
    const wines = [
        // Martino Superiore
        {
            id: 'sup-malbec',
            name: 'Martino Superiore Malbec',
            desc: 'D.O.C. Luján de Cuyo. 18 meses en barrica. Intenso, ciruelas maduras, chocolate y especias.',
            price: '$45.000',
            category: 'red',
            image: '' 
        },
        {
            id: 'sup-petit',
            name: 'Martino Superiore Petit Verdot',
            desc: 'Elegante y complejo. Notas a moras, violetas y un toque mineral. Gran cuerpo.',
            price: '$48.000',
            category: 'red',
            image: ''
        },
        // Martino Varietals
        {
            id: 'mar-marselan',
            name: 'Martino Marselan',
            desc: 'Exótico y vibrante. Frutos negros, toques mentolados y taninos suaves.',
            price: '$38.000',
            category: 'red',
            image: ''
        },
        {
            id: 'mar-sangiovese',
            name: 'Martino Sangiovese',
            desc: 'Fresco y vivaz. Cerezas rojas, acidez equilibrada y final frutado.',
            price: '$35.000',
            category: 'red',
            image: ''
        },
        {
            id: 'mar-cf',
            name: 'Martino Cabernet Franc',
            desc: 'Tipicidad de Agrelo. Pimiento rojo asado, pimienta y frutas del bosque.',
            price: '$38.000',
            category: 'red',
            image: ''
        },
        {
            id: 'mar-px',
            name: 'Martino Pedro Ximénez',
            desc: 'Blanco seco Edición Limitada. Floral, cítrico y de acidez refrescante.',
            price: '$32.000',
            category: 'white',
            image: ''
        },
        {
            id: 'mar-rose',
            name: 'Martino Rosé',
            desc: 'Merlot & Malbec. Fresco, sutil color salmón y aromas a frutillas.',
            price: '$30.000',
            category: 'white', // Grouped with whites/rosé for filter simplicity or add category
            image: ''
        }
    ];

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
