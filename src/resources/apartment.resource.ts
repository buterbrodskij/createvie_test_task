import axios, {AxiosResponse} from "axios";
import {Apartment} from '@/interfaces/apartment.interface';

class ApartmentResource {
  getApartment(): Promise<AxiosResponse<Apartment.IApartmentItem[]>> {
    return axios.get('./api/api.json') as Promise<AxiosResponse<Apartment.IApartmentItem[]>>;
  }
}

export const apartmentResource = new ApartmentResource();
