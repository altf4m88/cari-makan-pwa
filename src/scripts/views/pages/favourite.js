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
          </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#favorite-restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favourite;
