import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <a
          href='https://ko-fi.com/W7W11K588'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='coffee'
            height='40'
            src='https://az743702.vo.msecnd.net/cdn/kofi5.png?v=2'
            border='0'
            alt='Buy Me a Coffee at ko-fi.com'
          />
        </a>
      </header>
    </div>
  );
}

export default App;
