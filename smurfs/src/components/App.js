import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import Call from "./CallCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Card />
        <Call />
      </div>
    );
  }
}

export default App;
