import React from "react";

import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
  //   function greet() {
  //     let greeting = document.querySelector(".greeting");

  //     const date = new Date();
  //     const hours = date.getHours();
  //     let timeOfDay;

  //     if (hours < 12) {
  //       timeOfDay = "morning";
  //     } else if (hours >= 12 && hours < 17) {
  //       timeOfDay = "afternoon";
  //     } else {
  //       timeOfDay = "evening";
  //     }

  //     return (greeting.textContent = `Good ${timeOfDay}. Would you like to add a task?`);
  //   }

  //   function addTask() {
  //     let user_input = document.querySelector(".user_input");

  //     if (user_input == "yes" || "y") {
  //       greeting.textContent = "What would you like to add?";
  //     } else if (user_input == "no" || "n") {
  //       greeting.textContent = "Goodbye";
  //     } else {
  //       greeting.textContent = "I did not understand, please type yes or no.";
  //     }
  //   }
  //   greet();
  //   addTask();
  // }
  // App();
}
export default App;
