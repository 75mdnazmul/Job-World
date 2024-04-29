import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './component/Home/Home';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Chart from './component/Chart/Chart';
import JobDetails from './component/JobDetails/JobDetails';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import { productsAndCartData } from './component/Loaders/selectJob';
import Blog from './component/Blog/Blog';
import FeatureItem from './component/FeatureItem/FeatureItem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: '/', element: <Home></Home>, loader: ()=> fetch('CompanyData.json') },
      { path: '/chart', element: <Chart></Chart> },
      {  path: '/job_details', element: <JobDetails></JobDetails> },
      { path: '/applied_jobs', element: <AppliedJobs></AppliedJobs>, loader: productsAndCartData },
      { path: '/blog', element: <Blog></Blog>},
      { path: '/feature_item', element: <FeatureItem></FeatureItem>},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
