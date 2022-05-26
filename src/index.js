const slider = document.getElementById('phone__dish_slider')
const spacer = slider.querySelector('.phone__left-spacer')

const slideWidth = 330
let currentIndex = 0

function slideNext() {
  currentIndex += 1
  const slides = slider.querySelectorAll('.dish__item')
  slider.addEventListener(
    'transitionend',
    () => {
      slides.forEach((el) => {
        const { right } = el.getBoundingClientRect()
        if (right < 0) {
          requestAnimationFrame(() => {
            spacer.style.width = `${
              spacer.getBoundingClientRect().width + slideWidth
            }px`
            slider.removeChild(el)
            slider.appendChild(el)
          })
        }
      })
    },
    { once: true }
  )

  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`
}

setTimeout(() => {
  slideNext()
  setInterval(() => {
    slideNext()
  }, 3000)
}, 1000)
