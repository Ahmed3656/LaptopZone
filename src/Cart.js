import React, { useState, useRef, useEffect } from "react";

function Cart({cartItems, setCartItems, cartCtr, setCartCtr}) {
    const [totalPrice, setTotalPrice] = useState(0);

    const total = useRef()
    function more(id) {
        const idx = cartItems.findIndex((x) => x.id === id);
        if (idx !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[idx] = {
                ...updatedCartItems[idx],
                qty: updatedCartItems[idx].qty + 1
            };

            setCartItems(updatedCartItems);
        }
    }

    function less(id) {
        const idx = cartItems.findIndex((x) => x.id === id);
        if (idx !== -1) {
            if(cartItems[idx].qty!==1){
                const updatedCartItems = [...cartItems];
                updatedCartItems[idx] = {
                    ...updatedCartItems[idx],
                    qty: updatedCartItems[idx].qty - 1
                };
            setCartItems(updatedCartItems);
            }
            else {
                const updatedCartItems = cartItems.filter((item)=> item.id !== id)
                setCartItems(updatedCartItems);
            }
        }
    }

    function removeItem(id) {
        const updatedCartItems = cartItems.filter((item)=> item.id !== id)
        setCartItems(updatedCartItems);
    }
    
    useEffect(() => {
        const newTotalPrice = cartItems.reduce((total, item) => total + (item.price * item.qty), 0);
        setTotalPrice(newTotalPrice);
    }, [cartItems]);
    return (
        <div className="cart-body container d-flex row justify-content-evenly m-auto mt-3">
            {cartItems.map((product, idx) => (
                    <div className="cart-prod my-3 rounded col-lg-5 col-md-12" style={{ position: "relative", backgroundColor: "#e9e8e8", minHeight: "175px" }}>
                    <div className="image d-inline" style={{ float: "left" }}>
                      <img src={product.image} className="img-fluid my-3 rounded" alt="" style={{ height: "143px" }} draggable="false" />
                    </div>
              
                    <div className="cart-info mt-3" style={{ float: "left", paddingLeft: "1.5rem" }}>
                      <h4>{product.title.toUpperCase()}</h4>
                      <p className="card-text">{product.brand}</p>
                      <p className="card-text prod-specs small text-muted">{product.specs}</p>
                      <h5 className="card-text">${product.price}</h5>
              
                      <div className="qty d-flex" style={{ justifyContent: "space-between" }}>
                        <div className="qty-info">
                          <p className="card-text d-inline mr-3 p-1" style={{ backgroundColor: "#ffffff", borderRadius: "5px" }}>Qty: {product.qty}</p>
                          <i className="fas fa-plus text-success mx-3" style={{ cursor: "pointer" }} onClick={() => more(product.id)}></i>
                          <i className="fas fa-minus text-danger mx-3" style={{ cursor: "pointer" }} onClick={() => less(product.id)}></i>
                        </div>
              
                        <div className="bttn" style={{ marginLeft: "2rem" }}>
                          <button className="remove-btn btn btn-danger" onClick={() => removeItem(product.id)}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
            ))}
            <h3 className="text-center">Total: {totalPrice}<span ref={total}></span></h3>
        </div>
    );
}

export default Cart