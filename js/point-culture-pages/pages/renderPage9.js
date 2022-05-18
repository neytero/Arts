export const renderPage9 = () => {
  const pageDiv = document.createElement("div");
  pageDiv.setAttribute('id', 'page9');
  
  pageDiv.innerHTML += `
  <div class='page-elements'>
    <div class='page-title'>
      <p>LE <span>C</span>HÂTEAU DE LA <span>M</span>OUTTE</p>
    </div>
    <div class='page-text'>
      <p>Loin de l’effervescence des nuits Tropéziennes, les Nuits du Château de La Moutte invitent à la poésie et au romantisme au tout début du mois d’Août.</p>
      <p>L’Hôtel La Ponche, partenaire de ce Festival, invite ses clients à aller apprécier la volupté de ces nuits bercées aux sons de musique classique. </p>
    </div>
  </div>
  <div class="chapter">CHAPITRE 4</div>
  `; 

  return pageDiv;
};
