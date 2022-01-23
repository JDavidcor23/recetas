import React from "react";
import "../styles/modal.css";
import { useNavigate } from "react-router-dom";
import { clearItemsCart } from "../actions/actionShopingCart";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
function Modal({ setOpenModal }) {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const payProducts = () => {
    dispatch(clearItemsCart());
    Swal.fire({
      icon: "success",
      title: "Transacción realizada correctamente",
      showConfirmButton: false,
      timer: 2000,
    });
    setOpenModal(false);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        </div>
        <div className="title">
          <h1>¿Seguro que quieres realizar esta compra?</h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
            style={{display:"flex", alignItems:"center", justifyContent:"center"}}
          >
            Cancelar
          </button>
          <button style={{display:"flex", alignItems:"center", justifyContent:"center"}}  onClick={()=>payProducts()}>Continuar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;