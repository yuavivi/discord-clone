import React from "react";
import "../css/Login.scss";
import { authentication } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const Login = () => {

  const signIn = async () => {
    try {
      await signOut(authentication); // 一度サインアウト
    } catch (error) {
      console.error("Sign-out failed:", error);
    }
  
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" }); // アカウント選択画面強制表示
    try {
      const result = await signInWithPopup(authentication, provider);
      console.log("User signed in:", result.user);
    } catch (error ) {
      alert((error as Error).message);
    }
  };
  

  return (
    <div className="login">
      <div className="loginInfo">
        <div className="loginInput">
          <h2>Welcome back!</h2>
          <p>
            EMAIL OR PHONE NUMBER <span>*</span>
          </p>
          <input type="text" />
          <p>
            PASSWORD <span>*</span>
          </p>
          <input type="text" />
          <button className="loginButton">Log In</button>

          <p>
            Need an account?&nbsp;<a>Register</a>
          </p>
        </div>
        <div className="googleLogin">
          <img src="img/googleChromeIcon.png" onClick={signIn} />
          <p>Log in with Google Account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
