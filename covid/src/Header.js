import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'
class Header extends React.Component {
  render() {
    return (<>
    <div className='FirstDiv'>
    <div className='div2'>
    <h1 className='FirstLine'> COVID </h1>
    <img src='/logo.PNG' width={80} height={80} alt="img" />
    </div>
    <h3 className='SecondLine'> Covid19 Statistics</h3>
    <p className='ThirdLine'> A website to provide you with all the updates on Covid-19 statistics around the world  </p>
    </div>
      <Navbar collapseOnSelect  bg="dark" variant="dark">
        <NavItem className='item'><Link to="/" className="nav-link"  style={{color:"white"}}>Home</Link></NavItem>
        <NavItem className='item'><Link to="/AllCountries" className="nav-link" style={{color:"white"} } >All  Countries  </Link></NavItem>
        <NavItem className='item'><Link to="/MyRecords" className="nav-link" style={{color:"white"} } > My Records  </Link></NavItem>

      </Navbar>
      </>
    )
  }
}

export default Header;
