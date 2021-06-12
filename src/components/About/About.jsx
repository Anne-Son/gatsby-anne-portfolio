import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

import { logoData } from '../../mock/data';
import AboutLogosImg from '../Image/AboutLogosImg';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container className="contain">
      <div className="about-me">
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="about-wrapper__logos">
            <Container fluid>
             <Row >
               {logoData.map((logo) => {
                 const {img, title, id} = logo;
                 return (
                  <Col className="about-logo" key={id}><AboutLogosImg alt={title} filename={img}/></Col>
                 )
               })}
             </Row>
             </Container>
            </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Hello, I am a web developer who loves helping people and businesses to have a greater presence on the Internet. Developing not only functional web apps but also ones that are attractive to consumer.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I am a hardworking person who focuses on small details. I can not be happy until my project is completed in a professional way. I am a persistent person if I fail at something I always try to learn from my mistake'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'I am an easy-going person who can work as a part of a team or independently. I believe in helping others when they need it, and asking for help if I need it.'}
                </p>
               
              </div>
            </Fade>
          </Col>
        </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;
