import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom/dist';

function Subject() {

    const [embedURL1] = useState("https://drive.google.com/file/d/1iWBRIo2-gXAQa4OvoKh9b_bpLR9fa0hg/preview");
    const [embedURL2] = useState("https://drive.google.com/file/d/1JKzWqdnMG8Yf4DhfPLqmgTFKIi8xeTKq/preview");
    const [name, setName] = useState('');

    let navigate = useNavigate();

    useEffect(()=>{
        if (localStorage.getItem('username')){
            setName(localStorage.getItem('username'));
        }else{
            navigate('/login');
        }
    })

    return (
        <div className='mt-24'>
            <div>
                {name ? "Hello "+name : ''}
            </div>
            <div>
                <iframe src={embedURL1} width="640" height="480" title='sub1' allow="autoplay"></iframe>
            </div>

            <div>
                <iframe src={embedURL2} width="640" height="480" title='sub2' allow="autoplay"></iframe>
            </div>
        </div>
    )
}

export default Subject
