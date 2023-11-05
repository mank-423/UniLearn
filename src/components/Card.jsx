import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';

const Card = (data) => {
  return (
    <div className='p-4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-md bg-[#F1F5FE]'>
      <div className='flex items-center'>
        <BsCheckCircle className='text-[#1621F2]' />
        <h1 className='font-bold ml-2 text-[#1621F2]'>{data.title}</h1>
      </div>
      <p className='font-thin text-sm lg:text-base lg:pl-6'>{data.content}</p>
    </div>
  );
};

export default Card;
