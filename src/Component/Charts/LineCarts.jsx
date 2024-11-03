import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'; // Import your dummy data

const LineCharts = ({ width = '100%', height = 420 }) => {
  // Prepare the data for the LineChart
  const chartData = lineCustomSeries[0].dataSource.map((item, index) => ({
    name: item.x,
    USA: lineCustomSeries[0].dataSource[index].y,
    France: lineCustomSeries[1].dataSource[index].y,
    Germany: lineCustomSeries[2].dataSource[index].y,
  }));

  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" {...LinePrimaryXAxis} />
        <YAxis {...LinePrimaryYAxis} />
        <Tooltip />
        <Legend />
        {lineCustomSeries.map((series, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={series.name}
            stroke={series.name === 'USA' ? '#00C49F' : series.name === 'France' ? '#FF5733' : '#0088FE'}
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
