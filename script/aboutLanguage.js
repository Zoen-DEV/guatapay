const handleAboutLanguage = () => {
  aboutTitle.textContent = aboutContent.about.title[language];
  aboutParagraph.textContent = aboutContent.about.paragraph[language];
  guatapaySpan.textContent = aboutContent.guatapay.span[language];
  guatapayLabel.textContent = aboutContent.guatapay.long[language];
  guatapayLabelMobile.textContent = aboutContent.guatapay.mobile[language];
  weBelieveParagraph.textContent = aboutContent.weBelieve[language];
  currenciesParagraph.textContent = aboutContent.currencies[language];
  ourServiceParagraph.textContent = aboutContent.ourService[language];
};

window.addEventListener("DOMContentLoaded", handleAboutLanguage);
