import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearItemsCart } from '../actions/actionShopingCart';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FormPay = () => {
    const {items} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const sumTotal = () =>{
        const reducer = (acumulador, currentValue) => acumulador + (currentValue.price * currentValue.cantidad)
        const sum = items.reduce(reducer,0)
        return Number(sum.toFixed(2)) + 7
      }
      const handleSubmit =(e)=>{
          e.preventDefault();
      }
      const payProducts = () => {
        dispatch(clearItemsCart());
        Swal.fire({
          icon: "success",
          title: "Transacción realizada correctamente",
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      };
    return (
        <div style={{margin:"0 0 20px 0"}}>
            {items.length > 0 &&
            <form style={{width: "90%", display: "flex",flexDirection:"column",margin:"0 auto", marginTop:"30px", padding:"20px"}} onSubmit={handleSubmit}>
                <h2 style={{margin:"0 0 20px 0"}}>Paga tus productos aquí</h2>
            <div className="form-group">
                <img
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642520839/amazzonas/mswab4bnxalq4zykdzpr.png"
                alt="Visa, Mastercard, American express Logo"
                width="150px"
                />
                <br />

                <label>Numero de tarjeta</label>
                <input type="number" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                required
                />
            </div>
            <div className="form-group">
                <label >Fecha de Vencimiento</label>
                <input type="date" 
                className="form-control" 
                id="exampleInputPassword1"
                placeholder="dd/mm/aaaa"
                required
                />
            </div>
            <div className="form-group">
                <label >CVC</label>
                <input type="number" 
                className="form-control" 
                id="exampleInputPassword1"
                required
                />
            </div>
            <div className="form-group" style={{display:"flex", flexDirection:"column"}}>
                <p style={{fontSize:"1.8rem"}} >Total:US${sumTotal()}</p>
                <button type="submit" className="btn btn-success" style={{width:"200px"}} onClick={() => payProducts()}>Pagar</button>
            </div>
            </form>}
        </div>

    );
};

export default FormPay;