import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { stackedChartData } from '../../data/dummy';

// Stacked Chart Component
const StackedData = ({ width = '100%', height = 400 }) => {
  // Prepare the data for the BarChart
  const chartData = stackedChartData[0].map((item, index) => ({
    name: item.x,
    Budget: stackedChartData[0][index].y,
    Expense: stackedChartData[1][index].y,
  }));

  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Budget" stackId="a" fill="#00C49F" />
        <Bar dataKey="Expense" stackId="a" fill="#FF5733" />
      </BarChart>
    </ResponsiveContainer>
  );
};

// Usage in the main App component
const Stacked = () => (
  <div style={{ width: '100%', height: '400px' }}>
   
    <StackedData/>
  </div>
);

export default Stacked;
