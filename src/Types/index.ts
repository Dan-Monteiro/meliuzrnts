export interface IPosition {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }

  export interface IStore {
    id: number;
    label: string;
    logo: string;
    localization: {
      lat: string;
      lng: string;
    };
    address: {
      street: string;
      zipcode: string;
      city: string;
      state: string;
    };
  }

  export interface IDiscount {
    store: number;
    expires_in: string,
    value: number
  }