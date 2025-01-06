import { GeolocationResponse } from '../types/geolocation';

export class GeolocationService {
  private static instance: GeolocationService;
  private readonly apiUrl = '/api/geolocation';

  private constructor() {}

  public static getInstance(): GeolocationService {
    if (!GeolocationService.instance) {
      GeolocationService.instance = new GeolocationService();
    }
    return GeolocationService.instance;
  }

  public async getCurrentLocation(): Promise<GeolocationResponse> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('Geolocation request failed');
      }
      return await response.json() as GeolocationResponse;
    } catch (error) {
      console.error('Error fetching geolocation:', error);
      throw error;
    }
  }
} 