import React, { Component } from 'react';
import "./gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import frankie from "./frankietwo.png";
import boomer from "./Boomer.jpg";
import bailey from "./Bailey.jpg";
import boxer from "./Boxer.jpg";
import doberman from "./Doberman.jpg";
import green from "./green.jpg";
import jimmy from "./jimmyOne.jpg";
import kita from "./kitaOne.jpg";
import kyle from "./kyle.jpg";
import mix from "./mix.jpg";
import roy from "./roy.jpg";
import rudy from "./Rudy.jpg";
import sadie from "./Sadie.jpg";
import scout from "./Scout.jpg";
import wendy from "./wendy.jpg";
import white from "./white.jpg";
import zena from "./zenaOne.jpg";


export default class Gallery extends Component {
    render() {

        const images = [
            {
              original: frankie,
              thumbnail: frankie,
              description: "this is a description"
            },
            {
              original: boomer,
              thumbnail: boomer
            },
            {
              original: bailey,
              thumbnail: bailey
            },
            {
              original: boxer,
              thumbnail: boxer
            },
            {
              original: doberman,
              thumbnail: doberman
            },
            {
              original: green,
              thumbnail: green
            },
            {
              original: jimmy,
              thumbnail: jimmy
            },
            {
              original: kita,
              thumbnail: kita
            },
            {
              original: kyle,
              thumbnail: kyle
            },
            {
              original: mix,
              thumbnail: mix
            },
            {
              original: roy,
              thumbnail: roy
            },
            {
              original: rudy,
              thumbnail: rudy
            },
            {
              original: sadie,
              thumbnail: sadie
            },
            {
              original: scout,
              thumbnail: scout
            },
            {
              original: wendy,
              thumbnail: wendy
            },
            {
              original: white,
              thumbnail: white
            },
            {
              original: zena,
              thumbnail: zena
            }
          ]
        
        return (
            <div className="row">
            <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <ImageGallery items={images} />
                </div>  
            </div>
        )
    };
};