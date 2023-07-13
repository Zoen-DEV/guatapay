const buttonsLanguage = document.querySelectorAll('.button-language')
const languageFromLocalStorage = window.localStorage.getItem('language')
let defaultLanguage = navigator.language === 'en' ? navigator.language : 'es'
if (navigator.language.includes('en')) {
  defaultLanguage = 'en'
}
let language = languageFromLocalStorage === 'es' || languageFromLocalStorage === 'en' ? languageFromLocalStorage : defaultLanguage
