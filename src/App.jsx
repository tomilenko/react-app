import React, { Component } from 'react';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import HomeSearch from './components/HomeSearch';
import HomeCards from './components/HomeCards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <HomeSearch />
        <HomeCards />
      </div>
    );
  }
}

export default App;
