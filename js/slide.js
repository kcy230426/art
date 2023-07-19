$(document).ready(function(){
    var swiper = new Swiper(".swiper", {
        spaceBetween: 0,
        centeredSlides: true,
        loop:true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})