import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush
} from 'recharts';

export default function GlobalChart(props) {
  var jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
  const data = props.global.map(country => ({
    name: `${country.Country}`,
    Total: `${country.TotalConfirmed}`,
    Deaths: `${country.TotalDeaths}`,
    Recoveries: `${country.TotalRecovered}`
  }));

  return (
    <div className='global-chart'>
      <BarChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
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
          stroke='#000000'
          startIndex={0}
          endIndex={10}
        ></Brush>
      </BarChart>
    </div>
  );
}
