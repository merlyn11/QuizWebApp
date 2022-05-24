// FORM START
const user = document.querySelector('#username-input'),
  userValid = document.querySelector('#username-container i'),
  password = document.querySelector('#password-input'),
  passwordValid = document.querySelector('#oassword-container i'),
  submit = document.querySelector('#submit'),
  rocket = document.querySelector('.img1'),
  form = document.querySelector('#form')

// CHECK IF THE USER INPUT IS VALID

alert('WELCOME TO ICT! QUIZ PLAYING WEB APP!')

submit.addEventListener('click', function () {
  if (!user.checkValidity()) {
    userValid.style.color = '#8b0000'
    alert('Please, fill out the required form to continue')
  } else if (user.checkValidity()) {
    userValid.style.color = '#006400'
  }

  if (!password.checkValidity()) {
    passwordValid.style.color = '#8b0000'
    alert('Please, fill out the required form to continue')
  } else if (password.checkValidity()) {
    passwordValid.style.color = '#006400'
  }
})
// FORM END
