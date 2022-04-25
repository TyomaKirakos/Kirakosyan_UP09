const modalClose = (modalArea) => {
    // const modalCloseBtn = document.querySelector('.popup-close');

    modalArea.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains("popup") || e.target.classList.contains('popup-close')){
            modalArea.style.display = 'none';
        }
    })
}

export default modalClose;