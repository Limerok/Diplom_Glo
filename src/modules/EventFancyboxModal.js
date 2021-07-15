const EventFancyboxModal = () => {
    const overlay = document.querySelector('.overlay'),
        headerModal = document.querySelector('.header-modal'),
        serviceModal = document.querySelector('.services-modal'),
        blockModal = document.querySelector('.block-modal'),
        buttonFancyboxModal = document.querySelectorAll('.fancyboxModal');

    buttonFancyboxModal.forEach(item => {
        const href = item.getAttribute('href');
        if (href === '#callback' || href === '#order') {
            item.addEventListener('click', event => {
                event.preventDefault();
        
                overlay.style.display = 'block';
                headerModal.style.display = 'block';
            });
        } else if (href === '#application'){
            item.addEventListener('click', event => {
                event.preventDefault();

                overlay.style.display = 'block';
                serviceModal.style.display = 'block';
            });
        }
    });

    blockModal.addEventListener('click', event => {
        let target = event.target;
        console.log(target);
        if (target.classList.contains('header-modal__close') || target.classList.contains('.services-modal__close')) {
            overlay.style.display = 'none';
            headerModal.style.display = 'none';
        } else {
            const targetCall = target.closest('.header-modal'),
                targetService = target.closest('.services-modal');

            if (!targetCall) {
                overlay.style.display = 'none';
                headerModal.style.display = 'none';
            }
            if (!targetService) {
                overlay.style.display = 'none';
                serviceModal.style.display = 'none';
            }
        }
    });
};

export default EventFancyboxModal;