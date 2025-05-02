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
        slidesPerView: 3,
        loop: true,
        navigation: {
          nextEl: '#reviews .btn-next',
          prevEl: '#reviews .btn-prev',
        },
        breakpoints: {
          360: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        },
        // on: {
        //   slideChange: function () {
        //     updateColClasses(this)
        //   },
        //   init: function () {
        //     updateColClasses(this)
        //   },
        // },
      })
      // function updateColClasses(swiper) {
      //   const allSlides = swiper.slides

      //   // Удаляем старые классы col-*
      //   allSlides.forEach(slide => {
      //     slide.classList.remove('col-1', 'col-2', 'col-3')
      //   })

      //   // Получаем активный индекс
      //   const activeIndex = swiper.realIndex

      //   // Получаем слайды с учётом loop
      //   const slidesCount = swiper.slides.length

      //   // Функция для получения slide по index с учётом loop
      //   const getSlide = realIndexOffset => {
      //     let index = swiper.activeIndex + realIndexOffset
      //     return swiper.slides[index % slidesCount]
      //   }

      //   const col1 = getSlide(0)
      //   const col2 = getSlide(1)
      //   const col3 = getSlide(2)

      //   if (col1) col1.classList.add('col-1')
      //   if (col2) col2.classList.add('col-2')
      //   if (col3) col3.classList.add('col-3')
      // }
    })
  }
})
