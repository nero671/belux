export const togglePassword = () => {
    document.addEventListener('click', (e) => {

        if (!e.target.classList.contains('form-control__password-btn')) return;

        const input = e.target.previousElementSibling;
        const type = input.type === 'password' ? 'text' : 'password';

        input.setAttribute('type', type);

    });
};
