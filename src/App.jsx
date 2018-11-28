import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import indexRoutes from './routes/layoutRoutes';
import { store } from './helpers/storeHelper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
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
