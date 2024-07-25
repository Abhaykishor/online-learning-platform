import React from "react";
import { Link } from "react-router-dom";
const SubNav = () => {
  return (
    <div className="flex  w99 justify-around  bg-gray-500 topTitle items-center">
<Link className="subnav" to="/study">Start DSA</Link>
<Link className="subnav" to="/">HOME</Link>
<Link className="subnav" to="/course">Our Course's</Link>
    </div>
  );
};

export default SubNav;
