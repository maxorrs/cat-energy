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
