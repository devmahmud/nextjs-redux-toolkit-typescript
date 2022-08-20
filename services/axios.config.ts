import axios from 'axios';

const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;

const devUrl = 'https://jsonplaceholder.typicode.com/';
const prodUrl = '';
export const baseURL = ENVIRONMENT === 'production' ? prodUrl : devUrl;

const _axios = axios.create({
  baseURL,
  // withCredentials: true,
});

export default _axios;
