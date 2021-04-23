import React, { useState, useEffect } from "react";

function Inspiration() {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    Inspiration();
  }, []);

  function Inspiration() { // Naming
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
