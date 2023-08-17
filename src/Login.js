import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
function Login({ login, state }) {
  return (
    <div class="container flex">
      <div class="facebook-page flex">
        <div class="text">
          <h1>facebook</h1>
          <p>Connect with friends and the world </p>
          <p> around you on Facebook.</p>
        </div>
        <form action="#">
          <input type="email" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required />
          <div class="link">
            <Button type="submit" class="login" onClick={()=>{login(!state)}}>
              Login
            </Button>
            <a href="/resetpassword" class="forgot">
              Forgot password?
            </a>
          </div>
          <hr />
          <div class="button">
            <a href="/createaccount">Create new account</a>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Login;

