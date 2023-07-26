const submitBtn = document.querySelector('.submit-btn')

// inputs
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const companyInput = document.getElementById('compañia')
const phoneInput = document.getElementById('telefono')
const messageInput = document.getElementById('mensaje')

// errors
const nameError = document.getElementById('name-error')
const emailError = document.getElementById('email-error')
const companyError = document.getElementById('company-error')
const phoneError = document.getElementById('phone-error')
const messageError = document.getElementById('message-error')

// alert
const formAlert = document.querySelector('.success-form-message')

// request body
const initialState = {
  name: '',
  phoneNumber: '',
  email: '',
  description: ''
}
let bodyObject = { ...initialState }

const handleOnChange = (e) => {
  switch (e.target.name) {
    case 'name':
      bodyObject.name = e.target.value
      nameError.textContent = ''
      break
    case 'email':
      bodyObject.email = e.target.value
      emailError.textContent = ''
      break
    case 'compañia':
      bodyObject.company = e.target.value
      companyError.textContent = ''
      break
    case 'telefono':
      bodyObject.phoneNumber = e.target.value
      phoneError.textContent = ''
      break
    case 'mensaje':
      bodyObject.description = e.target.value
      messageError.textContent = ''
      break
    default:
      break
  }
}

const postEmailData = async (data) => {
  const url = 'https://k2mx3b70i6.execute-api.us-east-1.amazonaws.com/dev/'
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response.json()
}

const resetForm = () => {
  bodyObject = { ...initialState }
  nameInput.value = ''
  emailInput.value = ''
  companyInput.value = ''
  phoneInput.value = ''
  messageInput.value = ''
}

const alertSendDataForm = () => {
  formAlert.classList.add('show-send-alert')
  setTimeout(() => {
    formAlert.classList.remove('show-send-alert')
  }, 6000)
}

const handleSubmitEmail = (e) => {
  e.preventDefault()
  const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  const phoneRegEx = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm

  if (bodyObject.name.trim().length === 0) {
    nameError.textContent = contactContent.errors.name[language]
  } else if (bodyObject.email.trim().length === 0) {
    emailError.textContent = contactContent.errors.email[language]
  } else if (!emailRegEx.test(bodyObject.email.trim())) {
    emailError.textContent = contactContent.errors.emailFormat[language]
  } else if (bodyObject.phoneNumber.trim().length === 0) {
    phoneError.textContent = contactContent.errors.phone[language]
  } else if (bodyObject.description.trim().length === 0) {
    messageError.textContent = contactContent.errors.message[language]
  } else if (!phoneRegEx.test(bodyObject.phoneNumber.trim())) {
    phoneError.textContent = contactContent.errors.phoneFormat[language]
  } else if (bodyObject.description.trim().length > 200) {
    messageError.textContent = contactContent.errors.messageLength[language]
  } else {
    const response = postEmailData(bodyObject)
    resetForm()
    alertSendDataForm()
    console.log({ response })
  }
}

nameInput.addEventListener('input', handleOnChange)
emailInput.addEventListener('input', handleOnChange)
companyInput.addEventListener('input', handleOnChange)
phoneInput.addEventListener('input', handleOnChange)
messageInput.addEventListener('input', handleOnChange)
submitBtn.addEventListener('click', handleSubmitEmail)
