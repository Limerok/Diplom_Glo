const ScrollTop = () => {
    const scrollToTop = document.querySelector('.smooth-scroll'),
        heightHead = document.getElementById('header').clientHeight,
        heightNavigation = document.getElementById('navigation').clientHeight,
        heightOffer = document.getElementById('offer').clientHeight,
        height = heightHead + heightNavigation + heightOffer;
    

    const blockScroll = () => {
        let scroll = window.pageYOffset;
        if (scroll > height) {
            scrollToTop.style.display = 'block';
        } else if (scroll <= height) {
            scrollToTop.style.display = 'none';
        }
    };
    window.addEventListener('scroll', blockScroll);

    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};

export default ScrollTop;