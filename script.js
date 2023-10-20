
importScripts("https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js",'https://kit.fontawesome.com/f6ab9c6726.js')

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });