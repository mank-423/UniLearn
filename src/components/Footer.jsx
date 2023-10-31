import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-gradient-to-b from-[#095976] via-[#030A8C] to-[#040FD9] text-white font-bold grid lg:grid-cols-4 sm:grid-cols-2 pl-48'>
            <div className='col-span-2 sm:col-span-1'>
            <Link to="/">Home</Link>    
            
            </div>

            <div className='col-span-2 sm:col-span-1'>About us</div>
            <div className='col-span-2 sm:col-span-1'>Contact</div>
            <div className='col-span-2 sm:col-span-1'>Privacy</div>
        </div>

    )
}

export default Footer
