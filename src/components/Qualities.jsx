import React from 'react'
import grid1 from '../assets/images/grid1.jpg'
import grid2 from '../assets/images/grid2.jpg'

function Qualities() {
  return (
    <div id='quality'>
      {/* bg-gradient-to-b from-[#020659] via-[#030A8C] to-[#040FD9] h-screen */}
      <div className='py-6 px-20'>
        {/* border-2 border-black  */}
        <div className='grid lg:grid-cols-2 rounded-xl p-5'>
          <div>
            <img src={grid1} className='inset-0 flex justify-center items-center' alt="" />
          </div>

          <div>
            <h1 className='font-bold text-3xl lg:p-12 flex justify-center items-center pb-3'>Learn in your space</h1>
            <ul className="list-inside list-[square] lg:pl-20 text-sm lg:text-base font-thin">
              <li>Your personalized learning.</li>
              <li>Unlimited quizzes.</li>
              <li>Material access for exams.</li>
            </ul>
          </div>
        </div>

        {/* border-2 border-black  */}
        <div className='grid lg:grid-cols-2 mt-3 pt-3 rounded-xl p-5'>
          <div>
            <h1 className='font-bold text-3xl lg:p-12 flex justify-center items-center'>A platform just for you</h1>
            <p className='font-thin text-sm lg:text-lg lg:px-9'>
              A platform for personalised learning of the user, and making it sure, that he can practice as much as he wants to without any problem.
              A hassle-free platform with simplest of tasks to complete to make learning fun.
            </p>
          </div>
          <div >
            <img src={grid2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qualities
