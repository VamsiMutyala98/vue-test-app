import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apiRequestInterceptor from '@/utils/apiRequestInterceptors'
import apiResponseInterceptor from './utils/apiResponseInterceptor'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/static/app/style.css';

Vue.config.productionTip = false;

apiRequestInterceptor();

apiResponseInterceptor();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


