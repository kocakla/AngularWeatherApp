import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(App, {
  providers: [
    provideAnimations(), // Required for Toastr
    provideToastr({
      positionClass: 'toast-top-left', // Position of the toast
      timeOut: 3000, // Duration in milliseconds
      preventDuplicates: true, // Prevent duplicate toasts
    })
  ]
})
.catch(err => console.error(err)); // Catch and log bootstrap errors
