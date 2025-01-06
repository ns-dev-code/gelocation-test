interface GeoLocation {
  city?: string;
  country?: {
    name?: string;
    code?: string;
  };
  subdivision?: {
    name?: string;
  };
  latitude?: number;
  longitude?: number;
  timezone?: string;
}

interface Context {
  geo: GeoLocation;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: Request, context: Context): Promise<Response> => {
  // Get geolocation data from context
  const geo = context.geo;

  // Create response object with geolocation data
  const response = geo;

  return new Response(JSON.stringify(response), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
