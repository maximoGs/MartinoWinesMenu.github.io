const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const particleCount = 100; // Adjust for density
const connectionDistance = 150;
const mouseDistance = 200;

// Mouse state
const mouse = {
    x: null,
    y: null
};

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('resize', resize);

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? 'rgba(138, 43, 226, ' : 'rgba(255, 255, 255, '; // Violet or White
        this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (gentle attraction)
        if (mouse.x != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouseDistance) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (mouseDistance - distance) / mouseDistance;
                const directionX = forceDirectionX * force * 0.05;
                const directionY = forceDirectionY * force * 0.05;
                this.vx += directionX;
                this.vy += directionY;
            }
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect particles
        for (let j = i; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(138, 43, 226, ${1 - distance / connectionDistance})`;
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}

resize();
animate();

// Scroll Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Translations
const translations = {
    es: {
        subtitle: "RAÍCES ARGENTINAS // HOUSE // TECHNO",
        aboutTitle: "EL ARTISTA",
        aboutText1: "Emergiendo de la vibrante escena underground de Argentina, <span class='highlight'>Chano Smovir</span> une las raíces culturales tradicionales con el pulso futurista del <span class='highlight'>House & Techno</span>.",
        aboutText2: "Sus sets no son solo música; son un viaje a través del vacío, iluminado por destellos de energía eléctrica. Una experiencia sónica diseñada para conectar almas en la pista de baile.",
        galleryTitle: "VISUALES",
        connectTitle: "CONECTAR",
        connectSubtitle: "Sigue el viaje o ponte en contacto."
    },
    en: {
        subtitle: "ARGENTINE ROOTS // HOUSE // TECHNO",
        aboutTitle: "THE ARTIST",
        aboutText1: "Emerging from the vibrant underground scene of Argentina, <span class='highlight'>Chano Smovir</span> bridges the gap between traditional cultural roots and the futuristic pulse of <span class='highlight'>House & Techno</span>.",
        aboutText2: "His sets are not just music; they are a journey through the void, illuminated by flashes of electric energy. A sonic experience designed to connect souls on the dancefloor.",
        galleryTitle: "VISUALS",
        connectTitle: "CONNECT",
        connectSubtitle: "Follow the journey or get in touch."
    }
};

// Language Toggle Logic
const langToggle = document.getElementById('lang-toggle');
const langOptions = document.querySelectorAll('.lang-option');
let currentLang = 'es'; // Default

if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        updateLanguage(currentLang);
    });
}

function updateLanguage(lang) {
    // Update Toggle UI
    langOptions.forEach(opt => {
        if (opt.dataset.lang === lang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// Initialize Language (Optional: Check browser preference)
updateLanguage('es');

// Audio Player Logic
const playBtn = document.getElementById('play-btn');
let isPlaying = false;

if (playBtn) {
    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
            // Simulate playing (would need actual Audio object)
        } else {
            playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
        }
    });
}

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-content');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // For now, since we have placeholders, we'll just show a placeholder color
        // In real usage, you'd get the src from an img tag
        lightbox.classList.add('active');
        lightboxImg.style.backgroundColor = '#1a1a1a'; // Placeholder
        lightboxImg.src = ''; // Clear src
    });
});

if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});
