// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';
import iconMenu from '../assets/images/icon-menu.svg'
import iconCloseMenu from '../assets/images/icon-menu-close.svg'
const buttonElement = document.getElementById('button-menu');
const menuElement = document.getElementById('menu');

const handleMenu = () => {
  if (menuElement.classList.contains('show')) {
    menuElement.classList.remove('show');
    buttonElement.src=iconMenu;
  } else {
    menuElement.classList.add('show');
    buttonElement.src=iconCloseMenu;
  }
};
buttonElement.addEventListener('click', handleMenu);