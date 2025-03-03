import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import ToProjects from './ToProjects/ToProjects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Top from './Top/Top';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, contact, footer }}>
      <Top/>
      <Hero />
      <About />
      <ToProjects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
