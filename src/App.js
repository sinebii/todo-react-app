import React, { Component, Fragment } from "react";
import "./App.css";
import uuid from 'uuid';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
class App extends Component {
  render(){
    return (
      
        <section className="main-container">
          <TodoInput/>
          <TodoList/>
        </section>
    );
  }
}

export default App;
