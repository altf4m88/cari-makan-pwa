/* eslint-disable no-underscore-dangle */
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/template/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this._movie;

    if (await this.isRestaurantExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isMovieExist(id) {
    const movie = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!movie;
  },

  renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._movie);
      this.renderButton();
    });
  },

  renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteMovie(this._movie.id);
      this.renderButton();
    });
  },
};

export default LikeButtonInitiator;
