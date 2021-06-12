import React, { useState, useEffect } from 'react';
import Footer from './Footer/Footer';
import Top from './Top/Top';
import Filter from './Filters/Filters';
import Projects from './Projects/Projects';

import { PortfolioProvider } from '../context/context';

import { headerData, projectsData, footerData } from '../mock/data';

const allCategories = ['All', ...new Set(projectsData.map(data => data.category))];

function ProjectsApp() {
  const [project, setProject] = useState([]);
  const [filters] = useState(allCategories);
  const [footer, setFooter] = useState({});
  const [header, setHeader] = useState({});

  useEffect(() => {
    setHeader({...headerData});
    setProject([...projectsData]);
    setFooter({ ...footerData });
  }, []);

  const refine = (button) =>{
    if(button === 'All'){
      setProject(projectsData);
      return;
    }
    const filteredData = projectsData.filter(data => data.category === button);
    setProject(filteredData)
  }

  return (
    <PortfolioProvider value={{header, footer}}>
      <Top/>
      <Filter filters={filters} refine={refine}/>
      <Projects project={project}/>
      <Footer />
    </PortfolioProvider>
  );
}
export default ProjectsApp;