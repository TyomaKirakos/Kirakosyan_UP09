const sendingForm = () => {
    const forms = document.querySelectorAll('.capture-form');
    forms.forEach((form) => {
        form.addEventListener('submit', async e => {
            e.preventDefault()
            const formState = form.querySelector('.form-state')
            try {
                formState.textContent = 'Отправка данных...'
                await fetch('server.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        user_name: form.querySelector('input[name=user_name]').value,
                        user_phone: form.querySelector('input[name=user_phone]').value
                    })
                })
                formState.textContent = 'Успешно отправлено!'
            }
            catch (error) {
                formState.textContent = 'Что-то пошло не так...'
            }
        })
    })
}

export default sendingForm;