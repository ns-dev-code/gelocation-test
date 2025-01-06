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

    return new Response(JSON.stringify(geo), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
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
