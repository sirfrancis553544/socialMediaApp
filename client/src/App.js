import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Container>
        <MenuBar />
        <Route expect path="/" component={Home} />
        <Route expect path="/login" component={Login} />
        <Route expect path="/register" component={Register} />
      </Container>
    </Router>
  );
}

export default App;
