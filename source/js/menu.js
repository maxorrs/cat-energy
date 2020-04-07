var menu = document.querySelector(".site-list");
var menuOpen = document.querySelector(".menu-toggle--open");
var menuClose = document.querySelector(".menu-toggle--close");


if (menu.classList.contains("site-list--show")) {
  menu.classList.remove("site-list--show");
}

menuOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.add("site-list--show");
  menuOpen.classList.remove("menu-toggle--show");
  menuClose.classList.add("menu-toggle--show");
})

menuClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("site-list--show");
  menuClose.classList.remove("menu-toggle--show");
  menuOpen.classList.add("menu-toggle--show");

})
