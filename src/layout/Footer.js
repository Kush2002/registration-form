import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer class="text-center bg-dark" >
  <div class="container p-4 pb-0">
    <section class="">
        <span className='me-2 text-white'><Link to='/' className='text-white' style={{ textDecoration: 'none' }}>Home</Link></span>
        <span className='me-2'><Link to='/employee' className='text-white' style={{ textDecoration: 'none' }}>Employee</Link></span>
        <span className='me-2'><Link to="/about" className='text-white' style={{ textDecoration: 'none' }}>About</Link></span>
        <span className='me-2'><Link to="/contact" className='text-white' style={{ textDecoration: 'none' }}>Contact</Link></span>
    </section>
  </div>
  <hr class="w-75 mx-auto border-light-subtle"/>
  <div class="text-center text-white p-3" >
    © 2020 Copyright: Registration Form
  </div>
</footer> 
    </>
  )
}

export default Footer
