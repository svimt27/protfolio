import React from "react";
import { Title } from "./Title";
import jobs from "../constants/jobs";
import { Link } from "gatsby";

export const Job = () => {
  const [value, setValue] = React.useState(0);
  const { company, position, date, desc } = jobs[value];
  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <artical className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map((item) => {
            return (
              <div key={item.id} className="job-desc">
                <p>{item.name}</p>
              </div>
            );
          })}
        </artical>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
};
