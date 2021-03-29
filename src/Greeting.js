import React from "react";

function get_quote_of_the_day() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Access the result here
      alert(this.responseText);
    }
  };
  xhttp.open("GET", "https://quotes.rest/qod?category=inspire", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "YOUR API HERE");
  xhttp.send();
}

get_quote_of_the_day();

function Quote(contents) {
  const quote = contents.quotes[0];
}

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
      <h1 className="greet .fadeIn">
        Good {timeOfDay}. Here are your tasks for today.
      </h1>
      <h2></h2>
    </div>
  );
}

export default Greeting;
