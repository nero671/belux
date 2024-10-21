export const customSelect  = () => {
    const select = document.querySelectorAll('.custom-select');

    select.forEach((e) => {
        e.addEventListener('click', function () {
            e.classList.toggle('show');
            const selectItems = e?.querySelector('.select-items');
            const selectSelected = e?.querySelector('.select-selected span');

            selectItems?.querySelectorAll('div').forEach((option) => {
                option.addEventListener('click', function () {
                    selectSelected.textContent = option.textContent;
                    selectItems.classList.remove('show');
                });
            });
        });
    });

}
