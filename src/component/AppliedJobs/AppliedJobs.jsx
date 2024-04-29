
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { PhoneIcon, MapPinIcon, CurrencyDollarIcon, EnvelopeIcon, CalendarIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react';
import { getselectJob } from '../Utilities/FakeDb';

const AppliedJobs = () => {
  const navigate = useNavigate()

  const [fetureData, setFetureData] = useState([])
  const [datas, setDatas] = useState([])

  useEffect(() => {

    const loadData = async () => {
      const jobsData = await fetch('CompanyData.json')
      const data = await jobsData.json()

      const savedJob = getselectJob()
      const initialJob = []
      for (const id in savedJob) {
        const getNumber = parseInt(id)
        const foundProduct = data.jobs.find(singleData => singleData.id === getNumber)
        if (foundProduct) {
          const quantity = savedJob[id]
          foundProduct.quantity = quantity
          initialJob.push(foundProduct)
        }
        setFetureData(initialJob);
        setDatas(initialJob);

      }
    }
    loadData()
  }, [])


  const handleShowDetails = (id) => {
    navigate('/job_details', { state: { id: id } })
  }


  const handleFilter = (e) => {
    console.log(e.target);
    let value = e.target.value
    if (value == "Remote") {
      const filter = fetureData.filter(d => d.job_type == "Remote")
      setDatas(filter)

    } else if (value == "Onsite") {
      const filter = fetureData.filter(d => d.job_type == "Onsite")
      setDatas(filter)
    }
  }

  return (
    <div className='w-[80%] mx-auto py-12'>
      <div className='flex justify-end items-end'>
        <select onChange={handleFilter} className="select w-44 max-w-xs bg-slate-100">
          <option disabled selected>Filter By</option>
          <option value="Remote">Show Remote Job</option>
          <option value="Onsit">Show Onsite Job</option>
        </select>
      </div>
      <div className='py-20 justify-center flex flex-col gap-5 '>
        {datas.map(singleJob => {
          return <div key={singleJob.id} className='flex justify-between rounded-md items-center border border-green-700 p-5 bg-gray-100 w-[80%] mx-auto'>
            <div className='flex gap-5'>
              <div>
                <img className='h-28 w-28 p-4  bg-gray-100' src={singleJob.company_logo} alt="" />
              </div>

              <div>
                <h2 className='text-xl font-bold'>{singleJob.job_title}</h2>
                <h3 className='text-lg'>{singleJob.company_name}</h3>
                <div className='flex gap-2 my-3'>

                  <p className="border border-black text-green-600 py-2 px-3 rounded-md font-bold ">{singleJob.remote_or_onsite}</p>
                  <p className="border border-black text-green-600 py-2 px-3 rounded-md font-bold ">{singleJob.fulltime_or_parttime}</p>

                </div>


                <div className='flex gap-4 py-2'>
                  <div className='flex'>
                    <h3><MapPinIcon className="h-6 w-6 text-green-700" /></h3>
                    <h3>{singleJob.location}</h3>
                  </div>
                  <div className='flex'>
                    <h3><CurrencyDollarIcon className="h-6 w-6 text-green-700" /></h3>
                    <h3>salary:{singleJob.salary}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button onClick={() => handleShowDetails(singleJob.id)}
                className='rounded-md font-bold py-2 my-5 px-3 active:bg-green-500 hover:bg-green-800 bg-green-600 text-white'>View Details</button>
            </div>
          </div>
        })
        }
      </div>
    </div>
  );
};

export default AppliedJobs;