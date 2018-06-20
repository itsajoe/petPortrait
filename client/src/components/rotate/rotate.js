import React, { Component } from "react";
import "./rotate.css";
import Car from "../car";
// import frankie from "./frankietwo.png";
import boomer from "./Boomer.jpg";
import bailey from "./Bailey.jpg";
// import boxer from "./Boxer.jpg";
// import doberman from "./Doberman.jpg";
// import green from "./green.jpg";
import jimmy from "./jimmyOne.jpg";
import kita from "./kitaOne.jpg";
// import kyle from "./kyle.jpg";
// import mix from "./mix.jpg";
// import roy from "./roy.jpg";
// import rudy from "./Rudy.jpg";
// import sadie from "./Sadie.jpg";
// import scout from "./Scout.jpg";
// import wendy from "./wendy.jpg";
// import white from "./white.jpg";
// import zena from "./zenaOne.jpg";
    
export default class Rotate extends Component {
    state = {
        img: [boomer,jimmy, bailey,  kita],
      }

    render() {
        return (
            <div className="rotate">
                <div className="row">
                    <div className="col-sm-12 blue">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4" id="titl">
                        <h5 id="journ">My Work</h5>
                        <div id="und"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                {
                    this.state.img.map((img, index) => <Car im={img} key={index} />)
                }
                </div>
            </div>
        )
    }
}