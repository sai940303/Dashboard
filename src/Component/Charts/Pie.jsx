import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';

// Custom colors for chart slices
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Doughnut = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  return (
    <div id={id} style={{ backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff', padding: '10px' }}>
      <PieChart width={400} height={height}>
        <Pie
          data={data}
          dataKey="y"       // equivalent to yName in Syncfusion
          nameKey="x"       // equivalent to xName in Syncfusion
          cx="50%"          // position of center X
          cy="50%"          // position of center Y
          innerRadius={80}  // inner radius to create a doughnut shape
          outerRadius={120} // outer radius
          fill="#8884d8"    // default color
          paddingAngle={5}  // padding between slices
          label            // enable labels inside the doughnut
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />  // Applying different colors
          ))}
        </Pie>
        {legendVisiblity && <Legend />}  {/* Conditionally render the legend */}
        <Tooltip />   {/* Add tooltip */}
      </PieChart>
    </div>
  );
};

export default Doughnut;
