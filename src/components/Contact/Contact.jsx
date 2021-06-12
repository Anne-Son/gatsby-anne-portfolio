import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "contactBg1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <section id="contact">
      <BackgroundImage
        className="contact-background"
        fluid={imageData}
       > 
      <Container className="contain">
      <div className="me">
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/Anne-Son'}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
        </div>
      </Container>
      </BackgroundImage> 
    </section>
  );
};

export default Contact;

