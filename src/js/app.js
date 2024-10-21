/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import {
    isWebp,
    headerFixed,
    togglePopupWindows,
    addTouchClass,
    addLoadedClass,
    submitForm,
} from './modules';

import {collectionImgWrapper, collectionNav, collectionNavItem} from "./helpers/elementsNodeList.js";
import Swiper, { Navigation, Pagination } from 'swiper';
import Choices from "choices.js";
import BurgerMenu from './modules/BurgerMenu';
import search from './modules/search';
import { catalogMenu } from './modules/catalogMenu';
import { formValidation } from './modules/validationForm';
import { dropdown } from "./modules/dropdown.js";
import { favorite } from "./modules/fav.js";
import { tabs } from "./modules/tabs.js";
import { pagination } from "./modules/pagination.js";
import rangeSlider from "./modules/rangeSlider.js";
import { customSelect } from "./modules/customSelect.js";
import { togglePassword } from "./modules/togglePass.js";

// import { MousePRLX } from './libs/parallaxMouse'

// import AOS from 'aos'


Swiper.use([Navigation]);
Swiper.use([Pagination]);

var mainSwiper = new Swiper('.main-slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: '.main-slider__btn-next',
        prevEl: '.main-slider__btn-prev'
    },
});

var companySlider = new Swiper('.company_slider', {
    speed: 600,
    loop: true,
    slidesPerView: 2,
    equalHeight: true,
    centeredSlides: true,
});

var goodsSwiper = new Swiper('.new-good-slider', {
    slidesPerView: 3.8,
    slidesPerGroup: 1,
    loop: false,
    equalHeight: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.new-good__btn-next',
        prevEl: '.new-good__btn-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 1.8,
        },
        770: {
            slidesPerView: 2.8,
        },
        910: {
            slidesPerView: 2.8,
        },
        1150: {
            slidesPerView: 3.8,
        }
    }
});

var actionsSwiper = new Swiper('.actions-good-slider', {
    slidesPerView: 3.8,
    slidesPerGroup: 1,
    loop: false,
    equalHeight: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.actions-good__btn-next',
        prevEl: '.actions-good__btn-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 1.8,
        },
        770: {
            slidesPerView: 2.8,
        },
        910: {
            slidesPerView: 2.8,
        },
        1150: {
            slidesPerView: 3.8,
        }
    }
});

var otherCollectionsSwiper = new Swiper('.other-collections-slider', {
    slidesPerView: 3.8,
    slidesPerGroup: 1,
    loop: false,
    equalHeight: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.other-collections__btn-next',
        prevEl: '.other-collections__btn-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 1.8,
        },
        770: {
            slidesPerView: 2.1,
        },
        910: {
            slidesPerView: 2.1,
        },
        1150: {
            slidesPerView: 2.1,
        }
    }
});

var actionSwiper = new Swiper('.action', {
    speed: 600,
    loop: true,
    slidesPerView: 2.4,
    spaceBetween: 120,
    centeredSlides: true,
    navigation: {
        nextEl: '.action__btn-next',
        prevEl: '.action__btn-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2.1
        },
        1050: {
            slidesPerView: 2.4
        },
        1201: {
            slidesPerView: 2.7,
            spaceBetween: 60,
        },
        1500: {
            slidesPerView: 2.2,
            spaceBetween: 120,
        }
    }
});

var catalogDetailSwiper = new Swiper('.catalog-detail-slider', {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 120,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.catalog-detail-slider__btn-next',
        prevEl: '.catalog-detail-slider__btn-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

var categoryDetailSwiper = new Swiper('.good-category-slider', {
    speed: 600,
    slidesPerView: 6,
    spaceBetween: 10,
    navigation: {
        nextEl: '.good-category-slider__arrow-next',
        prevEl: '.good-category-slider__arrow-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        375: {
            slidesPerView: 2
        },
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1201: {
            slidesPerView: 5,
        },
        1420: {
            slidesPerView: 6,
        }
    }
});

if($('.review-slider__slide').length > 2) {
    var reviewSwiper = new Swiper('.review-slider', {
        speed: 600,
        slidesPerView: 2.4,
        spaceBetween: 120,
        centeredSlides: true,
        navigation: {
            nextEl: '.review-slider__btn-next',
            prevEl: '.review-slider__btn-prev'
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1.5
            },
            1050: {
                slidesPerView: 2.45
            },
            1201: {
                slidesPerView: 2.55,
                spaceBetween: 60,
            },
            1500: {
                slidesPerView: 2.7,
                spaceBetween: 120,
            },
            2000: {
                slidesPerView: 3.7,
                spaceBetween: 120,
            }
        }
    });
}
else {
    var reviewSwiper = new Swiper('.review-slider', {
        speed: 600,
        slidesPerView: 2.4,
        spaceBetween: 120,
        centeredSlides: true,
        navigation: {
            nextEl: '.review-slider__btn-next',
            prevEl: '.review-slider__btn-prev'
        },
        loop: false,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1.5
            },
            1050: {
                slidesPerView: 2.45
            },
            1201: {
                slidesPerView: 2.55,
                spaceBetween: 60,
            },
            1500: {
                slidesPerView: 2.7,
                spaceBetween: 120,
            },
            2000: {
                slidesPerView: 3.7,
                spaceBetween: 120,
            }
        }
    });
}
/* Увеличение/уменьшение количества в input по клику на + и -*/
// Убавляем кол-во по клику
$('.basket-info__item-product-input__minus').click(function() {
    let $input = $(this).parent().find('.basket-info__item-product-input__col');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
});
// Прибавляем кол-во по клику
$('.basket-info__item-product-input__plus').click(function() {
    let $input = $(this).parent().find('.basket-info__item-product-input__col');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
});
// Убираем все лишнее и невозможное при изменении поля
$('.basket-info__item-product-input__col').bind("change", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }
    if (this.value < 1) {
        this.value = 1;
    }
});

document.querySelectorAll('.pickup-popup__checkbox input').forEach(s => {
    s.addEventListener('change', function(e) {
        $('.pickup-popup__checkbox input').each(function()
        {
            if(e.target != this)
                this.checked = false;
        });
        document.querySelectorAll('.pickup-popup__item-info').forEach(d => d.classList.remove('active'));
        document.getElementById('info'+ this.id).classList.add('active');
    });
});

document.querySelectorAll('.order-info__payment-box input').forEach(s => {
    s.addEventListener('change', function(e) {
        $('.order-info__payment-box input').each(function()
        {
            if(e.target != this)
                this.checked = false;
        });
    });
});


/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();

/** Параллакс мышей */
// const mousePrlx = new MousePRLX({});

/** Фиксированный header */
// headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
togglePopupWindows();

// const tabs = new Tabs('default-tabs', {});

// Новый вызов функций
search();
catalogMenu();
formValidation();
dropdown();
favorite();
rangeSlider();
customSelect();
togglePassword();


document.addEventListener('DOMContentLoaded', () => {
    const goodTab = document.querySelectorAll('.good');
    goodTab.forEach((item) => {
        const goodTabItem = item.querySelectorAll('.good-tab__item');
        const goodImg = item.querySelectorAll('.good__img');

        tabs(item, goodTabItem, goodImg);
    });
    const personalTab = document.querySelectorAll('.personal');
    personalTab.forEach((item) => {
        const personalTabItem = item.querySelectorAll('.personal-tab__item');
        const personalSection = item.querySelectorAll('.personal-section__item');

        tabs(item, personalTabItem, personalSection);
    });
    const detailProductTab = document.querySelectorAll('.detail-product-info__container');
    detailProductTab.forEach((item) => {
        const detailProductTabItem = item.querySelectorAll('.detail-product-info__tab');
        const detailProductTabSection = item.querySelectorAll('.detail-product-info__tab-content');

        tabs(item, detailProductTabItem, detailProductTabSection);
    });
    const productDetail = document.querySelectorAll('.product-detail');
    productDetail.forEach((item) => {
        const goodTabItem = item.querySelectorAll('.good-tab__item');
        const goodImg = item.querySelectorAll('.good__img');

        tabs(item, goodTabItem, goodImg);
    });
    const contactsTab = document.querySelectorAll('.contacts__container');
    contactsTab.forEach((item) => {
        const contactTabItem = item.querySelectorAll('.contacts__shops_info__street');
        const contactSection = item.querySelectorAll('.contacts__map_item');

        tabs(item, contactTabItem, contactSection);
    });
    $('.product-detail__description_hide__button').click(function () {
        var opened = $(this).data("opened");
        let div = $('.product-detail__description_hide');
        if (opened)
        {
            $('.product-detail__description_hide').animate({height: "80px"},1300);
            $(this).data("opened","");
            return false;
        }
        div.css("height", "100%");
        var hg = div.height();
        div.css("height", "80px");
        $('.product-detail__description_hide').animate({
            height: hg+"px"
        }, 1300);
        $(this).data("opened","1");
        return false;
    });
    $('.collections-detail-banner__dot-block').click(function () {
        let article = this.getElementsByClassName('collections-detail-banner__dot-block__article');
        article[0].classList.toggle('active');
    });
    $('.faq_question').click(function() {
        $(this).find('.faq_content').toggle(200);
        $(this).find('.faq_content').toggleClass('open');
        $(this).find('.faq_plus_minus').toggleClass('active');
        $(this).find('.faq_question__text').toggleClass('active');
        $(this).toggleClass('open');
    });
});

tabs(collectionNav, collectionNavItem, collectionImgWrapper);

document.body.addEventListener('click', (e) => {
    const target = e.target.closest('.pre-footer__tab');
    if (target && window.innerWidth <= 900) {
        target.classList.toggle('active');
    }
});

$(document).ready(function() {
    $('.select-choice').select2({
        "language": {
            "noResults": function(){
                return "Не найдено тем";
            }
        },
    });
});
$(document).ready(function() {
    $('.order-info__user-data__form-type').select2({
        minimumResultsForSearch: -1
    });
});
$(document).ready(function() {
    $('.order-info__delivery-detail__select').select2();

    if($('.news-detail-banner.no-img').length > 0) {
       $('main')[0].classList.remove('news-detail');
    }
});

$('.personal-section__item-data__form-label-wrapper .custom-checkbox').click((e) => {
    if(e.target.id == 'female') $('#male')[0].checked = false;
    if(e.target.id == 'male') $('#female')[0].checked = false;
    if(e.target.id == 'fiz1') {
        $('.reg')[0].classList.add('_is-open');
        $('.reg-jur')[0].classList.remove('_is-open');
        $('#jur')[0].checked = false;
    }
    if(e.target.id == 'jur') {
        $('.reg-jur')[0].classList.add('_is-open');
        $('.reg')[0].classList.remove('_is-open');
        $('#fiz1')[0].checked = false;
    }
});