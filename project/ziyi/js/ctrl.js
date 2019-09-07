
/***** 轮播图部分******/
var mySwiper = new Swiper('.swiper-container', {
    effect: 'sidle',
    autoplay: {
        delay: 1000,

        stopOnLastSlide: false,
        disableOnInteraction: true,
        waitForTransition: true,

    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
})