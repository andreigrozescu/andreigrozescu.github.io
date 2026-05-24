const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("active");
    });
});

document.querySelectorAll(".reveal").forEach(e => obs.observe(e));

/* SKILLS SYSTEM */
const skills = document.querySelectorAll(".skill");
const box = document.getElementById("skillBox");

const data = {
    iam: "Identity lifecycle management, authentication systems and enterprise IAM governance.",
    okta: "Okta identity platform used for authentication, SSO and access management.",
    cyber: "Cybersecurity principles, risk management and secure system design.",
    docker: "Containerization technology used in modern cloud infrastructure.",
    linux: "Operating system widely used in servers and security environments.",
    sparql: "Query language for RDF and Knowledge Graph data.",
    kg: "Knowledge Graph modeling for semantic data representation."
};

skills.forEach(s => {
    s.addEventListener("click", () => {

        skills.forEach(x => x.classList.remove("active"));
        s.classList.add("active");

        box.innerText = data[s.dataset.skill];
    });
});

/* CV IMAGE EFFECT */
const cv = document.getElementById("cvPhoto");

window.addEventListener("scroll", () => {
    const r = cv.getBoundingClientRect();

    if (r.top < window.innerHeight && r.bottom > 0) {
        cv.classList.add("rotate");
    } else {
        cv.classList.remove("rotate");
    }
});
