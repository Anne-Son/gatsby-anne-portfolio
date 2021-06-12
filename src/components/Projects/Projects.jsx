import React from 'react'
import ProjectImg from '../Image/ProjectImg';
import Title from '../Title/Title';

function Projects({project}) {
    return (
        <section id="projects">
            <Title title="Projects" />
        <div className="item">
            {project.map((item)=>{

                    return (
                        <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <div className="img">
                              {item.isGif ? <img className="img-gif" src={item.gif} alt="student registration"/> : <ProjectImg alt={item.title} filename={item.img} />}
                            </div>
                            <div className="item-text">
                            <h3 className="item_text-title">{item.title || 'Project Title'}</h3>
                            <p>{item.info}</p>
                            <p>{item.info2}</p>
                            </div>
                        </div>
                        <div className="links">
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={item.url}
                      >
                        See Live
                      </a>

                      {item.repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={item.repo}
                        >
                          Source Code
                        </a>
                      )}
                      </div>
                        </div>
                    )
                })
            }
        </div>
        </section>
    )
}

export default Projects
