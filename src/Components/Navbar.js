import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/"> */}
          <a className="navbar-brand" href="#">
            {props.logo}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" to="/"> */}
                <a className="nav-link active" href="#">
                  Home
                </a>
                {/* </Link> */}
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about"/>
                <a className="nav-link" href="/about">
                  {props.about}
                </a>
              </li>  */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={props.changeBackGroundColor}
          value="#0d6efd"
        >
          Blue
        </button>
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={props.changeBackGroundColor}
          value="#198754"
        >
          Green
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={props.changeBackGroundColor}
          value="#6c757d"
        >
          Grey
        </button>
        <button
          type="button"
          className="btn btn-warning mx-2"
          onClick={props.changeBackGroundColor}
          value="#ffc107"
        >
          Yellow
        </button>
        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={props.changeBackGroundColor}
          value="#0dcaf0"
        >
          Sky
        </button>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.toogleMode}
          />
          <label
            className={`form-check-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            {props.mode === "light" ? "Enable Darkmode" : "Enable Lightmode"}
          </label>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  logo: "Mittal Hunny",
  about: "About US",
};
