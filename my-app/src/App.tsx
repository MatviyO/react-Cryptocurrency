import React from 'react';
import {Navbar} from "./components";
import './App.css'
import {Layout, Space, Typography} from "antd";
import {Link, Route, Switch} from 'react-router-dom';
import {Cryptocurrencies, CryptoDetails, Exchanges, Home, News} from "./pages";

function App() {
    return (
        <div className="app">
            <nav className="navbar">
                <Navbar/>
            </nav>
            <main className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges/>
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies/>
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails/>
                            </Route>
                            <Route exact path="/news">
                                <News/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>

                <footer className="footer">
                    <Typography.Title style={{color: 'white', textAlign: 'center'}} level={5}>
                        Cryptoverse <br/>
                        All rights reserverd
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </footer>
            </main>
        </div>
    );
}

export default App;
