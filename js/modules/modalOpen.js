const modalAppearance = () => {
    const popupCall = document.querySelector('.popup-call');
    const callBtns = document.querySelectorAll('.call-btn');

    callBtns.forEach((callBtn) => {
        callBtn.addEventListener('click', () => {
            popupCall.style.display = 'block';
        })
    })
}

export default modalAppearance;