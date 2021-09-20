import React from 'react';
import {Navbar} from "./components";
import './App.css'
function App() {
  return (
    <div className="app">
      <nav className="navbar">
          <Navbar />
      </nav>
      <main className="main"></main>
      <footer className="footer"></footer>

    </div>
  );
}

export default App;
