let products = [
    {
        id: 1,
        name: 'Iphone 11 64GB Violette',
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
        name: 'Iphone 12 Pro 256GB Gold',
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
        name: 'A80 Pro 4G Unlimited',
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
        name: 'Iphone XR ',
        image: '13_1',
        star: 1,
        discount: false,
        current_price: '$89.99',
        stock: 449,
        category: 'Smartphone'
    },
    {
        id: 9,
        name: 'Iphone 13 Pro 128GB Gold',
        image: '14',
        star: 3,
        discount: false,
        current_price: '$149.00',
        stock: 538,
        category: 'Smartphone'
    },
]

//   GET ELEMENTS TO TREND SECTION
const trendContainer = document.querySelector('.trend-products-swiper');
if (trendContainer) {
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
            <div class="swiper-slide product-card" data-id="${element.id}">
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
                  <div class="add-box quick-view-btn" onClick="quickView(event)"><i class="far fa-eye trendcard-add"></i></div>
                  <div class="add-box add-to-wishlist"><i class="far fa-heart trendcard-add"></i></div>
               </div>
            </div>
    `
        trendContainer.appendChild(data);
    })
}


//   QUICK VIEW SECTION
const quickView = (e) => {
    console.log(e);
    console.log(e.target);
    const closest = e.target.closest(".product-card");
    console.log(products[closest.dataset.id]);
    const product = products.find((item) => item.id == closest.dataset.id);
    showViewModal(product)
}

const viewModal = document.querySelector('.quick-view-modal');
const hideModal = () => {
    if (viewModal.classList.contains('fade-in-modal')) {
        viewModal.classList.remove('fade-in-modal');
    }
    viewModal.classList.add('fade-out-modal');
    setTimeout(() => {
        viewModal.classList.remove('show-modal');
        viewModal.classList.remove('fade-out-modal');
    }, 400)
}

const showViewModal = (data) => {
    viewModal.innerHTML = `
    <div class="quick-view-overlay"></div>
        <div class="modal-container">
            <div class="product-img"><img src="./img/trend/${data.image}.jpg" alt="${data.category}" draggable="false"></div>
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



//     WISHLIST
let wishList = [];
wishList = JSON.parse(localStorage.getItem('wishList'));
wishList = wishList == null ? [] : wishList;
wishList = wishList[0] == null ? [] : wishList;

//    adding to wishlist
const addToWishlistBtn = document.querySelectorAll('.add-to-wishlist');
addToWishlistBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        const closest = e.target.closest(".swiper-slide");
        const product = products.find((item) => item.id == closest.dataset.id);
        const even = (element) => element.id == product.id;
        // wishList = wishList[0] == null ? [] : wishList;
        const isActive = wishList.some(even);
        isActive ? '' : wishList.push(product);
        localStorage.setItem('wishList', JSON.stringify(wishList));
        updateWishlistCount(wishList.length);
        console.log(wishList);
    })
})

//    Deleting items from wislist
const wishlistItemContainer = document.querySelector('.wishlist-items-wrapper');
const delItemWishlist = (arr) => {
    const delBtns = document.querySelectorAll('.remove-from-wishlist');
    delBtns.forEach(element => {
        element.addEventListener('click', () => {
            const closest = element.closest(".product-card");
            console.log(closest);

            const elementId = closest.dataset.id;
            console.log(elementId);
            arr = arr.filter(function (item) {
                return item.id != elementId
            })
            wishlistItemContainer.innerHTML = ``;
            mapWishList(arr);
            localStorage.setItem('wishList', JSON.stringify(arr));
            updateWishlistCount(arr.length);
        })
    })
}

//    Mapping items from wishlist
const mapWishList = (arr) => {
    if (arr.length > 0) {

        arr.map((element, index) => {
            let data = document.createElement('tr');
            data.classList.add('data-row');
            data.classList.add('product-card');
            data.dataset.id = element.id
            // element.discount ? data.classList.add('indiscount') : '';
            // let discount = element.discount ? `
            //     <div class="card-disc">
            //         <span>-${element.discount_percent}%</span>
            //     </div>`  : ``;
            // let oldPrice = element.discount ? `
            //     <span class="old-price">${element.old_price}</span>` : ``;

            data.innerHTML = `
    <td class="product-remove">
    <div>
    <a class="remove remove-from-wishlist" title="Remove this product">×</a>
    </div>
    </td>
    <td class="product-thumbnail">
    <img src="./img/trend/${element.image}.jpg"
    class="product-img" alt="product-image" loading="lazy"> </a>
    </td>
    <td class="product-name">
    <a href="#">${element.name}</a>
    <div class="view-box quick-view-btn" data-id="${element.id - 1}" onClick="quickView(event)">
    <span class="trendcard-add">view</span>
    </div>
    </td>
    <td class="product-price">
    <span class="proce-txt">${element.current_price}</span>
    </td>
    <td class="product-stock-status">
    <span class="wishlist-in-stock">${element.stock > 0 ? 'In stock' : 'Not in stock'}</span>
    </td>
    <td class="product-add-to-cart">
    <button class="trend-add">ADD TO CARD</button>
    </td>
    `
            wishlistItemContainer.appendChild(data);
        })
    }
    else {
        let data = document.createElement('p');
        data.classList.add('data-row');
        data.classList.add('empty-text');
        data.innerHTML = `No products added to the wishlist`
        wishlistItemContainer.appendChild(data);
        wishlistItemContainer.style.height = '200px'
    }
    delItemWishlist(arr);
}

// const localWishList = JSON.parse(localStorage.getItem('wishList'))
if (wishlistItemContainer) {
    mapWishList(wishList);
}

const countWishList = document.querySelector('.wishlist-count');
const updateWishlistCount = (count) => {
    countWishList.innerHTML = count;
}
updateWishlistCount(wishList.length);



//     CART

let cart = [{ ...products[0], numberOfUnits: 3 }];

//    Add to cart
const addToCartBtns = document.querySelectorAll('.addToCartBtn');
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const closest = e.target.closest(".swiper-slide");
        const productId = closest.dataset.id;
        const product = products.find(item => item.id == productId);
        if (cart.some(item => item.id == productId)) {
            cart.forEach(item => {
                if (item.id == productId) {
                    item.numberOfUnits = item.numberOfUnits + 1;
                }
            })
        }
        else {
            cart.push({
                ...product,
                numberOfUnits: 1
            })
        }
        console.log(cart);
    })
})

const cartItemContainer = document.querySelector('.cart-items-wrapper');
const mapCart = (arr) => {
    cartItemContainer.innerHTML = ``;
    if (arr.length > 0) {

        arr.map((element) => {
            let data = document.createElement('tr');
            data.classList.add('data-row');
            data.classList.add('product-card');
            data.dataset.id = element.id;
            // element.discount ? data.classList.add('indiscount') : '';
            // let discount = element.discount ? `
            //     <div class="card-disc">
            //         <span>-${element.discount_percent}%</span>
            //     </div>`  : ``;
            // let oldPrice = element.discount ? `
            //     <span class="old-price">${element.old_price}</span>` : ``;

            data.innerHTML = `
    <td class="product-remove">
    <div>
    <a class="remove remove-from-wishlist" data-id="${element.id}" title="Remove this product">×</a>
    </div>
    </td>
    <td class="product-thumbnail">
    <img src="./img/trend/${element.image}.jpg"
    class="product-img" alt="product-image" loading="lazy"> </a>
    </td>
    <td class="product-name">
    <a href="#">${element.name}</a>
    <div class="view-box quick-view-btn" data-id="${element.id}" onClick="quickView(event)">
    <span class="trendcard-add">view</span>
    </div>
    </td>
    <td class="product-price">
    <span class="price-txt">${element.current_price}</span>
    </td>
    <td class="product-quantity">
    <div class="quantity-input">
    <i class="fas fa-angle-up quantity-plus input-arrow" onClick="changeUnitsNumber('plus',${element.id})"></i>
    <input type="number" class="input-text" step="1" min="1" max="${element.stock}" name="quantity" value="${element.numberOfUnits}"
    size="3">
    <i class="fas fa-angle-down quantity-minus input-arrow" onClick="changeUnitsNumber('minus', ${element.id})"></i>
    </div>
    </td>
            `
            cartItemContainer.appendChild(data);
        })
    }
    else {
        let data = document.createElement('p');
        data.classList.add('data-row');
        data.classList.add('empty-text');
        data.innerHTML = `No products added to the wishlist`;
        wishlistItemContainer.appendChild(data);
        wishlistItemContainer.style.height = '200px';
    }
    // delItemWishlist(arr);
}

// const productQuantityInput = document.querySelector('.input-text');
const changeUnitsNumber = (action, id) => {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if (item.id == id) {
            if (action == 'minus' && numberOfUnits > 1) {
                numberOfUnits--;
                console.log('a');
            }
            else if (action == 'plus' && numberOfUnits < item.stock) {
                numberOfUnits++;
                console.log('b');
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });

    mapCart(cart);
};

if (cartItemContainer) {
    mapCart(cart);
};