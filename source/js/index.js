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

// SVG

!function(a,b){'function'==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):'object'==typeof exports?module.exports=b():a.svg4everybody=b()}(this,function(){/*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */ function a(a,b){if(b){var c=!a.getAttribute('viewBox')&&b.getAttribute('viewBox'),d=document.createDocumentFragment(),e=b.cloneNode(!0);for(c&&a.setAttribute('viewBox',c);e.childNodes.length;)d.appendChild(e.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=document.createElement('x');c.innerHTML=b.responseText,b.s.splice(0).map(function(b){a(b[0],c.querySelector('#'+b[1].replace(/(\W)/g,'\\$1')))})}},b.onreadystatechange()}function c(c){function d(){for(var c;c=e[0];){var j=c.parentNode;if(j&&/svg/i.test(j.nodeName)){var k=c.getAttribute('xlink:href');if(f&&(!g||g(k,j,c))){var l=k.split('#'),m=l[0],n=l[1];if(j.removeChild(c),m.length){var o=i[m]=i[m]||new XMLHttpRequest;o.s||(o.s=[],o.open('GET',m),o.send()),o.s.push([j,n]),b(o)}else a(j,document.getElementById(n))}}}h(d,17)}c=c||{};var e=document.getElementsByTagName('use'),f='shim'in c?c.shim:/\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537,g=c.validate,h=window.requestAnimationFrame||setTimeout,i={};f&&d()}return c});
