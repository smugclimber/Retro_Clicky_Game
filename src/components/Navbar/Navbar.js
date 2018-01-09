import React from "react";
import "./Navbar.css";

const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button className="navbar-brand">
          Retro Home
        </button>
      </div>
      <ul className="nav navbar-nav">
        <li className="guessText">{props.guessText}</li>
        <li className="score">Score:{props.score}</li>
      </ul>
    </div>
  </nav>;

export default Navbar;
