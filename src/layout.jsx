// Layout.js
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
// import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default Layout;

// <About />
// <Projects />
// <Contact />
// <Footer />