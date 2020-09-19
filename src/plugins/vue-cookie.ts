import Vue from 'vue';
const VueCookie = require('vue-cookie');
Vue.use(VueCookie);

declare module 'vue/types/vue' {
  interface VueConstructor {
    cookie: {
      get: (key: string) => string | null,
      set: (key: string, value: string, options?: any) => undefined
    }
  }
}
