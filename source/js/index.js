// Menu

let menu = document.querySelector('.site-list');
let menuButton = document.querySelector('.menu-toggle');

if (menu.classList.contains('site-list--show')) {
  menu.classList.remove('site-list--show');
  menuButton.classList.remove('menu-toggle--open');
  menuButton.classList.add('menu-toggle--close');
  menuButton.onclick = function () {
    menuButton.classList.toggle('menu-toggle--open');
    menu.classList.toggle('site-list--show-outside');
    menuButton.classList.toggle('menu-toggle--close');
  };
}

// Slider

let imageBefore = document.querySelector('.slider-list__image--before-use');
let imageAfter = document.querySelector('.slider-list__image--after-use');
let stripLeft = document.querySelector('.strip__fill--left');
let stripRight = document.querySelector('.strip__fill--right');
let buttonBefore = document.querySelector('.slider-result__toggle--before');
let buttonAfter = document.querySelector('.slider-result__toggle--after');
let back = document.querySelector('.example__wrapper-back', '::before');
let indicators = document.querySelectorAll('.indicators__text');

buttonBefore.addEventListener('click', function (evt) {
  evt.preventDefault();

  imageBefore.classList.add('slider-list__image--show');
  imageAfter.classList.remove('slider-list__image--show');

  stripLeft.classList.add('strip__fill--show');
  stripRight.classList.remove('strip__fill--show');

  back.classList.add('example__wrapper-back-first');
  back.classList.remove('example__wrapper-back-second');

  for (let item of indicators) {
    item.classList.add('indicators__text--left');
    item.classList.remove('indicators__text--right');
  }
});

buttonAfter.addEventListener('click', function (evt) {
  evt.preventDefault();

  imageBefore.classList.remove('slider-list__image--show');
  imageAfter.classList.add('slider-list__image--show');

  stripLeft.classList.remove('strip__fill--show');
  stripRight.classList.add('strip__fill--show');

  back.classList.remove('example__wrapper-back-first');
  back.classList.add('example__wrapper-back-second');

  for (let item of indicators) {
    item.classList.remove('indicators__text--left');
    item.classList.add('indicators__text--right');
  }
});
