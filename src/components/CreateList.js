import React from "react";
import Tasks from "../components/Tasks";

const CreateList = (props) => {
  const myList = props.tasks.map((t, i) => {
    return <Tasks item={t} key={i} id={i} onDelete={props.onDelete} />;
  });
  return (
    <div className="list">
      <div className="list-style">{myList}</div>
    </div>
  );
};

export default CreateList;
