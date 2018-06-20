import React from "react";
import "./services.css";

const About = () => {
    return(
        <div className="service">
            <div className="container">
                <div className="row"> 
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 title">
                        <h5>Prices</h5>
                    </div>
                </div>
                <div className='row'>
                <div className="col-sm-2"></div>
                    <div className="col-sm-3">
                        <div className='table-responsive'>
                            <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Size</th>
                                    <th>1 Pet</th>
                                </tr>
                                <tr>
                                    <th>11x14</th>
                                    <td className="back">$250</td>
                                </tr>
                                <tr>
                                    <th>12x12</th>
                                    <td className="back">$275</td>
                                </tr>
                                <tr>
                                    <th>16x16</th>
                                    <td className="back">$350</td>
                                </tr>
                                <tr>
                                    <th>16x20</th>
                                    <td className="back">$400</td>
                                </tr>
                                <tr>
                                    <th>18x24</th>
                                    <td className="back">$500</td>
                                </tr>
                                <tr>
                                    <th>20x24</th>
                                    <td className="back">$650</td>
                                </tr>
                                <tr>
                                    <th>24x36</th>
                                    <td className="last">$800</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-5">
                            <ul>
                                
                                   <h3> Add-ons </h3>
                                
                                <li>
                                   Each Additional Pet: + $50
                                </li>
                                <li>
                                   Each Additional Human: + $200
                                </li>
                                <li>
                                    Use a Photo Background: + $50
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default About;