import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush
} from 'recharts';

export default function USChart(props) {
  const data = props.usa.map(state => ({
    name: `${state.state}`,
    Total: `${state.cases}`,
    Deaths: `${state.deaths}`,
    Recoveries: `${state.cases - state.active}`
  }));

  return (
    <div className='global-chart-container'>
      <h3>United States Statistics By State</h3>
      <div className='global-chart'>
        <BarChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            bottom: 5
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
      </div>
    </div>
  );
}
