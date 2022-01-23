import React from "react";
import Swal from 'sweetalert2'
import { useForm } from '../hooks/useForm';
import { useDispatch } from "react-redux";
import {registroEmailPasswordNombre} from '../actions/actionRegister';
import { Link } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
      name: '',
      email: '',
      pass1: '',
      pass2: ''
  });
  const { name, email, pass1, pass2 } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    if(pass1 !== pass2){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden',
      })
    }else{
      dispatch(registroEmailPasswordNombre(email,pass1,name))
    }
}
  return (
    <div onSubmit={handleRegistro}>
      <form action="">
        <h2 style={{ margin: "10px 0" }}>Crea tu cuenta</h2>
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Tu nombre
        </label>
        <input type="text" style={{ margin: "10px 0" }} 
        name="name"
        value={name}
        onChange={handleInputChange}
        />
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Correo electrónico
        </label>
        <input type="email" style={{ margin: "10px 0" }} 
        name="email"
        value={email}
        onChange={handleInputChange}
        />
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Contraseña
        </label>
        <input type="password" style={{ margin: "10px 0" }} 
        name="pass1"
        value={pass1}
        onChange={handleInputChange}
        />
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Vuelve a escribir la contraseña
        </label>
        <input type="password" style={{ margin: "20px 0" }} 
        name="pass2"
        value={pass2}
        onChange={handleInputChange}
        />
        <button type="submit">Crea tu cuenta de amazonas</button>
      </form>
      <p style={{textAlign:"center", fontSize:"1.4rem"}}>¿Ya tienes cuenta?</p>
      <Link to="/login" style={{
        display: "flex",
        justifyContent: "center",
        width: "90%",
        padding: "20px",
        margin: "0 auto",
        textDecoration:"none"
      }}>
        <button style=
        {{ width: "100%" }}
        type="submit">Iniciar seción</button>
      </Link>
    </div>
  );
};

export default Register;
