import React from 'react'
import logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div className='bg-[#232a87] text-white font-bold p-5'>

            <div className='grid lg:grid-cols-4'>
                {/* Logo */}
            <div className='ml-10 mt-5 mb-2'>
                <img src={logo} alt="" className='h-16 w-32 rounded-lg' />
            </div>

            {/* Useful links */}
            <div className='ml-10 mt-5 mb-2'>
                <h1 className='font-semibold text-sm'>Useful Links</h1>
                <Link to="/"><p className='font-light text-sm py-1'>Home</p></Link>
                <Link to="/"><p className='font-light text-sm py-1'>About</p></Link>
            </div>

            {/* Contacts */}
            <div>
                <div className='pl-9 lg:pl-0 md:pl-0'>
                    <h1 className='pt-4 font-semibold text-sm'>Contact</h1>
                    <div className='flex gap-8 pt-2'>
                        <a href="https://twitter.com/okaymank" className='text-white transform scale-80 py-1'>
                            <FaTwitter size={30} />
                        </a>
                        <a href="www.linkedin.com/in/mayank-kumar42" className='text-white transform scale-80 py-1'>
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://github.com/mank-423" className='transform scale-80 py-1'>
                            <FaGithub size={30} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Privacy */}
            <div className='ml-10 lg:mt-5 lg:mb-2 mt-6'>
                <h1 className='font-semibold text-sm'>Privacy Policy</h1>
                
                <Link to="/"><p className='font-light text-sm py-1'>User privacy</p></Link>
                <Link to="/"><p className='font-light text-sm py-1'>Content privacy</p></Link>  
            </div>
            </div>

            <hr className='mt-5'/>
            <h1 className='text-white flex justify-center items-center'>©2023-UniLearn</h1>

        </div>

    )
}

export default Footer
