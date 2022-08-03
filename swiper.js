const vipProductSwiper = new Swiper('.vip-product-swiper', {
    direction: 'horizontal',
    loop: true,
    effect: "fade",
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    }
});
const productSwiper = new Swiper(".productSwiper", {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        370: {
            slidesPerView: 2
        },
        480: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1000: {
            slidesPerView: 5
        },
        1200: {
            slidesPerView: 6
        }
    }
});
const popularSwiper = new Swiper(".popularSwiper", {
    loop: false,
    spaceBetween: 15,
    grabCursor: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        500: {
            slidesPerView: 2
        },
        800: {
            slidesPerView: 3
        },
        1000: {
            slidesPerView: 4
        }
    }
});
const blogSwiper = new Swiper(".blogSwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    grabCursor: true,
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        1000: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const brandSwiper = new Swiper(".brandSwiper", {
    loop: true,
    spaceBetween: 0,
    grabCursor: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        420: {
            slidesPerView: 2
        },
        600: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 4
        },
        1000: {
            slidesPerView: 5
        }
    }
});