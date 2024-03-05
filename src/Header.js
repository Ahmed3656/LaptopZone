import React, { useState, useEffect, useRef } from "react";

function Header({cartCtr, setCartCtr, cartItems}) {
    const [LoggedIn, setLoggedIn] = useState(false);
    const cartCounter = useRef()

    useEffect(() => {
        const loggedIn = localStorage.getItem("loginStatus");
        setLoggedIn(loggedIn);
    }, []);

    useEffect (() => {
        const numOfItems = cartItems.reduce((num, item)=> num + item.qty, 0)
        setCartCtr(numOfItems)
    }, [cartItems])
    return (
        <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={require("./images/logo.png")} className="logo"></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/Products">Products</a>
                        </li>
                    </ul>
                    <div>                      
                        {!LoggedIn ? (
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link active" href="/Login">Login</a></li>
                                <li className="nav-item"><a className="nav-link active" href="/Register">Register</a></li>
                            </ul>
                        ) : LoggedIn === "user"? (
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link active" href="/Favorites">Profile</a></li>
                                <div className="cart-container">
                                    <li className="nav-item"><a className="nav-link active mx-3" href="/Cart"><i class="fas fa-shopping-cart"></i></a></li>
                                    <span ref={cartCounter} className="cart-ctr text-light" style={{ display: cartCtr === 0 ? 'none' : 'block' }}>{cartCtr}</span>
                                </div>
                                <li className="nav-item"><a className="nav-link active" href="#" onClick={()=>{localStorage.removeItem("loginStatus"); localStorage.removeItem("cart"); localStorage.removeItem("favorites"); setLoggedIn(false)}}>Logout</a></li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link active" href="#">Add Products</a></li>
                                <li className="nav-item"><a className="nav-link active" href="#" onClick={()=>{localStorage.removeItem("loginStatus"); localStorage.removeItem("cart"); localStorage.removeItem("favorites"); setLoggedIn(false)}}>Logout</a></li>
                            </ul>
                        )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
