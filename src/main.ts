import Vue from 'vue';
import App from './App.vue';
import '@/scss/index.scss';
import router from './router';
import store from './store/store';
import '@/plugins/element-ui';
import '@/plugins/axios';
import '@/plugins/vue-cookie';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
