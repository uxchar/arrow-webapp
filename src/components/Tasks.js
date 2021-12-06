import React from "react";

const Tasks = (props) => {
  return (
    <div className="task-item">
      <p
        onClick={() => {
          if (window.confirm("Delete task?")) props.onDelete(props.id);
        }}
      >
        {props.item}
      </p>
    </div>
  );
};

export default Tasks;
