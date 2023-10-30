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
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <input type="submit" value="Login" />
                <Link to="/register">
                    <button>Register user</button>
                </Link>
            </form>
        </div>
    );
}

export default Login;
