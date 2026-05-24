// THEME
function toggleTheme() {
    document.body.classList.toggle("light");
}

// LANG
let lang = "en";

const t = {
    es: {
        about: "Graduado en Ingeniería Informática especializado en ciberseguridad e IAM."
    },
    en: {
        about: "Computer Engineering graduate specialized in cybersecurity and IAM."
    }
};

function toggleLang() {
    lang = lang === "en" ? "es" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.innerText = t[lang][el.getAttribute("data-i18n")];
    });
}

// REVEAL
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("active");
    });
});

document.querySelectorAll(".reveal").forEach(e => obs.observe(e));

// SKILLS CHART
new Chart(document.getElementById("skillsChart"), {
    type: "radar",
    data: {
        labels: ["IAM","Security","Cloud","Dev","OS","Graphs"],
        datasets: [{
            data: [90,85,80,70,75,65]
        }]
    }
});

// TERMINAL
function runTerminal() {
    alert("Scanning IAM environment... OK");
}
