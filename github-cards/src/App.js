import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    gitCard: [],
    gitCardText: ""
  };

  componentDidMount() {
    // axios
    // .get('https://api.github.com/users/CandaceRossi')
    // .then(res => res.json())
    // .then(jsonData => this.ListeningStateChangedEvent({gitCard.message}))
    // .catch(err => console.log("Error"))
  }

  componentDidUpdate() {}
  render() {
    return (
      <div className="container">
        <h1 className Header>
          GitHub Cards
        </h1>
        <div className="cards">GitHub Cards</div>
      </div>
    );
  }
}

export default App;
