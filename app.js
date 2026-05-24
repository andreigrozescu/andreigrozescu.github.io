function toggleTheme() {
    document.body.classList.toggle("light");
}

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

/* SCROLL REVEAL REAL */
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("active");
    });
});

document.querySelectorAll(".reveal").forEach(e => obs.observe(e));
