import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Toast } from 'react-bootstrap';

function Products({cartItems, favoriteItems, setCartItems, setfavoriteItems, cartCtr, setCartCtr}) {
    const allProducts = [
        {
            id:1,
            brand:"HP",
            title:"Victus 16 Gaming Laptop",
            specs:"Intel Core i5 Processor, RTX 3050, 16GB RAM, 512GB SSD, 16.1\"",
            price:"699",
            color:"Mica Silver",
            qty:"0",
            image:"./imgs/victus.webp",
            image1:"./imgs/victus1.webp",
        },
        {
            id:2,
            brand:"Apple",
            title:"Apple MacBook Air",
            specs:"2020, 13.3\" Liquid Retina Display, M1 Processor, 8GB RAM, 256GB SSD",
            price:"829",
            color:"Space Grey",
            qty:"0",
            image:"./imgs/macbookair.webp",
            image1:"./imgs/macbookair1.webp",
        },
        {
            id:3,
            brand:"ASUS",
            title:"TUF A15 Gaming Laptop",
            specs:"Intel Core i7 Processor, 16GB RAM, RTX 4050, 512GB SSD, 15.6\" Full HD",
            price:"999",
            color:"Arctic Grey",
            qty:"0",
            image:"./imgs/tufa15.webp",
            image1:"./imgs/tufa151.webp",
        },
        {
            id:4,
            brand:"ASUS",
            title:"ROG Strix SCAR 16",
            specs:"Intel Core i9 Processor, 32GB RAM, RTX 4080, 2TB SSD, 16\" QHD+",
            price:"2849",
            color:"Black",
            qty:"0",
            image:"./imgs/strixscar16.webp",
            image1:"./imgs/strixscar161.webp",
        },
        {
            id:5,
            brand:"Microsoft",
            title:"Surface Studio 2 Laptop",
            specs:"Intel Core i7, 32GB RAM, 1TB SSD, 14.4\" PixelSense Display",
            price:"2652",
            color:"Platinum",
            qty:"0",
            image:"./imgs/surfacestudio.webp",
            image1:"./imgs/surfacestudio1.webp",
        },
        {
            id:6,
            brand:"Apple",
            title:"Apple MacBook Pro",
            specs:"2023, 14\", M3 Max Processor, 36GB RAM, 1TB SSD",
            price:"3099",
            color:"Silver",
            qty:"0",
            image:"./imgs/macbookpro.jpg",
            image1:"./imgs/macbookpro1.webp",
        },
        {
            id:7,
            brand:"Samsung",
            title:"Galaxy Book3 Laptop",
            specs:"Intel Core i5 Processor, 8GB RAM, 256GB SSD, 15.6\" Full HD",
            price:"749",
            color:"Graphite",
            qty:"0",
            image:"./imgs/book3.webp",
            image1:"./imgs/book31.webp",
        },
        {
            id:8,
            brand:"Razer",
            title:"Blade 14 Gaming Laptop",
            specs:"AMD Ryzen 9, 16GB RAM, RTX 3080 Ti, 1TB SSD, 14\" QHD",
            price:"2229",
            color:"Black",
            qty:"0",
            image:"./imgs/blade14.webp",
            image1:"./imgs/blade141.webp",
        },
        {
            id:9,
            brand:"Lenovo",
            title:"LOQ 15IRH8 Gaming Laptop",
            specs:"Intel Core i5, 16GB RAM, RTX 4050, 512GB SSD, 15.6\" Full HD",
            price:"849.99",
            color:"Storm Grey",
            qty:"0",
            image:"./imgs/loq.webp",
            image1:"./imgs/loq1.webp",
        },
        {
            id:10,
            brand:"HP",
            title:"OMEN 16 Gaming Laptop",
            specs:"AMD Ryzen 7 Processor, RTX 4050, 16GB RAM, 512GB SSD, 16.1\"",
            price:"1099",
            color:"Black",
            qty:"0",
            image:"./imgs/omen.webp",
            image1:"./imgs/omen1.webp",
        },
        {
            id:11,
            brand:"ASUS",
            title:"VivoBook Pro 16X Laptop",
            specs:"Intel Core i9 Processor, 32GB RAM, RTX 4070, 1TB SSD, 16\" OLED 3.2K",
            price:"2499",
            color:"Silver",
            qty:"0",
            image:"./imgs/vivobook.webp",
            image1:"./imgs/vivobook1.webp",
        },
        {
            id:12,
            brand:"MSI",
            title:"Raider GE68HX",
            specs:"Intel Core i9 Processor, 16GB RAM, RTX 4070, 1TB SSD, 16\" UHD+",
            price:"2199",
            color:"Core Black",
            qty:"0",
            image:"./imgs/raider.webp",
            image1:"./imgs/raider1.webp",
        },
        {
            id:13,
            brand:"Samsung",
            title:"Galaxy Book4 Ultra Laptop",
            specs:"Intel Core Ultra 9, 32GB RAM, 1TB SSD, RTX 4070, 16\" 3K Touch Screen",
            price:"3149",
            color:"Moonstone Grey",
            qty:"0",
            image:"./imgs/book4.webp",
            image1:"./imgs/book41.webp",
        },
        {
            id:14,
            brand:"Acer",
            title:"Nitro AN17-51 Gaming Laptop",
            specs:"Intel Core i7 Processor, 16GB RAM, RTX 4060, 1TB SSD, 17.3\" QHD",
            price:"1519",
            color:"Black",
            qty:"0",
            image:"./imgs/nitro.webp",
            image1:"./imgs/nitro1.webp",
        },
        {
            id:15,
            brand:"HP",
            title:"Pavilion 15-eh1024na Laptop",
            specs:"AMD Ryzen 5 Processor, 8GB RAM, 512GB SSD, 15.6\" Full HD Touchscreen",
            price:"499",
            color:"Silver",
            qty:"0",
            image:"./imgs/pavilion.webp",
            image1:"./imgs/pavilion1.webp",
        },
        {
            id:16,
            brand:"Asus",
            title:"ROG Flow Z13 Convertible Laptop",
            specs:"Intel Core i9 Processor, RTX 4070, 32GB RAM, 1TB SSD, 13.4\" WQUXGA Touch Screen",
            price:"2699",
            color:"Black",
            qty:"0",
            image:"./imgs/rogflow.webp",
            image1:"./imgs/rogflow1.webp",
        },
        {
            id:17,
            brand:"Acer",
            title:"Swift 3 Laptop",
            specs:"AMD Ryzen 7 Processor, 8GB RAM, 1TB SSD, 14\" Full HD",
            price:"799",
            color:"Silver",
            qty:"0",
            image:"./imgs/swift3.webp",
            image1:"./imgs/swift31.webp",
        },
        {
            id:18,
            brand:"ASUS",
            title:"ZenBook 14 Laptop",
            specs:"Intel Core i5 Processor, 8GB RAM, 512GB SSD, 14\" LED",
            price:"529",
            color:"Blue",
            qty:"0",
            image:"./imgs/zenbook.webp",
            image1:"./imgs/zenbook1.webp",
        },
        {
            id:19,
            brand:"Lenovo",
            title:"IdeaPad Slim 5i Laptop",
            specs:"Intel i5 Core Processor, 16GB RAM, 512GB SSD, 16\" WUXGA",
            price:"749",
            color:"Abyss Blue",
            qty:"0",
            image:"./imgs/ideapad5i.webp",
            image1:"./imgs/ideapad5i1.webp",
        },
        {
            id:20,
            brand:"Apple",
            title:"Apple MacBook Air",
            specs:"2023 15.3\", M2 Processor, 16GB RAM, 512GB SSD",
            price:"1699",
            color:"Silver",
            qty:"0",
            image:"./imgs/macbookair2.webp",
            image1:"./imgs/macbookair21.webp",
        },
        {
            id:21,
            brand:"Razer",
            title:"Blade 17 Gaming Laptop",
            specs:"Intel Core i7 Processor, 16GB RAM, RTX 3070 Ti, 1TB SSD, 17.3\" QHD",
            price:"1649",
            color:"Black",
            qty:"0",
            image:"./imgs/blade17.webp",
            image1:"./imgs/blade171.jpg",
        },
        {
            id:22,
            brand:"Microsoft",
            title:"Surface Laptop Go 3",
            specs:"Intel Core i5 Processor, 8GB RAM, 256GB SSD, 12.4\" PixelSense Touchscreen",
            price:"699",
            color:"Platinum",
            qty:"0",
            image:"./imgs/surfacelaptop.webp",
            image1:"./imgs/surfacelaptop1.webp",
        },
        {
            id:23,
            brand:"HP",
            title:"Pavilion 15-dk2029na Gaming Laptop",
            specs:"Intel Core i5 Processor, 8GB RAM, 512GB SSD, 15.6\" Full HD",
            price:"799",
            color:"Shadow Black",
            qty:"0",
            image:"./imgs/pavillion15.webp",
            image1:"./imgs/pavillion151.webp",
        },
        {
            id:24,
            brand:"Lenovo",
            title:"IdeaPad Duet 3",
            specs:"Qualcomm Snapdragon Processor, 8GB RAM, 128GB eMMC, 11\" 2K",
            price:"399",
            color:"Storm Grey",
            qty:"0",
            image:"./imgs/duet3.webp",
            image1:"./imgs/duet31.webp",
        },
        {
            id:25,
            brand:"Lenovo",
            title:"IdeaPad 3i Laptop",
            specs:"Intel Core i5 Processor, 16GB RAM, 512GB SSD, 15.6\" Full HD",
            price:"579",
            color:"Abyss Blue",
            qty:"0",
            image:"./imgs/pavilion.webp",
            image1:"./imgs/pavilion1.webp",
        },
        {
            id:26,
            brand:"Apple",
            title:"Apple MacBook Air",
            specs:"2022 13.6\" Liquid Retina Display, M2 Processor, 8GB RAM, 256GB",
            price:"1099",
            color:"Space Grey",
            qty:"0",
            image:"./imgs/macbookair3.webp",
            image1:"./imgs/macbookair31.webp",
        },
        {
            id:27,
            brand:"HP",
            title:"ENVY x360 Convertible",
            specs:"Intel Core i7, 16GB RAM, 512GB SSD, 13.3\" Full HD+ Touchscreen",
            price:"849",
            color:"Silver",
            qty:"0",
            image:"./imgs/envy.webp",
            image1:"./imgs/envy1.webp",
        },
    ]

    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    const heartIconRefs = useRef([]);

    function addToCart(id) {
        if(localStorage.getItem("loginStatus")) {
            const product = allProducts.find(product => product.id === id);
        
            if (product) {
                const found = cartItems.find(item => item.id === id);
        
                if (found) {
                    found.qty += 1;
                    setCartItems([...cartItems]);
                } else {
                    product.qty = 1;
                    setCartItems(prevCartItems => [...prevCartItems, product]);
                }
                setShowToast(true)
            }
        }
        else {
            navigate("/Login")
            window.scrollTo(0, 0);
        }
    }

    function addToFavorites(id) {
        if(localStorage.getItem("loginStatus")) {
            const product = allProducts.find(product => product.id === id);
            
            if (product) {
                const heartIcon = heartIconRefs.current[id - 1];
                const found = favoriteItems.find((fav)=> fav.id === id)
                
                if (found) {
                    heartIcon.style.color = 'rgb(161, 161, 161)';
                    setfavoriteItems(prevFavoriteItems => prevFavoriteItems.filter(item => item.id !== id));
                } else {
                    heartIcon.style.color = 'red'; 
                    setfavoriteItems(prevFavoriteItems => [...prevFavoriteItems, product]);
                }
            }
        }
        else {
            navigate("/Login")
            window.scrollTo(0, 0);
        }
    }

    function buyNow() {
        alert("Payment Completed Successfully")
    }

    return (
        <div className="container-fluid product-div">
            <a className="m-auto help-banner-ref" href="https://www.wired.com/story/how-to-buy-the-right-laptop-for-you/" target="_blank"><img className="help-banner" src={require("./images/helpbanner.webp")} alt="help banner" draggable="false" /></a>
            <div className="container d-flex row justify-content-around m-auto mt-3">
                {allProducts.map((product, idx) => (
                    <div className="prod-crd card my-3" style={{ width: "18rem" }} key={idx}>
                        <div className="heart-icon" onClick={() => addToFavorites(product.id)}>
                            <i className={`fas fa-heart favorites ${favoriteItems.find((item) => item.id === product.id) ? 'red-heart' : 'grey-heart'}`} ref={heart => heartIconRefs.current[idx] = heart}></i>
                        </div>
                        <div className="image-wrapper">
                            <img src={product.image} className="card-img-top" alt="..." />
                            <img src={product.image1} className="img-overlay"/> 
                        </div>
                        <div className="card-body prod-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.specs}</p>
                            <p className="card-text" style={{ fontSize: "22px", marginTop: "-10px" }}><strong>${product.price}</strong></p>
                            <div className="d-flex justify-content-between">
                                <button id="liveToastBtn" className="btn btn-dark" onClick={() => addToCart(product.id)}>Add to cart</button>
                                <button className="buy-now btn" onClick={() => buyNow()}>Buy now</button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Toast show={showToast} onClose={() => setShowToast(false)} delay={2000} autohide className="toast position-fixed top-0 end-0 p-1 text-light" style={{ zIndex: "11" }}>
                <Toast.Body>
                    <p><strong className="me-auto">Success!</strong></p>
                    Item successfully added to your cart
                </Toast.Body>
            </Toast>
        </div>
    );
}

export default Products