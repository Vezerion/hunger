"use strict";

const burger = document.querySelector('.burger'),
      exit = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu__block');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

exit.addEventListener('click', () => {
    menu.classList.remove('active');
});