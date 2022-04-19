const formValidation = () => {
    const phoneInputs = document.querySelectorAll('.phone-user');
    const nameInputs = document.querySelectorAll('input[name="user_name"]');
    const numbersPattern = /^[1-9]+[0-9]*$/;
    // const phonePattern = /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/;
    const namePattern = /^[а-яё -]+$/i;

    phoneInputs.forEach((phoneInput) => {
        phoneInput.addEventListener('input', () => {
            if(!numbersPattern.test(phoneInput.value[phoneInput.value.length-1])){
                phoneInput.value = phoneInput.value.slice(0, -1);
            }
        })
    })

    nameInputs.forEach((nameInput) => {
        nameInput.addEventListener('input', () => {
            if(!namePattern.test(nameInput.value[nameInput.value.length-1])){
                nameInput.value = nameInput.value.slice(0, -1);
            }
        })
    })
}

export default formValidation;