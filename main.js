let products = [
    {
        id: 1,
        name: 'Iphone 11',
        image: '12',
        star: 3,
        discount: false,
        current_price: '$88.00',
        stock: 329,
        category: 'Smartphone'
    },
    {
        id: 2,
        name: 'OnePlus Nord N10 5G',
        image: '35',
        star: 1,
        discount: true,
        current_price: '$89.99',
        old_price: '$104.99',
        discount_percent: 18,
        stock: 230,
        category: 'Smartphone'
    },
    {
        id: 3,
        name: 'Blue G9 Pro 2020',
        image: '1',
        star: 2,
        discount: false,
        current_price: '$90.00',
        stock: 446,
        category: 'Smartphone'
    },
    {
        id: 4,
        name: 'Iphone 12 Pro',
        image: '14',
        star: 1,
        discount: false,
        current_price: '$129.00',
        stock: 320,
        category: 'Smartphone'
    },
    {
        id: 5,
        name: 'Zmmyr 200Pcs Dust Flat Mouth',
        image: '27',
        star: 2,
        discount: true,
        current_price: '$69.99',
        old_price: '$88.00',
        discount_percent: 30,
        stock: 857,
        category: 'Smartphone'
    },
    {
        id: 6,
        name: 'A80 Pro 4G',
        image: '29_1_1',
        star: 2,
        discount: false,
        current_price: '$59.00',
        stock: 431,
        category: 'Smartphone'
    },
    {
        id: 7,
        name: 'A70 Pro 4G',
        image: '30_1',
        star: 1,
        discount: false,
        current_price: '$59.99',
        stock: 675,
        category: 'Smartphone'
    },
    {
        id: 8,
        name: 'Iphone XR',
        image: '13_1',
        star: 1,
        discount: false,
        current_price: '$89.99',
        stock: 449,
        category: 'Smartphone'
    },
    {
        id: 9,
        name: 'Iphone 13 Pro',
        image: '14',
        star: 3,
        discount: false,
        current_price: '$149.00',
        stock: 538,
        category: 'Smartphone'
    },
]

const trendContainer = document.querySelector('.trend-products-swiper');
products.forEach(element => {
    let data = document.createElement('div');
    data.classList.add('swiper-slide');
    element.discount ? data.classList.add('indiscount') : '';
    let discount = element.discount ? `
        <div class="card-disc">
            <span>-${element.discount_percent}%</span>
        </div>`  : ``;

    let oldPrice = element.discount ? `
    <span class="old-price">${element.old_price}</span>` : ``;

    data.innerHTML = `
            <div class="swiper-slide">
                <div class="card-photo">
                    <img src="img/trend/${element.image}.jpg" alt="${element.image}">
                </div>
                ${discount}
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
                    ${oldPrice}
                    </div>
                </div>
                <div class="addtocard">
                    <button class="trend-add addToCartBtn">ADD TO CARD</button>
                </div>
                <div class="adds">
                  <div class="add-box quick-view-btn" data-id="${element.id - 1}"><i class="far fa-eye trendcard-add"></i></div>
                  <div class="add-box"><i class="far fa-heart trendcard-add"></i></div>
               </div>
            </div>
    `
    trendContainer.appendChild(data);
})

const quickViewBtn = document.querySelectorAll('.quick-view-btn');

quickViewBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        const closest = e.target.closest(".quick-view-btn");
        console.log(products[closest.dataset.id]);
        showViewModal(products[closest.dataset.id])
    })
})

const viewModal = document.querySelector('.quick-view-modal');
console.log(viewModal);

// const closeModalBtn = document.querySelector('.closeBtn');
const hideModal = () => {
    if (viewModal.classList.contains('fade-in-modal')) {
        viewModal.classList.remove('fade-in-modal');
    }
    viewModal.classList.add('fade-out-modal');
    setTimeout(()=>{
        viewModal.classList.remove('show-modal');
        viewModal.classList.remove('fade-out-modal');
    },400)
}

const showViewModal = (data) => {
    viewModal.innerHTML = `
    <div class="quick-view-overlay"></div>
        <div class="modal-container">
            <div class="product-img"><img src="./img/trend/${data.image}.jpg" alt="${data.category}"></div>
            <div class="content">
                <h2>${data.name}</h2>
                <div class="price">
                    <p class="new-price">${data.current_price}</p>
                </div>
                <div class="product-prop">
                    <ul>
                        <li>Bass and Stereo Sound.</li>
                        <li>Display with 3088 x 1440 pixels resolution.</li>
                        <li>Memory, Storage & SIM: 12GB RAM, 256GB.</li>
                        <li>Androi v10.0 Operating system.</li>
                    </ul>
                </div>
                <div class="availability">
                    <p class="txt">Availability:</p>
                    <p class="stock-num">${data.stock} in stock</p>
                </div>
                <div class="add-to-cart">
                    <div class="quantity">
                        <input type="number" class="input-text" step="1" min="1" max="${data.stock}" name="quantity" value="1"
                            size="4">
                    </div>
                    <button class="btn addToCartBtn">ADD TO CART</button>
                </div>
                <div class="product-meta">
                    <span class="wrapper">
                        <span class="title">SKU:</span>
                        <span class="prop">DK1009</span>
                    </span>
                    <span class="wrapper">
                        <span class="title">Category:</span>
                        <span class="prop">${data.category}</span>
                    </span>
                    <span class="wrapper">
                        <span class="title">Tags:</span>
                        <span class="prop">Digital, ${data.category}</span>
                    </span>
                </div>
            </div>
            <div class="close-modal">
                <img class="btn closeBtn" src="./img/icon/x.svg" alt="closeBtn" onClick="hideModal()"   >
            </div>
        </div>
        `;
    viewModal.classList.add('show-modal');
    viewModal.classList.add('fade-in-modal');
    // if (viewModal.classList.contains('fade-out-modal')) {
    //     viewModal.classList.remove('fade-out-modal');
    // }
}
