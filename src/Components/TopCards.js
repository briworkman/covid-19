import React from 'react';

export default function TopCards(props) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  var totalCaseNumbers = props.global.map(country =>
    parseInt(`${country.TotalConfirmed}`)
  );
  var totalCases = totalCaseNumbers.reduce(reducer, 0);
  var newTotalCases = totalCases.toLocaleString();

  var newCaseNumbers = props.global.map(country =>
    parseInt(`${country.NewConfirmed}`)
  );
  var newCases = newCaseNumbers.reduce(reducer, 0);
  var newNewCases = newCases.toLocaleString();

  var deaths = props.global.map(country => parseInt(`${country.TotalDeaths}`));
  var TotalDeaths = deaths.reduce(reducer, 0);
  var newTotalDeaths = TotalDeaths.toLocaleString();

  var recovered = props.global.map(country =>
    parseInt(`${country.TotalRecovered}`)
  );
  var TotalRecovered = recovered.reduce(reducer, 0);
  var newTotalRecovered = TotalRecovered.toLocaleString();
  return (
    <div className='cards'>
      <div className='card'>
        <h2>{newTotalCases}</h2>
        <p>CONFIRMED CASES</p>
      </div>
      <div className='card'>
        <h2 className='new-case-numbers'>{newNewCases}</h2>
        <p>NEW CASES</p>
      </div>
      <div className='card'>
        <h2 className='death-numbers'>{newTotalDeaths}</h2>
        <p>DEATHS</p>
      </div>
      <div className='card'>
        <h2 className='recovered-numbers'>{newTotalRecovered}</h2>
        <p>RECOVERED</p>
      </div>
    </div>
  );
}
