import React, { useState } from "react";
import "./navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href='/'><p>QueroIngresso</p></a>
          </div>
        
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
             <a href='/'><p>Perfil</p></a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;