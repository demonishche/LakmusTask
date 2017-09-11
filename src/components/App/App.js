import React from 'react'
import {Route, Link} from 'react-router-dom'
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Clients from '../../containers/Clients'
import Client from '../Client'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Lakmus task</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/clients'>
              <NavItem eventKey={1}>Clients</NavItem>
            </LinkContainer>
            <LinkContainer to='/clients'>
              <NavItem eventKey={2}>Add client</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path='/' component={Clients}/>
      <Route path='/clients/:page?' component={Clients}/>
      <Route exact path='/client/:clientId?' component={Client}/>
    </div>
  )
}

export default App