const toggleMenuBtn = document.querySelector(".menu");
const menu = document.querySelector(".menu-content");
const toggleSolutions = document.querySelector(".link-responsive");
const menuSolutions = document.querySelector(".menu-soluciones-responsive");
const menuClose = document.querySelector(".menu-close");
const solutionIcon = document.querySelector(".icon-right-responsive");

const toggleClasses = (element, ...classes) => {
  classes.forEach((className) => element.classList.toggle(className));
};

const removeClasses = (element, classes) => {
  classes.forEach((className) => element.classList.remove(className));
};

const handleMenuClick = (e) => {
  toggleClasses(menu, "show-menu-content");
  removeClasses(menuSolutions, ["show-menu-soluciones"]);
};

const handleSolutionsClick = (e) => {
  toggleClasses(menuSolutions, "show-menu-soluciones");
  toggleClasses(menu, "extend-menu-content");
  toggleClasses(solutionIcon, "rotate-solution-icon");
};

const handleCloseClick = (e) => {
  removeClasses(menu, ["show-menu-content", "extend-menu-content"]);
  removeClasses(menuSolutions, ["show-menu-soluciones"]);
};

toggleMenuBtn.addEventListener("click", handleMenuClick);
toggleSolutions.addEventListener("click", handleSolutionsClick);
menuClose.addEventListener("click", handleCloseClick);
