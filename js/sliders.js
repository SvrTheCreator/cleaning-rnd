document.addEventListener('DOMContentLoaded', function () {
  if (Swiper) {
    setTimeout(() => {}, 100)
    const toc_swiper = document.querySelectorAll('.toc .swiper')
    toc_swiper.forEach(slider => {
      const swiperInstance = new Swiper(slider, {
        loop: true,
        slidesPerView: 2,
        // spaceBetween: 24,
        navigation: {
          nextEl: '.toc .btn-next',
          prevEl: '.toc .btn-prev',
        },
      })
    })
    const services_swiper = document.querySelectorAll('#services .swiper')
    services_swiper.forEach(slider => {
      const swiperInstance = new Swiper(slider, {
        slidesPerView: 3,
        loop: true,
        navigation: {
          nextEl: '#services .btn-next',
          prevEl: '#services .btn-prev',
        },
        breakpoints: {
          360: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        },
      })
    })
    const reviews_swiper = document.querySelectorAll('#reviews .swiper')
    reviews_swiper.forEach(slider => {
      const swiperInstance = new Swiper(slider, {
        // slidesPerView: 'auto',
        loop: true,
        // initialSlide: 1,
        centeredSlides: true,
        navigation: {
          nextEl: '#reviews .btn-next',
          prevEl: '#reviews .btn-prev',
        },
        breakpoints: {
          360: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 1.2,
          },
          800: {
            slidesPerView: 1.4,
          },
          1000: {
            slidesPerView: 'auto',
            // centeredSlides: true,
          },
        },
      })
    })
  }
})
