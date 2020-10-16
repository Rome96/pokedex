import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import Screen404 from './screens/Screen404'
import SearchPoke from './components/SearchPoke';

export const AppRoute = () => {
  return <Provider store={store}>
    <Router>
      <div>
        <Navbar />  
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/search" component={SearchPoke} />
            <Route path='/404' component={Screen404} />
            <Redirect to='/404' /> 
          </Switch>
        </div>    
      </div>
    </Router>
  </Provider>
};