import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../template/template-creator';

const MainPage = {
  async render() {
    return `
        <div class="hero">
            <div class="hero-inner">
                <h1 class="hero-title">Looking for best <u>Food</u> ?</h1>
                <p class="hero-tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. In atque facere laudantium eum ipsum minima eveniet obcaecati cum pariatur dolores.</p>
            </div>
        </div>
        <main id="card-content">
          <div class="container">
              <div class="card-content-title">
                  <h1>Our Restaurant Catalogue</h1>
                  <p>Find the most suitable food for your appetite.</p>
              </div>
              <section id="cards" class="card-container">
                  
              </section>
          </div>
      </main>  
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.index();
    const cardContainer = document.querySelector('#cards');

    restaurants.forEach((restaurant) => {
      cardContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    console.log(restaurants);
  },
};

export default MainPage;
