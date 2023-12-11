let btn = document.querySelector('.button__menu');
let menu = document.querySelector('.main-nav');
btn.onclick = function () {
  menu.classList.toggle('main-nav--on');
  btn.classList.toggle('button__menu--open');
}
