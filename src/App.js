import React from "react";

import Greeting from "./Greeting";
import Navbar from "./Navbar";
import CreateList from "./CreateList";
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
          <CreateList tasks={this.state.tasks} />
          <AddTasks onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
export default App;
