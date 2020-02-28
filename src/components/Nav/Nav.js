import React from "react";
import "../../index.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/">{props.title}</a>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;
