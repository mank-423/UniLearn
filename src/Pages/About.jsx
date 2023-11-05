import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import grid2bg from '../assets/images/grid1bg.jpg'
import abtImg1 from '../assets/images/about-1-removebg.jpg'
import Card from '../components/Card'

function About() {

    const cardData = [
        { id: 1, title: 'Note making', content: 'Personalized note making and saving the notes personally on the platform. You can organize your notes with tags, categories, and more. Highlight important points, add images, and collaborate with others on your notes.' },
        { id: 2, title: 'Personalized Calendar', content: 'Save all the important dates and tracks. Also set dates for all your works. Keep track of your schedule, add reminders, and sync your calendar with other devices. Set recurring events, and get notifications.' },
        { id: 3, title: 'Course material', content: 'Access a vast library of course materials, textbooks, and assignments. Find resources for various subjects and educational levels. Also filter out courses according to your needs. Unleash the Power of Infinite Quizzes' },
        { id: 4, title: 'Time keeper', content: 'Timer to keep track and set your pace to complete and study. Use a timer to manage your study sessions effectively. Set study intervals, break times, and track your progress. Stay focused and manage your time efficiently.' },
        { id: 5, title: 'Playlist keeper', content: 'Tag YouTube playlists here and keep track of the progress also. Create and manage playlists of educational videos. Organize content based on topics or courses. Track your progress through platform.' },
        { id: 6, title: 'Organized planning', content: 'A very organized and user-friendly way to plan your study sessions, set goals, and track your progress. Create a study plan, and visualize your achievements. Stay motivated and organized in your learning journey.' }
      ];
      

    return (
        <div className='mt-16'>

            {/* Carousel type element */}
            <div>
                <div className='bg-image-about mt-20 grid md:grid-cols-2 sm:grid-cols-1'>
                    <div>
                        <div className='inset-0'>
                            <h1 className='flex lg:pt-44 md:pt-44 pt-16 justify-center items-center text-white md:text-5xl lg:text-5xl text-3xl font-extrabold'>
                                Our <br className='lg:hidden' /> Vision
                            </h1>
                            <p className='text-white font-light flex justify-center items-center pt-6 pl-10'>
                                Keep your study organized and specially deigned up for your needs.
                            </p>
                            <div className='relative flex gap-16 justify-center items-center pt-4'>
                                <Link to={'/login'}>
                                    <button className='px-4 py-2 border-2 border-white text-white bg-blue-500 hover:bg-blue-700 rounded-xl transition duration-300 ease-in-out hover:rounded-md'>
                                        Get started
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={grid2bg} alt="" className='flex justify-center items-center md:pt-12 lg:pt-12' />
                    </div>
                </div>
            </div>

            {/* Info about the goal */}
            {/* Grid section starting */}
            <div className='grid grid-cols-2 pt-5 p-6'>
                <div>
                    <h1 className='font-extrabold text-xl md:text-3xl lg:text-3xl lg:p-12 pb-3'>Explore an experience of learning</h1>
                    <p className='font-thin text-sm md:text-lg lg:text-lg lg:px-9'>
                        <span className='font-bold'>Are you ready to embark on a journey of continuous growth and learning?</span>&nbsp;
                        The world of knowledge is at your fingertips.
                        No more barriers or limitations – just an open door to endless educational
                        resources that can transform your life.
                    </p>
                </div>

                {/* SVG for the grid section 1 */}
                <div className='flex justify-center items-center'>
                    <img src={abtImg1} alt="" className='lg:h-96 lg:w-96 md:h-80 md:w-80' />
                </div>

            </div>

            {/* Grid section 2 */}
            {/* Creating cards for the purpose display*/}

            <div className='pb-8'>
                <div>
                    <h1 className='font-extrabold text-xl md:text-3xl lg:text-3xl lg:p-10 pb-3 flex justify-center items-center'>Get Acess to</h1>
                </div>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    {cardData.map((item)=>(
                        <Card key={item.id} title={item.title} content={item.content}/>
                    ))}
                </div>

            </div>



            <Footer />
        </div>
    )
}

export default About
