var link = document.querySelector(".modal-open");
var modal = document.querySelector(".write-us");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".write-us-close");
var send = document.querySelector(".write-us-btn");
var name_form = document.querySelector(".text-name");
var eMail_form = document.querySelector(".text-email");
var letter_form = document.querySelector(".text-letter");
var form_modal = document.querySelector(".write-us-form");
var close_popup = function(event) {
  if (name_form.classList.contains("none-value")) {
      name_form.classList.remove("none-value");
    }
if (eMail_form.classList.contains("none-value")) {
      eMail_form.classList.remove("none-value");
    }
if (letter_form.classList.contains("none-value")) {
      letter_form.classList.remove("none-value");
    }}

link.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("js-animation-modal");
  modal.classList.add("modal-shown");
  overlay.classList.remove("js-animation-overlay");
  overlay.classList.add("overlay-shown");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal-shown");
  modal.classList.add("js-animation-modal");
  overlay.classList.remove("overlay-shown");
  overlay.classList.add("js-animation-overlay");
  if (modal.classList.contains("error")) {
    modal.classList.remove("error");
  }
  close_popup();
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal-shown");
  modal.classList.add("js-animation-modal");
  overlay.classList.remove("overlay-shown");
  overlay.classList.add("js-animation-overlay");
  close_popup();
  if (modal.classList.contains("error")) {
    modal.classList.remove("error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal-shown") || overlay.classList.contains("overlay-shown")) {
      modal.classList.remove("modal-shown");
      modal.classList.add("js-animation-modal");
      overlay.classList.remove("overlay-shown");
      overlay.classList.add("js-animation-overlay");
      close_popup();
      if (modal.classList.contains("error")) {
        modal.classList.remove("error");
      }
    }
  }
})

form_modal.addEventListener("submit", function(event) {
  if (!name_form.value) {
    event.preventDefault();
    name_form.classList.add("none-value");
    modal.classList.add("error");
  } else { if (name_form.classList.contains("none-value")) {
        name_form.classList.remove("none-value");
      }};
  if (!eMail_form.value) {
    eMail_form.classList.add("none-value");
    event.preventDefault();
    modal.classList.add("error");
  } else { if (eMail_form.classList.contains("none-value")) {
      eMail_form.classList.remove("none-value");
  }}
  if (!letter_form.value) {
    letter_form.classList.add("none-value");
    event.preventDefault();
    modal.classList.add("error");
  } else { if (letter_form.classList.contains("none-value")) {
    letter_form.classList.remove("none-value");
  }}
});
