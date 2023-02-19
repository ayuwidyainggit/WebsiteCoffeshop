import React from 'react';
// fungsi switch untuk menghandel not found
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/WebsiteCoffeshop" exact component={Home}></Route>
        <Route path="/Login" exact component={Login}></Route>
        <Route path="/Register" exact component={Register}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
