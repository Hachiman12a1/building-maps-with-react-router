import React from "react";
import { Route, Routes } from "react-router-dom";

Welcome.propTypes = {};

function Welcome(props) {
  return (
    <section>
      <h1>The Welcome pages</h1>
      <Routes>
        <Route path="new-user" element={<p>Welcome new user!</p>} />
      </Routes>
    </section>
  );
}

export default Welcome;
