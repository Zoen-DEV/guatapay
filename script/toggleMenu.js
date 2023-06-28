const toggleMenuBtn = document.querySelector(".menu");
const menu = document.querySelector(".menu-content");
const toggleSolutions = document.querySelector(".link2-responsive");
const menuSolutions = document.querySelector(".menu-soluciones-responsive");

toggleMenuBtn.addEventListener("click", (e) => {
  if (menu.classList.contains("show-menu-content")) {
    menu.classList.remove("show-menu-content");
  } else {
    menu.classList.add("show-menu-content");
  }
});

toggleSolutions.addEventListener("click", (e) => {
  if (menuSolutions.classList.contains("show-menu-soluciones")) {
    menuSolutions.classList.remove("show-menu-soluciones");
  } else {
    menuSolutions.classList.add("show-menu-soluciones");
  }
});
