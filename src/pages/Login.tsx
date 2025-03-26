import React from "react";
import "../css/Login.scss";
import { authentication, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export const Login = () => {
  const signIn = () => {
    signInWithPopup(authentication, provider).catch((error) =>
      alert(error.message)
    );
  };
  return (
    <div className="login">
      <div className="loginInfo">
        <div className="loginInput">
          <h2>Welcome back!</h2>
          <p>EMAIL OR PHONE NUMBER <span>*</span></p>
          <input type="text" />
          <p>PASSWORD <span>*</span></p>
          <input type="text" />
          <button className="loginButton">
            Log In
          </button>

          <p>Need an account?&nbsp;<a>Register</a></p>
        </div>
        <div className="googleLogin">
          <img src="img/googleChromeIcon.png" onClick={signIn}/>
          <p>Log in with Google Account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
