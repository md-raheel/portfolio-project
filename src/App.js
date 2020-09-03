import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
