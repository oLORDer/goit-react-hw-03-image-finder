import axios from 'axios';

export default class Pixabay {
  #API_KEY = '29380765-5499cec7827633e79f23c62be';
  #BASE_URL = 'https://pixabay.com/api';

  constructor() {
    this.page = 1;
    this.q = 'pirates';
    this.per_page = 12;
  }

  fetchPhotosByQuery() {
    const urlSearchParams = new URLSearchParams({
      key: this.#API_KEY,
      q: this.q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.per_page,
      page: this.page,
    });
    return axios.get(`${this.#BASE_URL}/?${urlSearchParams}`);
  }
}
