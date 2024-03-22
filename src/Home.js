import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import { useNavigate } from "react-router-dom";

function Home() {
    const isSmallScreen = window.matchMedia("(max-width: 991px)").matches;
    const navigate = useNavigate()

    const bestSellers = [
        {
            brand:"HP",
            title:"Victus 16 Gaming Laptop",
            specs:"Intel Core i5 Processor, RTX 3050, 16GB RAM, 512GB SSD, 16.1\"",
            price:"699",
            color:"Mica Silver",
            image:"./imgs/victus.webp",
            image1:"./imgs/victus1.webp"
        },
        {
            brand:"Apple",
            title:"Apple MacBook Air",
            specs:"2020, 13.3\" Retina Display, M1 Processor, 8GB RAM, 256GB SSD",
            price:"829",
            color:"Space Grey",
            image:"./imgs/macbookair.webp",
            image1:"./imgs/macbookair1.webp"
        },
        {
            brand:"ASUS",
            title:"TUF A15 Gaming Laptop",
            specs:"Intel Core i7 Processor, 16GB RAM, RTX 4050, 512GB SSD, 15.6\" Full HD",
            price:"999",
            color:"Arctic Grey",
            image:"./imgs/tufa15.webp",
            image1:"./imgs/tufa151.webp"
        },
        {
            brand:"Lenovo",
            title:"LOQ 15IRH8 Gaming Laptop",
            specs:"Intel Core i5 Processor, 16GB RAM, RTX 4050, 512GB SSD, 15.6\" Full HD",
            price:"849.99",
            color:"Storm Grey",
            image:"./imgs/loq.webp",
            image1:"./imgs/loq1.webp"
        },
        {
            brand:"HP",
            title:"OMEN 16 Gaming Laptop",
            specs:"AMD Ryzen 7 Processor, RTX 4050, 16GB RAM, 512GB SSD, 16.1\"",
            price:"1099",
            color:"Black",
            image:"./imgs/omen.webp",
            image1:"./imgs/omen1.webp"
        },
        {
            brand:"Samsung",
            title:"Galaxy Book3 Laptop",
            specs:"Intel Core i5 Processor, 8GB RAM, 256GB SSD, 15.6\" Full HD",
            price:"749",
            color:"Graphite",
            image:"./imgs/book3.webp",
            image1:"./imgs/book31.webp"
        }
    ]

    const premiumLaptops = [
        {
            brand:"Apple",
            title:"Apple MacBook Pro",
            specs:"2023, 14\", M3 Max Processor, 36GB RAM, 1TB SSD",
            price:"3099",
            color:"Silver",
            image:"./imgs/macbookpro.jpg",
            image1:"./imgs/macbookpro1.webp"
        },
        {
            brand:"ASUS",
            title:"ROG Strix SCAR 16",
            specs:"Intel Core i9 Processor, 32GB RAM, RTX 4080, 2TB SSD, 16\" QHD+",
            price:"2849",
            color:"Black",
            image:"./imgs/strixscar16.webp",
            image1:"./imgs/strixscar161.webp"
        },
        {
            brand:"Microsoft",
            title:"Surface Studio 2 Laptop",
            specs:"Intel Core i7, 32GB RAM, 1TB SSD, 14.4\" PixelSense Display",
            price:"2652",
            color:"Platinum",
            image:"./imgs/surfacestudio.webp",
            image1:"./imgs/surfacestudio1.webp"
        },
        {
            brand:"ASUS",
            title:"VivoBook Pro 16X Laptop",
            specs:"Intel Core i9 Processor, 32GB RAM, RTX 4070, 1TB SSD, 16\" OLED 3.2K",
            price:"2499",
            color:"Silver",
            image:"./imgs/vivobook.webp",
            image1:"./imgs/vivobook1.webp"
        },
        {
            brand:"Razer",
            title:"Blade 14 Gaming Laptop",
            specs:"AMD Ryzen 9, 16GB RAM, RTX 3080 Ti, 1TB SSD, 14\" QHD",
            price:"2229",
            color:"Black",
            image:"./imgs/blade14.webp",
            image1:"./imgs/blade141.webp"
        },
        {
            brand:"MSI",
            title:"Raider GE68HX",
            specs:"Intel Core i9 Processor, 16GB RAM, RTX 4070, 1TB SSD, 16\" UHD+",
            price:"2199",
            color:"Core Black",
            image:"./imgs/raider.webp",
            image1:"./imgs/raider1.webp"
        },{
            brand:"Samsung",
            title:"Galaxy Book4 Ultra Laptop",
            specs:"Intel Core Ultra 9, 32GB RAM, 1TB SSD, RTX 4070, 16\" 3K Touch Screen",
            price:"3149",
            color:"Moonstone Grey",
            image:"./imgs/book4.webp",
            image1:"./imgs/book41.webp"
        },
    ]
    return(
        <div id="Home">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={require("./images/banner1.webp")} className="d-block w-100" alt="banner 1"/>
                    </div>
                    <div className="carousel-item">
                    <img src={require("./images/banner2.webp")} className="d-block w-100" alt="banner 2"/>
                    </div>
                    <div className="carousel-item">
                    <img src={require("./images/banner10.jpg")} className="d-block w-100" alt="banner 3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="brand-strap my-3">
                <div className="brand-logos d-flex justify-content-between">
                    <img className="ones" src="./imgs/msi.png" alt="msi" draggable="false"/>
                    <img className="ones" src="./imgs/lenovo.png" alt="lenovo" draggable="false"/>
                    <img className="ones" src="./imgs/apple.png" alt="apple" draggable="false"/>
                    <img className="ones" src="./imgs/hp.png" alt="hp" draggable="false"/>
                    <img className="ones" src="./imgs/acer.png" alt="acer" draggable="false"/>
                    <img className="twos" src="./imgs/asus.webp" alt="asus" draggable="false"/>
                    <img className="twos" src="./imgs/samsung.webp" alt="samsung" draggable="false"/>
                    <img className="twos" src="./imgs/microsoft.webp" alt="microsoft" draggable="false"/>
                    <img className="ones" src="./imgs/msi.png" alt="msi" draggable="false"/>
                    <img className="ones" src="./imgs/lenovo.png" alt="lenovo" draggable="false"/>
                    <img className="ones" src="./imgs/apple.png" alt="apple" draggable="false"/>
                    <img className="ones" src="./imgs/hp.png" alt="hp" draggable="false"/>
                    <img className="ones" src="./imgs/acer.png" alt="acer" draggable="false"/>
                    <img className="twos" src="./imgs/asus.webp" alt="asus" draggable="false"/>
                    <img className="twos" src="./imgs/samsung.webp" alt="samsung" draggable="false"/>
                    <img className="twos" src="./imgs/microsoft.webp" alt="microsoft" draggable="false"/>
                </div>
            </div>
            
            <h2 className="line text-center mt-3">Best Sellers</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={isSmallScreen ? 5 : 10}
                slidesPerView={isSmallScreen ? 1 : 4}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="swiper-container"
            >
                {bestSellers.map((item, index) => (
                    <SwiperSlide key={index} className="best-seller-slide" onClick={()=>{navigate("/Products"); window.scrollTo(0, 0);}}>
                        <div className="best-seller card my-3 m-auto bg-dark text-light" style={{ width: "18rem" }}>
                        <img src={item.image} className="card-img-top" alt="..." draggable="false"/>
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.specs}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <hr/>

            <div className="break-container container d-flex">
                <img className="w-50 col-md-6" src={require("./images/banner7.webp")}></img>
                <img className="w-50 col-md-6 scnd" src={require("./images/banner5.png")}></img>
            </div>

            <h2 className="line text-center mt-3">Premium Laptops</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={isSmallScreen ? 5 : 10}
                slidesPerView={isSmallScreen ? 1 : 4}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="swiper-container"
            >
                {premiumLaptops.map((item, index) => (
                    <SwiperSlide key={index} className="best-seller-slide" onClick={()=>{navigate("/Products"); window.scrollTo(0, 0);}}>
                        <div className="best-seller card my-3 m-auto bg-dark text-light" style={{ width: "18rem" }}>
                        <img src={item.image} className="card-img-top" alt="..." draggable="false"/>
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.specs}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="perks container-fluid d-flex row justify-content-around">
                <div className="text-center">
                  <i className="fas fa-truck"></i>
                  <h4>Fast and high quality delivery</h4>
                </div>
                <div className="text-center">
                  <i className="far fa-check-circle"></i>
                  <h4>Quality assurance and service</h4>
                </div>
                <div className="text-center">
                  <i className="fas fa-shield-alt"></i>
                  <h4>Secure transactions on checkout</h4>
                </div>
                <div className="text-center">
                  <i className="fas fa-undo"></i>
                  <h4>Free easy returns within 14 days</h4>
                </div>
            </div>

            <div className="connect container d-flex">
                <div className="bg-dark text-center p-3 text-light">
                    <h3>Stay Connected</h3>
                    <p>Exclusive discounts<br/>Subscribe to our news and get a discount coupon!</p>
                    <form>
                        <input type="email" placeholder="Enter your email"></input>
                        <button>Subscribe</button>
                    </form>
                </div>
                <div className="bg-dark text-center p-3 text-light">
                    <h3>Get Social</h3>
                    <p>Join us in the group<br/>and be the first to know all promotions and offers!</p>
                    <div className="icons d-flex justify-content-around">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-tiktok"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home