const accoridonCalculator = () => {
    const panelOne = document.querySelector('.panel-one');
    const panelTwo = document.querySelector('.panel-two');
    const panelThree = document.querySelector('.panel-three');

    const typeCheckbox = panelOne.querySelector('.onoffswitch-checkbox');
    const bottomCheckbox = panelThree.querySelector('.onoffswitch-checkbox');

    const panelTwoChildren = panelTwo.querySelectorAll('*');
    // console.log(panelTwoChildren);

    const priceInput = document.getElementById('calc-result');

    function swithingCheckbox(panel, checkbox){
        panel.addEventListener('click', (e) => {
            if (e.target.closest('.onoffswitch-label')){
                if (checkbox.checked){
                    checkbox.checked = false;
                } else {
                    checkbox.checked = true;
                }
            }
        });
    }

    swithingCheckbox(panelOne, typeCheckbox);
    swithingCheckbox(panelThree, bottomCheckbox);
}

export default accoridonCalculator;