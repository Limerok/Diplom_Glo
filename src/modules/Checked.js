const Checked= () => {
    const calcItem = document.getElementById('calc-input'),
        form = document.querySelectorAll('form');

    if (calcItem) {
        calcItem.addEventListener('input', () => {
            calcItem.value = calcItem.value.replace(/[^0-9]/, '');
        });
    }

    const checkValue = (event) => {
        let target = event.target;
        if (target.name === 'fio') {
            if (target.value === ''){
                target.classList.remove('form-control--invalid');
            } else if (target.value.length <= 1) {
                target.classList.add('form-control--invalid');
            } else {
                target.classList.remove('form-control--invalid');
            }
            target.value = target.value.replace(/[^а-яёa-z]/gi, '');
        }
        if(target.name === 'phone') {
            const validPlus = /^\+/g,
                validNumber = /^\d/;
            /* const checkPlus =  */
            if (validPlus.test(target.value)) {
                target.setAttribute('minlength', 12);
                target.setAttribute('maxlength', 17);
            } else if (validNumber.test(target.value)) {
                target.setAttribute('minlength', 6);
                target.setAttribute('maxlength', 16);
            }
            if (target.value === ''){
                target.classList.remove('form-control--invalid');
            } else if (target.value.length <= 6) {
                target.classList.add('form-control--invalid');
            } else if (target.value.length > 17){
                target.classList.add('form-control--invalid');
            } else {
                target.classList.remove('form-control--invalid');
            }
            target.value = target.value.replace(/[^0-9\+]/gi, '');
            target.value = target.value.replace(/\++/gi, '+');
            if(target.value.length > 1) {
                target.value = target.value.replace(/\+$/gi, '');
            }
        }
        
        target.addEventListener('blur', () => {
            if (target.name === 'fio') {
                target.value = target.value.toLowerCase();
                target.value = target.value.replace(/(^|\s|-)\S/g, function(a) {return a.toUpperCase();});
            } else if (target.name === 'phone') {
                target.value = target.value.replace(/[^0-9\+]/gi, '');
                target.value = target.value.replace(/\++/gi, '+');
            }
    
        });
    };

    form.forEach((item) => {
        item.addEventListener('input', event => {
            checkValue(event);
        });
    });
    
};

export default Checked;