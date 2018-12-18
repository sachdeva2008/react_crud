import React, { Component } from 'react';
import './App.css';
import Main from './Containers/Main';
import Dashboard from './Containers/Dashboard';
import { Route, Switch } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>      
        <Switch>                                                                             
          <Route path="/calculator" exact  component={Main} />
          <Route path="/dashboard"  component={Dashboard} />
        </Switch>      
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
