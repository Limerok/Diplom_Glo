const Slider = () => {
    class SliderCarousel {
        constructor({
            main,
            wrap,
            prev,
            infinity = false,
            next,
            position = 0,
            slidesToShow = 3,
            responsive = []

        }) {
            if (!main || !wrap) {
                console.warn('slider: необходимо 2 свойства, "main" и "wrap"');
            }
            
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.options = {
                position,
                infinity,
                widthSlide: Math.floor(100 / this.slidesToShow)
            };
            this.responsive = responsive;
            
        }

        init () {
            this.addCarouselClass();
            this.addCarouselStyle();

            if (this.prev && this.next) {
                this.controlSlider();
            } else {
                this.addArrow();
                this.controlSlider();
            }

            if(this.responsive) {
                this.responseInit();
            }
        }

        addCarouselClass () {
            this.main.classList.add('carousel-slider');
            this.wrap.classList.add('carousel-slider__wrap');
            
            for (const item of this.slides) {
                item.classList.add('carousel-slider__item');
            }
        }

        addCarouselStyle () {
            this.main.style.cssText= `
                overflow: hidden !important;
            `;

            this.wrap.style.cssText= `
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            `;

            for (const item of this.slides) {
                item.style.cssText = `
                    flex: 0 0 ${this.options.widthSlide}% !important;
                    margin: auto 0 !important;
                `;
            }
        }

        controlSlider () {
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }

        prevSlider () {
            if (this.options.infinity || this.options.position > 0) {
                --this.options.position;

                if (this.options.position < 0) {
                    this.options.position = this.slides.length - this.slidesToShow;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }

        nextSlider () {
            if (this.options.infinity || this.options.position < (this.slides.length - this.slidesToShow)) {
                ++this.options.position;

                if (this.options.position > this.slides.length - this.slidesToShow) {
                    this.options.position = 0;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }

        addArrow () {
            this.prev = document.createElement('button');
            this.next = document.createElement('button');

            this.prev.className = 'carousel-slider__prev';
            this.next.className = 'carousel-slider__next';

            this.main.appendChild(this.prev);
            this.main.appendChild(this.next);

            const style = document.createElement('style');
            style.textContent = `
               .carousel-slider__prev {
                margin: 0 10px;
                   border: 20px solid transparent;
                   background: transparent;
                   border-right-color: #19b5fe;

               }
               .carousel-slider__next{
                   margin: 0 10px;
                   border: 20px solid transparent;
                   background: transparent;
                   border-left-color: #19b5fe
               }
               .carousel-slider__prev:hover,
               .carousel-slider__prev:focus,
               .carousel-slider__next:hover,
               .carousel-slider__next:focus {
                    background: transparent;
                    outline: transparent;
               }
            `;
            document.head.appendChild(style);
        }

        responseInit () {
            const slidesToShowDefault = this.slidesToShow;
            const allRespone = this.responsive.map(item => item.breakPoint);
            const mmaxResponse = Math.max(...allRespone);

            const checkResponse = () => {
                const widthWindow = document.documentElement.clientWidth;

                if (widthWindow < mmaxResponse) {
                    for (let i = 0; i < allRespone.length; i++) {
                        if (widthWindow < allRespone[i]) {
                            this.slidesToShow = this.responsive[i].slidesToShow;
                            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                            this.addCarouselStyle();
                        } 
                    }
                } else {
                    this.slidesToShow = slidesToShowDefault;
                    this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                    this.addCarouselStyle();
                }
            };

            checkResponse();
            window.addEventListener('resize', checkResponse );
        }
    }

    const carouselBenefits = new SliderCarousel({
        main: '.benefits-inner',
        wrap: '.benefits-wrap',
        prev: '.benefits__arrow--left',
        next: '.benefits__arrow--right',
        slidesToShow: 3,
        infinity: true,

        responsive: [
            {
                breakPoint: 768,
                slidesToShow: 2
            },
            {
                breakPoint: 576,
                slidesToShow: 1
            }
        ],

    });

    carouselBenefits.init();

    const carouselService = new SliderCarousel({
        main: '.service-slider-contant',
        wrap: '.service-slider',
        prev: '.services__arrow--left',
        next: '.services__arrow--right',
        slidesToShow: 2,
        infinity: true,

        responsive: [
            {
                breakPoint: 1200,
                slidesToShow: 1
            }
        ],

    });

    carouselService.init();
    


};

export default Slider;