import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_KEY;

axios.defaults.baseURL = 'https://pixabay.com';

export function getImagesByQuery(query) {
  return axios
    .get('/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 40,
      },
    })
    .then(response => response.data);
}

console.log('API KEY:', API_KEY);
