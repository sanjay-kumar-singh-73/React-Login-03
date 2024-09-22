import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <h2>Log<span>Page</span></h2>
      </div>
      <div className='navbar'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
      <div className='button'>
        <button className='btn'>Log-In</button>
        <button className='btn'>Sign-Up</button>
      </div>
    </div>
  )
}

export default Header
