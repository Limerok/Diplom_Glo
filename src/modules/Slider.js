const Slider = () => {
    /* const benefitsSlide = document.querySelectorAll('.benefits__item'),
        benefitsSlider = document.getElementById('benefits');
    let prevCountBenefits = 0,
        nextCountBenefits = 0,
        interval;

    const getCount = () => {
        if (window.innerWidth <  576) {
            const getCountBenefits = 2;
            return getCountBenefits;
        } else {
            const getCountBenefits = 3;
            return getCountBenefits;
        }
    };

    const enumerationSlide = () => {
        benefitsSlide.forEach((item, i) => {
            if (i < nextCountBenefits && i >= prevCountBenefits) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    const getNextSlideDisplay = () => {
        if (nextCountBenefits >= benefitsSlide.length) {
            prevCountBenefits = 0;
            nextCountBenefits = 0;
        }
        nextCountBenefits = nextCountBenefits + getCount();
        enumerationSlide();
        prevCountBenefits = nextCountBenefits;
    };

    const getPrevSlideDisplay = () => {
        nextCountBenefits = nextCountBenefits - getCount();
        prevCountBenefits = nextCountBenefits - getCount();
        if (prevCountBenefits < 0) {
            nextCountBenefits = benefitsSlide.length;

            const remainder = benefitsSlide.length % getCount();
            if (remainder === 1) {
                prevCountBenefits = benefitsSlide.length - 1;
            } else if (remainder  === 2) {
                prevCountBenefits = benefitsSlide.length - 2;
            } else {
                prevCountBenefits = benefitsSlide.length - getCount();
            }
            
        }
        enumerationSlide();
        prevCountBenefits = nextCountBenefits;
    };

    const autoPlay = () => {
        getNextSlideDisplay();
    };

    const start = () => {
        interval = setInterval(autoPlay, 5000);
    };

    benefitsSlider.addEventListener('click', event => {
        let target = event.target;

        if (target.closest('.benefits__arrow--left')) {
            getPrevSlideDisplay();
        } else if (target.closest('.benefits__arrow--right')) {
            getNextSlideDisplay();
        }

    });

    const stopSlide = () => {
        clearInterval(interval);
    };

    benefitsSlider.addEventListener('mouseover', event => {
        if (event.target.closest('.benefits__arrow') || event.target.closest('.benefits-wrap')) {
            stopSlide();
        }
    });
    benefitsSlider.addEventListener('mouseout', event => {
        if (event.target.closest('.benefits__arrow') || event.target.closest('.benefits-wrap')) {
            start();
        }
    });
    
    getNextSlideDisplay();
    start(); */


};

export default Slider;