import React, { Component } from "react";
import Tasks from "./Tasks";

const CreateList = (props) => {
  const myList = props.tasks.map((t, index) => {
    return <Tasks item={t} key={index} id={index} />;
  });
  return (
    <div className="list">
      <div className="list-style">{myList}</div>
    </div>
  );
};

export default CreateList;
