const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("active");
    });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(e => obs.observe(e));

/* BACKGROUND SAFE */
const canvas = document.getElementById("net");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = Array.from({length: 60}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5),
    vy: (Math.random() - 0.5)
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
