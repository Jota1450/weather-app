import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  weather: any;
  countries: any = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWheater('Bogotá', 'CO');
    this.getCountries();
  }

  getWheater(city: string, country: string) {
    this.weatherService.getWheater(city, country).subscribe({
      next: (res) => (this.weather = res),
    });
  }

  getCountries() {
    this.weatherService.getCountries().subscribe({
      next: (res) => (this.countries = res),
    });
  }

  showWeather() {
    return JSON.stringify(this.weather);
  }

  submitForm(city: any, country: any) {
    this.getWheater(city.value, country.value);
    return false;
  }
}
