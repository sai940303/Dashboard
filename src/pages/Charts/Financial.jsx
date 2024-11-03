import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'; // Import your data
import { useStateContext } from '../../contexts/ContextProvider';
import ChartsHeader from '../../Component/ChartHeader';


const Financial = () => {
  const { currentMode } = useStateContext();

  // Filter data for dates after January 1, 2017
  const date1 = new Date('2017-01-01');
  const filteredData = financialChartData.filter(item => item.x >= date1);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Financial" title="AAPL Historical" />
     
      <div className="w-full" style={{ height: '400px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="x"
              tickFormatter={(tick) => new Date(tick).toLocaleDateString()}
              {...FinancialPrimaryXAxis} // Applying additional properties if needed
            />
            <YAxis {...FinancialPrimaryYAxis} /> // Applying additional properties if needed
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="high" stroke="#00C49F" name="High" />
            <Line type="monotone" dataKey="low" stroke="#FF5733" name="Low" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Financial;
