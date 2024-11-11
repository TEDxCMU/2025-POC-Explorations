// File Description
// Establish connection with mongoDB for database IO.

// Author Info
// YG [yuepengg@andrew.cmu.edu]


import {MongoClient} from 'mongodb';


let client;
let clientPromise;

// TODO: change <db_password> to actual password for successful connection
const uri = "mongodb+srv://tedxcmuinnovation:<db_password>@maps-roc.a3yf5.mongodb.net/?retryWrites=true&w=majority&appName=maps-roc";

client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
clientPromise = client.connect();

export async function connectToDatabase() {
    const db = (await clientPromise).db('yg-poc-mango');
    return {db};
}
