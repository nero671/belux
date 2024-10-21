export const catalogMenu = () => {
    document.addEventListener('click', (event) => {
        const { target } = event;
        const burgerMenuContainer = document.querySelector('.burger-menu-container')

        if (target.classList.contains('burger-menu__toggle')) {
            const drawer = target.nextElementSibling;
            drawer.classList.add('open');
            burgerMenuContainer.style.overflow = 'hidden'
        }

        if (target.classList.contains('burger-menu__title_toggle')) {
            const drawer = target.nextElementSibling.nextElementSibling;
            drawer.classList.add('open');
            burgerMenuContainer.style.overflow = 'hidden'
        }

        if (target.classList.contains('submenu__prev-button')) {
            const drawer = target.closest('.submenu');
            drawer.classList.remove('open');
            burgerMenuContainer.style.overflow = 'auto'
        }
    });
}
