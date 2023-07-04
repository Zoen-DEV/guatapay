const buttonsLanguage = document.querySelectorAll(".button-language");
const lang = navigator.language || navigator.userLanguage;
const languageFromLocalStorage = window.localStorage.getItem("language");
const language = languageFromLocalStorage ? languageFromLocalStorage : lang;

// Event listener to switch language buttons
buttonsLanguage.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let localLanguage = e.target.name ? e.target.name : e.target.id;

    if (!language || language !== localLanguage) {
      window.localStorage.setItem("language", localLanguage);
      window.location.reload();
    }
  });
});
