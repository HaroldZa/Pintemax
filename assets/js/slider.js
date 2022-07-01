var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 'auto',
        },
        401: {
            slidesPerView: 2,
        },
        941: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".slide-content_text", {
    slidesPerView: 4,
    spaceBetween: 25,
    centerSlide: 'true',
    loop: true,
    fade: 'true',
    grabCursor: 'true',
    navigation: {
        nextEl: ".swiper-button-next_text",
        prevEl: ".swiper-button-prev_text",
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        520: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    spaceBetween: 30,
    navigation: {
        nextEl: ".hero__btn_slider_next",
        prevEl: ".hero__btn_slider_prev",
    },
});

$('.slider-for').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1101,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
    ],
});

function moveSlide(inc) {
    if (inc > 0) {
        $('.slider-nav').slick('slickNext');
    } else {
        $('.slider-nav').slick('slickPrev');
    }
}