var link = document.querySelector(".modal-open");
var modal = document.querySelector(".write-us");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".write-us-close");
var send = document.querySelector(".write-us-btn");
var name = document.querySelector(".text-name");
var eMail = document.querySelector(".text-email");
var letter = document.querySelector(".text-letter");
var form = document.querySelector(".write-us-form");

link.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("none-display");
  overlay.classList.remove("none-display");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.add("none-display");
  overlay.classList.add("none-display");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.add("none-display");
  overlay.classList.add("none-display");
});

form.addEventListener("submit", function(event) {
  if (!name.value || !eMail.value || !letter.value) {
    event.preventDefault();
    name.classList.add("none-value");
    eMail.classList.add("none-value");
    letter.classList.add("none-value");
  }
});