import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  {
    name: '80+',
    uv: 21.9,
    fill: '#8884d8'
  },
  {
    name: '70-79',
    uv: 8.0,
    fill: '#83a6ed'
  },
  {
    name: '60-69',
    uv: 3.6,
    fill: '#8dd1e1'
  },
  {
    name: '50-59',
    uv: 8.22,
    fill: '#82ca9d'
  },
  {
    name: '40-49',
    uv: 0.4,
    fill: '#a4de6c'
  },
  {
    name: '10-39',
    uv: 0.2,
    fill: '#d0ed57'
  },
  {
    name: '0-9',
    uv: 0,
    fill: '#ffc658'
  }
];

const style = {
  top: 250
};

export default class RadialChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9km41z5z/';

  render() {
    return (
      <div className='radial-chart'>
        <h3>Death Rate Per Age Group</h3>
        <RadialBarChart
          width={300}
          height={300}
          cx={150}
          cy={105}
          innerRadius={20}
          outerRadius={110}
          barSize={15}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey='uv'
          />
          <Legend
            iconSize={10}
            width={300}
            layout='horizontal'
            horizontalAlign='middle'
            wrapperStyle={style}
          />
        </RadialBarChart>
      </div>
    );
  }
}
