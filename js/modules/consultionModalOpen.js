import modalClose from './modalClose.js';

const consultionModalOpen = () => {
    const consultionBtn = document.querySelector('.consultation-btn');
    const consultionModal = document.querySelector('.popup-consultation');
    consultionBtn.addEventListener('click', (e) => {
        e.preventDefault();
        consultionModal.style.display = 'block';
    })

    modalClose(consultionModal);
}

export default consultionModalOpen;