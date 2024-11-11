// File Description
// The index page of this web application.
// Users should be redirected to login page or registration page through this page.

// Author Info
// YG [yuepengg@andrew.cmu.edu]


import { useRouter } from 'next/router';


function App() {
    const router = useRouter();

    const handleLoginButtonClick = async () => {
        try {
            await router.push('/login');
            console.log("Successfully navigated to login page.");
        } catch (error) {
            console.error("Failure to navigate, error: ", error);
        }
    }

    const handleRegisterButtonClick = async () => {
        try {
            await router.push('/register');
            console.log("Successfully navigated to registration page.");
        } catch (error) {
            console.error("Failure to navigate, error: ", error);
        }
    }

    return (
        <div className="App">
            <h1>Welcome!</h1>
            <button onClick={handleLoginButtonClick}>
                Login
            </button>
            <button onClick={handleRegisterButtonClick}>
                Register
            </button>
        </div>
    );
}

export default App;
