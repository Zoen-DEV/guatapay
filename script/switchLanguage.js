const buttonsLanguage = document.querySelectorAll('.button-language')
const languageFromLocalStorage = window.localStorage.getItem('language')
let defaultLanguage = navigator.language === 'en' ? navigator.language : 'es'
if (navigator.language.includes('en')) {
  defaultLanguage = 'en'
}
let language = languageFromLocalStorage === 'es' || languageFromLocalStorage === 'en' ? languageFromLocalStorage : defaultLanguage

// Event listener to switch language buttons
buttonsLanguage.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let localLanguage = e.target.name ? e.target.name : e.target.id

    if (!language || language !== localLanguage) {
      window.localStorage.setItem('language', localLanguage)
      window.location.reload()
    }
  })
})
