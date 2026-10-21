// ================================
// DATA PORTFOLIO
// ================================

const portfolioData = {
    name: "Hogan",
    education: "Sistem Informasi",
    semester: "Semester 7",
    location: "Bantul, Yogyakarta",
    passion: "Web Developer",

    about: `
        Saya adalah mahasiswa Sistem Informasi semester 7 yang berdomisili
        di Bantul, Yogyakarta. Saya memiliki passion di bidang Web Development
        dan tertarik untuk mengembangkan website yang modern, responsif,
        dan mudah digunakan.
    `,

    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "Web Development",
        "UI/UX"
    ],

    projects: [
        {
            title: "Website Portfolio",
            description: "Website portfolio pribadi untuk menampilkan profil, skill, dan project.",
            technology: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Sistem Informasi",
            description: "Project sistem informasi berbasis website untuk kebutuhan akademik.",
            technology: ["PHP", "MySQL", "HTML", "CSS"]
        },
        {
            title: "Web Design",
            description: "Perancangan tampilan website modern dan responsif.",
            technology: ["HTML", "CSS", "JavaScript"]
        }
    ]
};


// ================================
// LOAD DATA PROFILE
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // Nama
    const nameElement = document.getElementById("name");
    if (nameElement) {
        nameElement.textContent = portfolioData.name;
    }

    // Passion
    const passionElement = document.getElementById("passion");
    if (passionElement) {
        passionElement.textContent = portfolioData.passion;
    }

    // Pendidikan
    const educationElement = document.getElementById("education");
    if (educationElement) {
        educationElement.textContent =
            `${portfolioData.education} - ${portfolioData.semester}`;
    }

    // Lokasi
    const locationElement = document.getElementById("location");
    if (locationElement) {
        locationElement.textContent = portfolioData.location;
    }

    // About
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
        aboutElement.textContent = portfolioData.about;
    }

    // Menampilkan skills
    loadSkills();

    // Menampilkan project
    loadProjects();

    // Menampilkan tahun
    loadYear();

    // Mobile menu
    mobileMenu();

    // Navbar scroll
    navbarScroll();
});


// ================================
// SKILLS
// ================================

function loadSkills() {

    const skillContainer = document.getElementById("skills");

    if (!skillContainer) return;

    skillContainer.innerHTML = "";

    portfolioData.skills.forEach(skill => {

        const skillElement = document.createElement("span");

        skillElement.classList.add("skill");

        skillElement.textContent = skill;

        skillContainer.appendChild(skillElement);
    });
}


// ================================
// PROJECTS
// ================================

function loadProjects() {

    const projectContainer = document.getElementById("projects");

    if (!projectContainer) return;

    projectContainer.innerHTML = "";

    portfolioData.projects.forEach(project => {

        const projectCard = document.createElement("div");

        projectCard.classList.add("project-card");

        const technology = project.technology
            .map(tech => `<span>${tech}</span>`)
            .join("");

        projectCard.innerHTML = `
            <h3>${project.title}</h3>

            <p>
                ${project.description}
            </p>

            <div class="technology">
                ${technology}
            </div>
        `;

        projectContainer.appendChild(projectCard);
    });
}


// ================================
// MOBILE MENU
// ================================

function mobileMenu() {

    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    if (!menuButton || !navMenu) return;

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });
}


// ================================
// NAVBAR SCROLL
// ================================

function navbarScroll() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });
}


// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================================
// CURRENT YEAR
// ================================

function loadYear() {

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }
}