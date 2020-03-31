import React from 'react';

export default function About() {
  return (
    <div className='about-container'>
      <h2>About COVID-19</h2>
      <h3>What is COVID-19?</h3>
      <p>COVID-19 stands for COronaVIrus Disease 2019</p>
      <p>
        COVID-19 is a respiratory illness which spreads from person to person by
        droplets from <br />
        sneezes and coughs. It is caused by a new type of coronavirus that was
        first identified <br />
        in 2019 in Wuhan, China.
      </p>
      <h3>How to Protect Yourself</h3>
      <ul>
        <li>Wash your hands often</li>
        <li>Avoid touching your eyes, nose, and mouth with unwashed hands</li>
        <li>Avoid close contact with people who are sick</li>
        <li>
          Put distance (at lease 6 feet) between yourself and other people in
          your community
        </li>
      </ul>
      <h3>Symptoms of COVID-19</h3>
      <p>These symptoms may appear 2-14 days after exposure</p>
      <ul>
        <li>Fever</li>
        <li>Cough</li>
        <li>Shortness of Breath</li>
      </ul>
      <h3>If You're Sick</h3>
      <ul>
        <li>Stay Home</li>
        <li>Stay in Touch with Your Doctor</li>
        <li>Avoid Public Transportation</li>
        <li>Separate yourself from others as much as possible</li>
        <li>Call ahead before visiting your doctor</li>
      </ul>
      <br />
      <p className='source'>
        source:{' '}
        <a
          href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          Center for Disease Control
        </a>
      </p>
    </div>
  );
}
