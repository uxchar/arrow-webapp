import React, { useState, useEffect } from "react";

var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

function Inspiration() {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  function fetchQuote() {
    fetch("http://quotes.rest/qod.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
      });
  }
  return (
    <div className="quote-style fade-in-q">
      <h1 className="quote">{quote}</h1>
      <p className="quote-author">-{author}</p>
    </div>
  );
}

export default Inspiration;
