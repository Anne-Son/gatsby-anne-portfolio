import React from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

const ToProjects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background2.png" }) {
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
    <section id="toprojects">
       <BackgroundImage
        className="toProjects-background"
        fluid={imageData}
       > 
         <div className="sky-container">
         <div className="star"></div>
         </div>
    <Container className="contain">
      <Title title="Projects"/>
      <div className="toprojects-wrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="/projects"
            >
              Some projects
            </a>
            </div>
  </Container>
  </BackgroundImage> 
    </section>
  );
};

export default ToProjects;
