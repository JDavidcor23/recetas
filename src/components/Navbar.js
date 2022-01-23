import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/actionLogin";

const Navbar = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
      };
    const {name} = useSelector(state => state.login)
    return (
        <nav className="navbar navbar-light bg-light" style={{marginBottom:"20px"}}>
            <div style={{width:"90%",  margin:"0 auto", display:"flex", justifyContent:"space-between"}}>
                <span className="navbar-brand mb-0 h1">Hola {name}</span>
                <span className="navbar-brand mb-0 h1" onClick={() => handleLogout()} style={{cursor:"pointer"}}>Cerrar secion</span>
            </div>
        </nav>
    );
};

export default Navbar;