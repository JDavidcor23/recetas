import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import ListItems from "../components/ListItems";
import "../styles/index.css";
const url = "https://recipe-rissoto.vercel.app/recipe";

const Product = () => {
  const [risoto, setRisoto] = useState([]);
  React.useEffect(() => {
    fetch("https://recipe-rissoto.vercel.app/recipe")
      .then((resp) => resp.json())
      .then((data) => setRisoto(data));
  });
  return (
    <div>
      <div>
        {/* <Form risoto={risoto} />
        <ListItems risoto={risoto} /> */}
      </div>
    </div>
  );
};

export default Product;
