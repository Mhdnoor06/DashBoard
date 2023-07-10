import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { useState, useEffect } from 'react';

const data = [
  {
    name: '',
    Guest: 200,
    User: 100,
  },
  {
    name: 'Week 1',
    Guest: 400,
    User: 470,
  },
  {
    name: 'Week 2',
    Guest: 200,
    User: 150,
  },
  {
    name: 'Week 3',
    Guest: 300,
    User: 450,
  },
  {
    name: 'Week 4',
    Guest: 210,
    User: 150,
  },
];

function TransactionChart() {
  const [aspectRatio, setAspectRatio] = useState(getAspectRatio());

  useEffect(() => {
    function handleResize() {
      setAspectRatio(getAspectRatio());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getAspectRatio() {
    if (window.innerWidth >= 1024) {
      return 5;
    } else if (window.innerWidth >= 425) {
      return 2;
    } else {
      return 1;
    }
  }
  return (
    <div className="flex flex-col mt-2 bg-white p-4 rounded-lg">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="font-black text-lg">Activities</h1>
          <p>May - June 2021</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <span className="mx-2 md:mx-4 text-sm">
            <span
              className="legend-color inline-block w-2.5 h-2.5 mr-3 rounded-lg"
              style={{ backgroundColor: '#E9A0A0' }}
            ></span>
            Guest
          </span>
          <span className="mx-2 md:mx-4 text-sm">
            <span
              className="legend-color inline-block w-2.5 h-2.5 mr-3 rounded-lg"
              style={{ backgroundColor: '#9BDD7C' }}
            ></span>
            User
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" aspect={aspectRatio}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid vertical="" stroke="#c5c5c5" />
          <XAxis dataKey="name" tick={{ fill: '#000', fontSize: 10 }} />
          <YAxis
            tick={{ fill: '#000', fontSize: 10 }}
            ticks={[0, 100, 200, 300, 400, 500]}
            domain={[0, 'dataMax']}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#8884d8', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
            cursor={false}
          />
          <Line
            type="monotone"
            dataKey="Guest"
            stroke="#E9A0A0"
            strokeWidth="3"
            dot={{ fill: '#2e4355', stroke: '#E9A0A0', strokeWidth: 2, r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="User"
            stroke="#9BDD7C"
            strokeWidth="3"
            dot={{ fill: '#2e4355', stroke: '#9BDD7C', strokeWidth: 2, r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TransactionChart;
