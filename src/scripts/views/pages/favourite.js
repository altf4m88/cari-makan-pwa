import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Favourite = {
  async render() {
    return `
          <div class="container">
              <div class="card-content-title">
                  <h1>Your Favorite Restaurants</h1>
              </div>
              <section id="favorite-restaurants" class="card-container">
                  
              </section>
              <div class="empty-page">
                  
              </div>
          </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#favorite-restaurants');
    const emptyContainer = document.querySelector('.empty-page');
    console.log(restaurants);
    if (restaurants.length < 1) {
      emptyContainer.innerHTML += "<h3 class='no-favorite'>Belum ada restoran yang disukai</h3>";
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favourite;
