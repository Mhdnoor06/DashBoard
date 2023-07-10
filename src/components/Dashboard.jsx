import React from 'react';
import DashboardStatsGrid from './DashboardStatsGrid';
import TransactionChart from './TransactionChart';
import BuyerProfilePieChart from './BuyerProfilePieChart';
import Schedule from './Schedule';

function Dashboard() {
  return (
    <div className="flex flex-col gap-4 ">
      <DashboardStatsGrid />
      <TransactionChart />

      <div className="flex xl:flex-row min[375]:flex-col gap-4 w-full ">
        <div className="flex xl:flex-row flex-col w-full h-full">
          <BuyerProfilePieChart />
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
