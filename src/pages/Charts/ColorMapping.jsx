import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';
import ChartsHeader from '../../Component/ChartHeader';

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  // Assuming colorMappingData[0] has the data for the USA
  const chartData = colorMappingData[0];

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Color Mapping" title="USA CLIMATE - WEATHER BY MONTH" />
     
      <div className="w-full" style={{ height: '400px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" {...ColorMappingPrimaryXAxis} />
            <YAxis {...ColorMappingPrimaryYAxis} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="y"
              fill="#00C49F" // Set the color based on your color mapping logic
              radius={[10, 10, 0, 0]} // Apply corner radius
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ColorMapping;
