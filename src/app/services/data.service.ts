import { Data } from './../interfaces/data';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSource = new BehaviorSubject<Data>({});
  currentData = this.dataSource.asObservable();
  constructor() {}

  setData(city: string, country: string) {
    this.dataSource.next({ city, country });
  }
}
