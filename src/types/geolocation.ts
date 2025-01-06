export interface GeolocationResponse {
  city: string | undefined;
  country: string | undefined;
  countryCode: string | undefined;
  region: string | undefined;
  latitude: number | undefined;
  longitude: number | undefined;
  timezone: string | undefined;
}

// Netlify Context Geo type
export interface NetlifyGeo {
  city: string | null;
  country: {
    code: string | null;
    name: string | null;
  } | null;
  subdivision: {
    code: string | null;
    name: string | null;
  } | null;
  latitude: number | null;
  longitude: number | null;
  timezone: string | null;
} 