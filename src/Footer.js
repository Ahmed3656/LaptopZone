import React from "react";

function Footer() {
    return(
        <footer className="d-flex flex-column justify-content-between align-items-center">
            <img src={require("./images/logo.png")} draggable="false"/>
            <p className="text-light">&copy; 2024 Laptop Zone. All rights reserved.</p>
        </footer>
    )
}

export default Footer