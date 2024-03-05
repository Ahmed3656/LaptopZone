import React, { useState, useEffect } from "react";

import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'
import './all.css'

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Products from "./Products";
import Favorites from "./Favorites";
import Cart from "./Cart";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [cartCtr, setCartCtr] = useState(0)
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [favoriteItems, setfavoriteItems] = useState(() => {
    const storedFavs = localStorage.getItem("favorites");
    return storedFavs ? [].concat(JSON.parse(storedFavs)) : [];
  });



  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favoriteItems))
  }, [favoriteItems])
  return (
    <div>
      <Header cartCtr={cartCtr} setCartCtr={setCartCtr} cartItems={cartItems} />
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Products" element={<Products cartItems={cartItems} favoriteItems={favoriteItems} setCartItems={setCartItems} setfavoriteItems={setfavoriteItems} cartCtr={cartCtr} setCartCtr={setCartCtr} />}/>
          <Route path="/Favorites" element={<Favorites cartItems={cartItems} favoriteItems={favoriteItems} setCartItems={setCartItems} setfavoriteItems={setfavoriteItems} cartCtr={cartCtr} setCartCtr={setCartCtr} />}/>
          <Route path="/Cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} cartCtr={cartCtr} setCartCtr={setCartCtr}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    
  );
}

export default App;