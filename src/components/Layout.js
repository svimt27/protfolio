import React from "react";
import { Hero } from "./Hero";
import { Job } from "./Job";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { Services } from "./Services";
import features from "../constants/features";

export const Layout = ({ data }) => {
  console.log(features);
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Job />
      <Projects project={features} title="featured projects" showlink />
    </div>
  );
};
