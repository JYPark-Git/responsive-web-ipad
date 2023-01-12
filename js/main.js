const screen = document.querySelector("html");
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
screen.addEventListener("click", e => {
  hideBasket();
});
function showBasket() {
  basketImg.classList.add("show");
}
function hideBasket() {
  basketImg.classList.remove("show");
}

const searchHeader = document.querySelector("header");
const searchStartBtn = document.querySelector("li.search-starter");
const searchCloseBtn = document.querySelector("div.search-closer");
const shadowSection = document.querySelector("div.shadow");

searchStartBtn.addEventListener("click", e => {
  searchHeader.classList.add("searching");
});
searchCloseBtn.addEventListener("click", e => {
  searchHeader.classList.remove("searching");
});
shadowSection.addEventListener("click", e => {
  searchHeader.classList.remove("searching");
});