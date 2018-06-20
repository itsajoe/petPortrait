import React, { Component } from 'react';
import "./app.css";
// sticky header
import Navbar from "./components/navbar";
// Jumbo split in half
import Welcome from "./components/welcome";
// about div
import About from "./components/about";
// services div
import Services from "./components/services";
// gallery
import Rotate from "./components/rotate";
// contact section
import Contact from "./components/contact";
// copyright
import Footer from "./components/footer";
// modal
import Modal from "react-modal";

import Gallery from "./components/gallery";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    // bottom                : 'auto',
    marginRight           : '-50%',
    width                 : '500px',
    height                : '400px',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {

  state = {
    modalIsOpen: false,
    name: "Name",
    email: "Email",
    size: "Size",
    pets: "Number of Pets",
    humans: "Number of Humans",
    display: "Subject Display",
    layout: "Canvas Layout",
    background: "Background",
    notes: "Additional Notes",
    photos: "Upload Photos"
  }

  openModal = () => {
    this.setState ({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  handleSize = (prop) => {
    this.setState({size: prop});
  }
  handlePets = (prop) => {
    this.setState({pets: prop});
  }
  handleHumans = (prop) => {
    this.setState({humans: prop});
  }
  handleDisplay = (prop) => {
    this.setState({display: prop});
  }
  handleLayout = (prop) => {
    this.setState({layout: prop});
  }
  handleBackground = (prop) => {
    this.setState({background: prop});
  }
  handleName = (event) => {
    this.setState({name: event.target.value});
  }
  handleEmail = (event) => {
    this.setState({email: event.target.value});
  }
  handleNote = (event) => {
    this.setState({notes: event.target.value});
  }
  


  render() {
    
    if (this.state.isOpen === true) {
      return(<Modal />)
    } else {
    return (
      <div className="app">
      <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button id="close" className="glyphicon glyphicon-remove-circle" onClick={this.closeModal}> </button>
          <form>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <div >
                  <input type="text" onChange={this.handleName} className="formes" id="usr" placeholder={this.state.name}/>
               </div>
             </div>
          </div> 
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <div >
                  <input type="email" onChange={this.handleEmail} className="formes" id="email" placeholder={this.state.email}/>
               </div>
            </div>
          </div> 
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="dropdown">
                <div className="formes" id="email">{this.state.size}  &#9660;</div>
                <div className="dropdown-content">
                    <div onClick={() => this.handleSize("11x14")} className="dropbtn">11x14</div>
                    <div onClick={() => this.handleSize("12x12")} className="dropbtn">12x12</div>
                    <div onClick={() => this.handleSize("16x16")} className="dropbtn">16x16</div>
                    <div onClick={() => this.handleSize("16x20")} className="dropbtn">16x20</div>
                    <div onClick={() => this.handleSize("18x24")} className="dropbtn">18x24</div>
                    <div onClick={() => this.handleSize("20x24")} className="dropbtn">20x24</div>
                    <div onClick={() => this.handleSize("24x36")} className="dropbtn">24x36</div>
                    <div onClick={() => this.handleSize("Custom Size")} className="dropbtn">Custom Size</div>
                </div>
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="dropdown">
              <div className="formes" id="email">{this.state.pets}  &#9660;</div>
                <div className="dropdown-content">
                    <div onClick={() => this.handlePets("1")} className="dropbtn">1</div>
                    <div onClick={() => this.handlePets("2")} className="dropbtn">2</div>
                    <div onClick={() => this.handlePets("3")} className="dropbtn">3</div>
                    <div onClick={() => this.handlePets("4")} className="dropbtn">4</div>
                </div>
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="dropdown">
              <div className="formes" id="email">{this.state.humans}  &#9660;</div>
                <div className="dropdown-content">
                    <div onClick={() => this.handleHumans("1")} className="dropbtn">1</div>
                    <div onClick={() => this.handleHumans("2")} className="dropbtn">2</div>
                    <div onClick={() => this.handleHumans("3")} className="dropbtn">3</div>
                    <div onClick={() => this.handleHumans("4")} className="dropbtn">4</div>
                </div>
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="dropdown">
              <div className="formes" id="email">{this.state.display}  &#9660;</div>
                <div className="dropdown-content">
                    <div onClick={() => this.handleDisplay("No preference")} className="dropbtn">No preference</div>
                    <div onClick={() => this.handleDisplay("Head/Torso")} className="dropbtn">Head/Torso</div>
                    <div onClick={() => this.handleDisplay("Full Body")} className="dropbtn">Full Body</div>
                </div>
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="dropdown">
              <div className="formes" id="email">{this.state.layout}  &#9660;</div>
                <div className="dropdown-content">
                    <div onClick={() => this.handleLayout("Horizontal")} className="dropbtn">Horizontal</div>
                    <div onClick={() => this.handleLayout("Vertical")} className="dropbtn">Vertical</div>
                </div>
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="dropdown">
              <div className="formes" id="email">{this.state.background} 	&#9660;</div>
                <div className="dropdown-content">
                    <div onClick={() => this.handleBackground("Photo background")} className="dropbtn">Photo background</div>
                    <div onClick={() => this.handleBackground("Any color")} className="dropbtn">Any color</div>
                    <div onClick={() => this.handleBackground("Custom background")} className="dropbtn">Custom background</div>
                </div>
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div >
                <textarea className="formes" onChange={this.handleNote} rows="5" id="comment" placeholder={this.state.notes}></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <div>
                    <input className="formes" type="file" id="file"/>
               </div>
            </div>
          </div> 
          <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <button onClick={(event) => console.log(this.state)} id="buton">
                Checkout
            </button>
          </div>
          </div>   
          </form>
        </Modal>
      <Navbar open={this.openModal} is={this.modalIsOpen} />
      <Welcome />
      <About />
      <div className="parallax">
        <div className="empty"></div>
      </div>
      <Rotate />
      <Services />
      <Contact open={this.openModal}/>
      <Footer />
      </div>
    );
  }}
}

// class Main extends Component { 
//   render () {
//   return(
//     <Router>
//       <Switch>
//       <Route path="/" Component={App} />
//       <Route exact={true} path="/gallery" Component={Gallery} />
//       </Switch>
//     </Router>
//   )}
// }
export default App;



