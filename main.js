let products = [
    {
        id: 1,
        name: 'Iphone 11 64GB Violette',
        image: '12',
        star: 3,
        discount: false,
        current_price: '$88.00',
        stock: 329,
        category: 'Smartphone',
        section: 'trend'
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
        category: 'Smartphone',
        section: 'trend'
    },
    {
        id: 3,
        name: 'Blue G9 Pro 2020',
        image: '1',
        star: 2,
        discount: false,
        current_price: '$90.00',
        stock: 446,
        category: 'Smartphone',
        section: 'trend'
    },
    {
        id: 4,
        name: 'Iphone 12 Pro 256GB Gold',
        image: '14',
        star: 1,
        discount: false,
        current_price: '$129.00',
        stock: 320,
        category: 'Smartphone',
        section: 'trend'
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
        category: 'Smartphone',
        section: 'trend'
    },
    {
        id: 6,
        name: 'A80 Pro 4G Unlimited',
        image: '29_1_1',
        star: 2,
        discount: false,
        current_price: '$59.00',
        stock: 431,
        category: 'Smartphone',
        section: 'trend'
    },
    {
        id: 7,
        name: 'A70 Pro 4G',
        image: '30_1',
        star: 1,
        discount: false,
        current_price: '$59.99',
        stock: 675,
        category: 'Smartphone',
        section: 'trend'
    },
    {
        id: 8,
        name: 'Iphone XR ',
        image: '13_1',
        star: 1,
        discount: false,
        current_price: '$89.99',
        stock: 449,
        category: 'Smartphone',
        section: 'trend'
    },
    {
        id: 9,
        name: 'Iphone 13 Pro 128GB Gold',
        image: '14',
        star: 3,
        discount: false,
        current_price: '$149.00',
        stock: 538,
        category: 'Smartphone',
        section: 'trend'
    },
    {
        id: 10,
        name: 'iPad Pro 10.5-inch 64GB',
        image: '2',
        star: 5,
        discount: false,
        current_price: '$205.00',
        stock: 1209,
        category: 'Tablet',
        section: 'recommend'
    },
    {
        id: 11,
        name: 'Wireless Over-Ear Headphone',
        image: '5',
        star: 4,
        discount: false,
        current_price: '$219.00',
        stock: 824,
        category: 'Headset',
        section: 'recommend'
    },
    {
        id: 12,
        name: 'Oppo A9 128GB',
        image: '3',
        star: 4,
        discount: false,
        current_price: '$320.00',
        stock: 446,
        category: 'Smartphone',
        section: 'recommend'
    },
    {
        id: 13,
        name: 'Solo3 Wireless On-Ear Headphone',
        image: '6',
        star: 4,
        discount: true,
        current_price: '$139.99',
        old_price: '$184.99',
        discount_percent: 20,
        stock: 522,
        category: 'Headset',
        section: 'recommend'
    },
    {
        id: 14,
        name: 'Vifa Portable Wireless Speaker',
        image: '11',
        star: 4,
        discount: false,
        current_price: '$314.00',
        stock: 304,
        category: 'Speaker',
        section: 'recommend'
    },
    {
        id: 15,
        name: 'Basic Ultralight Portable Day Pack',
        image: '17',
        star: 3,
        discount: true,
        current_price: '$64.00',
        old_price: '$96.00',
        discount_percent: 18,
        stock: 126,
        category: 'Backpack',
        section: 'recommend'
    },
    {
        id: 16,
        name: 'Original XBOX One S Controller For PC',
        image: '19',
        star: 4,
        discount: false,
        current_price: '$235.00',
        stock: 355,
        category: 'Console',
        section: 'recommend'
    },
    {
        id: 17,
        name: 'Watch Series 7 Stainless Steel Brand Gold',
        image: '7-2',
        star: 4,
        discount: true,
        current_price: '$404.99',
        old_price: '$450.00',
        discount_percent: 15,
        stock: 158,
        category: 'Watches',
        section: 'recommend'
    },
    {
        id: 18,
        name: 'G951s Pink Stereo Gaming Headset',
        image: '8',
        star: 5,
        discount: false,
        current_price: '$82.00',
        stock: 860,
        category: 'Headset',
        section: 'recommend'
    }
]

//   GET ELEMENTS TO TREND SECTION
const trendContainer = document.querySelector('.trend-products-swiper');
const recommendContainer = document.querySelector('.recommend-products-swiper');
let trendProducts = products.filter(product => product.section == 'trend');
let recommendProducts = products.filter(product => product.section == 'recommend');

if (trendContainer) {
    trendProducts.forEach(element => {
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
                    <img src="img/products/${element.image}.jpg" alt="${element.image}">
                </div>
                ${discount}
                <div class="card-inform">
                    <a href="">${element.name}</a>
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
    recommendProducts.forEach(element => {
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
                    <img src="img/products/${element.image}.jpg" alt="${element.image}">
                </div>
                ${discount}
                <div class="card-inform">
                    <a href="">${element.name}</a>
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
        recommendContainer.appendChild(data);
    })
}


//   QUICK VIEW SECTION
const quickView = (e) => {
    const closest = e.target.closest(".product-card");
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
    data.discount ? viewModal.classList.add('indiscount') : '';
    let oldPrice = data.discount ? `
        <span class="old-price">${data.old_price}</span>` : ``;
    viewModal.innerHTML = `
    <div class="quick-view-overlay"></div>
        <div class="modal-container product-card" data-id=${data.id}>
            <div class="product-img"><img src="./img/products/${data.image}.jpg" alt="${data.category}" draggable="false"></div>
            <div class="content">
                <h2>${data.name}</h2>
                <div class="price">
                    <p class="new-price">${data.current_price}</p>
                    ${oldPrice}
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
    addToCart();
    overlayModal();
}

const overlayModal = () => {
    const quickViewOverlay = document.querySelector('.quick-view-overlay');
    quickViewOverlay.addEventListener('click', () => {
        hideModal();
    })
}

const addToCart = () => {
    const addToCartBtns = document.querySelectorAll('.addToCartBtn');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!(btn.classList.contains('added'))) {
                const closest = e.target.closest(".product-card");
                const productId = closest.dataset.id;
                const product = products.find(item => item.id == productId);
                if (cart.some(item => item.id == productId)) {
                    cart.forEach(item => {
                        if (item.id == productId && item.numberOfUnits != product.stock) {
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
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount(cart.length);
                iziToast.success({
                    title: 'Success',
                    message: `${product.name} added to cart`,
                    color: 'blue',
                    titleSize: '15px',
                    titleLineHeight: '1.4',
                    messageSize: '15px',
                    messageLineHeight: '1.4'
                });
                btn.innerHTML = 'VIEW CART';
                btn.classList.add('added');
            }
            else {
                btn.classList.remove('added');
            }
            btn.addEventListener('click', () => {
                location.href = 'cart.html';
            });
            renderSubTotal();
        })
    })
}
addToCart();


//     WISHLIST
let wishList = [];
wishList = JSON.parse(localStorage.getItem('wishList'));
wishList = wishList == null ? [] : wishList;
wishList = wishList[0] == null ? [] : wishList;

//    adding to wishlist
const addToWishlistBtn = document.querySelectorAll('.add-to-wishlist');
addToWishlistBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        const closest = e.target.closest(".product-card");
        const product = products.find((item) => item.id == closest.dataset.id);
        const even = (element) => element.id == product.id;
        const isActive = wishList.some(even);
        if (isActive) {
            iziToast.warning({
                title: 'Warning',
                message: `You have already added to wishlist`,
                color: 'red',
                titleSize: '15px',
                titleLineHeight: '1.4',
                messageSize: '15px',
                messageLineHeight: '1.4',
            });
            console.log('a');
        }
        else {
            wishList.push(product);
            localStorage.setItem('wishList', JSON.stringify(wishList));
            updateWishlistCount(wishList.length);
            console.log(wishList);
            iziToast.success({
                title: 'Success',
                message: `${product.name} added to wishlist`,
                color: 'yellow',
                titleSize: '15px',
                titleLineHeight: '1.4',
                messageSize: '15px',
                messageLineHeight: '1.4',
            });
        }
        element.style.pointerEvents = "none";
        setTimeout(() => { element.style.pointerEvents = "auto" }, 2000)
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
            element.discount ? data.classList.add('indiscount') : '';
            let discountPrice = element.discount ?
                `  <span class="new-price">${element.current_price}</span>
                <span class="old-price">${element.old_price}</span>` :
                ` <span class="proce-txt">${element.current_price}</span>`;

            data.innerHTML = `
    <td class="product-remove">
    <div>
    <a class="remove remove-from-wishlist" title="Remove this product">×</a>
    </div>
    </td>
    <td class="product-thumbnail">
    <img src="./img/products/${element.image}.jpg"
    class="product-img" alt="product-image" loading="lazy"> </a>
    </td>
    <td class="product-name">
    <a href="">${element.name}</a>
    <div class="view-box quick-view-btn" onClick="quickView(event)">
    <span class="trendcard-add">view</span>
    </div>
    </td>
    <td class="product-price">
    ${discountPrice}
    </td>
    <td class="product-stock-status">
    <span class="wishlist-in-stock">${element.stock > 0 ? 'In stock' : 'Not in stock'}</span>
    </td>
    <td class="product-add-to-cart">
    <button class="trend-add addToCartBtn">ADD TO CART</button>
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
    addToCart();
}

if (wishlistItemContainer) {
    mapWishList(wishList);
}

const countWishList = document.querySelector('.wishlist-count');
const updateWishlistCount = (count) => {
    countWishList.innerHTML = count;
}
updateWishlistCount(wishList.length);





//     CART

// let cart = [{ ...products[0], numberOfUnits: 3 }];
let cart = [];
cart = JSON.parse(localStorage.getItem('cart'));
cart = cart == null ? [] : cart;
cart = cart[0] == null ? [] : cart;

const totalPriceCart = document.querySelector('.total-price-count');
const updateCarHeaderPrice = (price) => {
    price = JSON.parse(localStorage.getItem('totalPrice'));
    price = price == null ? `0.00` : price;
    totalPriceCart.innerHTML = `$${price}`;
}

const totalPriceText = document.querySelector('.total-price');
let subTotalPrice = 0;
const renderSubTotal = () => {
    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach(el => {
            totalPrice += el.current_price.slice(1, 8) * el.numberOfUnits;
        });

        totalPrice = totalPrice.toFixed(2)
        subTotalPrice = totalPrice;

        updateCarHeaderPrice(totalPrice);
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
        return totalPrice
    }
    if (totalPriceText) {
        // getTotalPrice();
        totalPriceText.innerHTML = `$${getTotalPrice()}`;
    }
    else {
        getTotalPrice();

    }
    updateCarHeaderPrice(subTotalPrice);
}

const checkInputs = () => {
    const productInputs = document.querySelectorAll('.product-num');
    productInputs.forEach(input => {
        input.addEventListener('change', () => {
            const productId = input.closest('.product-card').dataset.id;
            const product = cart.filter(item => {
                return item.id == productId;
            })
            const stock = product[0].stock;
            if (input.value > stock) {
                input.value = stock;
                changeUnitsNumber('change', productId, stock);
            }
            else if (input.value < 1) {
                input.value = 1;
                changeUnitsNumber('change', productId, 1);
            }
            else {
                input.value = input.value.toString().replace(/^0+/, '');
                changeUnitsNumber('change', productId, input.value);
            }
        })
    })
}

const cartItemContainer = document.querySelector('.cart-items-wrapper');
const mapCart = () => {
    cartItemContainer.innerHTML = ``;
    if (cart.length > 0) {
        cart.map((element) => {
            let data = document.createElement('tr');
            data.classList.add('data-row');
            data.classList.add('product-card');
            data.dataset.id = element.id;
            data.innerHTML = `
    <td class="product-remove">
    <div>
    <a class="remove remove-from-cart" data-id="${element.id}" title="Remove this product">×</a>
    </div>
    </td>
    <td class="product-thumbnail">
    <img src="./img/products/${element.image}.jpg"
    class="product-img" alt="product-image" loading="lazy"> </a>
    </td>
    <td class="product-name">
    <a href="">${element.name}</a>
    </div>
    </td>
    <td class="product-price">
    <span class="price-txt">${element.current_price}</span>
    </td>
    <td class="product-quantity">
    <div class="quantity-input">
    <i class="fas fa-angle-up quantity-plus input-arrow" onClick="changeUnitsNumber('plus',${element.id})"></i>
    <input type="number" class="input-text product-num" step="1" min="1" max="${element.stock}" name="quantity" value="${element.numberOfUnits}"
    size="3">
    <i class="fas fa-angle-down quantity-minus input-arrow" onClick="changeUnitsNumber('minus', ${element.id})"></i>
    </div>
    </td>
    <td class="product-subtotal">
    <span class="nobr">
    $${(element.numberOfUnits * element.current_price.slice(1, 8)).toFixed(2)}
    </span>
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
        cartItemContainer.appendChild(data);
        cartItemContainer.style.height = '200px';
    }

    delItemCart();
    renderSubTotal();
    checkInputs();
}

const delItemCart = () => {
    const delBtns = document.querySelectorAll('.remove-from-cart');
    delBtns.forEach(element => {
        element.addEventListener('click', () => {
            const closest = element.closest(".product-card");
            const elementId = closest.dataset.id;

            cart = cart.filter(function (item) {
                return item.id != elementId
            })
            localStorage.setItem('cart', JSON.stringify(cart));
            mapCart();
            updateCartCount(cart.length);
        })
    })
}

const changeUnitsNumber = (action, id, num) => {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if (item.id == id) {
            if (action == 'minus' && numberOfUnits > 1) {
                numberOfUnits--;
            }
            else if (action == 'plus' && numberOfUnits < item.stock) {
                numberOfUnits++;
            }
            else if (action == 'change') {
                numberOfUnits = num;
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    mapCart(cart);
};

const countCart = document.querySelector('.addtocart-count');
const updateCartCount = (count) => {
    countCart.innerHTML = count;
}

updateCarHeaderPrice(subTotalPrice);
updateCartCount(cart.length);

if (cartItemContainer) {
    mapCart();
};

const openMenuBtn = document.querySelector('.mobile-menu-bar');
const closeMenuBtns = document.querySelectorAll('.close-menu-btn');
const mobileMenu = document.querySelector('.mobile-main-menu');
const mobileMenuOverlay = document.querySelector('.mobile-main-menu__overlay');
openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active-menu');
});
closeMenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        mobileMenu.classList.remove('active-menu');
    })
})