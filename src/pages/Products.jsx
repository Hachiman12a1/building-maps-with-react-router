import React from "react";
import { Link } from "react-router-dom";

Products.propTypes = {};

function Products(props) {
  return (
    <section>
      <h1>The Products pages</h1>
      <ul>
        <li>
          <Link to="p1">Product 1</Link>
        </li>
        <li>
          <Link to="p2">Product 2</Link>
        </li>
        <li>
          <Link to="p3">Product 3</Link>
        </li>
      </ul>
    </section>
  );
}

export default Products;
