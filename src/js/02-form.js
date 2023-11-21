const form = document.querySelector('.feedback-form'),
  input = form.elements.email,
  textArea = form.elements.message,
  formBtn = document.querySelector('button'),
  localStorageKey = 'feedback-form-state';



  form.addEventListener('input', e => {
    e.preventDefault();

    const formValue = {
      email: input.value.trim(),
      message: textArea.value.trim()
    }

    sessionStorage.setItem(localStorageKey, JSON.stringify(formValue))
  })