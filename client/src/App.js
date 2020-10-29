import React from 'react'
import HomePage from './components/HomePage'
import AddUser from './components/AddUser'
import GetUsers from './components/GetUsers'
import Menu from './components/Menu'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/add' component={AddUser} />
          <Route path='/show' component={GetUsers} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
