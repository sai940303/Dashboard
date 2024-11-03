// src/pages/Stacked.js
import React from 'react';
import {  Stacked as StackedData } from '../../Component';

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <h2 className="text-2xl font-semibold mb-4">Revenue Breakdown</h2>
    <div style={{ width: '100%', height: '400px' }}>
      <StackedData />
     
    </div>
  </div>
);

export default Stacked;
