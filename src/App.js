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

  remove = (i) => {
    const updateList = [...this.state.tasks];
    updateList.splice(i, 1);
    this.setState({ tasks: updateList });
  };

  add = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="wrap">
          <Inspiration />
          <Greeting />
          <AddTasks onFormSubmit={this.add} />

          <CreateList tasks={this.state.tasks} onDelete={this.remove} />
        </div>
      </div>
    );
  }
}
export default App;
