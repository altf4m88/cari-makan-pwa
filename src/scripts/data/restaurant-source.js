import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
  static async index() {
    const response = await fetch(API_ENDPOINT.INDEX);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return response.json();
    } catch (e) {
      return 'NO_INTERNET';
    }
  }
}

export default RestaurantSource;
