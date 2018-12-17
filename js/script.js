var open = document.querySelector(".modal-open");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".message");
var name = popup.querySelector("#name-field");
var email = popup.querySelector("#email-field");

open.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });