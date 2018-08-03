import { Injectable } from '@angular/core';
import {cities} from './list.mock-data'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  getList(id): any [] {
    return cities;
  }
}
