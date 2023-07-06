const buttonsLanguage = document.querySelectorAll(".button-language");
const languageFromLocalStorage = window.localStorage.getItem("language");
let lang = navigator.language || navigator.userLanguage;
let language = languageFromLocalStorage ? languageFromLocalStorage : lang;

fetch("http://ip-api.com/json/")
  .then((res) => res.json())
  .then((response) => {
    lang = response.country === "Estados Unidos" ? "en" : "es";
    language = languageFromLocalStorage ? languageFromLocalStorage : lang;
    window.localStorage.setItem("language", language);
  })
  .catch((data, status) => {
    console.log("Request country failed");
  });

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
