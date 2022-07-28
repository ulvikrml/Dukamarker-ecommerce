function getTrendProduct(products,trendContainer){
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
                      <div class="add-box add-to-wishlist" data-id="${element.id - 1}"><i class="far fa-heart trendcard-add"></i></div>
                   </div>
                </div>
        `
        trendContainer.appendChild(data);
        return  `hey`
    })
}

export default getTrendProduct;