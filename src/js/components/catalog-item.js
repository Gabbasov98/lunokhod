function catalogGallery() {
    var swiper = new Swiper(".catalog-gallery .mySwiper", {
        spaceBetween: 16,
        slidesPerView: "auto",
        direction: "vertical",
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                direction: "horizontal",
                spaceBetween: 10,
            },
            992: {
                direction: "vertical",
                spaceBetween: 16,
            },
        }
    });
    var swiper2 = new Swiper(".catalog-gallery .mySwiper2", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
        pagination: {
            el: '.catalog-gallery .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
}


catalogGallery()


let catalogRadios = document.querySelectorAll(".catalog-item__radio input")

catalogRadios.forEach(el => {
    if (el.checked) {
        let title = el.closest(".catalog-item__radios").childNodes[1].childNodes[1]
        title.innerHTML = el.value
    }
});

catalogRadios.forEach(el => {
    el.oninput = function() {
        if (el.checked) {
            let title = el.closest(".catalog-item__radios").childNodes[1].childNodes[1]
            title.innerHTML = el.value
        }
    }
});

let catalogTabs = document.querySelectorAll(".catalog-detail__tab")
let catalogContent = document.querySelectorAll(".catalog-detail__content")

catalogTabs.forEach(el => {
    el.onclick = function() {
        path = el.getAttribute("data-tabs-path")

        catalogTabs.forEach(element => {
            element.classList.remove("catalog-detail__tab--active")
        });
        catalogContent.forEach(element => {
            element.classList.remove("catalog-detail__content--active")
        });

        el.classList.add("catalog-detail__tab--active")
        document.querySelector(`.catalog-detail__content[data-tabs-path="${path}"]`).classList.add("catalog-detail__content--active")
    }
});

let catalogMobTabs = document.querySelectorAll(".catalog-detail__mob-tab")

catalogMobTabs.forEach(el => {
    el.onclick = function() {
        el.classList.toggle("catalog-detail__mob-tab--active")
    }
});