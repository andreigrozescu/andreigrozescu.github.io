/* LANGUAGE SYSTEM */
let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Initialize language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Set initial language
setLanguage(currentLanguage);

const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("active");
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(e => obs.observe(e));

/* SKILLS INTERACTIVITY */
document.querySelectorAll(".skill-item").forEach(item => {
    item.addEventListener("click", function() {
        this.classList.toggle("active");
    });
    
    item.addEventListener("mouseenter", function() {
        this.classList.add("active");
    });
    
    item.addEventListener("mouseleave", function() {
        this.classList.remove("active");
    });
});

/* PARALLAX EFFECT FOR IMAGES */
const parallaxImages = document.querySelectorAll('.parallax-image');

window.addEventListener('scroll', () => {
    parallaxImages.forEach(img => {
        const scrollPosition = window.pageYOffset;
        const elementOffset = img.parentElement.offsetTop;
        const distance = scrollPosition - elementOffset;
        const yPos = distance * 0.5;
        
        img.style.backgroundPosition = `center ${yPos}px`;
    });
});

/* BACKGROUND NETWORK */
const canvas = document.getElementById("net");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = Array.from({length: 70}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8
}));

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

        ctx.fillStyle = "#38bdf8";
        ctx.fillRect(d.x, d.y, 2, 2);
    });

    requestAnimationFrame(animate);
}

animate();

/* HANDLE CANVAS RESIZE */
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

/* PHOTO STACK PARALLAX EFFECT ON SCROLL */
const photoStack = document.querySelector('.contact-photo-stack');
if (photoStack) {
    window.addEventListener('scroll', () => {
        const photoBack = photoStack.querySelector('.photo-back');
        const photoFront = photoStack.querySelector('.photo-front');
        
        if (photoBack && photoFront) {
            // Calculate scroll progress based on section position
            const contactSection = photoStack.closest('section');
            const sectionTop = contactSection.offsetTop;
            const sectionHeight = contactSection.offsetHeight;
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Calculate how much the section is in view
            const scrollProgress = Math.max(0, Math.min(1, (scrollTop + windowHeight - sectionTop) / (windowHeight + sectionHeight)));
            
            // Calculate scroll progress from bottom of page (0 at contact section, 1 at bottom)
            const scrollFromBottom = Math.max(0, Math.min(1, (scrollTop + windowHeight - sectionTop) / (documentHeight - sectionTop)));
            
            // Parallax offset - se separan más conforme scrolleas
            const offsetX = scrollProgress * 100; // 0 to 100px
            const offsetY = scrollProgress * 100; // 0 to 100px
            const rotationBack = scrollProgress * 8; // 0 to 8deg
            const rotationFront = -scrollProgress * 3; // 0 to -3deg
            
            // LinkedIn (front photo) slides to the left and then behind as you scroll down
            const slideOutX = scrollFromBottom * -150; // Slides left, 0 to -150px
            const frontZIndex = 2 - scrollFromBottom; // Gradually goes behind: 2 to 1
            
            photoBack.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px) rotateZ(${rotationBack}deg)`;
            photoFront.style.transform = `translateZ(0px) rotateZ(${rotationFront}deg) translateX(${slideOutX}px)`;
            photoFront.style.zIndex = frontZIndex;
            photoBack.style.zIndex = 1;
        }
    });
}

/* CV PHOTO 3D FLIP EFFECT ON SCROLL */
const cvPhoto3d = document.querySelector('.cv-photo-3d');
if (cvPhoto3d) {
    window.addEventListener('scroll', () => {
        const cvSection = cvPhoto3d.closest('section');
        const sectionTop = cvSection.offsetTop;
        const sectionHeight = cvSection.offsetHeight;
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const viewportCenter = scrollTop + windowHeight / 2;
        
        // Calculate position relative to viewport center
        const photoCenter = sectionTop + sectionHeight / 2;
        const distanceFromCenter = viewportCenter - photoCenter;
        const maxDistance = windowHeight;
        
        // Calculate rotation: -60deg when above, 0deg at center, 60deg when below
        const rotationY = (distanceFromCenter / maxDistance) * 60;
        
        cvPhoto3d.style.transform = `rotateY(${rotationY}deg)`;
    });
}

/* THESIS PHOTO ZOOM & FLOAT EFFECT ON SCROLL */
const thesisImg = document.querySelector('.thesis-visual-side img');
if (thesisImg) {
    window.addEventListener('scroll', () => {
        const thesisSection = thesisImg.closest('section');
        const sectionTop = thesisSection.offsetTop;
        const sectionHeight = thesisSection.offsetHeight;
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate how much the section is visible
        const sectionVisibility = Math.max(0, Math.min(1, (scrollTop + windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.5)));
        
        // Zoom effect: 1 to 1.15
        const scale = 1 + sectionVisibility * 0.15;
        
        // Float effect (Y position)
        const floatY = sectionVisibility * -30; // 0 to -30px (moves up)
        
        // Glow effect increases on scroll
        const glowIntensity = sectionVisibility * 0.2;
        
        thesisImg.style.transform = `scale(${scale}) translateY(${floatY}px)`;
        thesisImg.style.boxShadow = `0 ${12 + sectionVisibility * 20}px ${32 + sectionVisibility * 16}px rgba(56, 189, 248, ${0.1 + glowIntensity})`;
    });
}

/* BLOG PHOTO 3D ROTATION EFFECT ON SCROLL */
const blogImg = document.querySelector('.blog-img');
if (blogImg) {
    window.addEventListener('scroll', () => {
        const blogSection = blogImg.closest('section');
        const sectionTop = blogSection.offsetTop;
        const sectionHeight = blogSection.offsetHeight;
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const viewportCenter = scrollTop + windowHeight / 2;
        
        // Calculate position relative to viewport center
        const photoCenter = sectionTop + sectionHeight / 2;
        const distanceFromCenter = viewportCenter - photoCenter;
        
        // Use smaller range for faster/briefer rotation that fits in viewport
        const maxDistance = windowHeight * 0.6; // Smaller range = faster rotation
        
        // Calculate rotation in X and Y for 3D effect - reduced angles
        const rotationX = (distanceFromCenter / maxDistance) * 12;
        const rotationY = (distanceFromCenter / maxDistance) * -10;
        
        blogImg.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });
}
