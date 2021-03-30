import React, { Component } from "react";
import axios from "axios";

// fetch("http://quotes.rest/qod.json", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.error(err);
//   });

class Inspiration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      quote: "",
    };
  }

  componentDidMount() {
    this.Quote();
  }

  Quote() {
    let url = "http://quotes.rest/qod.json";

    axios.get(url).then((res) => {
      let data = res.data.quote;
      let quote = data; //actual quote

      this.setState({
        quote: quote["quote"],
        author: quote["author"],
      });
    });
  }

  getAQuote = () => {
    this.Quote();
  };

  render() {
    const { quote, author } = this.state;
    return (
      <div id="quote">
        <div id="text-quote">
          <p>{quote}</p>
          <h5>{author}</h5>
        </div>
      </div>
    );
  }
}

export default Inspiration;
