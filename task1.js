let hamburgerMenuElem = document.querySelector('#hamburger-menu');
const mobileMenuElem = document.querySelector('.main-menu');

  hamburgerMenuElem.onclick = () => {
  mobileMenuElem.classList.toggle('showMenu');
}