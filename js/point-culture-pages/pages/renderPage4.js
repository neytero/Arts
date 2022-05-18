export const renderPage4 = () => {
  const pageDiv = document.createElement("div");
  pageDiv.setAttribute('id', 'page4');
  
  pageDiv.innerHTML += `
  <div class='page-elements'>
    <img src="../../../assets/point-culture/page4.jpg" />
  </div>
  `;  

  return pageDiv;
};
