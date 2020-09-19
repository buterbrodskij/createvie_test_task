import Vue from 'vue';
import Vuex from 'vuex';
import apartment from './modules/apartment.store'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    apartment,
  },
});
