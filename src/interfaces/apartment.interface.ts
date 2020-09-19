export namespace Apartment {
  export interface IStore {
    apartment: IApartmentItem[]
  }

  export interface IApartmentItem {
    id: number;
    "title": string;
    "preview": string;
    "price": string,
    "favorites" : boolean
  }
}
