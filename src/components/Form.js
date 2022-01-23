import React from "react";
import { useDispatch } from "react-redux";
import {
  clearItemsCart,
  delFromCart,
  setItemCart,
} from "../actions/actionShopingCart";
import { useSelector } from "react-redux";
function Form({ risoto }) {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const getCantidad = (product) => {
    const resp = items.findIndex((pro) => pro.product === product);
    if (resp === -1) {
      return 0;
    } else {
      return items[resp].cantidad;
    }
  };
  const findProduct = (produc) => {
    const resp = items.some((pro) => pro.product === produc);
    if (resp) {
      dispatch(delFromCart(produc));
    }
  };
  const addAllProducts = (pro) =>{
    for(let i = 0; i< pro.length; i++){
      dispatch(setItemCart(pro[i]))
    }
  }
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div style={{ margin: "10px 0" }}>
        <p>Ingredientes</p>
        <h2>{risoto.name}</h2>
        {items.length < risoto.ingredients.length && (
          <button onClick={()=>addAllProducts(risoto.ingredients)}>Agregar todos</button>
        )}
        {items.length > 0 && (
          <button
            style={{ background: "red" }}
            onClick={() => dispatch(clearItemsCart())}
          >
            Eliminar todos
          </button>
        )}
      </div>
      <form action="" onSubmit={handleSubmit}>
        {risoto.ingredients.map((pro) => (
          <div
            key={pro.product}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              border: "1px solid grey",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <button onClick={() => dispatch(setItemCart(pro))}>
                  Agregar uno
                </button>
                <button
                  style={{ background: "red", margin: "10px 0 0 0" }}
                  onClick={() => findProduct(pro.product)}
                >
                  Eliminar uno
                </button>
              </div>
              <div
                style={{
                  padding: "20px",
                  border: "1px solid black",
                  color: "blue",
                  margin: "0 10px",
                  height: "60px",
                }}
              >
                {getCantidad(pro.product)}
              </div>
              <div>
                <p>{pro.product}</p>
                <p>{pro.brand}</p>
                <p>{pro.quantity}</p>
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                {pro.price}$
              </p>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Form;
