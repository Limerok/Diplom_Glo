const OrderСall = () => {
    const overlay = document.querySelector('.overlay'),
        headerModal = document.querySelector('.header-modal'),
        blockModal = document.querySelector('.block-modal'),
        buttonFancyboxModal = document.querySelectorAll('.fancyboxModal');

    buttonFancyboxModal.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
    
            overlay.style.display = 'block';
            headerModal.style.display = 'block';
        });
    });

    blockModal.addEventListener('click', event => {
        let target = event.target;
        console.log(target);
        if (target.classList.contains('header-modal__close')) {
            overlay.style.display = 'none';
            headerModal.style.display = 'none';
        } else {
            target = target.closest('.header-modal');

            if (!target) {
                overlay.style.display = 'none';
                headerModal.style.display = 'none';
            }
        }
    });

};

export default OrderСall;