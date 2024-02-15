import { Link } from "gatsby";
import { React } from "react";

export default [
  {
    id: 1,
    text: "Our Solutions",
    url: "/",
  },
  {
    id: 2,
    text: "How it works",
    url: "/works",
  },
  {
    id: 3,
    text: "About Us",
    url: "/about",
  },
  {
    id: 1,
    text: "Request a demo",
    url: "/request-demo",
  },
];

// const tempLinks = data.map((el) => {
//   return (
//     <li key={el.id}>
//       <Link to={el.url}>{el.text}</Link>
//     </li>
//   );
// });

// export default ({ styleClass }) => {
//   return (
//     <ul className={`page-links ${styleClass ? styleClass : ""} `}>
//       {tempLinks}
//     </ul>
//   );
// };
