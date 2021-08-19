const hidenMenu = () => {
  const menu = document.querySelector('.hiden-menu');

  const menuButton = document.querySelector('.hiden-menu-button');

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    menuButton.classList.toggle('hamburger-open');
    document.querySelector('body').classList.toggle('no-scroll');
  });

  window.onclick = (e) => {
    if ((!menu.contains(e.target) && !menuButton.contains(e.target)) || e.target.parentNode.matches('.nav__item')) {
      menu.classList.remove('menu-active');
      menuButton.classList.remove('hamburger-open');
      document.querySelector('body').classList.remove('no-scroll');
    }
  };
};

export default hidenMenu;
