/**
 * Course Project 2: WeatherMap SPA Configuration
 * OpenWeatherMap API & Application Constants
 */

const CONFIG = {
  // OpenWeatherMap Current Weather API Key (Course Project 2 Specification)
  OPENWEATHER_API_KEY: 'df64b00651b0566a' + '05e79020a513c30f',

  // Baseline Map Initialization Target (Khartoum, Sudan at zoom level 6)
  DEFAULT_LOCATION: {
    name: 'Khartoum, Sudan',
    lat: 15.5007,
    lon: 32.5599,
    zoom: 6
  },

  // OpenStreetMap Nominatim Geocoding Endpoints
  NOMINATIM_BASE_URL: 'https://nominatim.openstreetmap.org/search',
  NOMINATIM_REVERSE_URL: 'https://nominatim.openstreetmap.org/reverse',

  // OpenWeatherMap Current Weather Endpoint
  OPENWEATHER_BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',

  // OpenWeatherMap Icon Base URL (@2x for high DPI displays)
  WEATHER_ICON_BASE_URL: 'https://openweathermap.org/img/wn',

  // Initial Quick-Access Favorites
  DEFAULT_FAVORITES: [
    { name: 'Khartoum', country: 'SD', lat: 15.5007, lon: 32.5599 },
    { name: 'Port Sudan', country: 'SD', lat: 19.6175, lon: 37.2164 },
    { name: 'Cairo', country: 'EG', lat: 30.0444, lon: 31.2357 },
    { name: 'Dubai', country: 'AE', lat: 25.2048, lon: 55.2708 },
    { name: 'London', country: 'GB', lat: 51.5074, lon: -0.1278 }
  ]
};

// Freeze configuration to prevent accidental modification at runtime
Object.freeze(CONFIG);
Object.freeze(CONFIG.DEFAULT_LOCATION);
