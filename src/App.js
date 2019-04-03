import React, { Component } from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Customer Database</h1>
        <CustomerList />
      </div>
    );
  }
}

export default App;