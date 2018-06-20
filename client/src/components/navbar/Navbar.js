import React, { Component } from 'react';
import "./Navbar.css";
import logo from "../../images/logo2.png";


export default class Navbar extends Component {
    render() {
        
        return (
            <div id="navbar" className="navbar-fixed-top">
                <img id="logo" src={logo} alt="#" />
                <a href=".first">HOME</a>
                <a href=".about">ABOUT ME</a>
                <a href=".service">MY WORK</a>
                <a href="#clients">PRICES</a>
                <a href="#contact">CONTACT ME</a>
                <a href="#gallery">FULL GALLERY</a>
                <button id="linky" onClick={this.props.open} >ORDER NOW</button>
            </div>
        )
    };
};