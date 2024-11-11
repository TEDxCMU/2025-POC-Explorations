// File Description
// API end point for user login. Sending request to server side for validation.

// Author Info
// YG [yuepengg@andrew.cmu.edu]


import { registerUser } from '@/lib/auth';


async function registrationHandler(req, res) {
    if (req.method === 'POST') {
        const { username, email, password } = req.body;

        try {
            const userID = await registerUser(username, email, password);
            return res.status(200).json({ message: 'Registration successful' }, userID);
        }
        catch (error) {
            // If credentials are invalid, return an error response
            return res.status(401).json({ error: `${error.message}` });
        }
    }
}

export default registrationHandler;
