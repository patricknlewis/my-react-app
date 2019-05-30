import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/img_logo.svg';
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="headergroup">
      <Link to="/"><img src={logo} className="logo" /></Link>
      <Link to="/families">For families</Link>
      <Link to="/doctors">For doctors</Link>
      <Link to="/about">About us</Link>
      <Link to="/download"><button>Download</button></Link>
    </div>
  </div>
)

export default Header
