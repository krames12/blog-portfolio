import React, { Component } from 'react'
import Link from 'gatsby-link'
import Resume from '../documents/Nick_Kramer_Resume_2018.pdf'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      activeMenu: false
    }
  }

  toggleMenu = () => {
    this.setState({ activeMenu: !this.state.activeMenu });
  }

  render() {
    return (
      <header>
        <div>
          <Link
            to="/"
            className="logo left" >
            <i>
              <i className="fa fa-terminal"></i>
            </i>
            Nick Kramer
          </Link>
          <nav
            className="main-nav text-right">
            <ul
              id="nav-container"
              className={this.state.activeMenu?'active':''}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <a href={Resume}>Resume</a>
              </li>
            </ul>
            <div
              id="nav-toggle"
              className="right"
              onClick={() => this.toggleMenu() } >
              Menu
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
