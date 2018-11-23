import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import indexRoutes from './routes/layoutRoutes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <Router>
            <Switch>
              {indexRoutes.map((props, key) => {
                  return <Route exact path={props.path} component={props.component} key={key} />;
              })}
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
