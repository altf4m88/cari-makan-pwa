import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate, createRestaurantReviewTemplate, createRestaurantMenuTemplate, createLikeButtonTemplate, createLikedButtonTemplate,
} from '../template/template-creator';

const Detail = {
  async render() {
    return `
        <h1 class="detail-page-title" tabindex="0">Detail Page</h1>

        <div id="restaurant"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detail(url.id);
    const detailContainer = document.querySelector('#restaurant');

    detailContainer.innerHTML += createRestaurantDetailTemplate(restaurant.restaurant);

    const foodsMenu = document.querySelector('#foods');
    const drinksMenu = document.querySelector('#drinks');

    restaurant.restaurant.menus.foods.forEach((item) => {
      foodsMenu.innerHTML += createRestaurantMenuTemplate(item);
    });

    restaurant.restaurant.menus.drinks.forEach((item) => {
      drinksMenu.innerHTML += createRestaurantMenuTemplate(item);
    });

    const reviewContainer = document.querySelector('.review-cards');

    restaurant.restaurant.customerReviews.forEach((review) => {
      reviewContainer.innerHTML += createRestaurantReviewTemplate(review);
    });

    const categories = document.querySelector('#categories');

    restaurant.restaurant.categories.forEach((category) => {
      categories.innerHTML += `${category.name}, `;
    });

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
