import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';

import SearchScreen from './screens/SearchPoke';
import HomeScreen from './screens/HomeScreen';
import Screen404 from './screens/Screen404'

export const AppRoute = () => {
  return <Router>
    <div>
      <Navbar />  
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route path='/404' component={Screen404} />
          <Redirect to='/404' /> 
        </Switch>
      </div>    
    </div>
  </Router>
};