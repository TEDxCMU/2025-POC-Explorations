// File Description
// The login page where users enter login credentials.
// Users should be redirected to main if authenticated.

// Author Info
// YG [yuepengg@andrew.cmu.edu]


import { useState } from 'react';
import { useRouter } from 'next/router';


function LoginPage() {

    // Initialize states for text input
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // Handle submit button event
    const handleLogin = async (e) => {
        e.preventDefault();

        // Configure request with API end point
        try {
            // Sending request for validation
            const request = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            }
            const response = await fetch('api/login', request);

            // Handling response by status
            if (response.ok) {
                await router.push('/dashboard');
            }
            else {
                const errorData = await response.json();
                setError(errorData.error);
            }
        }
        catch (error) {
            console.error('Login error:', error);
            setError('An error occurred. Please try again.');
        }
    }

    // Front-end logic
    // TODO: move this chunk into a separate file under components
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">
                    Login
                </button>
                {/* Displaying error message */}
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
        </div>
    )
}

export default LoginPage;
