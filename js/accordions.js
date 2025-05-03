document.addEventListener('DOMContentLoaded', () => {
  const accordCards = document.querySelectorAll('.accord__card')

  if (accordCards.length > 0) {
    const firstCard = accordCards[0]
    const content = firstCard.querySelector('.accord__card_content')
    const plus = firstCard.querySelector('.accord__card_title_plus')
    content.style.maxHeight = `${content.scrollHeight}px`
    plus.classList.add('active')
  }

  accordCards.forEach(card => {
    const content = card.querySelector('.accord__card_content')

    card.addEventListener('click', () => {
      const isActive =
        content.style.maxHeight && content.style.maxHeight !== '0px'

      if (isActive) {
        content.style.maxHeight = '0px'
        card
          .querySelector('.accord__card_title_plus')
          .classList.remove('active')
      } else {
        const contentHeight = content.scrollHeight
        content.style.maxHeight = `${contentHeight}px`
        card.querySelector('.accord__card_title_plus').classList.add('active')
      }
    })
  })
})
