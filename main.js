let goods = [
    {
        id: 1,
        name: 'Iphone 11',
        image: '12',
        star: 3,
        discount: false,
        current_price: '$81.00'
    },
    {
        id: 2,
        name: 'OnePlus Nord N10 5G',
        image: '35',
        star: 1,
        discount: true,
        current_price: '$89.99',
        old_price: '$104.99',
        discount_percent: 18
    },
    {
        id: 3,
        name: 'Blue G9 Pro 2020',
        image: '1',
        star: 2,
        discount: false,
        current_price: '$90.00'
    },
    {
        id: 4,
        name: 'Iphone 12 pro',
        image: '14',
        star: 1,
        discount: false,
        current_price: '$129.00'
    },
    {
        id: 5,
        name: 'Zmmyr 200Pcs Dust Flat Mouth',
        image: '27',
        star: 2,
        discount: true,
        current_price: '$69.99',
        old_price: '$88.00',
        discount_percent: 30
    },
    {
        id: 6,
        name: 'A80 Pro 4G',
        image: '29_1_1',
        star: 2,
        discount: false,
        current_price: '$59.00'
    },
    {
        id: 7,
        name: 'A70 Pro 4G',
        image: '30_1',
        star: 1,
        discount: false,
        current_price: '$59.99'
    },
    {
        id: 8,
        name: 'Iphone XR',
        image: '13_1',
        star: 1,
        discount: false,
        current_price: '$89.99'
    },
    {
        id: 9,
        name: 'Iphone 13 pro',
        image: '14',
        star: 3,
        discount: false,
        current_price: '$149.00'
    },
]

// console.log(goods[0].id);
const trendContainer = document.querySelector('.trend-products-swiper');

goods.forEach(element => {
    let data = document.createElement('div');
    data.classList.add('swiper-slide');
    data.innerHTML = `
            <div class="swiper-slide">
                <div class="card-photo">
                    <img src="img/trend/${element.image}.jpg" alt="${element.image}">
                </div>
                <div class="card-inform">
                    <a href="#">${element.name}</a>
                    <div class="stars">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <span>(${element.star})</span>
                    </div>
                    <div class="price">
                        <span class="new-price">${element.current_price}</span>
                    </div>
                </div>
                <div class="addtocard">
                    <button class="trend-add">ADD TO CARD</button>
                </div>
                <div class="adds">
                  <div class="add-box"><i class="far fa-eye trendcard-add"></i></div>
                  <div class="add-box"><i class="far fa-heart trendcard-add"></i></div>
               </div>
            </div>
    `
    trendContainer.appendChild(data);
})
