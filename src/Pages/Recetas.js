import React from "react";
import Navbar from "../components/Navbar";
import { logout } from "../actions/actionLogin";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Recetas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <button onClick={() => handleLogout()}>Logout</button>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <Link to="/product">IRR</Link>
    </div>
  );
};

export default Recetas;
