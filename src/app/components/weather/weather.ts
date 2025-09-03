import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../../sevices/weather-service';
import { CurrentWeather } from '../../models/current-weather.model';

@Component({
  selector: 'app-weather', 
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './weather.html',
  styleUrls: ['./weather.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnChanges { // OnChanges interface
  @Input() location = '';
  currentWeather?: CurrentWeather;
  loading = false;
  errorMessage = '';

  constructor(private weatherService: WeatherService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['location'] && this.location.trim()) {
      this.fetchCurrentWeather();
    }
  }

  fetchCurrentWeather() { // Take the location input and fetch current weather
    this.loading = true;
    this.errorMessage = '';
    this.weatherService.getCurrent(this.location).subscribe({
      next: data => this.currentWeather = data,
      error: err => this.errorMessage = 'Current weather data could not be retrieved ❗' + err.message,
      complete: () => this.loading = false
    });
  }
}
