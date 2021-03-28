import React, { Component } from "react";
import Tasks from "./Tasks";

const CreateTaskList = (props) => {
  const myTasks = props.tasks.map((t, index) => {
    return <Tasks item={t} key={index} id={index} />;
  });
  return (
    <div className="task-list">
      <div className="task-style">{myTasks}</div>
    </div>
  );
};

export default CreateTaskList;
