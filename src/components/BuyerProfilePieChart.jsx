import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Basic Tees', value: 190 },
  { name: 'Custom Short Pants', value: 760 },
  { name: 'Super Hoodies', value: 420 },
];

const RADIAN = Math.PI / 180;
const COLORS = ['#EE8484', '#98D89E ', '#F6DC7D'];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function BuyerProfilePieChart() {
  return (
    <div className="2xl:w-1/2 2xl:h-1/2 lg:w-full bg-white p-8 mr-2 rounded-lg border border-gray-200 flex">
      <div className="flex flex-col flex-1">
        <div className="flex justify-between">
          <strong className="text-gray-900 font-black">Top products</strong>
          <p className="text-gray mr-10">May - June 2021</p>
        </div>
        <div className="flex max-sm:flex-col mt-3">
          <div className="w-1/2 max-sm:w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={105}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-1">
            {data.map((entry, index) => (
              <div key={entry.name} className="m-6">
                <span
                  className="legend-color inline-block w-3.5 h-3.5 mr-5 rounded-lg"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                <span className="legend-label">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
