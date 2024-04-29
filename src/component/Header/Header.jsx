import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-32 '>
            <nav className='flex items-center justify-between'>
                <Link to="/"><h3 className='ml-2 text-3xl font-extrabold tracking-wide cursor-pointer text-gray-800 '>JoBWorld</h3></Link>
                
                <ul className='items-center hidden md:flex space-x-5 lg:flex text-gray-500'>
                    <li className='cursor-pointer '><ActiveLink to="/">Home</ActiveLink></li>
                    <li className='cursor-pointer'><ActiveLink to="/chart">Statistics</ActiveLink></li>
                    <li className='cursor-pointer'><ActiveLink to="/applied_jobs">Applied Jobs</ActiveLink></li>
                    <li className='cursor-pointer'><ActiveLink to="/blog">Blog</ActiveLink></li>       
                </ul>
                <ActiveLink to="/feature_item"><button className='p-2 text-white font-semibold transition duration-200 rounded hover:bg-green-500 active:bg-green-800 bg-green-700'>Start Applying</button></ActiveLink>
                </nav>
        </div>

    );
};

export default Header;