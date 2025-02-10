import React, { Component } from 'react';
import './Content.css';
import '../App.css';

class Content extends Component {
  render() {
    return (

        
      <div className="Main container">

        <div className="hero-content">
            <h1>YOUR FEET
                DESERVE 
                THE BEST
            </h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            
            <div className="hero-btn">
                <button className="btn"> Shop Now</button>
                <button className="category">Category</button>
            </div>

            <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icon">
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="Flipkart" />
            </div>     
               
            </div>

        </div>

        <div className="hero-image">
        <img src="images/shoe_image.png" alt="shoe_image" />
        </div>
      </div>
    );
  }
}
export default Content;