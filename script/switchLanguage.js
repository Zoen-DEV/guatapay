const buttonsLanguage = document.querySelectorAll('.button-language')
const languageFromLocalStorage = window.localStorage.getItem('language')
const defaultLanguage = navigator.language || 'es'
let language = languageFromLocalStorage ? languageFromLocalStorage : defaultLanguage

if (!languageFromLocalStorage) {
  fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=21cb45ae410c4931bedc24656b6d78d7')
    .then((res) => res.json())
    .then((response) => {
      language = response.country_code === 'US' ? 'en' : 'es'
      window.localStorage.setItem('language', language)
    })
    .catch((data, status) => {
      console.log('Request country failed')
      if (language !== 'es' || language !== 'en') {
        if (languageFromLocalStorage) {
          language = languageFromLocalStorage
        } else {
          language = defaultLanguage === 'es' || defaultLanguage === 'en' ? defaultLanguage : 'es'
        }
      }
    })
} else {
  language = languageFromLocalStorage
}

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
