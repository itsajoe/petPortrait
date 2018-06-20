import React, { Component } from "react";
import "./welcome.css";
import rhoda from "../../images/rhodaTwo.jpg";

export default class Welcome extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-sm-12 first">
                    <img src={rhoda} alt={"Not Loaded"} height="800px" width="50%"/>
                    <div className="second">
                        <h1>Hi! I'm Rhoda, <br/>
                            an exceptional artist who specializes in pet portraits.
                        </h1>
                        <button id="but">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}