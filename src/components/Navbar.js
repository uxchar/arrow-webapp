import React from "react";

function Navbar() {
  return (
    <div>
      <header className="nav">
        <a className="site-logo" href="/">
          Arrow
        </a>
        <div className="hamburger">
          <div className="wrapper-menu">
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
          </div>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
      <h1 className="greeting fade-in"></h1>
    </div>
  );
}

export default Navbar;
