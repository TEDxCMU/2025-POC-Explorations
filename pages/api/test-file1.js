import clientPromise from '@/lib/mongodb';

export async function POST(req) {
    try {
        // Parse the JSON data from the request body
        const data = await req.json();

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('yg-poc-mango');
        const collection = db.collection(' ');

        // Insert data into the collection
        const result = await collection.insertOne(data);

        return new Response(JSON.stringify({ message: 'Success: data added', result }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error adding data:', error);
        return new Response(JSON.stringify({ message: 'Failure: unable to add data', error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
