import { ActionContext } from 'vuex';
import {IAppState} from '@/interfaces/app-state.interface';
import {Apartment} from '@/interfaces/apartment.interface';
import {apartmentResource} from '@/resources/apartment.resource';

type Context = ActionContext<Apartment.IStore, IAppState>;
type State = Apartment.IStore;


export default {
  namespaced: true,


  state: {
    apartment: []
  },

  mutations: {
    setApartmentInStore(state: State, apartment: Apartment.IApartmentItem[]) {
      state.apartment = apartment;
    }
  },
  actions: {
    getApartment({commit}: Context) {
      return apartmentResource.getApartment()
        .then(response => {
          commit('setApartmentInStore', response.data);
        })
        .catch(error => {
          console.error(error);
        })
    }
  }
}
