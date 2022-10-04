import axios from 'axios';

const baseURL = "https://api-heroes-app.herokuapp.com/";

const heroApi = axios.create({ baseURL })

export default heroApi;