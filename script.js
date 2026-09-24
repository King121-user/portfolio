const modal = document.querySelector(".modal");
const closeBtn = document.querySelector("#close-modal");
// const openBtn = document.querySelector(".see_project");
const handburgerBtn = document.querySelector(".fa-bars");
const xmarkBtn = document.querySelector("#close-mobile");
const nav = document.querySelector(".active");
const nav_links = document.querySelectorAll(".nav-links .nav-items");
const projects_container = document.querySelector(".projects_container");

// openBtn.addEventListener("click", () => {
//     modal.style.display = "flex";

//     document.documentElement.classList.add("modal-open");
//     document.body.classList.add("modal-open");
// })

// modal
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTechmologies = document.getElementById("modal-technologies");
const modalSource = document.getElementById("modal-source");
const modalLive = document.getElementById("modal-live");
const modalImage = document.getElementById("modal-image")


closeBtn.addEventListener("click", () => {
    modal.style.display = "none";

    document.documentElement.classList.remove("modal-open");
    document.body.classList.remove("modal-open");
})

handburgerBtn.addEventListener("click", () => {
    nav.style.display = "block";
    document.body.classList.add("modal-open");
});

xmarkBtn.addEventListener("click", () => {
    nav.style.display = "none";
    document.body.classList.remove("modal-open");
});
for (let navlink of nav_links) (
    navlink.addEventListener("click", () => {
        nav.style.display = "none";
        document.body.classList.remove("modal-open")
    })
)

const projects = [
    {
        id: 0,
        project_title: "Multi-Post Stories",
        img:"./assets/images/placeholder.png",
        description: "A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
            tech_stacks: ["HTML", "CSS", "Javascript", "Ruby"],
        sources:"#",
        links:"#",
    },

    {
        id: 1,
        project_title: "Web Calculator",
        img:"./assets/images/calculator.png",
        description: "A responsive and interactive calculator application built with HTML, CSS, and JavaScript. This project demonstrates practical front-end development skills by combining a clean user interface with JavaScript-powered functionality and dynamic DOM manipulation.",
            tech_stacks: ["HTML", "CSS", "Javascript"],
        sources:"https://github.com/King121-user/Calculator",
        links:"https://king121-user.github.io/Calculator/",
    },
    {
        id: 2,
        project_title: "Multi-Post Stories",
        img:"./assets/images/placeholder.png",
        description: "A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
            tech_stacks: ["HTML", "CSS", "Javascript", "Ruby"],
        sources:"#",
        links:"#",
    },
    {
        id: 3,
        project_title: "Multi-Post Stories",
        img:"./assets/images/placeholder.png",
        description: "A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
            tech_stacks: ["HTML", "CSS", "Javascript", "Ruby"],
        sources:"#",
        links:"#",
    },
];

projects.map((project, index) => {
    const projectElement = document.createElement("div");

    projectElement.classList.add(
        "project",
        index % 2 === 0 ?"normal" : "reverse",
    );
    projectElement.innerHTML = `
    <div class="img_container">
    <img src= ${project.img} alt= ${project.project_title}>
    </div>
    <div class="others">
    <h4>${project.project_title }</h4>
    <p>${project.description}</p>

    <div class="tech-stacks">
    ${project.tech_stacks.map((technology, index) => `<span> ${technology} </span>`).join("")}
    </div>
    <button class="see_project" data-id=${project.id}>See Project</button>
    </div>
    `;

    projects_container.appendChild(projectElement)
});

const projectButtons = document.querySelectorAll(".see_project");
for(let button of projectButtons){
    button.addEventListener("click", () => {
        const projectId = Number(button.dataset.id);
        const project = projects.find((item) => item.id === projectId);
        modalTitle.textContent = project.project_title;
        modalDescription.textContent = project.description;
        modalImage.src = project.img;
        modalLive.href = project.links;
        modalSource.href = project.sources;
        modalTechmologies.innerHTML = project.tech_stacks
        .map((technology) => `<span> ${technology}</span>`)
        .join("");
        modal.style.display = "flex";
        document.documentElement.classList.add("modal-open");
        document.body.classList.add("modal-open");
    });
}