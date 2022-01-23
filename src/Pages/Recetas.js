import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const Recetas = () => {
  const navigate = useNavigate();
  const [risoto, setRisoto] = useState([]);
  React.useEffect(() => {
    fetch("https://recipe-rissoto.vercel.app/recipe")
      .then((resp) => resp.json())
      .then((data) => setRisoto(data));
    }, []);
    const handleLogout = () => {
    localStorage.setItem("product",JSON.stringify(risoto))
    setTimeout(() => {
      navigate("/product");
    }, 1000);
  };
  return (
    <div>
      <Navbar />
      <div style={{width:"90%", margin:"0 auto"}}>
      <div className="card" style={{ width: "18rem", padding:"20px" }} >
        <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <h5 className="card-title">Receta de hoy</h5>
          <button style={{margin:"0 0 0 20px", width:"50px"}} onClick={handleLogout}>Ir</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Recetas;
