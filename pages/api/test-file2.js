import clientPromise from '@/lib/mongodb.js';

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db('admin');

    await db.command({ ping: 1 });

    return new Response(JSON.stringify({ message: 'Successfully connected to MongoDB!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Connection error:', error);
    return new Response(JSON.stringify({ message: 'Failed to connect to MongoDB', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
