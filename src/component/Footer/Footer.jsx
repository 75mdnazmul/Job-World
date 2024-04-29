import React from 'react';
import socialImg from '../../assets/Icons/social.png'

const Footer = () => {
    return (
        <div className=' bg-zinc-900 px-16 sm:px-20 pt-8 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-32'>
            <div className='grid grid-cols-2 lg:grid lg:grid-cols-6 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 py-10 gap-10  text-gray-400'>
                <div className='col-span-2 lg:col-span-2'>
                    <h3 className='ml-2 text-3xl font-extrabold tracking-wide text-white'>JoBWorld</h3>
                    <p className='py-5'>Success is not the key to happiness. Happiness is the key to success. If you love work, you will be successful</p>
                    <img className='cursor-pointer' src={socialImg} alt="Icons" />
                </div>
                <div className='grid lg:gap-y-3 '>
                    <h4 className='text-white font-semibold text-lg'>Company</h4>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div className='grid gap-y-3'>
                    <h4 className='text-white font-semibold text-lg'>Product</h4>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div className='grid gap-y-3 '>
                    <h4 className='text-white font-semibold text-lg'>Support</h4>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div>
                    <h4 className='text-white font-semibold text-lg'>Contact</h4>
                    <p className='py-3'>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div><hr />
            <div className='text-gray-400 flex justify-between pt-10 pb-16 text-sm '>
                <p>@2023 <strong>JobWorld</strong>. All Rights Reserved</p>
                <p>Powered by <strong>JobWorld</strong></p>
            </div>
        </div>
    );
};

export default Footer;