import React from "react";
import { Link } from "react-router-dom";

const RouterNav: React.FC = () => {
    return (<div>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/about">About</Link>
    </div>)
}

export default RouterNav;