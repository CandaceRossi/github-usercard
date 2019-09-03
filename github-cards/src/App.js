import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gitCard: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/CandaceRossi").then(res => {
      console.log("is there a response here?", res);
      this.setState(res.data);
    });
  }

  componentDidUpdate() {
    console.log("cdu is running");
  }
  render() {
    return (
      <div className="container">
        <h1 className Header>
          GitHub Cards
        </h1>
        <div class="card">
          <img src={this.state.image} />
          <div class="card-info">
            <h3 class="name">{this.state.name}</h3>
            <p class="username">{this.state.username}</p>
            <p>Location: {this.state.location}</p>
            <p>Profile:</p>
            <p>Followers: {this.state.followers}</p>
            <p>Following: {this.state.following}</p>
            <p>Bio: {this.state.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
