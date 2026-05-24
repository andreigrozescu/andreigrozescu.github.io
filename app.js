// LANGUAGE
let lang = "en";

// SCROLL REVEAL
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("active");
    });
});

document.querySelectorAll(".reveal").forEach(e => obs.observe(e));

// THEME
function toggleTheme() {
    document.body.classList.toggle("light");
}

// LANGUAGE
function toggleLang() {
    lang = lang === "en" ? "es" : "en";
}

/* NETWORK BACKGROUND */
const canvas = document.getElementById("net");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = Array.from({length: 80}, () => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    vx: (Math.random()-0.5)*1,
    vy: (Math.random()-0.5)*1
}));

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;

        if(d.x<0||d.x>canvas.width) d.vx*=-1;
        if(d.y<0||d.y>canvas.height) d.vy*=-1;

        ctx.fillStyle = "#38bdf8";
        ctx.fillRect(d.x,d.y,2,2);
    });

    requestAnimationFrame(draw);
}

draw();
