const Certificate = () => {
    const blockSertificate = document.getElementById('documents'),
        modalDocument = document.querySelector('.modal-documents'),
        imgCertificat = document.querySelector('.img-modal'),
        overlayDocument = document.querySelector('.overlay-document');

    blockSertificate.addEventListener('click', event => {
        event.preventDefault();

        let target = event.target;

        if (target.closest('.sertificate-document')) {
            let href = target.closest('.sertificate-document').getAttribute('href');

            overlayDocument.style.display = 'block';
            modalDocument.style.display = 'block';
            imgCertificat.setAttribute('src', href);
        }
        
    });
    modalDocument.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;

        if (target.closest('.header-modal__close')) {
            modalDocument.style.display = 'none';
            
        } else if (target.matches('.overlay-document')) {
            modalDocument.style.display = 'none';
        }
    });

};

export default Certificate;