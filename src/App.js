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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/post/:slug">
          <SinglePost />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
