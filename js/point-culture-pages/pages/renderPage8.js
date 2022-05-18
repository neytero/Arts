export const renderPage8 = () => {
  const pageDiv = document.createElement("div");
  pageDiv.setAttribute('id', 'page8');
  
  pageDiv.innerHTML += `
  <div class='page-elements'>
    <div class='page-title'>
      <p><span>B</span>EAUX <span>A</span>RTS <span>H</span>ORS-<span>S</span>ÉRIE 2022</p>
    </div>
    <div class='page-text'>
      <p>En avril 2022, le magazine Beaux-Arts met en lumière le musée de l’Annonciade & Saint-Tropez dans un Hors-Séries dont l’Hôtel La Ponche se devait d’être un partenaire majeur.</p>
      <p>Ce hors-série revient sur l’histoire de Saint-Tropez, laboratoire de l’avant-garde, et notamment de l’attachement particulier de Signac à ce village, l’histoire du musée et la constitution de ses collections, les chefs-d’œuvre mais aussi l’histoire de Saint-Tropez et ses lieux emblématiques, comme La Ponche.</p>
    </div>
  </div>
  <div class="chapter">CHAPITRE 3</div>
  `;

  return pageDiv;
};
