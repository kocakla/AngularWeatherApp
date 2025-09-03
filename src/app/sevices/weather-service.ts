import { Injectable } from '@angular/core'; // Injectable decorator
import { HttpClient, HttpParams } from '@angular/common/http'; // HttpParams for query parameters
import { CurrentWeather } from '../models/current-weather.model';
import { WeatherForecast } from '../models/weather-forecast.model';
import { environment } from '../environments/environment';
import { catchError, retry, throwError , Observable } from 'rxjs'; // rxjs imports


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiBase = environment.apiBase; // API base URL from environment

  constructor(private http: HttpClient) {}

  // Current weather endpoint query param ile
  getCurrent(location: string): Observable<CurrentWeather> {
  const params = new HttpParams().set('location', location);
  return this.http.get<CurrentWeather>(`${this.apiBase}/current`, { params })
    .pipe( // RxJS operators
      retry(2), // if error, retry 2 times
      catchError(err => {
        console.error('Weather API error', err);
        return throwError(() => new Error('Current weather data could not be retrieved ❗'));
      })
    );
}

  // Forecast endpoint query param
getForecast(location: string, days: number = 3): Observable<WeatherForecast> {
  const params = new HttpParams()
    .set('location', location)
    .set('days', days.toString());

  return this.http.get<WeatherForecast>(`${this.apiBase}/forecast`, { params })
    .pipe(
      retry(2), //if error, retry 2 times
      catchError(err => {
        console.error('Forecast API error', err);
        return throwError(() => new Error('Forecast data could not be retrieved ❗'));
      })
    );
  }
}


