import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'; // Adjust the path as necessary

import { useStateContext } from '../../contexts/ContextProvider';
import ChartsHeader from '../../Component/ChartHeader';

const BarComponent = () => {
  const { currentMode } = useStateContext();

  // Prepare the data for Recharts BarChart
  const chartData = barCustomSeries[0].dataSource.map((item, index) => ({
    name: item.x,
    Gold: barCustomSeries[0].dataSource[index].y,
    Silver: barCustomSeries[1].dataSource[index].y,
    Bronze: barCustomSeries[2].dataSource[index].y,
  }));

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
     
      <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="20%"
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" {...barPrimaryXAxis} />
            <YAxis {...barPrimaryYAxis} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Gold" fill="#FFD700" />
            <Bar dataKey="Silver" fill="#C0C0C0" />
            <Bar dataKey="Bronze" fill="#CD7F32" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarComponent;
