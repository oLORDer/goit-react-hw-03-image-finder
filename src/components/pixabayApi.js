import axios from 'axios';

export default function Pixabay(page, q) {
  const API_KEY = '29380765-5499cec7827633e79f23c62be';
  const BASE_URL = 'https://pixabay.com/api';

  const urlSearchParams = new URLSearchParams({
    key: API_KEY,
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  });

  return axios.get(`${BASE_URL}/?${urlSearchParams}`);
}
