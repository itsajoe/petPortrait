import React, { Component } from "react";
import "./contact.css";
import face from "./facebook.svg";
import inst from "./insta.png";

export default class Contact extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-sm-12" id="first">
                    <div className="col-sm-6">
                        <div className="contact">
                            <div className="row">
                                <div>
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-4" id="titley">
                                    <h5 id="jour">Contact Me</h5>
                                    <div id="un"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-5"></div>
                                <div className="col-sm-4">
                                    <a href="https://www.facebook.com/"><img className="ics" id="ics2" src={face} alt="#"></img></a>
                                    <a href="https://www.instagram.com/"><img className="ics" src={inst} alt="#"></img></a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4">
                                    <h3 id="bub">1-801-000-0000<br/>Anon@gmail.com</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <input type="text" className=" formey" id="usr" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <input type="email" className=" formey" id="email" placeholder="Email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <div className="form-group">
                                        <textarea className="formey" rows="5" id="comment" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row bobby">
                                <div className="col-sm-5"></div>
                                <div className="col-sm-2">
                                    <button id="buton">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div id="second">
                            <h1 id="those">
                                Order Yours Today!
                            </h1>
                            <button id="buton" onClick={this.props.open}>
                                Place An Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}