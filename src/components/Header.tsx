import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/Kawasaki logo.png";
import Phone from "../assets/Phone.png";
import "./styleHeader.css";

const Header = () => {
  return (
    <div>
      <div className="Header-Container">
        <div className="Logo-Container">
          <img src={LOGO} alt="Logo" className="LOGO"></img>
          <div className="Brand-Name">Kawasaki</div>
        </div>
        <div className="Contacts-Container">
          <div>Our contacts</div>
          <div>+37067858479</div>
          <img src={Phone} alt="PhoneImg" className="PhoneImg"></img>
        </div>
      </div>
      <div className="bar">
        <Link to="/Motociklai" className="btn">
          Motorcycle
        </Link>
        <Link to="/Usedmotorcicle" className="btn">
          Used motorcycles
        </Link>
        <Link to="/Service" className="btn">
          Service
        </Link>
        <Link to="/PartsCatalog" className="btn">
          Parts catalog
        </Link>
        <Link to="/Bikerpedia" className="btn">
          BikerPedia
        </Link>
      </div>
    </div>
  );
};

export default Header;
