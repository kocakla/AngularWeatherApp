import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherDashboardComponent } from './components/weather-dashboard/weather-dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, WeatherDashboardComponent], // Import the dashboard component
  template: `<app-weather-dashboard></app-weather-dashboard>`, // Use the dashboard component in the template
  styleUrls: ['./app.scss'] // External SCSS styles
})
export class App {
  protected readonly title = signal('weather-app'); // Application title signal
}
