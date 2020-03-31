import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

export default function PieChartComponent(props) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var totalCaseNumbers = props.global.map(country =>
    parseInt(`${country.TotalConfirmed}`)
  );
  var totalCases = totalCaseNumbers.reduce(reducer, 0);

  var deaths = props.global.map(country => parseInt(`${country.TotalDeaths}`));
  var totalDeaths = deaths.reduce(reducer, 0);

  var recovered = props.global.map(country =>
    parseInt(`${country.TotalRecovered}`)
  );
  var TotalRecovered = recovered.reduce(reducer, 0);

  var deathPercentage = (totalDeaths / totalCases) * 100;
  var recoveredPercentage = (TotalRecovered / totalCases) * 100;
  var stillIll = 100 - deathPercentage - recoveredPercentage;
  const data = [
    { name: 'Deaths', value: deathPercentage },
    { name: 'Recoveries', value: recoveredPercentage },
    { name: 'Currently Sick', value: stillIll }
  ];

  const COLORS = ['#f65064', '#449be2', '#64dd9c'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className='pie-chart'>
      <h3>Global Percentages</h3>
      <PieChart width={400} height={400}>
        <Legend />
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          fill='#8884d8'
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
