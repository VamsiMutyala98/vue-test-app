import axios from 'axios';

export default function apiRequestInterceptor() {
    axios.interceptors.request.use(config => {
        const token = localStorage.getItem('accessToken');
        if(config.url !== 'https://api.escuelajs.co/api/v1/auth/login' && token){
            console.log("Request success");
            config.headers.Authorization = token;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    })
}

