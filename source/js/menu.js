var menu = document.querySelector(".site-list");
var menuButton = document.querySelector(".menu-toggle");

if (menu.classList.contains("site-list--show")) {
  menu.classList.remove("site-list--show");
  menuButton.classList.remove("menu-toggle--open");
  menuButton.classList.add("menu-toggle--close");
  menuButton.onclick = function () {
    menuButton.classList.toggle('menu-toggle--open');
    menu.classList.toggle("site-list--show-outside");
    menuButton.classList.toggle('menu-toggle--close');
  };
}
