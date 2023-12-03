import axios from "axios";

const service = axios.create({
    baseURL : 'https://projeto-react.com'
});

export default service;