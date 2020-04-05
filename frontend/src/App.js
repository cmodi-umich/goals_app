import React from 'react';
import AppNavbar from './components/AppNavbar';
import HomePage from './components/HomePage';
import DashBoard from './components/DashBoard';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      {/*<HomePage />*/}
      <DashBoard />
    </div>
  );
}

export default App;
