import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import links from "../constants/links";

export const Navbar = () => {
  return (
    <div className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <StaticImage src="../images/Frame 4.svg" />
          </a>
        </div>
        <div className="lg:flex lg:gap-x-12 flex">
          {links.map((links) => {
            const { id, text, url } = links;
            return (
              <div key={id}>
                <Link
                  className="text-sm font-semibold leading-6 text-gray-900"
                  to={url}
                >
                  {text}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
