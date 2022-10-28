import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/domains">Domains</NavLink>
  </ul>
  )
}

export default Navbar