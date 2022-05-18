export const renderPage7 = () => {
  const pageDiv = document.createElement("div");
  pageDiv.setAttribute('id', 'page7');
  
  pageDiv.innerHTML += `
  <div class='page-elements'>
    <img src="../../../assets/point-culture/page7.jpg" />
  </div>
  `;  

  return pageDiv;
};
