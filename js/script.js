var open = document.querySelector(".modal-open");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var $name = popup.querySelector("#name-field");
var email = popup.querySelector("#email-field");
var form = popup.querySelector(".message");

open.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});
  
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!$name.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести имя и адрес почты");
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }  
  }
});