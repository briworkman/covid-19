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

function App() {
  const [global, setGlobal] = useState([]);
  const [usa, setUsa] = useState([]);
  const [canada, setCanada] = useState([]);
  const [australia, setAustralia] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.covid19api.com/summary`)
      .then(response => {
        setGlobal(response.data.Countries);
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
      .get(`https://cors-anywhere.herokuapp.com/https://bing.com/covid/data`)
      .then(response => {
        setCanada(response.data.areas[14].areas);
      })
      .catch(error => {
        console.log('The data was not returned', error);
      });

    axios
      .get(`https://cors-anywhere.herokuapp.com/https://bing.com/covid/data`)
      .then(response => {
        console.log(response.data.areas);
        setAustralia(response.data.areas[17].areas);
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
        </div>
        <div className='other-data'>
          <PieChartComponent global={global} />
          <RadialChart />
        </div>
      </div>
    </div>
  );
}

export default App;
