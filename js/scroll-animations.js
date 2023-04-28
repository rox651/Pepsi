window.addEventListener('scroll', () => {
  const animateElements = document.querySelectorAll('.animate-element')
  animateElements.forEach((element) => {
    const distance = window.innerHeight - element.getBoundingClientRect().top

    if (distance >= 150) {
      element.classList.add('show')
    }
  })
})
