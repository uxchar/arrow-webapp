import React, { Component } from "react";
import Tasks from "./Tasks";

class AddTasks extends React.Component {
  state = { taskInput: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.taskInput === "") return;
    this.props.onFormSubmit(this.state.taskInput);
    this.setState({ taskInput: "" });
  };

  render() {
    return (
      <div className="taskBoard">
        <div className="add">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={(e) => this.setState({ taskInput: e.target.value })}
              value={this.state.taskInput}
              className="task-input"
              placeholder="What task would you like to add?"
            ></input>
            <br></br>
            <button type="submit" className="add-task-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTasks;