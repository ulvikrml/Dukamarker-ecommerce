// const vipProductSwiper = new Swiper('.vip-product-swiper', {
//     direction: 'horizontal',
//     loop: true,
//     effect: "fade",
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     slidesPerView: 1,
//     autoplay: {
//         delay: 5500,
//         disableOnInteraction: false,
//     }
// });
const productSwiper = new Swiper(".productSwiper", {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        400: {
            slidesPerView: 2
        },
        620: {
            slidesPerView: 3
        },
        800: {
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