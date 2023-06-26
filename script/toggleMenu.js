const toggleMenuBtn = document.querySelector(".menu");
const menu = document.querySelector(".menu-content");
const toggleSolutions = document.querySelector(".link-responsive");
const menuSolutions = document.querySelector(".menu-soluciones-responsive");
const menuClose = document.querySelector(".menu-close");
const solutionIcon = document.querySelector(".icon-right-responsive")

toggleMenuBtn.addEventListener("click", (e) => {
  if (menu.classList.contains("show-menu-content")) {
    menu.classList.remove("show-menu-content");
    menuSolutions.classList.remove("show-menu-soluciones");
    menu.classList.remove("extend-menu-content");
  } else {
    menu.classList.add("show-menu-content");
  }
});

toggleSolutions.addEventListener("click", (e) => {
  if (menuSolutions.classList.contains("show-menu-soluciones")) {
    menuSolutions.classList.remove("show-menu-soluciones");
    menu.classList.remove("extend-menu-content");
    solutionIcon.classList.remove("rotate-solution-icon")
  } else {
    menuSolutions.classList.add("show-menu-soluciones");
    menu.classList.add("extend-menu-content");
    solutionIcon.classList.add("rotate-solution-icon")
  }
});

menuClose.addEventListener("click", (e) => {
    menu.classList.remove("show-menu-content");
    menuSolutions.classList.remove("show-menu-soluciones");
    menu.classList.remove("extend-menu-content");
});
