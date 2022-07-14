import React, { Component, Fragment } from "react";
import uuid from 'uuid';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
class App extends Component {
  render(){
    return (
      <Fragment>
        <TodoInput/>
        <TodoList/>
      </Fragment>
    );
  }
}

export default App;
