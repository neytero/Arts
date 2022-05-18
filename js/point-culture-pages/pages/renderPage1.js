export const renderPage1 = () => {
  const pageDiv = document.createElement("div");
  pageDiv.setAttribute('id', 'page1');
  
  pageDiv.innerHTML += `
  <div class='page-elements'>
    <img src="../../../assets/point-culture/page1.jpg" />
  </div>
  `;  

  return pageDiv;
};
