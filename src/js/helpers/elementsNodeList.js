const html = document.documentElement;
const body = document.body;
const pageWrapper = document.querySelector('.page');
const header = document.querySelector('.header');
const firstScreen = document.querySelector('[data-observ]');
const burgerButton = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');
const lockPaddingElements = document.querySelectorAll('[data-lp]');
const collectionNav = document.querySelector('.collection-nav');
const collectionNavItem = document.querySelectorAll('.collection-nav__item');
const collectionImgWrapper = document.querySelectorAll('.collection-img__wrapper');


export {
  html,
  body,
  pageWrapper,
  header,
  firstScreen,
  burgerButton,
  menu,
  lockPaddingElements,
  collectionNav,
  collectionNavItem,
  collectionImgWrapper
};
