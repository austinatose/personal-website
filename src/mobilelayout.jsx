// Layout.js
import React from 'react';
// import Header from './components/header';
import Footer from './components/footer';
import Content1 from './components/mobile/content1';
import Content2 from './components/mobile/content2';
import Content3 from './components/mobile/content3';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
// import Footer from './Footer';

const MobileLayout = () => {
  return (
    <div>
      <Content1/>
      <Content2/>
      <Content3/>
      <Footer/>
    </div>
  );
};

export default MobileLayout;

// <Header/>
// <Content1/>
// <Content2/>
// <Footer/>