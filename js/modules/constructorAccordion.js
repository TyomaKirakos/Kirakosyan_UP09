const constructorAccordion = () => {
    const contructorAccordion = document.getElementById('accordion');

    const allConstructorPanels = contructorAccordion.querySelectorAll('.panel');

    contructorAccordion.addEventListener('click', (e) => {
        if (e.target.closest('a.construct-btn')){
            let parentPanel = e.target.closest('.panel');
            allConstructorPanels.forEach((constructorPanel, index) => {
                if (constructorPanel == parentPanel){
                    let currentContent = allConstructorPanels[index].querySelector('.panel-collapse');
                    currentContent.style.display = 'none';
                    let nextContent = allConstructorPanels[index + 1].querySelector('.panel-collapse');
                    nextContent.style.display = 'block';
                }
            })
        }
    })
}

export default constructorAccordion;