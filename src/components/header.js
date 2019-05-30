import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="headergroup">
      <Link to="/">Logo</Link>
      <Link to="/families">For families</Link>
      <Link to="/doctors">For doctors</Link>
      <Link to="/about">About us</Link>
      <Link to="/download"><button>Download</button></Link>
    </div>
  </div>
)

export default Header
