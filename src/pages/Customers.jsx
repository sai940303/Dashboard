

import React from 'react';
import {  Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData} from '../data/dummy'

import { Header } from '../Component';

const Customers = () => {
  //const selectionsettings = { persistSelection: true };
  //const toolbarOptions = ['Delete'];
  //const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      
        
         
          <div className="p-4">
   
   <table className="min-w-full border-collapse border border-gray-200">
     <thead>
       <tr className="bg-gray-100">
         
         <th className="border border-gray-200 p-2"> Image</th>
         <th className="border border-gray-200 p-2">Customer Name</th>
         <th className="border border-gray-200 p-2">Email</th>
         <th className="border border-gray-200 p-2 ">Project Name</th>
         <th className="border border-gray-200 p-2">Status</th>
         <th className="border border-gray-200 p-2">Weeks</th>
         <th className="border border-gray-200 p-2">Budget</th>
         <th className="border border-gray-200 p-2"></th>
       </tr>
     </thead>
     <tbody>
       {customersData.map((order) => (
         <tr key={order.CustomerID} className="hover:bg-gray-50 ">
           
           <td className="border border-gray-200 p-2 ">
             <img
               src={order.CustomerImage}
               alt={order.CustomerName}
               className="w-10 h-10 rounded-full" // Adjust size as needed
             />
           </td>
           <td className="border border-gray-200 p-2">{order.CustomerName}</td>
           <td className="border border-gray-200 p-2">{order.CustomerEmail}</td>
           <td className="border border-gray-200 p-2">{order.ProjectName}</td>
           <td className="border border-gray-200 p-2">
             <span
               className="inline-block w-3 h-3 rounded-full"
               style={{ backgroundColor: order.StatusBg }}
             ></span>
             {order.Status}
           </td>
           <td className="border border-gray-200 p-2">{order.Weeks}</td>
           <td className="border border-gray-200 p-2">{order.Budget}</td>
          
         </tr>
       ))}
     </tbody>
   </table>
 </div>
        
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
     
    </div>
  );
};

export default Customers;


