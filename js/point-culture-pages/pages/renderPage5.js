export const renderPage5 = () => {
  const pageDiv = document.createElement("div");
  pageDiv.setAttribute('id', 'page5');
  
  pageDiv.innerHTML += `
  <div class='page-elements'>
    <div class='page-title'>
      <p>LE <span>M</span>USÉE DE L'<span>A</span>NNONCIADE</p>
    </div>
    <div class='page-text'>
      <p>Ancienne chapelle devenue musée, l’Annonciade présentent, tout au long de l’année, des collections d’artistes peintre s’échelonnant entre 1890 et 1950 (Signac, Bonnard, Matisse).</p>
      <p>Cet ensemble est composé de peintures de premier ordre, appartenant essentiellement au mouvement pointilliste, nabis et fauve.</p>
      <p>Tous les clients de l’hôtel bénéficient d’un accès libre au musée de l’Annonciade de Saint-Tropez.</p>
    </div>
  </div>
  <div class="chapter">CHAPITRE 2</div>
  `;  

  return pageDiv;
};
