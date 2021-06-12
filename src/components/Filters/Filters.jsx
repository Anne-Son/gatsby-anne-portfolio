import React, { useContext} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "gatsby"
import LogoImage from '../Image/LogoImg';
import PortfolioContext from '../../context/context';

function Filter({filters, refine}){
  const { header } = useContext(PortfolioContext);
  const { title, img } = header;
    return(
      <section id="filters">
        <Navbar expand="md">
        <Navbar.Brand ><Link to="/"><LogoImage alt={title} filename={img} /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive"/>
          <Navbar.Collapse id="navbarResponsive" >
          <Nav as="ul" className="ml-auto">
        <div className="filters-btn">
          {
            filters.map((cat,i)=>{
              return <Nav.Item as="li"><a
              rel="noopener noreferrer"
              className="cta-btn cta-btn-filter text-color-main"
              onClick={()=> refine(cat)}
              key={i}
            >
              {cat}
            </a></Nav.Item>
            })
          }
        </div>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        
</section>
    )
}
export default Filter;