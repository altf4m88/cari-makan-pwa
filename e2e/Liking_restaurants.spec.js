const assert = require('assert');

Feature('Liking restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#favorite-restaurants');
  I.see('Belum ada restoran yang disukai', '.no-favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Belum ada restoran yang disukai', '.no-favorite');

  I.amOnPage('/');

  I.seeElement('.card-title');

  const firstRestaurant = locate('.card-title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.card');
  const likedRestaurantName = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Belum ada restoran yang disukai', '.no-favorite');

  I.amOnPage('/');

  I.seeElement('.card-title');

  const firstRestaurant = locate('.card-title').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.card');

  const firstFavoriteRestaurant = locate('.card-title').first();
  I.click(firstFavoriteRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.see('Belum ada restoran yang disukai', '.no-favorite');
});
