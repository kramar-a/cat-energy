let curtain = document.querySelector('.slider__curtain');
let moved = false;
let before = document.querySelector('.slider__wrapper--before');
let beforeStyle = window.getComputedStyle(before);

curtain.onmousedown = function (event) {
  moved = true;
  style = window.getComputedStyle(curtain);
  translateX = parseInt(style.getPropertyValue('--offset'));
  startX = event.pageX - translateX;
}

document.body.onmouseup = function (event) {
  moved = false;
}

document.body.onmousemove = function (event) {
  if (!moved) return;
  offset = event.pageX - startX;
  if (offset < -19 || offset > 261) return;
  curtain.style.setProperty('--offset', event.pageX - startX + 'px');
  before.style.setProperty('width', offset + 19 + 'px');
}
