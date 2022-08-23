import React from "react";
import { Link, Outlet } from "react-router-dom";

Welcome.propTypes = {};

function Welcome(props) {
  return (
    <section>
      <h1>The Welcome pages</h1>
      <Link to="new-user">New User</Link>
      <Outlet/>
    </section>
  );
}

export default Welcome;
