document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.header_item.burger')
  const burgerMenu = document.querySelector('.burger-nav')
  const links = document.querySelectorAll('.burger-nav li a')
  burger.onclick = () => {
    burgerMenu.classList.toggle('open')
    burger.classList.toggle('active')
  }
  links.forEach(link => {
    link.onclick = () => {
      burgerMenu.classList.toggle('open')
      burger.classList.toggle('active')
    }
  })
})
