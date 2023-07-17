// Handles language from page
const handleFooterLanguage = (e) => {
  servicesLink.textContent = footerContent.services[language]
  resourcesLink.textContent = footerContent.resources[language]
  aboutFooterLink.textContent = footerContent.about[language]
  contactFooterLink.textContent = footerContent.contact[language]
  nexsletterParagraph.textContent = footerContent.nexsletter[language]
  nexsletterBtn.textContent = footerContent.button[language]
  copyrightParagraph.textContent = footerContent.copyright[language]
}

const handleNavLanguage = (e) => {
  aboutLink.textContent = linksContent.about[language]
  contactLink.textContent = linksContent.contact[language]
  solutionsLink.textContent = linksContent.solutions.label[language]
  ecommerceLink.textContent = linksContent.solutions.one[language]
  paidServiceLink.textContent = linksContent.solutions.two[language]
  paymentLink.textContent = linksContent.solutions.three[language]
  buttonsLanguageSpanEs.forEach((btn) => {
    btn.textContent = linksContent.language.spanish[language]
  })
  buttonsLanguageSpanEn.forEach((btn) => {
    btn.textContent = linksContent.language.english[language]
  })
  aboutLink2.textContent = linksContent.about[language]
  contactLink2.textContent = linksContent.contact[language]
  solutionsLink2.textContent = linksContent.solutions.label[language]
}

// Verify language when page is loaded
window.addEventListener('DOMContentLoaded', () => {
  handleNavLanguage()
  handleFooterLanguage()
})
