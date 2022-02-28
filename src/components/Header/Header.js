import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo de l'entreprise" />
      <nav className="navigation">
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-container-active" : undefined
            }
          >
            <li className="nav-item">Accueil</li>
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              isActive ? "nav-container-active" : undefined
            }
          >
            <li className="nav-item">A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
