// File Description
// API end point for user login. Sending request to server side for validation.

// Author Info
// YG [yuepengg@andrew.cmu.edu]


import { validateUser } from '@/lib/auth';


async function loginHandler(req, res) {
    if (req.method === 'POST') {
        const { username, email, password } = req.body;

        // Query the database and determine if login credentials are valid
        try {
            const user = await validateUser(username, email, password);
            return res.status(200).json({ message: 'Login successful' }, user);
        }
        catch (error) {
            // If credentials are invalid, return an error response
            return res.status(401).json({ error: `${error.message}` });
        }
    }
}

export default loginHandler;
