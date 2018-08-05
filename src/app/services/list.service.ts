import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private http: HttpClient) {}
  getCities(): Observable<any> {
    return this.http.get('assets/data.json');
  }
}
