import React from 'react';
import bannerImage from '../../assets/All Images/Banner-pic.webp'

const Banner = () => {
    return (
        <div className='flex justify-between px-4 pt-0  lg:pt-32 md:pt-16 pb-5 lg:pb-0 sm:pt-5 mx-auto sm:max-w-full md:max-w-screen-xl lg:max-w-screen-xl md:px-24 lg:px-32 bg-gray-100 '>
            <div className='pt-8'>
                <h1 className='text-5xl	font-bold '>A Little Exploration Can Lead You to<span className='text-green-600'> Your Dream Job</span></h1>
                <p className='py-7'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='p-2 px-4 text-white font-semibold transition duration-200 rounded hover:bg-green-500 active:bg-green-800 bg-green-700'>Get Started</button>
            </div>
            <div className='hidden sm:hidden md:block lg:block w-screen  '>
                <img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;