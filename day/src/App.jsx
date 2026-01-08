import React from 'react'
import Navbar from './Components/Navbar.jsx';
import "./styles/style.css";
import Products from './Components/Products.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';

function App() {
      const message="hello";
  return (
    <div>
      <Navbar />
      <Products />
      <About/>
      <Contact />
      <Footer text={message}/>
    </div>
  )
}

export default App
