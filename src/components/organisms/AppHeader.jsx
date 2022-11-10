import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo/LogoMenu.png";

export default function AppHeader() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-cunstom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" width="80%" height="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>

            <li>
              <Link to="/depoimentos" className="nav-link px-2 link-dark">
                Depoimentos
              </Link>
            </li>
            <li>
              <Link to="/planos" className="nav-link px-2 link-dark">
                Planos
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="nav-link px-2 link-dark">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contato" className="nav-link px-2 link-dark">
                Contato
              </Link>
            </li>
            <li>
              <Link to="/cadastro" className="nav-link px-2 link-dark">
                Cadastro
              </Link>
            </li>
          </ul>

          <div className="navbar-nav">
            <li>
              <Link to="/login/" className="nav-link link-dark">
                Login
              </Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}
