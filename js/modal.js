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

const buyButton = document.querySelectorAll(".buy-button");
const basketPopup = document.querySelector(".modal-basket");
const basketClose = basketPopup.querySelectorAll(".button-cancel");

for (let elem of buyButton) {
elem.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.add("modal-show");
});
};

for (let elem of basketClose) {
elem.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!basketPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("modal-show");
    }
  }
});

const contactLink = document.querySelector(".contact-us-link");
const feedbackPopup = document.querySelector(".modal");
const feedbackClose = feedbackPopup.querySelector(".modal-close");

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!feedbackPopup.classList.contains("visually-hidden")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
    }
  }
});



