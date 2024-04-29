import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import { PhoneIcon, MapPinIcon, CurrencyDollarIcon, EnvelopeIcon, CalendarIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../Utilities/FakeDb';


const JobDetails = () => {
    const [jobs, setjobs] = useState([])
    const location = useLocation()
    const stateId = location.state.id;

    useEffect(() => {
        fetch('CompanyData.json')
            .then(res => res.json())
            .then(data => setjobs(data));
    }, [])
    const jobsId = jobs.jobs && jobs.jobs.find(job => job.id == stateId)


    const handleApplyJob = (id) => {
        addToDb(id)
    }

    return (
        <div className='flex lg:flex-row flex-col bg-slate-200 rounded-2xl p-20 justify-between gap-4 w-[80%] mx-auto mb-20'>
            <div className='text-left lg:w-[60%] w-[90%] mx-auto'>
                <h5><strong >Job Description</strong>: {jobsId && jobsId.job_description}</h5>
                <h5 className='py-3'><strong >Job Responsibility</strong>: {jobsId && jobsId.job_responsibility}</h5>
                <h5 className='py-3'><strong >Educational requirment</strong>:</h5>
                <p> {jobsId && jobsId.educational_requirements}</p>
                <h5 className='py-3'><strong >Experiance</strong>:</h5>
                <p>{jobsId && jobsId.experiences}</p>
            </div>
            <div className=' lg:w-[40%] w-90% mx-auto '>
                <div className=' px-5 bg-slate-50 p-5 rounded-xl'>
                    <h4 className='font-bold text-xl  border-b-2 border-gray-500'>Job Details</h4>

                    <div>
                        <div className='flex items-center '>
                            <h3><CurrencyDollarIcon className="h-6 w-6 text-blue-700" /></ h3>
                            <h5 className='text-lg ml-1'><span className='font-bold'>salary</span>: {jobsId && jobsId.salary}(per month)</h5>

                        </div>
                        <div className='flex items-center py-2'>
                            <h3><CalendarIcon className="h-6 w-6 text-blue-700" /></ h3>
                            <h5 className='text-lg ml-1'><span className='font-bold'>Job Title</span>:  {jobsId && jobsId.job_title}</h5>

                        </div>
                        <h4 className='font-bold text-xl border-b-2 mt-5 border-gray-500'>Contuct Information</h4>

                        <div className='flex items-center py-2'>
                            <h3><PhoneIcon className="h-6 w-6 text-blue-700" /></ h3>
                            <h5 className='text-lg ml-1'><span className='font-bold'>Phone</span>: {jobsId && jobsId.contact_information.phone}</h5>

                        </div>
                        <div className='flex items-center py-2'>
                            <h3><EnvelopeIcon className="h-6 w-6 text-cyan-600" /></ h3>
                            <h5 className='text-lg ml-1'><span className='font-bold'>Email</span>: {jobsId && jobsId.contact_information.email}</h5>

                        </div>
                        <div className='flex items-center py-3'>
                            <h3><MapPinIcon className="h-6 w-6 text-cyan-600" /></ h3>
                            <h5 className='text-lg ml-1'><span className='font-bold'>Adress</span>: {jobsId && jobsId.location}</h5>

                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleApplyJob(jobsId.id)}
                        className='w-[95%] text-xl py-2 mt-5 rounded-md mx-auto active:bg-green-400 bg-green-800 hover:bg-green-600 text-white'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;