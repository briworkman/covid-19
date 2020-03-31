import React from 'react';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className='App-header'>
      <div className='logo'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>COVID-19 Dashboard</h2>
      </div>
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
  );
}

export default Header;
