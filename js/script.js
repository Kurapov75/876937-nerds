var open = document.querySelector(".modal-open");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");

open.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});