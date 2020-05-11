// Mobile Menu

const menu = document.querySelector('.site-list');
const menuButton = document.querySelector('.menu-toggle');

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

// Form

const form = document.querySelector('.form');
const firstName = form.querySelector('[name=first-name]');
const weight = form.querySelector('[name=weight]');
const age = form.querySelector('[name=age]');
const email = form.querySelector('[name=email]');
const tel = form.querySelector('[name=tel]');
var requiredFields = [firstName, weight, email, tel];
var onlyNumberFields = [weight, age];

for (var i = 0; i < onlyNumberFields.length; i++) {
  onlyNumberFields[i].addEventListener('keyup', function () {
    this.value = this.value.replace(/[^\d]/g, '');
  });
}

for (var i = 0; i < requiredFields.length; i++) {

  requiredFields[i].addEventListener('blur', function () {
    if (!this.value) {
      this.classList.add('input__control--error');
    } else {
      this.classList.remove('input__control--error');
    }
  });

  requiredFields[i].addEventListener('focus', function () {
    if (this.classList.contains('input__control--error')) {
      this.classList.remove('input__control--error');
    }
  });
}

form.addEventListener('submit', function (evt) {
  var focusOn = false;

  for (var i = 0; i < requiredFields.length; i++) {
    if (!requiredFields[i].value) {
      evt.preventDefault();
      if (!focusOn) {
        focusOn = true;
        requiredFields[i].focus();
        requiredFields[i].classList.add('input__control--error');
      } else {
        requiredFields[i].classList.add('input__control--error');
      }
    }
  }
});
