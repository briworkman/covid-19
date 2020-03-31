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

export default function LatinAmericaChart(props) {
  const countries = props.latinAmerica.filter(
    name =>
      name.Country === 'Brazil' ||
      name.Country === 'Chile' ||
      name.Country === 'Equador' ||
      name.Country === 'Mexico' ||
      name.Country === 'Panama' ||
      name.Country === 'Argentina' ||
      name.Country === 'Peru' ||
      name.Country === 'Dominican Republic' ||
      name.Country === 'Colombia' ||
      name.Country === 'Costa Rica' ||
      name.Country === 'Uruguay' ||
      name.Country === 'Cuba' ||
      name.Country === 'Honduras' ||
      name.Country === 'Bolivia' ||
      name.Country === 'Paraguay' ||
      name.Country === 'Guatemala' ||
      name.Country === 'El Salvador' ||
      name.Country === 'Nicaragua'
  );
  const data = countries.map(country => ({
    name: `${country.Country}`,
    Total: `${country.TotalConfirmed}`,
    Deaths: `${country.TotalDeaths == null ? 0 : country.TotalDeaths}`,
    Recoveries: `${country.TotalRecovered == null ? 0 : country.TotalRecovered}`
  }));

  return (
    <div className='global-chart-container'>
      <h3>Latin America Statistics By Country</h3>
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
