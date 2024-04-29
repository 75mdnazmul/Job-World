import React, { useEffect, useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const data = await fetch('Category.json')
            const catogoryData = await data.json()
            setCategories(catogoryData)
        }
        loadData()
    }, [])

    return (
        <div className='px-4 pt-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-32'>
            <h3 className='text-center text-3xl	font-bold'>Job Category List</h3>
            <p className='text-center py-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    categories.map(category => (
                        <div key={category.id} className='bg-gray-100 rounded-lg p-10'>
                            <img className='w-10 mb-5' src={category.icon} alt="" />
                            <h4 className='text-gray-700 text-md font-bold pb-2'>{category.name}</h4>
                            <p className='text-gray-600'>{category.quantity} Jobs Available</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Category;