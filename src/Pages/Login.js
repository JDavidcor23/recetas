import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useForm } from '../hooks/useForm';  
import { loginGoogle, loginEmailPassword } from "../actions/actionLogin";

const Login = () => {
  const dispatch = useDispatch()
  const [ values, handleInputChange ] = useForm({
    email: '',
    password: ''
})

const {email,password} = values;

const handleLogin = (e) => {
   e.preventDefault();
   dispatch(loginEmailPassword(email,password));
}


  const handleGoogle = () => {
    dispatch(loginGoogle());
}

  return (
    <div onSubmit={handleLogin}>
      <img
        src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640709665/amazzonas/tpifbyb9w3a4bgaqladx.png"
        alt="amazonas logo"
        width="125px"
      />
      <form action="" onSubmit={handleLogin}>
        <h2 style={{ margin: "10px 0" }}>Iniciar sesión</h2>
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Correo electrónico
        </label>
        <input style={{ margin: "10px 0" }} 
        type="email"
        placeholder="Enter email"
        name="email"
        value={email}
        multiple
        onChange={handleInputChange}
        />
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Contraseña
        </label>
        <input type="password" style={{ margin: "10px 0" }} 
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange} />
        <button style=
        {{ margin: "20px 0" }}
        type="submit">Continuar</button>

        <button 
        style={{ margin: "20px 0", background:"white", borderColor:"black"}}
        onClick={handleGoogle}
        ><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt=""/>Iniciar con Google</button>
      </form>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <button>Crea tu cuenta</button>
      </Link>
    </div>
  );
};

export default Login;