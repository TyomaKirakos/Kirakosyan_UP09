import modalClose from './modalClose.js';

const checkModalOpen = () => {
    const getCheckBtn = document.querySelector('.check-btn');
    const checkModalArea = document.querySelector('.popup-check');

    getCheckBtn.addEventListener('click', () => {
        checkModalArea.style.display = 'block';
    })
    modalClose(checkModalArea);
}

export default checkModalOpen;