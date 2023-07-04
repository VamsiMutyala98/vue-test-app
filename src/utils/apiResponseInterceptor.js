import axios from 'axios';

export default function apiResponseInterceptor() {
  axios.interceptors.response.use(
    (response) => {
      console.log('Success from interceptor', response, response.status);
      return response;
    },
    (error) => {
        if (error.response.status === 401) {
            window.location.href = '/login';
            localStorage.clear();
            console.log('Failed from interceptor 401', error.response);
        }
        return Promise.reject(error);
    }
  );
}
