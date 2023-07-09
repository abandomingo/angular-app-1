// create an interface which is basically a new data type
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: string;
  laundry: string;
}