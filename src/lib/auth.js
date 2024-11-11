// File Description
// Authenticate user information by querying database.

// Author Info
// YG [yuepengg@andrew.cmu.edu]


import { connectToDatabase } from '@/lib/mongodb';


export async function validateUser (username, email, password) {

    const { db } = await connectToDatabase();
    const userByEmail = await db.collection('users').findOne({ email });
    const userByName = await db.collection('users').findOne({ username });

    // Check if the email and usr name point to same user instance
    if (!userByEmail) {
        throw new Error('Email not found');
    }
    if (!userByName) {
        throw new Error('Username not found');
    }
    if (userByEmail.email !== userByName.email || userByEmail.username !== userByName.username) {
        throw new Error('Non-unique credentials')
    }

    // Check if password matches
    // TODO: find an external library that can hash the password and do more secure check
    if (userByEmail.password !== password) {
        throw new Error('Incorrect password');
    }

    return userByEmail;
}


// TODO: find an external library that can hash the password and do more secure check
export async function registerUser (username, email, password) {

    const { db } = await connectToDatabase();
    const existingUser = await db.collection('users').findOne({ username });

    if (existingUser) {
        throw new Error('User already exists');
    }

    const newUser = {
        username,
        email,
        password,
        createdAt: new Date(),
    };

    const result = await db.collection('users').insertOne(newUser);

    return result.insertedId;
}
