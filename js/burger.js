document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.header_item.burger')
  const burgerMenu = document.querySelector('.burger-nav')
  burger.onclick = () => {
    burgerMenu.classList.toggle('open')
    burger.classList.toggle('active')
  }
})
