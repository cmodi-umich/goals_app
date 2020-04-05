import React, {  useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Goal Setter</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/cmodi-umich/goals_app">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            Register       
          </NavbarText>
          <NavbarText>
            .    .
          </NavbarText>
          <NavbarText>
            Login
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;