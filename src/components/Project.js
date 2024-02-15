import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export const Project = ({
  title,
  description,
  githubUrl,
  imageUrl,
  url,
  satck,
  index,
}) => {
  return (
    <article className="project">
      <GatsbyImage />
    </article>
  );
};
Project.propTypes = {};
