import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useForm } from '../hooks/useForm';  
import { loginGoogle, loginEmailPassword, loginFacebook } from "../actions/actionLogin";
import '../styles/form.css'
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
const handleFacebook= () => {
  dispatch(loginFacebook());
}

  const handleGoogle = () => {
    dispatch(loginGoogle());
}

  return (
    <div onSubmit={handleLogin}>
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

      </form>
      <div style={{
        display: "flex",
        justifyContent: "center",
        width: "90%",
        padding: "20px",
        margin: "0 auto",        
      }}>
        <button 
        className="google"
        onClick={handleGoogle}
        style={{ width: "100%" }}
        
        ><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt=""/>Iniciar con Google</button>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        width: "90%",
        padding: "20px",
        margin: "0 auto",        
      }}>
        <button 
        style={{ margin: "10px 0", background:"#3F51B5", color:"white", width:"100%"}}
        onClick={handleFacebook}
        ><img src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642524270/amazzonas/qijmxlqedsvoe06d3xhp.png" alt="" width="25px"/>Iniciar con Facebook</button>
        </div>
      <p style={{textAlign:"center", fontSize:"1.4rem"}}>¿No tienes cuenta aún?</p>
      <Link to="/register" style={{
        display: "flex",
        justifyContent: "center",
        width: "90%",
        padding: "20px",
        margin: "0 auto",
        textDecoration:"none"
      }}>
        <button style=
        {{ width: "100%" }}
        type="submit">Registrate</button>
      </Link>
    </div>
  );
};

export default Login;