/* REVEAL */
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("active");
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(e => obs.observe(e));

/* BACKGROUND */
const canvas = document.getElementById("net");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = Array.from({length: 70}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6
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

/* PARALLAX LIGHT (APPLE STYLE FEEL) */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".blob").forEach(blob => {
        const speed = 0.2;
        blob.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});
