import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = () => {
  const AssignmentData = [
    { id: 1, name: 'assignment 1', marks: 60, },
    { id: 2, name: 'assignment 2', marks: 58, },
    { id: 3, name: 'assignment 3', marks: 58, },
    { id: 4, name: 'assignment 4', marks: 60, },
    { id: 5, name: 'assignment 5', marks: 56, },
    { id: 6, name: 'assignment 6', marks: 58, },
    { id: 7, name: 'assignment 7', marks: 60, },
    { id: 8, name: 'assignment 8', marks: 60, },
  ]

  return (
    <div className='flex justify-center items-center py-10 mx-auto'>
       <AreaChart
          width={1000}
          height={400}
          data={AssignmentData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    </div>
  );
};

export default Chart;