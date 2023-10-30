import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom/dist';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState("");
    const [username, setUsername] = useState("");

    // Initialize the navigate object
    const navigate = useNavigate()

    //Regular expression for email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //Array of courses
    //Use for validation later on
    const courseAr = ['B.Tech', 'B.Sc'];
    //Map course with semesters and provied a dropdown

    //Validate email
    function validateEmail() {
        const isValidEmail = emailRegex.test(email);
        if (!isValidEmail && email !== "") {
            document.getElementById('email').style.border = '2px solid red';
        } else {
            document.getElementById('email').style.border = '2px solid #ccc';
        }
    }

    //Validate password
    // function validateCourse() {
    //     if (!courseAr.includes(course)) {
    //         document.getElementById('course').style.border = '2px solid red';
    //     } else {
    //         document.getElementById('course').style.border = '2px solid #ccc';
    //     }
    // }

    // Fetch API usage
    async function registerUser(event) {
        event.preventDefault();

        if (!name || !email || !password || !course || !year || !username) {
            alert("Please fill in all the details");
        } else {
            const response = await fetch("http://localhost:5000/api/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    username,
                    password,
                    course,
                    year,
                }),
            });

            const data = await response.json();
            console.log(data);

            if (data.status === 'ok') {
                // Navigate to the login route
                navigate('/login');
            } else {
                alert("Some error in data entry");
            }
        }
    }


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                {/* Name of the user */}
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                />

                {/* Email */}
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail} /* Add the onBlur event handler */
                    type="text"
                    id="email"
                    placeholder="Email"
                />

                {/* Username */}
                <br />
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder='Username'
                />

                {/* Password */}
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='Password'
                />

                {/* Course */}
                <br />
                <input
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    //onBlur={validateCourse}
                    id="course"
                    type="text"
                    placeholder='Course'
                />

                {/* Year */}
                <br />
                <input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    type="text"
                    placeholder='Year'
                />

                {/* Btn */}
                <br />
                <input type="submit" value="Register" />
            </form>


        </div>
    )
}

export default Register
