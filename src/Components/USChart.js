import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer,
} from 'recharts';

export default function USChart(props) {
  const data = props.usa.map((state) => ({
    name: `${state.state}`,
    Total: `${state.total}`,
    Deaths: `${state.death}`,
    Recoveries: `${state.recovered}`,
  }));

  return (
    <div className='global-chart-container'>
      <h3>United States Statistics By State</h3>
      <div className='global-chart'>
        <ResponsiveContainer width={'98%'} height={500}>
          <BarChart
            width={800}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='Total' fill='#64DD9C' />
            <Bar dataKey='Deaths' fill='#F65064' />
            <Bar dataKey='Recoveries' fill='#449BE2' />
            <Brush
              dataKey='name'
              height={20}
              stroke='gray'
              startIndex={0}
              endIndex={7}
            ></Brush>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
