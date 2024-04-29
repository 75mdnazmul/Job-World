import { getselectJob } from "../Utilities/FakeDb"


export const productsAndCartData = async () => {
  const jobsData = await fetch('CompanyData.json')
  const data = await jobsData.json()
  
  const savedJob = getselectJob()
  const initialJob = []
  for (const id in savedJob) {
    const foundProduct = data.jobs.find(singleData => singleData.id === id)
    if (foundProduct) {
      const quantity = savedJob[id]
      foundProduct.quantity = quantity
      initialJob.push(foundProduct)
    }
  }

  return { data, initialJob }
}