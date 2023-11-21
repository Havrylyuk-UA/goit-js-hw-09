const form = document.querySelector('.feedback-form'),
  input = form.elements.email,
  textArea = form.elements.message,
  localStorageKey = 'feedback-form-state';

const getItemStorage = () => {
  const getStorage = localStorage.getItem(localStorageKey);
  const parseStorage = JSON.parse(getStorage);

  if (parseStorage) {
    input.value = parseStorage.email;
    textArea.value = parseStorage.message;
  }
};

getItemStorage();

form.addEventListener('input', e => {
  e.preventDefault();

  const formValue = {
    email: input.value.trim(),
    message: textArea.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formValue));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(input.value.trim()) && textArea.value !== "") {
    console.log(input.value);
    console.log(textArea.value);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
