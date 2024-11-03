import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import { pieChartData } from '../../data/dummy'

// Sample colors for the pie chart slices
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF8042', '#FF8042', '#FF8042'];

const PieChartComponent = () => {
  // Centering the chart using flexbox
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: 'center' }}>
        <h2>Cost Distribution</h2>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="y"
            isAnimationActive={true}
            data={pieChartData}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label={(entry) => `${entry.x}: ${entry.text}`} // Display category and percentage
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartComponent;
