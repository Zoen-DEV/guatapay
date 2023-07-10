const buttonsLanguage = document.querySelectorAll('.button-language')
const languageFromLocalStorage = window.localStorage.getItem('language')
const defaultLanguage = 'es'
let language = languageFromLocalStorage ? languageFromLocalStorage : defaultLanguage

fetch('http://ip-api.com/json/')
  .then((res) => res.json())
  .then((response) => {
    if (!languageFromLocalStorage) {
      language = response.countryCode === 'US' ? 'en' : 'es'
      window.localStorage.setItem('language', language)
    } else {
      language = languageFromLocalStorage
    }
  })
  .catch((data, status) => {
    console.log('Request country failed')
  })

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
