import React, { useState } from 'react'

const Admin = () => {

    const [subjectName, setSubjectName] = useState('');
    const [courseName, setCourseName] = useState('BTech');
    const [courseYear, setCourseYear] = useState(0);
    const [driveLink, setDriveLink] = useState('');

    const addSubject = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/admin", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subjectName,
                    courseName,
                    courseYear,
                    driveLink
                })
            });

            const data = await response.json();

            if (data.status === "ok") {
                alert("Subject added");
            } else {
                alert("Failed to add subject");
            }
        } catch (error) {
            console.log("Error occured", error);
        }
    }

    return (
        <div className='bg-black mt-24 px-20'>

            <form action="" className='flex flex-col p-10 border-2'>
                <input type="text" name="" id="" placeholder='Subject name' onChange={(e) => setSubjectName(e.target.value)} className='border-2' />

                {/* <input type="text" name="" id="" placeholder='Course name' onChange={(e) => setCourseName(e.target.value)} className='border-2' /> */}
                <select onChange={(e) => setCourseName(e.target.value)}>
                    <option value="Bech">Btech</option>
                    <option value="BCA">BCA</option>
                </select>

                <input 
                    type="number" 
                    name="" 
                    id="" 
                    placeholder='Course Year' 
                    onChange={(e) => setCourseYear(e.target.value)} 
                    className='border-2'
                    min = "1"
                    max={courseName === "BTech" ? 4 : courseName === "BCA" ? 3 : undefined} 
                />

                

                <input type="text" name="" id="" placeholder='Drive Link' onChange={(e) => setDriveLink(e.target.value)} className='border-2' />

                <input type="submit" value="Add subject" className='bg-white' onClick={addSubject} />
            </form>
        </div>
    )
}

export default Admin
