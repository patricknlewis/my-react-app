import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/img_logo.svg';
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if(scrollTop > 50) {
      this.setState({ hasScrolled: true})
    } else {
      this.setState ({ hasScrolled: false})
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'header headerscrolled' : 'header'}>
        <div className="headergroup">
          <Link to="/"><img src={logo} className="logo" /></Link>
          <Link to="/families">For families</Link>
          <Link to="/doctors">For doctors</Link>
          <Link to="/about">About us</Link>
          <Link to="/download"><button>Download</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
