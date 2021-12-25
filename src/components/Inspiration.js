import React, { useState, useEffect } from "react";

function Inspiration() {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  function fetchQuote() {
    fetch("https://quotes.rest/qod.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data);
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
      })
      .catch(function (error) {
        console.log(error);
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
