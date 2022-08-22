import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

MainHeader.propTypes = {};

function MainHeader(props) {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/welcome"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
