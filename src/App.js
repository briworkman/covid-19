import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import GlobalChart from './Components/GlobalChart';

function App() {
  const [global, setGlobal] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.covid19api.com/summary`)
      .then(response => {
        setGlobal(response.data.Countries);
      })
      .catch(error => {
        console.log('The data was not returned', error);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      <GlobalChart global={global} />
    </div>
  );
}

export default App;
