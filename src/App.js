import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Layout from "./components/Layout";
import { MuiDrawer } from "./components/common/Drawer";

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default App;
