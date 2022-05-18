export const renderPage2 = () => {
  const pageDiv = document.createElement("div");
  pageDiv.setAttribute('id', 'page2');
    
  pageDiv.innerHTML += `
  <div class='page-elements'>
    <div class='page-title'>
      <p>LE <span>P</span>RIX <span>L</span>ITTÉRAIRE LA <span>P</span>ONCHE</p>
    </div>
    <div class='page-text'>
      <p>En mai 2022 se tiendra la première édition du Prix Littéraire La Ponche. </p>
      <p>Un prix de printemps — un prix de deux mondes. Le prix d’un texte qui aide à mieux vivre, mieux comprendre ou mieux observer la société dans laquelle on se trouve. </p>
      <p>Un roman français paru entre janvier et avril, avec une dimension paradoxale, l’idée d’un ouvrage lumineux qu’on doit adorer, emportersur la jetée de la ponche. </p>
    </div>
  </div>
  <div class="chapter">CHAPITRE 1</div>
  `;

  return pageDiv;
};
