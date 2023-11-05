import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);

    // Initialize the navigate object
    const navigate = useNavigate();

    // Function to handle user login
    async function loginUser(event) {
        event.preventDefault();

        const response = await fetch("http://localhost:5000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const data = await response.json();

        if (data.status === 'ok' && data.user === true) {
            // If login is successful, set loginSuccess to true
            setLoginSuccess(true);

            // Save user credentials in local storage
            localStorage.setItem('username', username);

            // Set a timer to clear local storage after 1 hour (3600 seconds)
            //  60000 1 minute to check *it works fine for 1 minute
            // And it will delete the credentials after 1 hr 
        
            setTimeout(() => {
                localStorage.removeItem('username');
            }, 3600000);

            navigate('/subjects');
        }
    }

    // This effect runs when the component mounts and checks for saved credentials
    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            // If there are saved credentials, set the username in the state
            setUsername(savedUsername);
        }
    }, []);

    return (
        <div className='mt-16'>
            <h1 className='text-3xl font-extrabold underline flex justify-center items-center pt-4'>Login</h1>
            <center>
                <br />
                <form onSubmit={loginUser} className='inline-block p-7 border-2 border-black rounded-2xl'>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        className='mt-2 rounded-2xl border-2 border-grey p-2'
                        placeholder="Username"
                    />
                    <br />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className='mt-1 rounded-2xl border-2 border-grey p-2'
                        placeholder="Password"
                    />
                    <br />
                    <input type="submit" value="Login" className='px-4 py-2 mt-2 border-2 border-white text-white bg-blue-500 hover:bg-blue-700 rounded-xl transition duration-300 ease-in-out hover:rounded-md' />
                    <Link to="/register">
                        <button className='px-4 py-2 mt-2 border-2 border-white text-white bg-blue-500 hover:bg-blue-700 rounded-xl transition duration-300 ease-in-out hover:rounded-md'> Sign up</button>
                    </Link>
                </form>
            </center>
        </div>
    );
}

export default Login;
