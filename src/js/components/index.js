let collectionSlidersArray = []
let collectionSliders = document.querySelectorAll(".collection")

function projectsSliders() {

    collectionSliders.forEach((el, index) => {
        el.setAttribute("data-slider-id", `${index}`);
        collectionSlidersArray[index] = new Swiper(`.collection[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: 5,
            spaceBetween: 24,
            loop: true,
            navigation: {
                nextEl: `.collection[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.collection[data-slider-id="${index}"] .swiper-button-prev`,
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                992: {
                    slidesPerView: 4,
                },
                1150: {
                    slidesPerView: 5,
                },
            }
        })
    });

}

function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
    })
}


projectsSliders()
mainSlider()
