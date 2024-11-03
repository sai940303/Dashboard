import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { areaPrimaryXAxis, areaPrimaryYAxis, areaCustomSeries } from '../../data/dummy'; // Adjust the path as necessary

const App = ({ width = '100%', height = 400 }) => {
  // Prepare the data directly from areaCustomSeries
  const chartData = areaCustomSeries[0].dataSource.map((item, index) => ({
    date: item.x, // Use 'x' as date
    USA: areaCustomSeries[0].dataSource[index].y,
    France: areaCustomSeries[1].dataSource[index].y,
    Germany: areaCustomSeries[2].dataSource[index].y,
  }));

  return (
    <ResponsiveContainer width={width} height={height}>
      <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tickFormatter={(date) => new Date(date).getFullYear()} // Format as years
          {...areaPrimaryXAxis} // Spread the X-axis settings
        />
        <YAxis
          tickFormatter={(value) => `${value}%`} // Format Y-axis as percentage
          {...areaPrimaryYAxis} // Spread the Y-axis settings
        />
        <Tooltip />
        <Legend />
        {areaCustomSeries.map((series, index) => (
          <Area
            key={index}
            type="monotone"
            dataKey={series.name}
            stroke={series.name === 'USA' ? '#00C49F' : series.name === 'France' ? '#FF5733' : '#0088FE'}
            fillOpacity={0.8}
            fill={series.name === 'USA' ? '#00C49F' : series.name === 'France' ? '#FF5733' : '#0088FE'}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default App;

