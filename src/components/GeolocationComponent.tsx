import React, { useEffect, useState } from 'react';
import { GeolocationService } from '../services/geolocation.service';
import { GeolocationResponse } from '../types/geolocation';

export const GeolocationComponent: React.FC = () => {
  const [location, setLocation] = useState<GeolocationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const geoService = GeolocationService.getInstance();
        const locationData = await geoService.getCurrentLocation();
        setLocation(locationData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch location');
      }
    };

    fetchLocation();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!location) return <div>Loading...</div>;

  return (
    <div>
      <h2>Your Location</h2>
      <p>City: {location.city}</p>
      <p>Country: {location.country}</p>
      <p>Region: {location.region}</p>
      <p>Coordinates: {location.latitude}, {location.longitude}</p>
      <p>Timezone: {location.timezone}</p>
    </div>
  );
}; 