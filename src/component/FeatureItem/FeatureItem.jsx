import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeatureItem = ({ company }) => {

    const { id, company_name, job_title, company_logo, remote_or_onsite, fulltime_or_parttime, location, salary } = company

    const navigate = useNavigate()

    const handleShowJobDetails = (id) => {
        navigate('/job_details', { state: { id: id } })
    }


    return (
        <div>
            <div className='border border-gray-500 px-16 py-5 rounded-md bg-gray-100'>
                <img className='h-30 w-32 p-5' src={company_logo} alt="" />
                <h3 className='text-xl font-semibold pt-2'>{job_title}</h3>
                <h5 className='text-gray-500 text-lg'>{company_name}</h5>

                <div className='flex gap-3 py-2'>
                    <p className="border border-black text-green-600 py-2 px-3 rounded-md font-bold ">{remote_or_onsite}</p>
                    <p className="border border-black text-green-600 py-2 px-3 rounded-md font-bold ">{fulltime_or_parttime}</p>

                </div>

                <div className='flex gap-4 py-2'>
                    <div className='flex'>
                        <h3><MapPinIcon className="h-6 w-6 text-gray-500" /></h3>
                        <h3>{location}</h3>
                    </div>
                    <div className='flex'>
                        <h3><CurrencyDollarIcon className="h-6 w-6 text-gray-500" /></h3>
                        <h3>salary:{salary}</h3>
                    </div>
                </div>

                <button onClick={() => handleShowJobDetails(id)}
                    className='rounded-md font-bold py-2 my-5 px-3 active:bg-green-500 hover:bg-green-800 bg-green-600 text-white'>View Details</button>
            </div>

        </div>
    );
};

export default FeatureItem;