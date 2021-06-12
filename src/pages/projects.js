import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { headData } from '../mock/data';
import '../style/main.scss';
import ProjectsApp from '../components/ProjectsApp';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Projects" />
      </Helmet>
      <ProjectsApp/>
      </>
      );
};