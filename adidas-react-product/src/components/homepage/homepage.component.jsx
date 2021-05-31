import React from "react";
import ProductListComponent from "../products/product-list.component";
import logo from "./images.png";
import "./homepage.styles.scss";

const HomePage = ()=> (
    <div className="homepage">
        <div className="logo-search-bar">
            <span className="text">Welcome To Adidas World</span>
            <div className="logo">
                <img src={logo} alt="adidas-logo" height="90" width="90"></img>
            </div>
        </div>
        <ProductListComponent/>
    </div>
);

export default HomePage;