// import { createApp } from 'vue';
// import router from './router';
// import App from './App.vue';
// import 'bootstrap';
// const app = createApp(App);
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// app.use(VueAxios, axios);
// app.use(router)
// app.config.globalProperties.axios = axios;
// app.mount('#app')
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import 'bootstrap';

Vue.use(VueAxios, axios);
// axios.defaults.withCredentials = true;
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
