const handleContactLanguage = () => {
  // header:
  formHeaderTitle.textContent = contactContent.header.title[language];
  formHeaderParagraph.textContent = contactContent.header.paragraph[language];

  // form:
  formNameSpan.textContent = contactContent.form.name[language];
  formCompanySpan.textContent = contactContent.form.company[language];
  formPhoneSpan.textContent = contactContent.form.phone[language];
  formMessageSpan.textContent = contactContent.form.message[language];
  formPolicies.textContent = contactContent.policy[language];

  // placeholders:
  formNamePlaceholder.placeholder =
    contactContent.form.name.placeholder[language];
  formEmailPlaceholder.placeholder = contactContent.form.email[language];
  formCompanyPlaceholder.placeholder =
    contactContent.form.company.placeholder[language];
  formMessagePlaceholder.placeholder =
    contactContent.form.message.placeholder[language];
  formSubmitValue.value = contactContent.form.submit[language];
};

window.addEventListener("DOMContentLoaded", handleContactLanguage);
