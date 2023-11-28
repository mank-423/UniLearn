import React, { useEffect, useState } from 'react'


const Profile = () => {

    const [userData, setUserData] = useState();

    const getUserData = async () => {
        const username = localStorage.getItem('username');
        try {
            const response = await fetch(`http://localhost:5000/api/login/${username}`);
            const userData = await response.json();
            console.log(userData);

            setUserData(userData);

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }


    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div>
            {/* {console.log(userData.user)} */}

            {userData
            ?
                (
            <div className='flex justify-center items-center font-lg mt-24 flex-col'>
                <h1>Name: {userData.user.name} </h1>
                <h1>Username: {userData.user.username} </h1>
                <h1>Email: {userData.user.email} </h1>
                <h1>Course: {userData.user.course} </h1>
                <h1>Year: {userData.user.year} </h1>
            </div>
            ) 
            : 
            (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Profile
