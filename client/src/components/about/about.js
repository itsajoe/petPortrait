import React from "react";
import "./about.css";
import rex from "../../images/rex.jpg";

const About = (props) => {
    return(
        <div className="about">
            <div className="container">
                {/* <div className ="jumbotron"> */}
                    <div className="row"> 
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4" id="title">
                        <h5 id="journey">About Me</h5>
                        <div className="under"></div>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <h2>
                                "Dogs come into our lives to teach us about love. They depart to teach us about loss. A new dog never replaces an old dog. It merely expands the heart." -Anonymous
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-6">
                        <img src={rex} alt="#" height="480px" width="100%" float="left" id="the"></img>
                    </div>
                    <div className="col-sm-6">
                        
                        <h2 id='para'>
                        <h4>My Story</h4>
                        I've always loved dogs and I have always loved drawing and painting. I was seven years old when I got my first dog, Rex. He was a red merle Australian Shepherd. I drew pictures of him and painted a number of childish portraits during our growing up together. He grew older and I got better at painting. I wanted to capture that unique essence in him, that goofy grin and the way his eyes sparkled. When he died I knew that painting family pets was something I wanted to do. I wanted to paint more than just a cute dog or cat but to connect to the loving spirit of the animal itself. We got another dog, a German Shepherd who I loved in a completely different way. I realized how special each animal that comes into our lives could be. I began painting some of my friends’ pets and a few commissions here and there. During the painting process I felt like I was meeting the pet and even communicating with them in some silent way.  I feel connected to each and every animal I have painted. I find a lot joy in painting them. So in 2018 I decided to quit my job and go full time painting pet portraits. I am excited to begin this new chapter of my life.
                        </h2>
                    </div>
                        
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
}; 

export default About;