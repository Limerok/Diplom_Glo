const Calc = () => {
    const calcType = document.getElementById('calc-type'),
        calcTypeMaterial = document.getElementById('calc-type-material'),
        calcInput = document.getElementById('calc-input'),
        calcTotal = document.getElementById('calc-total'),
        calcBlock = document.querySelector('.calc-block'),
        form = document.querySelectorAll('form');

    
    const CalcTotalInput = (total) => {
        form.forEach((item) => {
            if (total !== 0) {
                if (item.querySelector('.input-total-send')) {
                    item.querySelector('.input-total-send').value = total;
                } else {
                    item.insertAdjacentHTML('beforeend', `<input class="input-total-send" type="hidden" name="calc-total" value="${Math.floor(total)}">`);
                }
            } else if (item.querySelector('.input-total-send')) {
                item.querySelector('.input-total-send').remove();
            }
        });
    };

    const countSum = () => {
        const typeValue = calcType.options[calcType.selectedIndex].value,
            typeMaterialValue = calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;

        let type = typeValue,
            material = typeMaterialValue,
            square = calcInput.value,
            total = 0,
            count = 0;

        if (typeValue !== '--' && typeMaterialValue !== '--' && calcInput.value !== '') {
            total = square * type * material;
            /* calcTotal.value = total; */
            

            let id = setInterval(() => {
                if (count <= total) {
                    calcTotal.value = count;
                    count += 1;
                } else {
                    clearInterval(id);
                }
            }, 0.2000);
        } 
        CalcTotalInput(total);
    };

    const reset = () => {
        calcInput.value = '';
        calcTotal.value = '';
    };

    if (calcBlock) {
        calcBlock.addEventListener('change', event => {
            const target = event.target;
    
            if(target.matches('select')) {
                reset();
                countSum();
            }
            if (target.matches('input')) {
                countSum();
            }
        });
    }
};

export default Calc;