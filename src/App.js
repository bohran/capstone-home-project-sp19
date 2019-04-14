import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Organization } from './AddOrganizationForm';
import { Home } from './Home';
import { Events } from './Events';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron } from 'reactstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar className='nav-wrapper' dark expand="lg"style={{outerHeight:"100px"}}>
                <NavbarBrand className = "title" style={{color:"black", fontSize:"50px", paddingRight:"250px", paddingLeft:"25px"}}href = "/">The Home Project</NavbarBrand>
                 <Link className = "links" to="/Events" style={{fontSize:"25px", paddingLeft:"200px"}}>Events</Link>
                 <Link className = "links" to="/About" style={{fontSize:"25px",paddingLeft:"40px"}}>About Us</Link>
                 <Link className = "links" to="/Contact" style={{fontSize:"25px",paddingLeft:"40px"}}>Contact Us</Link>   
          </Navbar>
          <Switch>
            <Route exact path = "/" component = { Home } />
            <Route path="/AddOrganization" component = { Organization } />
            <Route path = "/Events" component = { Events } />
            {/* <Route path = "Organization/Confirmation" component = { Confirmation } />
            <Route path = "Organization/Confirmation/Submission" component = { Review } /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
