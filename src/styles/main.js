const swiper = new Swiper('.gallerySwiper', {
  slidesPerView: 1.2,
  spaceBetween: 16,
  speed: 800,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
  },
});



document.addEventListener('DOMContentLoaded', () => {

  const menu = document.querySelector('.aside-menu');
  const openButtons = document.querySelectorAll('.menu-open');
  const closeButton = document.querySelector('#menu-close');

  openButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      menu.classList.add('is-open');
      document.body.classList.add('menu-open');
    });
  });

  closeButton.addEventListener('click', (event) => {
    event.preventDefault();

    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
});