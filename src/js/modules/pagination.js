export const pagination = () => {
    const element = document.querySelector('.pagination ul');
    const totalPages = 16;
    const page = 1;
    const bw = document.body.clientWidth;

    if (element) {
        element.innerHTML = createPagination(totalPages, page);
    }

    function createPagination(totalPages, page) {
        let liTag = '';
        let active;
        let beforePage = page - 1;
        let afterPageValue = '';

        if (bw > 576) {
            afterPageValue = page + 3;
        } else if (bw < 576) {
            afterPageValue = page + 1;
        }

        let afterPage = afterPageValue;

        if (page > 1) {
            liTag += `<li class="btn numb prev" onclick="createPagination(totalPages, ${page - 1})"><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                  <path d="M9 17L1 9L9 1" stroke="#373843"/>
                </svg>
            </span></li>`;
        } else if (page === 1) {
            liTag += `<li class="btn numb prev disabled" onclick="createPagination(totalPages, ${page - 1})"><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                    <path d="M9 17L1 9L9 1" stroke="#373843"/>
                </svg>
            </span></li>`;
        }

        // if (page > 2) {
        // eslint-disable-next-line max-len
        //     liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
        //     // if (page > 4) {
        //     // liTag += '<li class="numb dots"><span>...</span></li>';
        //     // }
        // }

        if (page === totalPages) {
            beforePage -= 2;
        } else if (page === totalPages - 1) {
            beforePage -= 1;
        }

        if (page === 1) {
            afterPage += 1;
        }

        for (let plength = beforePage; plength <= afterPage; plength++) {
            if (plength > totalPages) {
                continue;
            }
            if (plength === 0) {
                plength += 1;
            }

            if (page === plength) {
                active = 'active';
            } else {
                active = '';
            }
            liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
        }


        if (page < totalPages - 3) {

            if (page < totalPages - 2) {
                liTag += '<li class="numb dots"><span>...</span></li>';
            }
            liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
        }

        if (page < totalPages) {
            liTag += `<li class="btn numb next" onclick="createPagination(totalPages, ${page + 1})"><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                  <path d="M1 17L9 9L0.999999 1" stroke="#373843"/>
                </svg>
            </span></li>`;
        } else if (page === totalPages) {
            liTag += `<li class="btn numb next disabled" onclick="createPagination(totalPages, ${page + 1})"><span> 
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                  <path d="M1 17L9 9L0.999999 1" stroke="#373843"/>
                </svg>
            </span></li>`;
        }

        if (element) {
            element.innerHTML = liTag;
        }

        return liTag;
    }

    if (element) {
        element.innerHTML = createPagination(totalPages, page);
    }
}
