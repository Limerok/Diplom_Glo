const SendForm = () => {

    const errorMessage = 'Что то пошло не так',
        errorNone = 'Заполните все поля',
        errorValid = 'Некоторые поля заполненны неверно',
        loadMessage = '<img src="../images/loading.gif" style="width:50px;height:auto;">',
        successMesage = 'Спасибо! Мы скоро с Вами свяжемся.',
        statusMessage = document.createElement('div'),
        forms = document.querySelectorAll('form');

    statusMessage.style.cssText = 'font-size: 3rem;';
    statusMessage.style.cssText = 'color: rgb(84, 106, 118);';
    statusMessage.style.cssText ='text-align: center;';

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Conternt-Type': 'application/json'
            },
            body: body
        });
    };

    const nonePopap = (form) => {
        const none = () => {
            if (form.closest('.header-modal--opened')){
                form.closest('.fancybox-skin').querySelector('.header-modal__close').click();
            } else if (form.closest('.services-modal--opened')) {
                form.closest('.fancybox-skin').querySelector('.services-modal__close').click();
            }
        };
        setTimeout(none,4000);
    };

    const resetInput = (fio, number) => {
        fio.value = '';
        number.value = '';
    };

    forms.forEach((form) => {
        form.addEventListener('submit', event => {
            event.preventDefault();

            const input = form.querySelectorAll('input');
            let fio,
                number;

            input.forEach((input) => {
                if (input.name === 'fio') {
                    fio = input;
                } else if (input.name === 'phone') {
                    number = input;
                }
            });
            
            if (fio.value !== '' && number.value !== '') {
                if(fio.classList.contains('form-control--invalid') || number.classList.contains('form-control--invalid')) {
                    form.querySelector('button').insertAdjacentElement('afterend',statusMessage);
                    statusMessage.innerHTML = errorValid;
                } else {
                    form.querySelector('button').insertAdjacentElement('afterend',statusMessage);
                    statusMessage.innerHTML = loadMessage;
                    const formData = new FormData(form);
                    postData(formData)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status not 200');
                        }
                        statusMessage.textContent = successMesage;
                        nonePopap(form);
                    })
                    .catch(() => {
                            statusMessage.textContent = errorMessage;
                    });
                    resetInput(fio, number);
                    
                }
            } else {
                form.querySelector('button').insertAdjacentElement('afterend',statusMessage);
                statusMessage.innerHTML = errorNone;
            }
        });
    });

};

export default SendForm;