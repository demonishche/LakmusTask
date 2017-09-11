import React from 'react'
import {Route, Link} from 'react-router-dom'
import Clients from '../Clients'
import Client from '../Client'
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Task</h1>
      <Route exact path='/' component={Clients}/>
      <Route path='/clients/:page?' component={Clients}/>
      <Route exact path='/client/:clientId?' component={Client}/>
    </div>
  )
}

export default App