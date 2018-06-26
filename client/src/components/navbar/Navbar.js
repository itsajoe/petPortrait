import React, { Component } from 'react';
import "./Navbar.css";
import logo from "../../images/logo2.png";
import { Link } from "react-router-dom";
// import scrollToComponent from 'react-scroll-to-component';


export default class Navbar extends Component {
    

    render() {
        
        return (
            <div id="navbar" className="navbar-fixed-top">
                <img id="logo" src={logo} alt="#" />
                <a href="#first">HOME</a>
                <a href="#about">ABOUT ME</a>
                <a href="#work">MY WORK</a>
                <a href="#price">PRICES</a>
                <a href="#cont">CONTACT ME</a>
                {/* <Link id="linked" to={"/gallery"}> */}
                <a href="/gallery">FULL GALLERY</a>
                {/* </Link> */}
                <button id="linky" onClick={this.props.open} >ORDER NOW</button>
            </div>
        )
    };
};