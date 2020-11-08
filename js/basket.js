const buyButton = document.querySelectorAll(".buy-button");
const basketPopup = document.querySelector(".modal-basket");
const basketClose = basketPopup.querySelectorAll(".button-cancel");

for (let elem of buyButton) {
elem.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("visually-hidden");
  mapPopup.classList.remove("modal-show");
});
};

for (let elem of basketClose) {
elem.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.add("visually-hidden");
  mapPopup.classList.remove("modal-show");
});
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!basketPopup.classList.contains("visually-hidden")) {
      evt.preventDefault();
      basketPopup.classList.add("visually-hidden");
      mapPopup.classList.remove("modal-show");
    }
  }
});



