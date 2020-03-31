import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import GlobalChart from './Components/GlobalChart';
import TopCards from './Components/TopCards';
import PieChartComponent from './Components/PieChart';
import RadialChart from './Components/RadialChart';
import USChart from './Components/USChart';
import CanadaChart from './Components/CanadaChart';
import AustraliaChart from './Components/AustraliaChart';
import EuropeChart from './Components/EuropeChart';
import AfricaChart from './Components/AfricaChart';
import LatinAmericaChart from './Components/LatinAmericaChart';
import About from './Components/About';

function App() {
  const [global, setGlobal] = useState([]);
  const [usa, setUsa] = useState([]);
  const [canada, setCanada] = useState([]);
  const [australia, setAustralia] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.covid19api.com/summary`)
      .then(response => {
        setGlobal(response.data.Countries);
        setCountries(response.data.Countries);
      })
      .catch(error => {
        console.log('The data was not returned', error);
      });

    axios
      .get(`https://corona.lmao.ninja/states`)
      .then(response => {
        setUsa(response.data);
      })
      .catch(error => {
        console.log('The data was not returned', error);
      });

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://covid19api.xapix.io/v2/locations`
      )
      .then(response => {
        console.log(response.data.locations);
        setCanada(response.data.locations.slice(35, 46));
        setAustralia(response.data.locations.slice(8, 17));
      })
      .catch(error => {
        console.log('The data was not returned', error);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      <div className='body'>
        <div>
          <TopCards global={global} />
          <GlobalChart global={global} />
          <USChart usa={usa} />
          <CanadaChart canada={canada} />
          <AustraliaChart australia={australia} />
          <EuropeChart europe={countries} />
          <AfricaChart africa={countries} />
          <LatinAmericaChart latinAmerica={countries} />
        </div>
        <div>
          <div className='other-data-container'>
            <div className='other-data'>
              <PieChartComponent global={global} />
              <RadialChart />
            </div>
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
