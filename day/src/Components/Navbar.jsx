import React from 'react'


function Navbar(props) {
    const a=10;
  return (
    <div>
      <nav className="navbar">
        <h2 className="logo">B11SHOP</h2>
        <ul>
            <li>Home {props.text}</li>
            <li>Products</li>
            <li>About</li>
            <li>Contactus{a}</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
