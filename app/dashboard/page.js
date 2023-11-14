// Dashboard.js

import React from 'react';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="dashboard-container bg-blue-500 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Energy Audit Dashboard</h1>
      
      {/* Quick Stats */}
      <div className="quick-stats grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="stat-box bg-white text-blue-500 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Total Audits</h2>
          <p>120</p>
        </div>
        <div className="stat-box bg-white text-blue-500 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Energy Consumption</h2>
          <p>450,000 kWh</p>
        </div>
        <div className="stat-box bg-white text-blue-500 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Savings</h2>
          <p>$20,000</p>
        </div>
      </div>
      
      {/* Recent Audits */}
      <div className="recent-audits mt-8">
      <h2 className="text-xl font-semibold mb-4">Recent Audits</h2>
        <ul>
        <li className="mb-2">
            <Link href="/audit/1">
              <p className="text-white hover:underline">Audit #1 - Soweto Building</p>
            </Link>
          </li>
          <li>
            <Link href="/audit/2">Audit #2 - Hostel C Buildings</Link>
          </li>
          <li>
            <Link href="/audit/3">Audit #3 - Hostel D Buildings</Link>
          </li>
          <li>
            <Link href="/audit/3">Audit #4 - Hostel H Buildings</Link>
          </li>
        </ul>
      </div>
      
      {/* Energy Usage Chart */}
      <div className="energy-chart">
        {/* You can use a chart library like Chart.js or D3.js for this */}
        {/* Example: <BarChart data={chartData} /> */}
        <p>Energy Usage Over Time</p>
      </div>
    </div>
  );
};

export default Dashboard;
