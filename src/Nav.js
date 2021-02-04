import React, { Component } from "react";
import {
    Route,
    NavLink,
    BrowserRouter
    } from "react-router-dom";
import Home from "./Home";
import Tab from "./Tab";

class Nav extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <h1>React Router Simple Starter</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink> </li>
                    <li><NavLink to="/Tab">Tab</NavLink></li>
                </ul>
                <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/tab" component={Tab} />
                </div>
            </div>
        </BrowserRouter>
    );
  }
}

export default Nav;