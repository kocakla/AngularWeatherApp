import { Component } from '@angular/core'; // No lifecycle interface needed
import { CommonModule } from '@angular/common'; // CommonModule for ngIf, ngFor
import { FormsModule } from '@angular/forms'; // FormsModule for ngModel
import { WeatherComponent } from '../weather/weather';
import { ForecastComponent } from '../forecast/forecast';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-weather-dashboard',
  standalone: true, // Standalone component
  imports: [CommonModule, FormsModule, WeatherComponent, ForecastComponent], // Import necessary modules and components
  templateUrl: './weather-dashboard.html', // External HTML template
styleUrls: ['./weather-dashboard.scss'] // External SCSS styles
})
export class WeatherDashboardComponent {
  locationInput = '';
  searchLocation = '';
  constructor(private toastr: ToastrService) {} // Inject ToastrService
  // Search button click handler
  search() {
    if (this.locationInput.trim()) {
      this.searchLocation = this.locationInput.trim(); // Update search location
      // Show success toast
      this.toastr.success(`Search successful: ${this.searchLocation}`, 'Success 🎉');
    } else {
      // Show error toast
      this.toastr.error('Please enter a location!', 'Error ❌');
    }
  }
}
 
