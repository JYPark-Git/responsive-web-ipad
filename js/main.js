const basketImg = document.querySelector(".basket-starter");
const basketContent = basketImg.querySelector(".basket");

basketImg.addEventListener("click", e => {
  e.stopPropagation();
  if(basketImg.classList.contains("show")) {
    hideBasket();
  } else {
    showBasket();
  }
});
basketContent.addEventListener("click", e => {
  e.stopPropagation();
});
window.addEventListener("click", e => {
  hideBasket();
});


function showBasket() {
  basketImg.classList.add("show");
}
function hideBasket() {
  basketImg.classList.remove("show");
}