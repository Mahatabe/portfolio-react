import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Mostafa Mahatabe</h1>
        <Typed 
            className="typed-text"
            strings={["Software Developer"]}
            typeSpeed={40}
            backSpeed={60}
            loop
        />
        {/* <a  className="btn-main-offer">Contact Me</a> */}
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer" href="#">Contact Me</Link>
      </div>
    </div>
  )
}

export default Header
