const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant-info" id="restaurant-info">
        <div class="restaurant-detail-image-container"><img class="restaurant-detail-image" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt=""></div>
        <div class="restaurant-profile" tabindex="0">
            <p class="restaurant-info-text">Nama: ${restaurant.name}</p>
            <p class="restaurant-info-text">Rating: <i class="fas fa-star"></i> ${restaurant.rating}</p>
            <p class="restaurant-info-text">Kota: ${restaurant.city}</p>
            <p class="restaurant-info-text">Alamat: ${restaurant.address}</p>
            <p class="restaurant-info-text">Kategori: <span id="categories"></span></p>
            <p class="restaurant-info-text">Deskripsi: ${restaurant.description}</p>
        </div>
    </div>

    <div tabindex="0" class="restaurant-menus" id="restaurant-menus">
    <div class="foods-menu">
        <h2>Foods</h2>
        <ul id="foods" class="menu-list">

        </ul>
    </div>
    <div class="drinks-menu">
        <h2>Drinks</h2>
        <ul id="drinks" class="menu-list">

        </ul>
    </div>
    </div>
    <div class="reviews">
        <h1 tabindex="0">Review Pelanggan</h1>
        <div class="review-cards">
            
        </div>
    </div>
    `;

const createRestaurantReviewTemplate = (review) => `
    <div tabindex="0" class="review-card">
        <p><b>Nama:</b> ${review.name}</p>
        <p>${review.review}</p>
        <p>Pada tanggal: ${review.date}</p>
    </div>
`;

const createRestaurantMenuTemplate = (menu) => `
    <li>${menu.name}</li>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article tabindex="0" class="card" id=${restaurant.id}>
        <img class="card-image" src=https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId} alt="Foto ${restaurant.name}">
        <div class="card-content">
            <div class="card-header">
                <a href="#/detail/${restaurant.id}" class="card-title">${restaurant.name}, ${restaurant.city}</a>
                <div class="card-rating">
                    <p><i class="fas fa-star"></i> ${restaurant.rating}</p>
                </div>
            </div>
            <p class="card-description">
                ${restaurant.description}
            </p>
        </div>
    </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createRestaurantReviewTemplate,
  createRestaurantMenuTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
