import modalClose from './modalClose.js';

const discountModalOpen = () => {
    const sentenceBlock = document.querySelector('.sentence');
    const discountModal = document.querySelector('.popup-discount');

    sentenceBlock.addEventListener('click', (e) => {
        if (e.target.matches('button.discount-btn')){
            discountModal.style.display = 'block';
        }
    })

    modalClose(discountModal);
}

export default discountModalOpen;