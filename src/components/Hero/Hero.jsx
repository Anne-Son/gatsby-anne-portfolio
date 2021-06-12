import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import Typewriter from 'typewriter-effect';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "heroBg.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <section id="hero" className="jumbotron">
      <BackgroundImage className="hero-background" fluid={imageData}>
        <div className="sky-container">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
        <Container>
          <div className="me">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="hero-title">
                {title || 'Hi, my name is'}{' '}
                <span className="text-color-main">{name || 'Hyu Son'}</span>
                <br />
                <span className="call-me">
                  (You can call me <span className="text-color-main">Anne</span> )
                </span>
                {subtitle || (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('I am a Web Developer')
                        .pauseFor(200)
                        .deleteChars(13)
                        .typeString('Front-End Developer')
                        .pauseFor(1000)
                        .start();
                    }}
                  />
                )}
              </h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <Link to="about" smooth duration={1000}>
                    {cta || 'Know more'}
                  </Link>
                </span>
              </p>
            </Fade>
          </div>
        </Container>
      </BackgroundImage>
    </section>
  );
};

export default Header;
