const menuButton = document.getElementById('menuButton');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full');
});
