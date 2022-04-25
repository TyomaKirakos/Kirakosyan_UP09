import modalClose from './modalClose.js';

const modalAppearance = () => {
    const popupCall = document.querySelector('.popup-call');
    const callBtns = document.querySelectorAll('.call-btn');

    callBtns.forEach((callBtn) => {
        callBtn.addEventListener('click', (e) => {
            e.preventDefault();
            popupCall.style.display = 'block';
        })
    })
    modalClose(popupCall);
}

export default modalAppearance;