const sendingForm = () => {
    let body = {};

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('click', async e => {
            e.preventDefault()
            if (!e.target.matches('button')) return;

            let isFormFull = true;
            let fd = new FormData(form);
            let parsedFD = Object.fromEntries(fd);
            let state = form.querySelector('.form-state');

            state.innerHTML = '';

            for (let key in parsedFD) {
                if (parsedFD[key].length < 3){
                    isFormFull = false;
                }
            }
            
            fd.forEach((val, key) => {
                body[key] = val;
            })

            if (isFormFull){
                try {
                    state.innerHTML = 'Загрузка...'
                    await fetch('server.php', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({fd})
                    })
                    state.innerHTML = 'Отправлено!'
                }
                catch (error) {
                    state.innerHTML = 'Ошибка :('
                }
                form.reset();
            } else{
                state.innerHTML = 'Заполните поля корректно';
            }
        })
    })
}

export default sendingForm;