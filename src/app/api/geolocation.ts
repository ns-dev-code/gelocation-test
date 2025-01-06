/* eslint-disable import/no-anonymous-default-export */
import { Context } from '@netlify/edge-functions';

export default async (req: Request, context: Context) => {
  console.log(req, context);
  try {
    const geo = context.geo;

    if (!geo) {
      return new Response(JSON.stringify({ error: 'Geolocation information not available' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({
        country: geo.country?.name || 'N/A',
        region: geo.subdivision?.name || 'N/A',
        city: geo.city || 'N/A',
        latitude: geo?.latitude || 'N/A',
        longitude: geo?.longitude || 'N/A',
        postalCode: geo?.postal?.code || 'N/A',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('Error in Edge Function:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
};
