function toggleTheme() {
    document.body.classList.toggle("light");
}

let lang = "en";

const translations = {
    es: {
        name: "Andrei Grozescu",
        role: "Ingeniero de Ciberseguridad e IAM",
        hero_desc: "Ingeniero IAM en Accenture especializado en identidad y seguridad cloud.",
        about: "Graduado en Ingeniería Informática especializado en ciberseguridad e IAM."
    },
    en: {
        name: "Andrei Grozescu",
        role: "Cybersecurity & IAM Engineer",
        hero_desc: "IAM engineer at Accenture focused on identity security and cloud access.",
        about: "Computer Engineering graduate specialized in cybersecurity and IAM."
    }
};

function toggleLang() {
    lang = lang === "en" ? "es" : "en";

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerText = translations[lang][key];
    });
}

/* SCROLL REVEAL REAL */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
