import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='content'>
        <div className='logo'>
          <img className='img' src="https://mir-s3-cdn-cf.behance.net/user/138/08d9781402351077.64ae96553a043.png" alt="uifry logo" />
          <p className='logoname'>uifry</p>
        </div>
        <ul className='nav-list'>
          <li className='home'>Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </div>
      <div>
        <button>Download</button>
      </div>
    </div>
  );
}

export default Navbar;
