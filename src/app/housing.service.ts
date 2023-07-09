import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocationList: HousingLocation[] = [
    {
    "id": 0,
    "name": "Classic Townhouse",
    "city": "Eastvale",
    "state": "CA",
    "photo": "/assets/example-house.jpg",
    "availableUnits": 4,
    "wifi": "Yes",
    "laundry": "Yes"
    },
    {
    "id": 1,
    "name": "Overlook Cascades",
    "city": "Santa Monica",
    "state": "CA",
    "photo": "/assets/example-image-1.jpg",
    "availableUnits": 0,
    "wifi": "No",
    "laundry": "Yes"
    },
    {
    "id": 2,
    "name": "Cattle Ranchers",
    "city": "Austin",
    "state": "TX",
    "photo": "/assets/example-image-2.jpg",
    "availableUnits": 1,
    "wifi": "No",
    "laundry": "No"
    },
    {
    "id": 3,
    "name": "Homesteady Housing",
    "city": "Seattle",
    "state": "WA",
    "photo": "/assets/example-image-3.jpg",
    "availableUnits": 1,
    "wifi": "Yes",
    "laundry": "No"
    },
    {
    "id": 4,
    "name": "Happy Homes Group",
    "city": "Gary",
    "state": "IN",
    "photo": "/assets/example-image-4.jpg",
    "availableUnits": 1,
    "wifi": "Yes",
    "laundry": "No"
    },
    {
    "id": 5,
    "name": "Hopeful Apartment Group",
    "city": "Oakland",
    "state": "CA",
    "photo": "/assets/example-image-5.jpg",
    "availableUnits": 2,
    "wifi": "Yes",
    "laundry": "Yes"
    },
    {
    "id": 6,
    "name": "Seriously Safe Towns",
    "city": "Oakland",
    "state": "CA",
    "photo": "/assets/example-image-6.jpg",
    "availableUnits": 5,
    "wifi": "Yes",
    "laundry": "Yes"
    },
    {
    "id": 7,
    "name": "Hopeful Housing Solutions",
    "city": "Oakland",
    "state": "CA",
    "photo": "/assets/example-image-7.jpg",
    "availableUnits": 2,
    "wifi": "Yes",
    "laundry": "Yes"
    },
    {
    "id": 8,
    "name": "Seriously Safe Towns",
    "city": "Oakland",
    "state": "CA",
    "photo": "/assets/example-image-8.jpg",
    "availableUnits": 10,
    "wifi": "No",
    "laundry": "No"
    },
    {
    "id": 9,
    "name": "Da Block House",
    "city": "My House",
    "state": "MC",
    "photo": "/assets/example-image-9.jpg",
    "availableUnits": 6,
    "wifi": "Yes",
    "laundry": "Yes"
    }
    ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
