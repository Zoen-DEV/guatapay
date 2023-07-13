// Event listener to switch language buttons
buttonsLanguage.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let localLanguage = e.target.name ? e.target.name : e.target.id
    const path = window.location.pathname

    if (!language || language !== localLanguage) {
      window.localStorage.setItem('language', localLanguage)
      language = localLanguage
    }

    handleFooterLanguage()
    handleNavLanguage()

    if (path === '/index.html' || path === '/') {
      handleHomeLanguage()
    }
    if (path === '/solutions/index.html') {
      handleSolutionsLanguage()
    }
    if (path === '/about/index.html') {
      handleAboutLanguage()
    }
    if (path === '/contactus/index.html') {
      handleContactLanguage()
    }
  })
})
