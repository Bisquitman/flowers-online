$(document).ready(function () {
const flowersSlider = new Swiper('.flowers-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Настройки адаптива
breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 768px
    992: {
      slidesPerView: 6,
    }
  }

});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'img/bouqet-1.jpg',
      opts : {
        caption : 'First caption',
        thumb   : 'img/bouqet-1.jpg'
      }
    },
    {
      src  : 'img/bouqet-2.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : 'img/bouqet-2.jpg'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});
});