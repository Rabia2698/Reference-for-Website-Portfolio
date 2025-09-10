const scriptURL = 'https://script.google.com/macros/s/AKfycbzyBw9QgtMaplN0ZGIomLYAHBkibxcXp6jGqVXsDnKMgxLEXvYvVYYLmP80JSuYHQ4/exec'


const form = document.forms['contactForm']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})