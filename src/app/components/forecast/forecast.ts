import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../../sevices/weather-service';
import { WeatherForecast } from '../../models/weather-forecast.model';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './forecast.html',
  styleUrls: ['./forecast.scss'],
  providers: [WeatherService]
})
export class ForecastComponent implements OnChanges {
  @Input() location = '';
  forecast?: WeatherForecast;
  loading = false;
  errorMessage = '';

  constructor(private weatherService: WeatherService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['location'] && this.location.trim()) {
      this.fetchForecast();
    }
  }

  fetchForecast() {
    this.loading = true;
    this.errorMessage = '';
    this.weatherService.getForecast(this.location, 3).subscribe({
      next: data => this.forecast = data,
      error: err => this.errorMessage = 'Forecast data could not be retrieved ❗' + err.message,
      complete: () => this.loading = false
    });
  }
}
