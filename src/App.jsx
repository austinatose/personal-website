import React from 'react';
import Layout from './desktoplayout';
import MobileLayout from './mobilelayout';

function detectMob() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];
  
  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}

function App() {
  return (
    (detectMob() ? <MobileLayout/> : <Layout/>)
  );
}

export default App;
