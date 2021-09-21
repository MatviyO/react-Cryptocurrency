import React from 'react';
import {Navbar} from "./components";
import './App.css'
import {Layout} from "antd";
import {Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <nav className="navbar">
          <Navbar />
      </nav>
      <main className="main">
          <Layout>
              <div className="routes">
                  <Switch>
                      <Route exact path="/">
                          Home

                      </Route>
                  </Switch>
              </div>
          </Layout>
      </main>
      <footer className="footer"></footer>

    </div>
  );
}

export default App;
