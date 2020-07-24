import axios from 'axios';

const instance = axios.create({
    baseURL: 'my base firebase url'
});

export default instance;