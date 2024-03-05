import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";

function Favorites({cartItems, favoriteItems, setCartItems, setfavoriteItems, cartCtr, setCartCtr}) {
    function removeItem(id) {
        let newFavs = favoriteItems.filter((fav)=> fav.id !== id)
        setfavoriteItems(newFavs)
    }

    function moveToCart(id) {
        const item = favoriteItems.find((x) => x.id === id);
        
        if (item) {
            const found = cartItems.find((x) => x.id === id);
            
            if (found) {
                const updatedCartItems = cartItems.map((cartItem) => {
                    if (cartItem.id === id) {
                        return {
                            ...cartItem,
                            qty: cartItem.qty + 1
                        };
                    }
                    return cartItem;
                });
    
                const updatedFavs = favoriteItems.filter((favItem) => favItem.id !== id);
    
                setCartItems(updatedCartItems);
                setfavoriteItems(updatedFavs);
            } else {
                const updatedCartItems = [...cartItems, { ...item, qty: 1 }];
    
                const updatedFavs = favoriteItems.filter((favItem) => favItem.id !== id);
    
                setCartItems(updatedCartItems);
                setfavoriteItems(updatedFavs);
            }
        }
    }

    return (
        <div>
            <div className="profile container d-flex justify-content-around">
            <div className="orders">
                <h2>View Orders</h2>
                <i className="fas fa-box-open" style={{ fontSize: "40px" }}></i>
            </div>

            <div className="payments mx-3">
                <h2>Manage Your Payments</h2>
                <i className="fas fa-credit-card" style={{ fontSize: "40px" }}></i>
            </div>

            <div className="contact">
                <h2>Contact Us</h2>
                <i className="fas fa-headset" style={{ fontSize: "40px" }}></i>
            </div>

        </div>

        <hr/><hr/>

            <div className="container d-flex row justify-content-around m-auto mt-3">
                {favoriteItems.map((product, idx) => (
                        <div className="prod-crd card my-3" style={{ width: "18rem" }} key={idx}>
                            <div className="heart-icon" onClick={() => removeItem(product.id)}>
                                <i className="fas fa-heart favorites red-heart"></i>
                            </div>
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body prod-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.specs}</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-dark" onClick={()=> moveToCart(product.id)}>Move to cart</button>
                                    <button className="buy-now btn">Buy now</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Favorites