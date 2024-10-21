import Popup from './Popup.js';

class BurgerMenu extends Popup {
  constructor() {
    super();

    this.burgerButton = document.querySelector('.icon-menu');
  }

  /**
   * Initialize the menu functionality.
   */
  init() {
    if (this.burgerButton) {
      document.addEventListener('click', ({ target }) => {
        const menuWrapper = document.querySelector('.burger-menu');
        const bw = document.body.clientWidth;

        if (target.closest('.icon-menu__wrapper')) {
          const submenu = document.querySelectorAll('.submenu');

          this.html.classList.toggle('menu-open');
          this.toggleBodyLock(this.html.classList.contains('menu-open'));
          menuWrapper.classList.toggle('active');

          submenu.forEach((item) => {
            if (this.html.classList.contains('menu-open')) {
              item.classList.remove('open');
            }
          })
        } else if (!target.closest('.burger-menu-container') && bw > 600 && target.type !== 'submit' && !target.classList.contains('prof-link') && !target.closest('.side-popup-wrapper')) {
          this.toggleBodyLock(false);
          this.html.classList.remove('menu-open');
          menuWrapper.classList.remove('active');
        }
      });
    }
  }

  /**
   * Open the menu.
   */
  menuOpen() {
    this.toggleBodyLock(true);
    this.html.classList.add('menu-open');
  }

  /**
   * Close the menu.
   */
  menuClose() {
    this.toggleBodyLock(false);
    this.html.classList.remove('menu-open');
  }
}

export default BurgerMenu;
