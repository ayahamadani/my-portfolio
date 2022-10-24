import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} exact path="/"></Route>
        <Route component={About} path="/about"></Route>
        <Route component={SinglePost} path="/post/:slug"></Route>
        <Route component={Post} path="/post"></Route>
        <Route component={Project} exact path="/project"></Route>
      </Switch>
    </Router>
  );
}

export default App;
