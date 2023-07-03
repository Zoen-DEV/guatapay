const buttonsLanguage = document.querySelectorAll(".button-language");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");
const solutionsLink = document.querySelector(".solutions-link");
const ecommerceLink = document.getElementById("ecommerce-link");
const paidServiceLink = document.getElementById("paid-service-link");
const paymentLink = document.getElementById("payment-link");
const buttonsLanguageSpanEs = document.querySelectorAll(
  ".button-language-span-es"
);
const buttonsLanguageSpanEn = document.querySelectorAll(
  ".button-language-span-en"
);
const servicesLink = document.getElementById("services-footer-link");
const resourcesLink = document.getElementById("resources-footer-link");
const aboutFooterLink = document.getElementById("about-footer-link");
const contactFooterLink = document.getElementById("contact-footer-link");
const nexsletterParagraph = document.querySelector(".nexsletter-paragraph");
const nexsletterBtn = document.querySelector(".nexsletter-submit");
const copyrightParagraph = document.querySelector(".copyright-paragraph");

// Handles language from page
const handleFooterLanguage = (e) => {
  const language = e.target.name ? e.target.name : e.target.id;

  servicesLink.textContent = footerContent.services[language];
  resourcesLink.textContent = footerContent.resources[language];
  aboutFooterLink.textContent = footerContent.about[language];
  contactFooterLink.textContent = footerContent.contact[language];
  nexsletterParagraph.textContent = footerContent.nexsletter[language];
  nexsletterBtn.textContent = footerContent.button[language];
  copyrightParagraph.textContent = footerContent.copyright[language];
};

const handleNavLanguage = (e) => {
  const language = e.target.name ? e.target.name : e.target.id;

  aboutLink.textContent = linksContent.about[language];
  contactLink.textContent = linksContent.contact[language];
  solutionsLink.textContent = linksContent.solutions.label[language];
  ecommerceLink.textContent = linksContent.solutions.one[language];
  paidServiceLink.textContent = linksContent.solutions.two[language];
  paymentLink.textContent = linksContent.solutions.three[language];
  buttonsLanguageSpanEs.forEach((btn) => {
    btn.textContent = linksContent.language.spanish[language];
  });
  buttonsLanguageSpanEn.forEach((btn) => {
    btn.textContent = linksContent.language.english[language];
  });
};

// Event listener to switch language buttons
buttonsLanguage.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNavLanguage(e);
    handleFooterLanguage(e);
  });
});

// Texts in bold languages
const footerContent = {
  services: {
    es: "Servicios",
    en: "Services",
  },
  resources: {
    es: "Recursos",
    en: "Resources",
  },
  about: {
    es: "Sobre Nosotros",
    en: "About us",
  },
  contact: {
    es: "Contacto",
    en: "Contact us",
  },
  nexsletter: {
    es: "Recibe las últimas noticias de Guatapay en tu correo:",
    en: "Receive the latest news from Guatapay in your email:",
  },
  button: {
    es: "Suscribirse",
    en: "Subscribe",
  },
  copyright: {
    es: "Copyright © Guatapay 2023 - Todos los derechos reservados",
    en: "Copyright © Guatapay 2023 - All rights reserved",
  },
};

const linksContent = {
  solutions: {
    label: {
      es: "Soluciones",
      en: "Solutions",
    },
    one: {
      es: "Comercio electrónico",
      en: "E-commerce",
    },
    two: {
      es: "Servicios de pago",
      en: "Paid services",
    },
    three: {
      es: "Link de pagos",
      en: "Payment link",
    },
  },
  about: {
    es: "Sobre Nosotros",
    en: "About us",
  },
  contact: {
    es: "Contacto",
    en: "Contact",
  },
  language: {
    spanish: {
      es: "Español",
      en: "Spanish",
    },
    english: {
      es: "Inglés",
      en: "English",
    },
  },
};
