import React from "react";

import Greeting from "./Greeting";
import Navbar from "./Navbar";
import CreateTaskList from "./CreateTaskList";
import AddTasks from "./AddTasks";

class App extends React.Component {
  state = {
    tasks: [""],
  };

  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="wrap">
          <Greeting />
          <CreateTaskList tasks={this.state.tasks} />
          <AddTasks onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
export default App;
