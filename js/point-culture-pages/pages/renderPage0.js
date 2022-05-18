import { pageChanger, isFromSummaryHandler } from "../pages.js";
import { isMobile } from "../point-culture.js";

export const renderPage0 = () => {
  const pageDiv = document.createElement("div");
  pageDiv.setAttribute('id', 'page0');

  const pageElement = document.createElement("div");
  pageElement.classList.add('page-elements');
  
  const pageTitleTop = document.createElement("div");
  pageTitleTop.classList.add('page-title','lesarts');
  const titleTop = document.createElement("span");
  titleTop.textContent = 'LES ARTS';
  pageTitleTop.appendChild(titleTop);
  pageElement.appendChild(pageTitleTop);

  const chapterList = document.createElement("div");
  chapterList.classList.add('chapter-list');
  
  const chapter1 = document.createElement("div");
  chapter1.classList.add('chapter');
  chapter1.addEventListener('click', function handleClick(event) {
    event.preventDefault();    
    isFromSummaryHandler(true);
    const chapterLink = isMobile() ? 2 : 1;
    pageChanger(chapterLink);
  });
  const chapter1Text = document.createElement("p");
  chapter1Text.textContent = 'PRIX LITTÉRAIRE LA PONCHE';
  chapter1.appendChild(chapter1Text);
  chapterList.appendChild(chapter1);
  
  const chapter3 = document.createElement("div");
  chapter3.classList.add('chapter');
  chapter3.addEventListener('click', function handleClick(event) {
    event.preventDefault();    
    isFromSummaryHandler(true);
    const chapterLink = isMobile() ? 5 : 3;
    pageChanger(chapterLink);
  });
  const chapter3Text = document.createElement("p");
  chapter3Text.textContent = "LE MUSÉE DE L'ANNONCIADE";
  chapter3.appendChild(chapter3Text);
  chapterList.appendChild(chapter3);
  
  const chapter4 = document.createElement("div");
  chapter4.classList.add('chapter');
  chapter4.addEventListener('click', function handleClick(event) {
    event.preventDefault();    
    isFromSummaryHandler(true);
    const chapterLink = isMobile() ? 7 : 4;
    pageChanger(chapterLink);
  });
  const chapter4Text = document.createElement("p");
  chapter4Text.textContent = 'BEAUX ARTS HORS SERIES 2022';
  chapter4.appendChild(chapter4Text);
  chapterList.appendChild(chapter4);
  
  const chapter5 = document.createElement("div");
  chapter5.classList.add('chapter');
  chapter5.addEventListener('click', function handleClick(event) {
    event.preventDefault();    
    isFromSummaryHandler(true);
    const chapterLink = isMobile() ? 9 : 5;
    pageChanger(chapterLink);
  });
  const chapter5Text = document.createElement("p");
  chapter5Text.textContent = 'LE CHÂTEAU DE LA MOUTTE';
  chapter5.appendChild(chapter5Text);
  chapterList.appendChild(chapter5);
  
  pageElement.appendChild(chapterList);

  const pageTitleBot = document.createElement("div");
  pageTitleBot.classList.add('page-title','sttropez');
  const titleBot = document.createElement("span");
  titleBot.textContent = 'SAINT-TROPEZ';
  pageTitleBot.appendChild(titleBot);
  pageElement.appendChild(pageTitleBot);

  
  pageDiv.appendChild(pageElement);

  return pageDiv;
};
