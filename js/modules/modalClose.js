const modalClose = () => {
    // const modalCloseBtn = document.querySelector('.popup-close');
    const modalArea = document.querySelector('.popup-call');

    modalArea.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains("popup-call") || e.target.classList.contains('popup-close')){
            modalArea.style.display = 'none';
        }
    })
}

export default modalClose;