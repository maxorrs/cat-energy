var imageBefore = document.querySelector(".slider-list__image--before-use");
var imageAfter = document.querySelector(".slider-list__image--after-use");
var stripLeft = document.querySelector(".strip__fill--left");
var stripRight = document.querySelector(".strip__fill--right");
var buttonBefore = document.querySelector(".slider-result__toggle--before");
var buttonAfter = document.querySelector(".slider-result__toggle--after");

buttonBefore.addEventListener("click", function (evt) {
  evt.preventDefault();

  imageBefore.classList.add("slider-list__image--show");
  imageAfter.classList.remove("slider-list__image--show");

  stripLeft.classList.add("strip__fill--show");
  stripRight.classList.remove("strip__fill--show");
});

buttonAfter.addEventListener("click", function (evt) {
  evt.preventDefault();

  imageBefore.classList.remove("slider-list__image--show");
  imageAfter.classList.add("slider-list__image--show");

  stripLeft.classList.remove("strip__fill--show");
  stripRight.classList.add("strip__fill--show");
});
