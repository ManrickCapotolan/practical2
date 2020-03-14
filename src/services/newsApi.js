
import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '9dbbf5e77bc14476a6a812a52e16d7fb';

export const getNews = (url, params) => {
  const queryParams = params.map(param => `&${param.key}=${param.value}`).join('');
  return axios.get(`${BASE_URL}${url}?apiKey=${API_KEY}${queryParams}`);
}
