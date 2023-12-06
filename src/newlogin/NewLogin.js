import React from "react";
import { Link } from "react-router-dom";
import logo from "./logos.png";
import "./style.css";
import usePassworldToggle from "./passwlogos.js";

function NewLogin() {
  const [PasswordInputType, ToggleIcon] = usePassworldToggle();

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center vh-100 align-items-center body">
        <div className=" row " style={{ width: "350px" }}>
          <div className=" text-center mb-4">
            <img src={logo} alt="logo" />
          </div>
          <div className=" col">
            <div className="card shadow-lg">
              <div className="card-body">
                <div className="card-title text-center mb-4">
                  <h5 className="card-title ">loginpage</h5>
                  <p className="text-center color-ash">Access to your dashbord</p>
                </div>
                <div className="mb-2">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <div className="conta mb-1 ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label "
                    >
                      password
                    </label>
                    <a href="www.google.com" className="color-ash">
                      <label>Forgot Password?</label>
                    </a>
                  </div>
                  <span className="password-toogle-icon color-ash ">
                    {ToggleIcon}
                  </span>
                  <input
                    type={PasswordInputType}
                    className="form-control mb-3"
                    id="exampleFormControlInput2"
                    placeholder="enter password"
                  />
                </div>

                <div className="d-grid mb-2">
                  <button className="btn text-white " type="button">
                    Login
                  </button>
                </div>
                <p className="mb-3 text-center">
                  Don't have an account yet?{" "}
                  <Link
                    to="/Register"
                    className="text-decoration-none"
                    variant="danger"
                    size="lg"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLogin;
