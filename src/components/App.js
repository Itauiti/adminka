import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header.js';
import Main from './Main.js';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
