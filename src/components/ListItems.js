import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";
const ListItems = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { items } = useSelector((state) => state.cart);
  const sumTotal = () => {
    const reducer = (acumulador, currentValue) =>
      acumulador + currentValue.price * currentValue.cantidad;
    const sum = items.reduce(reducer, 0);
    return sum.toFixed(2);
  };
  const totalItems = () => {
    const reducer = (acumulador, currentValue) =>
      acumulador + currentValue.cantidad;
    const sum = items.reduce(reducer, 0);
    return sum;
  };
  const total = () => {
    let sum = sumTotal();
    return Number(sum) + 7;
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
       {items.length  > 0 &&    
      <div
        style={{
          width: "90%",
          margin: "0auto",
          marginTop: "20px",
          padding: "10px",
        }}
      >
        <p>Items: {totalItems()} </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>Subtoal</p>
          <p>{sumTotal()}$</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>Gastos de envio</p>
          <p>7.00$</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>Total</p>
          <p>{total()}$</p>
        </div>
        <button style={{ width: "100%" }} onClick={()=>setModalOpen(true)}>Comprar ingredientes:{total()}$</button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
      } 
    </div>
  );
};

export default ListItems;
