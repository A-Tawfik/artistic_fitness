import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem, Navbar, Label, Col } from 'react-bootstrap';

export default class NavBar extends React.Component {

  handleSelect(selectedKey) {
    debugger;
    alert('selected ' + selectedKey);
  }

  render(){
    return(
      <Navbar inverse collapseOnSelect>
        <Col xs={12} sm={12} bsClass="sub-header col">Personal Training</Col>
        {/* <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#"><h4>Frederic</h4></NavItem>
            <NavItem/>
            <NavItem eventKey={2} href="#"><h4><Label bsStyle="info">Sign up</Label></h4></NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>About Me</MenuItem>
              <MenuItem eventKey={3.2}>Fitness Videos</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Another thing</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>About Me</MenuItem>
              <MenuItem eventKey={3.2}>Fitness Videos</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Another thing</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#"><h4><Label bsStyle="info">Sign up</Label></h4></NavItem>
            <NavItem/>
            <NavItem eventKey={1} href="#"><h4>Sonia</h4></NavItem>
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
    )
  }
}
