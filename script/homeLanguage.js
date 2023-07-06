const handleHomeLanguage = (e) => {
  // hero:
  easyLabel.textContent = homeContent.hero.easy[language];
  sendLabel.textContent = homeContent.hero.send[language];
  neverLabel.textContent = homeContent.hero.never[language];
  easyLabelMobile.textContent = homeContent.hero.easy[language];
  sendLabelMobile.textContent = homeContent.hero.send[language];
  neverLabelMobile.textContent = homeContent.hero.never[language];
  moreInfoLabel.textContent = homeContent.hero.more[language];

  // llegamos a cada rincon:
  comingTitleLabel.textContent = homeContent.everyCorner.title[language];
  eeuuLabel.textContent = homeContent.everyCorner.eeuu[language];
  peLabel.textContent = homeContent.everyCorner.pe[language];
  brLabel.textContent = homeContent.everyCorner.br[language];
  esLabel.textContent = homeContent.everyCorner.es[language];
  comingLabel.textContent = homeContent.everyCorner.coming[language];
  comingParagraph.textContent = homeContent.everyCorner.paragraph[language];

  // sin complejidades:
  easyLabel2.textContent = homeContent.complexities.easy[language];
  complexitiesLabel.textContent =
    homeContent.complexities.complexities[language];
  moveLabel.textContent = homeContent.complexities.move[language];
  registerLabel.textContent = homeContent.complexities.register[language];
  costLabel.textContent = homeContent.complexities.cost[language];
  availableLabel.textContent = homeContent.complexities.available[language];
  if (easyLabel3)
    easyLabel3.textContent = homeContent.complexities.easy[language];
  complexitiesLabel2.textContent =
    homeContent.complexities.complexities[language];
  moveLabel2.textContent = homeContent.complexities.move[language];
  costLabel2.textContent = homeContent.complexities.cost[language];

  // testimonial:
  testimonyParagraph.textContent = homeContent.testimony.paragraph[language];
  testimonyContext.textContent = homeContent.testimony.context[language];

  // solicitar demo:
  requestParagraph.textContent = homeContent.request.paragraph[language];
  registerLabel2.textContent = homeContent.request.register[language];
};

// Verify language when page is loaded
window.addEventListener("DOMContentLoaded", handleHomeLanguage);
