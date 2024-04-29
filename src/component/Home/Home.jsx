import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import FeatureItem from '../FeatureItem/FeatureItem';

const Home = () => {
    const companies = useLoaderData();
    const [shawAll, setShawAll] = useState(true);

    const handleSeeAll = () => {
        setShawAll(false)
    }

    return (
        <div>
            <Banner></Banner>
            <Category></Category>

            <div className='py-7'>
                <div className='text-center text-gray-900 pt-12 py-7'>
                    <h3 className=' text-3xl font-bold'>Featured Jobs</h3>
                    <p className='py-5'>Explore thousands of job
                        opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 w-[80%] mx-auto'>
                    {
                        companies.jobs.slice(0, shawAll ? 4 : 6).map(company =>
                            <FeatureItem
                                key={company.id}
                                company={company}
                            >
                            </FeatureItem>)
                    }
                </div>
                <div className="text-center py-12">
                    {
                        shawAll && <button onClick={handleSeeAll}
                            className='rounded-md font-bold py-2 px-3 active:bg-green-500 hover:bg-green-900 bg-green-600 px-3 text-white'>See All Jobs</button>
                    }
                </div>
            </div>
        </div>
    )
};

export default Home;