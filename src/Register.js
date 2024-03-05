import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";

function Register() {
    const fname = useRef();
    const lname = useRef();
    const email = useRef();
    const password = useRef();

    const navigate = useNavigate()

    function register() {
        if(fname.value === "" || lname.value === "" || email.value === "" || password.value === "") {
            alert("Please fill in all fields to create an account.")
        }
        else {
            localStorage.setItem("fname", fname.current.value)
            localStorage.setItem("lname", lname.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)

            navigate("/Login")
        }
    }

    return(
        <div className="container mt-3">
        <div className="credentials m-auto p-3 rounded-3">
          <h1>Sign up</h1>
            <form>
                <div className="mb-3 d-flex">
                  <input type="text" className="form-control" id="fname" ref={fname} placeholder="First name"/>
                  <input type="text" className="form-control" id="lname" ref={lname} placeholder="Last name"/>
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" id="email" ref={email} aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="password" ref={password} placeholder="Enter password"/>
                </div>
                <button type="submit" id="log_in" className="btn btn-dark" onClick={() => register()}>Create account</button>
                <p>Already have an account <a href="/Login">Login</a></p>
              </form>
        </div>
    </div>
    );
}

export default Register