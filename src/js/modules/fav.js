export const favorite = () => {
    document.addEventListener('click', (e) => {
        const { target } = e;

        if (!target.classList.contains('good__fav')) return;

        e.preventDefault();

        target.classList.toggle('fill');
    });
};
