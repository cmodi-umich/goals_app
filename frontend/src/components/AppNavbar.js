import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>MCAT Prep</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/dashboard/'>Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/cmodi-umich/goals_app'>
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='https://github.com/cmodi-umich/goals_app'>
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/cmodi-umich/goals_app'>
                Register
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
