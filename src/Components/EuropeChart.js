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
  ResponsiveContainer
} from 'recharts';

export default function EuropeChart(props) {
  const countries = props.europe.filter(
    name =>
      name.Country === 'Italy' ||
      name.Country === 'Spain' ||
      name.Country === 'Germany' ||
      name.Country === 'France' ||
      name.Country === 'Switzerland' ||
      name.Country === 'Belgium' ||
      name.Country === 'Netherlands' ||
      name.Country === 'Austria' ||
      name.Country === 'Portugal' ||
      name.Country === 'Norway' ||
      name.Country === 'Sweden' ||
      name.Country === 'Czechia' ||
      name.Country === 'Ireland' ||
      name.Country === 'Denmark' ||
      name.Country === 'Romania' ||
      name.Country === 'Poland' ||
      name.Country === 'Luxembourg' ||
      name.Country === 'Greece' ||
      name.Country === 'Croatia' ||
      name.Country === 'Serbia' ||
      name.Country === 'Slovania' ||
      name.Country === 'Estonia' ||
      name.Country === 'Lithuania' ||
      name.Country === 'Hungary' ||
      name.Country === 'Latvia' ||
      name.Country === 'Bulgaria' ||
      name.Country === 'Slovakia' ||
      name.Country === 'San Morino' ||
      name.Country === 'Cyprus' ||
      name.Country === 'Albania' ||
      name.Country === 'Malta' ||
      name.Country === 'Belarus'
  );
  const data = countries.map(country => ({
    name: `${country.Country}`,
    Total: `${country.TotalConfirmed}`,
    Deaths: `${country.TotalDeaths == null ? 0 : country.TotalDeaths}`,
    Recoveries: `${country.TotalRecovered == null ? 0 : country.TotalRecovered}`
  }));

  return (
    <div className='global-chart-container'>
      <h3>Europe Statistics By Country</h3>
      <div className='global-chart'>
        <ResponsiveContainer width={'98%'} height={500}>
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
        </ResponsiveContainer>
      </div>
    </div>
  );
}
