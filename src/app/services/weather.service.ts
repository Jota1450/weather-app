import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '83f640a8c2dd4cb34382c1ac1d6376b6'
  URI: string = '';

  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}`
  }

  getWheater(city: string, country: string) {
    //const innerCity = city ? `${city},` : ''
    return this.httpClient.get(`${this.URI}&q=${city},${country}`)
  }

  getCountries(): Observable<[]> {
    const url: string = '/assets/countries.json';
    return this.httpClient.get(url) as Observable<[]>
  }
}
