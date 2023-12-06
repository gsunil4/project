import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./logos.png";

function Register() {
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
                  <h5 className="card-title ">Register</h5>
                  <p className="text-center color-ash">
                    Access to your dashbord
                  </p>
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address*
                  </label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="exampleFormControlInput4"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <div className="conta mb-1 ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label "
                    >
                      password*
                    </label>
                  </div>
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="exampleFormControlInput5"
                    placeholder="enter password"
                  />
                </div>
                <div>
                  <div className="conta mb-1 ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label "
                    >
                      Repeat password*
                    </label>
                  </div>
                  <div>
                    <input
                      type="password"
                      className="form-control mb-3"
                      id="exampleFormControlInput6"
                      placeholder="conform password"
                    />
                  </div>
                </div>
                <div className="d-grid mb-2">
                  <button className="btn text-white text-center " type="button">
                    Register
                  </button>
                </div>
                <p className="mb-3 text-center">
                  Alredy have an account ?{" "}
                  <Link
                    to="/"
                    className="text-decoration-none"
                    variant="danger"
                    size="lg"
                  >
                    Login
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

export default Register;
