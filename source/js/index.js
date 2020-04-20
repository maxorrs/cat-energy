var menu = document.querySelector(".site-list");
var menuButton = document.querySelector(".menu-toggle");

var imageBefore = document.querySelector(".slider-list__image--before-use");
var imageAfter = document.querySelector(".slider-list__image--after-use");
var imageBeforeAfter = document.querySelector(".slider-list__image--before-after-use");
var stripLeft = document.querySelector(".strip__fill--left");
var stripRight = document.querySelector(".strip__fill--right");
var buttonBefore = document.querySelector(".slider-result__toggle--before");
var buttonAfter = document.querySelector(".slider-result__toggle--after");

if (menu.classList.contains("site-list--show")) {
  menu.classList.remove("site-list--show");
  menuButton.classList.remove("menu-toggle--open");
  menuButton.classList.add("menu-toggle--close");
  menuButton.onclick = function () {
    menuButton.classList.toggle("menu-toggle--open");
    menu.classList.toggle("site-list--show-outside");
    menuButton.classList.toggle("menu-toggle--close");
  };
}

if(window.matchMedia("(max-width: 767px)").matches) {
  buttonBefore.addEventListener("click", function (evt) {
    evt.preventDefault();
    imageBefore.classList.add("slider-list__image--show");
    imageAfter.classList.remove("slider-list__image--show");

    stripLeft.classList.add("strip__fill--show");
    stripRight.classList.remove("strip__fill--show");
  })

  buttonAfter.addEventListener("click", function (evt) {
    evt.preventDefault();

    imageBefore.classList.remove("slider-list__image--show");
    imageAfter.classList.add("slider-list__image--show");

    stripLeft.classList.remove("strip__fill--show");
    stripRight.classList.add("strip__fill--show");
  })
} else {
    imageBefore.classList.remove("slider-list__image--show");

    buttonBefore.addEventListener("click", function (evt) {
      evt.preventDefault();
      imageBeforeAfter.classList.add("slider-list__image--remove");
      imageBefore.classList.add("slider-list__image--show");
      imageAfter.classList.remove("slider-list__image--show");
    })

    buttonAfter.addEventListener("click", function (evt) {
      evt.preventDefault();
      imageBeforeAfter.classList.add("slider-list__image--remove");
      imageBefore.classList.remove("slider-list__image--show");
      imageAfter.classList.add("slider-list__image--show");
    })
}
