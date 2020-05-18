// Mobile menu

const menu = document.querySelector('.site-list');
const menuButton = document.querySelector('.menu-toggle');

if (menuButton.classList.contains('menu-toggle--disabled')) {
  menuButton.classList.remove('menu-toggle--disabled');
  menu.classList.remove('site-list--show');
  menuButton.classList.add('menu-toggle--close');
  menuButton.onclick = function () {
    menuButton.classList.toggle('menu-toggle--open');
    menu.classList.toggle('site-list--show-outside');
    menuButton.classList.toggle('menu-toggle--close');
  };
};

// Slider

const imageBefore = document.querySelector('.slider-list__image--before-use');
const imageAfter = document.querySelector('.slider-list__image--after-use');
const stripLeft = document.querySelector('.strip__fill--left');
const stripRight = document.querySelector('.strip__fill--right');
const buttonBefore = document.querySelector('.slider-result__toggle--before');
const buttonAfter = document.querySelector('.slider-result__toggle--after');
const back = document.querySelector('.example__wrapper-back', '::before');
const indicators = document.querySelectorAll('.indicators__text');
const stripBefore = document.querySelector('.strip', '::before');
const stripAfter = document.querySelector('.strip', '::after');

buttonBefore.addEventListener('click', function (evt) {
  evt.preventDefault();

  imageBefore.classList.add('slider-list__image--show');
  imageAfter.classList.remove('slider-list__image--show');

  stripLeft.classList.add('strip__fill--show');
  stripRight.classList.remove('strip__fill--show');

  back.classList.add('example__wrapper-back-first');
  back.classList.remove('example__wrapper-back-second');

  stripBefore.classList.add('strip--left');
  stripBefore.classList.remove('strip--right');

  for (var item of indicators) {
    item.classList.add('indicators__text--left');
    item.classList.remove('indicators__text--right');
  };
});

buttonAfter.addEventListener('click', function (evt) {
  evt.preventDefault();

  imageBefore.classList.remove('slider-list__image--show');
  imageAfter.classList.add('slider-list__image--show');

  stripLeft.classList.remove('strip__fill--show');
  stripRight.classList.add('strip__fill--show');

  back.classList.remove('example__wrapper-back-first');
  back.classList.add('example__wrapper-back-second');

  stripBefore.classList.remove('strip--left');
  stripBefore.classList.add('strip--right');

  for (var item of indicators) {
    item.classList.remove('indicators__text--left');
    item.classList.add('indicators__text--right');
  };
});
