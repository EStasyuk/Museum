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
