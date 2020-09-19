import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App.vue';

Vue.use(Router);

export enum ROUTE_NAME {
  INDEX_PAGE= '/'
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: ROUTE_NAME.INDEX_PAGE,
      component: App,
    }
  ]
})

