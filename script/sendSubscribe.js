const nexsletterInput = document.querySelector('.nexsletter-input')
const nexsletterSubmit = document.querySelector('.nexsletter-submit')
const nexsletterError = document.querySelector('.nexsletter-error')
const subscriptionAlert = document.getElementById('subscription-alert')
const subscriptionData = {
  email: ''
}

const handleSubscriptionChange = (e) => {
  subscriptionData.email = e.target.value
  nexsletterError.textContent = ''
}

const postSubscribe = async (data) => {
  const url = 'https://api-dev.guatapay.com/newsletter/subscribe'
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response.json()
}

const alertSubscription = () => {
  subscriptionAlert.classList.add('show-send-alert')
  setTimeout(() => {
    subscriptionAlert.classList.remove('show-send-alert')
  }, 5000)
}

const handleSubscriptionSubmit = (e) => {
  e.preventDefault()
  const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

  if (!emailRegEx.test(subscriptionData.email.trim())) {
    nexsletterError.textContent = contactContent.errors.emailFormat[language]
  } else {
    const response = postSubscribe(subscriptionData)
    subscriptionData.email = ''
    nexsletterInput.value = ''
    alertSubscription()
    response.then((res) => console.log(res)).catch((err) => console.log(err))
  }
}

nexsletterInput.addEventListener('input', handleSubscriptionChange)
nexsletterSubmit.addEventListener('click', handleSubscriptionSubmit)
nexsletterInput.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
    handleSubscriptionSubmit(e)
  }
})
