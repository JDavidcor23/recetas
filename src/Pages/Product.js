import React from "react";
import Form from "../components/Form";
import ListItems from "../components/ListItems";
import "../styles/index.css";

const Product = () => {
  let risoto = JSON.parse(localStorage.getItem("product"))
  return (
    <div>
      <div>
        <Form risoto={risoto} />
        <ListItems  />
      </div>
    </div>
  );
};

export default Product;
