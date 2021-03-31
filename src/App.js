import React from "react";

import Greeting from "./Greeting";
import Navbar from "./Navbar";
import CreateList from "./CreateList";
import AddTasks from "./AddTasks";
import Inspiration from "./Inspiration";

class App extends React.Component {
  state = {
    tasks: [""],
  };

  handleDelete = (i) => {
    const updateList = [...this.state.tasks];
    updateList.splice(i, 1);
    this.setState({ tasks: updateList });
  };

  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="wrap">
          <Inspiration />
          <Greeting />
          <CreateList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <AddTasks onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
export default App;
