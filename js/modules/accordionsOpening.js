const accordionsOpening = () => {
    const accordions = document.querySelectorAll('.panel-group');

    accordions.forEach((accordion) => {
        accordion.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.closest('.panel-heading')){
                const allContent = accordion.querySelectorAll('.panel-collapse');
                allContent.forEach((content) => {
                    content.style.display = 'none';
                })
                let panel = e.target.closest('.panel');
                let textPart = panel.querySelector('.panel-collapse');
                textPart.style.display = 'block';
            }
        })
    })
    
}

export default accordionsOpening;