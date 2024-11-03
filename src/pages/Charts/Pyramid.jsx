import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { PyramidData } from '../../data/dummy';
//import { useStateContext } from '../../contexts/ContextProvider';
import ChartsHeader from '../../Component/ChartHeader';


const Pyramid = () => {
 // const {currentMode} = useStateContext();

  // Define colors for each segment of the pie chart
  const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#FF5642'];

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      
      <div className="w-full" style={{ height: '400px' }}>
        <ResponsiveContainer>
          <PieChart>
            <Tooltip />
            <Pie
              data={PyramidData}
              dataKey="y"
              nameKey="x"
              cx="50%"
              cy="50%"
              outerRadius="70%"
              innerRadius="40%"
              label
              paddingAngle={5}
            >
              {PyramidData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Pyramid;
