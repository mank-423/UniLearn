import React from 'react'
import { Link } from 'react-router-dom/dist'

function Carousel() {
    return (
        <div>
            <div className='bg-image mt-20'>
                <div className='inset-0'>
                    <h1 className='flex pt-44 justify-center items-center text-white text-5xl font-extrabold'>
                        Learning <br className='lg:hidden' /> with <br className='lg:hidden' />University
                    </h1>
                    <p className='text-white font-light flex justify-center items-center pt-6 pl-10'>
                        University students embark on a journey of continuous learning.
                    </p>
                    <div className='relative flex gap-16 justify-center items-center pt-4'>
                        <Link to={'/login'}>
                            <button className='px-4 py-2 border-2 border-white text-white bg-blue-500 hover:bg-blue-700 rounded-xl transition duration-300 ease-in-out hover:rounded-md'>
                                Get started
                            </button>
                        </Link>

                        <Link>
                            <button className='px-4 py-2 border-2 border-white text-white bg-blue-500 hover:bg-blue-700 rounded-xl transition duration-300 ease-in-out hover:rounded-md'>
                                Explore
                            </button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Carousel
