import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-app-777f5.firebaseio.com/'
});

export default instance;