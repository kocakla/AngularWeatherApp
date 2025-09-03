import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; // Import provideRouter
import { routes } from './app.routes'; // Import routes


export const appConfig: ApplicationConfig = {
  // Add router provider
  providers: [
    provideBrowserGlobalErrorListeners(), // Global error handling
    provideZoneChangeDetection({ eventCoalescing: true }), // Optimize change detection
    provideRouter(routes) // Provide the router with the app routes
  ]
};
