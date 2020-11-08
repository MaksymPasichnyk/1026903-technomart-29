const contactLink = document.querySelector(".contact-us-link");
const feedbackPopup = document.querySelector(".modal-show");
const feedbackClose = feedbackPopup.querySelector(".modal-close");

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("visually-hidden");
  mapPopup.classList.remove("modal-show");
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("visually-hidden");
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!feedbackPopup.classList.contains("visually-hidden")) {
      evt.preventDefault();
      feedbackPopup.classList.add("visually-hidden");
      mapPopup.classList.remove("modal-show");
    }
  }
});



