import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Body from "./Componenents/Body/Body"
import Event from "./Componenents/Navlink/Event"


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Body} />
        <Route path="/Event" exact component={Event} />

      </Switch>
    </Router>
  );
}

export default App;
