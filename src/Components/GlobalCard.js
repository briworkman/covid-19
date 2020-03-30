import React from 'react';
import '../App.css';

function GlobalCard(props) {
  console.log(props.global);
  return (
    <div className='card-container'>
      <div className='card'>
        <h1>Global</h1>
        <div className='scrollable'>
          <table>
            <thead>
              <tr>
                <th className='headers'>Country</th>
                <th className='headers'>Total Cases</th>
                <th className='headers'>New Cases</th>
                <th className='headers'>Deaths</th>
                <th className='headers'>Recoveries</th>
              </tr>
            </thead>
            <tbody>
              {props.global.map(country => (
                <tr>
                  <td className='name'>{country.Country}</td>
                  <td className='confirmed'>{country.TotalConfirmed}</td>
                  <td className='confirmed'>{country.NewConfirmed}</td>
                  <td className='deaths'>{country.TotalDeaths}</td>
                  <td className='recovered'>{country.TotalRecovered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GlobalCard;
