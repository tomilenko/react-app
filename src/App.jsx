import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './Routes'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {Routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
