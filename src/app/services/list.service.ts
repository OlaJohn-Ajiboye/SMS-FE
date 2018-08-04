import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import {cities} from './list.mock-data'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  getCities(id): any [] {
    return cities;
  }
  getCity(id): any {
    const list = this.getCities().find(item => {
      return item.id + '' === id;
    });
    return list || null;
  }
}
