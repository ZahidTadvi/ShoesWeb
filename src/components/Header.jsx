
import React from 'react';
import './Header.css';
import '../App.css';


const Header = () => {
  return (
    <div>
      {/* It is Navbar */}
      <nav className='container'>
        <div className="Logo">
          <img src="/images/brand_logo.png" alt="image" />
        </div>
        <div className="Menu">

          <ul>
            <li href="#">Home</li>
            <li href="#">Loacation</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
        
        </div>

        <button className="btn">Login</button>

      </nav>

    </div>
  )
};
export default Header;