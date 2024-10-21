export const dropdown = () => {
    const goodCatalogFilters = document.querySelector('.good-catalog-filters');
    document.body.addEventListener('click', (e) => {
        if(e.target.closest('.js-dropdown')) {
            e.target.classList.toggle('active');
        }
    });

    goodCatalogFilters?.addEventListener('click', (e) => {
        if (e.target.matches('.filter-dropdown')) {
            const dropdowns = goodCatalogFilters.querySelectorAll('.filter-dropdown');
            const targetDropdown = e.target;

            const isActive = targetDropdown.classList.contains('active');

            dropdowns.forEach((dropdown) => {
                dropdown.classList.remove('active');
            });

            if (!isActive) {
                targetDropdown.classList.add('active');
            }
        }
    });

    const collectionsFilters = document.querySelector('.collections-list-filters');

    collectionsFilters?.addEventListener('click', (e) => {
        const dropdowns = collectionsFilters.querySelectorAll('.filter-dropdown');
        const targetDropdown = e.target;
        if (e.target.matches('.filter-dropdown')) {

            const isActive = targetDropdown.classList.contains('active');

            dropdowns.forEach((dropdown) => {
                dropdown.classList.remove('active');
            });

            if (!isActive) {
                targetDropdown.classList.add('active');
            }
        }
    });


    document.addEventListener('click', (e) => {
        if(goodCatalogFilters) {
            const goodDropdowns = goodCatalogFilters.querySelectorAll('.filter-dropdown');
            goodDropdowns.forEach((dropdown) => {
                if(e.target != dropdown && !dropdown.contains(e.target)) dropdown.classList.remove('active');
            });
        }
        if(collectionsFilters) {
            const dropdowns = collectionsFilters.querySelectorAll('.filter-dropdown');
            dropdowns.forEach((dropdown) => {
                if (e.target != dropdown && !dropdown.contains(e.target)) dropdown.classList.remove('active');
            });
        }
    });
}

