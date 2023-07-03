const buttonsLanguage = document.querySelectorAll(".button-language");

const handleNavLanguage = (e) => {
  const language = e.target.name ? e.target.name : e.target.id;
  let aboutLink = document.getElementById("about-link");
  let contactLink = document.getElementById("contact-link");
  let solutionsLink = document.querySelector(".solutions-link");
  let ecommerceLink = document.getElementById("ecommerce-link");
  let paidServiceLink = document.getElementById("paid-service-link");
  let paymentLink = document.getElementById("payment-link");
  let buttonsLanguageSpanEs = document.querySelectorAll(
    ".button-language-span-es"
  );
  let buttonsLanguageSpanEn = document.querySelectorAll(
    ".button-language-span-en"
  );

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

buttonsLanguage.forEach((btn) => {
  btn.addEventListener("click", handleNavLanguage);
});
