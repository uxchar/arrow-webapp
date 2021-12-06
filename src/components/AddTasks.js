import React from "react";

class AddTasks extends React.Component {
  state = { taskInput: "" };

  add = (e) => {
    e.preventDefault();
    if (this.state.taskInput === "") return;
    this.props.onFormSubmit(this.state.taskInput);
    this.setState({ taskInput: "" });
  };

  render() {
    return (
      <div className="task-board">
        <form className="container" onSubmit={this.add}>
          <input
            type="text"
            onChange={(e) => this.setState({ taskInput: e.target.value })}
            value={this.state.taskInput}
            className="task-input"
            placeholder="What task would you like to add?"
          ></input>
          <button type="submit" className="add-task-btn">
            Add +
          </button>
        </form>
      </div>
    );
  }
}

export default AddTasks;
