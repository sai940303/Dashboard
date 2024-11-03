import React from 'react';

import { employeesData } from '../data/dummy';
import { Header } from '../Component';

const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />

      <div>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Employee</th>
              <th className="border border-gray-300 p-2">Designation</th>
              <th className="border border-gray-300 p-2">Hire Date</th>
              <th className="border border-gray-300 p-2">Country</th>
              <th className="border border-gray-300 p-2">Reports To</th>
            </tr>
          </thead>
          <tbody>
            {employeesData.map((employee, index) => (
              <tr key={`${employee.EmployeeID}-${index}`}>
                <td className="border border-gray-300 p-2 flex">
                  <img 
                    src={employee.EmployeeImage} 
                    alt={employee.Name} 
                    className="w-12 h-12 rounded-full mr-3" 
                  />
                  <span className="mt-3">{employee.Name}</span>
                </td>
                <td className="border border-gray-300 p-2">{employee.Title}</td>
                <td className="border border-gray-300 p-2">{employee.HireDate}</td>
                <td className="border border-gray-300 p-2">{employee.Country}</td>
                <td className="border border-gray-300 p-2">{employee.ReportsTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
  );
};

export default Employees;
