import React from 'react';

export default function DashboardStatsGrid() {
  const Stats = [
    {
      key: 1,
      label: 'Total Revenues',
      amount: '$2,129,430',
      color: '#DDEFE0',
      icon: './totalsales.svg',
    },
    {
      key: 2,
      label: 'Total Transactions',
      amount: '1,520',
      color: '#F4ECDD',
      icon: './totaltransaction.svg',
    },
    {
      key: 3,
      label: 'Total Likes',
      amount: '9,721',
      color: '#EFDADA',
      icon: './totallikes.svg',
    },
    {
      key: 4,
      label: 'Total Users',
      amount: '892',
      color: '#DEE0EF',
      icon: './totaluser.svg',
    },
  ];
  return (
    <div className="flex gap-4 flex-wrap  justify-between  ">
      {Stats.map((items) => (
        <BoxWrapper color={items.color} key={items.key}>
          <div className="flex flex-col">
            <div className="rounded-full h-8 w-8 flex items-center justify-center  ml-44">
              <img src={items.icon} alt="" className="w-6" />
            </div>
            <div className="pl-4">
              <span className="text-md font-light">{items.label}</span>
              <div className="flex items-center">
                <strong className="text-2xl font-black">{items.amount}</strong>
              </div>
            </div>
          </div>
        </BoxWrapper>
      ))}
    </div>
  );
}

function BoxWrapper({ children, color }) {
  return (
    <div
      className="bg-white rounded-3xl p-4 py-6 border border-gray-200 flex  flex-1  w-60   "
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
}
