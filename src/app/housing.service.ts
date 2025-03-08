import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
              //Service is a TypeScript clas in angular
@Injectable({ //injectable means we can use this class in dependency injection / each file calling can request an instance
  providedIn: 'root' // where this service can be called and injected, root means everywhere 
})
export class HousingService {
 // protected housingLocationList: HousingLocation[] = [];
 url = "http://localhost:3000/locations"; 
  constructor() { }


  async getAllHousingLocation(): Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ??{};
  }
  async getHousingLocationById(id: number):Promise< HousingLocation|undefined>{ //union type of ts, can return undefined if user enters unrecognised id
    const data = await fetch(`${this.url}/${id}`);
    return await data.json()?? {};
  }

  submitApplication(firstName: string, lastName: string,email: string){
    console.log(firstName,lastName,email);
  }
}
