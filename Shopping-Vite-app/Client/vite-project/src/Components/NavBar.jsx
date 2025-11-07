import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navBar'>
       Welcome User
       <Link to="/cart" className='link-style'>View Cart</Link>|
       <Link to="/order" className='link-style' >View Orders</Link>|
       <Link to="/" className='link-style'>Home</Link>|
       <Link to="/logout" className='link-style'>Logout</Link>
    </div>
  )
}

export default NavBar
