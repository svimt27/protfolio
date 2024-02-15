import { Link } from "gatsby";
import React from "react";
import { Project } from "./Project";
import { Title } from "./Title";

export const Projects = ({ project, title, showlink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {project.map((project, index) => {
          return (
            <Project key={project.id} index={index} {...project}></Project>
          );
        })}
      </div>
      {showlink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  );
};
