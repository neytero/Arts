export const renderPage10 = () => {
  const pageDiv = document.createElement("div");
  pageDiv.setAttribute('id', 'page10');
  
  pageDiv.innerHTML += `
  <div class='page-elements'>
    <img src="../../../assets/point-culture/page10.jpg" />
  </div>
  `;  

  return pageDiv;
};
