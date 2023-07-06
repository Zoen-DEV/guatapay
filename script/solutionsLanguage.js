const handleSolutionsLanguage = () => {
  learnMoreLink.forEach((link) => {
    link.textContent = solutionsContent.global.a[language];
  });
  // solutions:
  solutionTitle.textContent = solutionsContent.solutions.title[language];
  solutionParagraph.textContent =
    solutionsContent.solutions.paragraph[language];

  // solutions container
  solutionContainerTitle.textContent =
    solutionsContent.container.title[language];
  solutionConainerParagraph.textContent =
    solutionsContent.container.paragraph[language];

  // solutions container 1
  solutionContainerOneTitle.textContent =
    solutionsContent.container_one.title[language];
  solutionContainerOneParagraph.textContent =
    solutionsContent.container_one.paragraph[language];

  // solutions container 2
  solutionContainerTwoTitle.textContent =
    solutionsContent.container_two.title[language];
  solutionContainerTwoParagraph.textContent =
    solutionsContent.container_two.paragraph[language];

  // registrate container
  registerParagraph.textContent =
    solutionsContent.registrate.paragraph[language];
  registerLink.textContent = solutionsContent.registrate.a[language];
};

window.addEventListener("DOMContentLoaded", handleSolutionsLanguage);
