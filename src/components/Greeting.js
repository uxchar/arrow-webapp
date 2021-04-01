import React from "react";

function Greeting() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  return (
    <div>
      <h1 className="greet fade-in">
        Good {timeOfDay}. Here are your tasks for today.
      </h1>
      <h2></h2>
    </div>
  );
}

export default Greeting;
