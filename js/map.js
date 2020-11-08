const mapLink = document.querySelector(".map-icon");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  mapPopup.classList.remove("visually-hidden");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  mapPopup.classList.add("visually-hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!mapPopup.classList.contains("visually-hidden")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
      mapPopup.classList.add("visually-hidden");
    }
  }
});





