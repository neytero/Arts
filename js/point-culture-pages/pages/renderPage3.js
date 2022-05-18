export const renderPage3 = () => {
  const pageDiv = document.createElement("div");
  pageDiv.setAttribute('id', 'page3');
  
  pageDiv.innerHTML += `
  <div class='page-elements'>
    <div class='page-title'>
      <p>LA REMISE DU PRIX</p>
    </div>
    <div class='page-text'>
      <p>Le lauréat sera connu le 20 mai 2022 lors de la remise du prix à l’Hôtel La Ponche lors d’une soirée cocktail autour du jury, des voisins du quartiers, des amis de l’hôtel La Ponche… </p>
      <p>Le 21 mai 2022, le lauréat et les membres du jury auteurs dédicaceront leurs ouvrages dans le salon de l’hôtel. </p>
    </div>
  </div>
  `;    

  return pageDiv;
};
