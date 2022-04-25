const showHiddenBlocks = () => {
    const addHiddenBlocksBtn = document.querySelector('.add-sentence-btn');
    const hiddenBlocks = document.querySelectorAll('.hidden');

    addHiddenBlocksBtn.addEventListener('click', () => {
        hiddenBlocks.forEach(hiddenBlock => {
            hiddenBlock.classList.remove('hidden');
        })

        addHiddenBlocksBtn.style.display = 'none';
    });
}

export default showHiddenBlocks;