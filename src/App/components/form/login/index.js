import React from "react";
import "./Login.css";
import login from "../../assets/image/login.jpg";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="login__img__container">
          <img src={login} alt="login__image" className="login__image" />
        </div>
        <form action="" className="login__form">
          <div className="formdiv">
            <input type="email" className="forminput" placeholder=" " />
            <label htmlFor="" className="formlabel">
              Email
            </label>
          </div>
          <div className="formdiv">
            <input
              type="password"
              className="forminput"
              placeholder=" "
              required
            />{" "}
            <label htmlFor="" className="formlabel">
              Password
            </label>
          </div>
          <div className="signUpOpt">
            <p>
              Don't have an account? &nbsp;
              <Link
                to="/register"
                style={{ color: "#E65156", fontWeight: "bold" }}
              >
                Click here.{" "}
              </Link>
            </p>
          </div>
          <div className="options">
            <p className="keep">
              <input type="checkbox" />
              <label htmlFor="" className="keep__me__logged__in">
                Keep me Login
              </label>
            </p>
            <p className="recover">
              <a href="#">Recover Password</a>
            </p>
          </div>
          <input type="submit" value="Sign In" className="formbtn" />
          <p className="login__option">or login through</p>
          <input type="submit" value="Sign In" className="formbtn__google" />
        </form>
      </div>
    </div>
  );
};

export default index;
