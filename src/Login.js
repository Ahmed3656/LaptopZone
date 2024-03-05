import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()

    const email = useRef();
    const password = useRef();

    function login(){
        if(email.current.value === "" || password.current.value === "") {
            alert("Please fill in your information to login.")
        }
        else {
            if(email.current.value === "Admin@Admin" && password.current.value === "Admin") {
                localStorage.setItem("loginStatus", "Admin")
            }
            else if(email.current.value === localStorage.getItem("email") && password.current.value === localStorage.getItem("password")) {
                localStorage.setItem("loginStatus", "user")
                // navigate("/Home")
            }
            else {
                alert("Invalid email or password, please try again.")
            }
        }
    }
    return(
        <div className="container mt-3">
        <div className="credentials m-auto p-3 rounded-3">
          <h1>Login</h1>
            <form>
                <div className="mb-3">
                  <input type="email" className="form-control" id="email" ref={email} aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="password" ref={password} placeholder="Enter password"/>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" id="log_in" className="btn btn-dark" onClick={() => login()}>Login</button>
                <p>Don't have an account <a href="/Register">Register</a></p>
              </form>
        </div>
    </div>
    );
}

export default Login