import axios from 'axios';

const instance =  axios.create({
  baseURL: 'http://localhost:1235/'
});

export default instance;