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

export default function AfricaChart(props) {
  const countries = props.africa.filter(
    name =>
      name.Country === 'South Africa' ||
      name.Country === 'Egypt' ||
      name.Country === 'Algeria' ||
      name.Country === 'Tunisia' ||
      name.Country === 'Burkina Faso' ||
      name.Country === 'Senegal' ||
      name.Country === 'Ghana' ||
      name.Country === 'Cameroon' ||
      name.Country === 'Nigeria' ||
      name.Country === 'Mauritius' ||
      name.Country === 'Rwanda' ||
      name.Country === 'Kenya' ||
      name.Country === 'Madagascar' ||
      name.Country === 'Zambia' ||
      name.Country === 'Togo' ||
      name.Country === 'Uganda' ||
      name.Country === 'Niger' ||
      name.Country === 'Mali' ||
      name.Country === 'Ethiopia' ||
      name.Country === 'Guinea' ||
      name.Country === 'Congo Republic' ||
      name.Country === 'Djibouti' ||
      name.Country === 'Eritrea' ||
      name.Country === 'Equatorial Guinea' ||
      name.Country === 'Namibia' ||
      name.Country === 'Eswatini' ||
      name.Country === 'Mozambique' ||
      name.Country === 'Libya' ||
      name.Country === 'Seychelles' ||
      name.Country === 'Guinea-Bissau' ||
      name.Country === 'Angola' ||
      name.Country === 'Gabon' ||
      name.Country === 'Zimbabwe' ||
      name.Country === 'Sudan' ||
      name.Country === 'Benin' ||
      name.Country === 'Central African Republic' ||
      name.Country === 'Mauritania' ||
      name.Country === 'Chad' ||
      name.Country === 'Liberia' ||
      name.Country === 'Somalia'
  );
  const data = countries.map(country => ({
    name: `${country.Country}`,
    Total: `${country.TotalConfirmed}`,
    Deaths: `${country.TotalDeaths == null ? 0 : country.TotalDeaths}`,
    Recoveries: `${country.TotalRecovered == null ? 0 : country.TotalRecovered}`
  }));

  return (
    <div className='global-chart-container'>
      <h3>Africa Statistics By Country</h3>
      <div className='global-chart'>
        <ResponsiveContainer width={'98%'} height={500}>
          <BarChart
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
