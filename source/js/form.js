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
const requiredFields = [firstName, weight, email, tel];
const onlyNumberFields = [weight, age];

for (var i = 0; i < onlyNumberFields.length; i++) {
  onlyNumberFields[i].addEventListener('keyup', function () {
    this.value = this.value.replace(/[^\d]/g, '');
  });
}

for (var i = 0; i < requiredFields.length; i++) {
  requiredFields[i].addEventListener('blur', function () {
    if (!this.value || this.value.includes('_')) {
      this.classList.add('input__control--error');
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
    if (!requiredFields[i].value || requiredFields[i].value.includes('_')) {
      evt.preventDefault();
      requiredFields[i].classList.add('input__control--error');
      if (!focusOn) {
        focusOn = true;
        requiredFields[i].focus();
      }
    }
  }
});

//Mask Tel
function setCursorPosition(pos, e) {
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    var range = e.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select()
  }
}

function mask(e) {
  var matrix = this.placeholder,
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function(a) {
    return val.charAt(i++) || '_'
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf('_');
  setCursorPosition(i, this)
}

tel.addEventListener('input', mask, false);
setCursorPosition(3, tel);
