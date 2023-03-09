/*
 JavaScript by: Johannah Glo Malicdem
*/

const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(bar) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  indicator.style.width = `${bar.offsetWidth}px`;
  indicator.style.left = `${bar.offsetLeft}px`;
  indicator.style.backgroundColor = bar.getAttribute('active-color');

  bar.classList.add('is-active');
  bar.style.color = bar.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', e => {handleIndicator(e.target);});
  item.classList.contains('is-active') && handleIndicator(item);
});