import React from 'react';
import {
   Resize, Sort, ContextMenu, Filter, Page,
  ExcelExport, PdfExport, Edit, Inject
} from '@syncfusion/ej2-react-grids';

import { ordersData,  } from '../data/dummy'; // Ensure correct path
import { Header } from '../Component'; // Ensure correct path


const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <div className="">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-left text-gray-600 uppercase text-sm">
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Item</th>
                <th className="py-3 px-4">Customer Name</th>
                <th className="py-3 px-4">Total Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">Location</th>
              </tr>
            </thead>
            <tbody>
  {ordersData.map((order, index) => (
    <tr key={`${order.OrderID}-${index}`} className="border-b text-gray-700">
      <td className="py-3 px-4">
        <img src={order.ProductImage} alt={order.OrderItems} className="w-12 h-12 rounded-lg" />
      </td>
      <td className="py-3 px-4">{order.OrderItems}</td>
      <td className="py-3 px-4">{order.CustomerName}</td>
      <td className="py-3 px-4">${order.TotalAmount.toFixed(2)}</td>
      <td className="py-3 px-4">
        <span
          className="inline-block py-1 px-3 rounded-full text-xs text-white"
          style={{
            backgroundColor: order.StatusBg,
            minWidth: '80px', // Set a fixed or minimum width
            textAlign: 'center' // Center the text within the span
          }}
        >
          {order.Status}
        </span>
      </td>
      <td className="py-3 px-4">{order.OrderID}</td>
      <td className="py-3 px-4">{order.Location}</td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>
      <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
    </div>
  );
};

export default Orders;







