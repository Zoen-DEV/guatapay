const toggleMenuBtn = document.querySelector('.menu-icon-tigger')
const menu = document.querySelector('.menu-container')
const menuClose = document.querySelector('.cancel-icon')

const toggleClasses = (element, ...classes) => {
  classes.forEach((className) => element.classList.toggle(className))
}

const removeClasses = (element, ...classes) => {
  classes.forEach((className) => element.classList.remove(className))
}

const handleMenuClick = (e) => {
  menu.classList.toggle('show-menu-content')
}

const handleCloseClick = (e) => {
  menu.classList.remove('show-menu-content')
}

toggleMenuBtn.addEventListener('click', handleMenuClick)
menuClose.addEventListener('click', handleCloseClick)
