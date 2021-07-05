import Axios from "axios"

const api =  Axios.create({
  baseURL: 'https://dog.ceo/api/breeds/image/random/10'
});

export default api;