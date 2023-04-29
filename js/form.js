import { formValidations } from './data/formValidations.const.js'
const form = document.forms['newsletter']
const validFormMessage = document.querySelector('.valid-message')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputsContainer = e.target.querySelector('.inputs-ctn')
  const formElement = Array.from(form.elements)
  let isValidTheForm = []

  formElement.forEach((element, index) => {
    if (element.type !== 'submit') {
      const inputParent = element.parentElement
      const alertInput = inputParent.querySelector('.alert')

      const keyInputName = element.name
      const keyInputValue = element.value

      const regexValue = formValidations[keyInputName].regexStr
      const message = formValidations[keyInputName].message

      if (!regexValue.test(keyInputValue)) {
        alertInput.textContent = message
        alertInput.classList.add('active')

        isValidTheForm[index] = false

        return
      }
      alertInput.classList.remove('active')
      alertInput.textContent = ''

      isValidTheForm[index] = true
    }
  })

  if (isValidTheForm.every((input) => input)) {
    inputsContainer.remove()
    validFormMessage.classList.add('active')
  }
})
