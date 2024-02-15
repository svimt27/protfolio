import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import services from "../constants/services";
import { Title } from "./Title";

export const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, text, title } = service;
          return (
            <article key={id} className="service">
              {/* <StaticImage src={icon} alt="alt.svg" className="w-8 h-8" /> */}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
