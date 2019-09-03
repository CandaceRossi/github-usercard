import React from "react";
import "./App.css";
import axios from "axios";

// const followersArray = [
//     axios.get(`https://api.github.com/users/tetondan`),
//     axios.get(`https://api.github.com/users/dustinmyers`),
//     axios.get(`https://api.github.com/users/justsml`),
//     axios.get(`https://api.github.com/users/luishrd`),
//     axios.get(`https://api.github.com/users/bigknell`),
//     axios.get(`https://api.github.com/users/danbergelt`)
// ];
// followersArray.forEach(person => {
//         .then((data) => {
//                 //here is where we get results from server
//                 // console.log('response', data)
//                 // let card = data.data
//                 // console.log("woohoo", card)
//                 // const element = createGithubCard(card)
//                 // console.log('yeehaw', element)
//                 // cards.appendChild(element)
//             })
//             .catch((error) => {
//                 console.log('ERROR');
//             })
//     })
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
      <div className="App">
        <h1 className="App-header">GitHub Cards</h1>
        <div class="cards">
          <div class="card">
            <img className="card img" src={this.state.avatar_url} />
            <h3 className="name">Name: {this.state.login}</h3>
            <p className="username">UserName: {this.state.login}</p>
            <p>Created At: {this.state.created_at}</p>
            <p>Updated At: {this.state.updated_at}</p>
            <p>Git URL: {this.state.url}</p>
            <p>Followers: {this.state.followers}</p>
            <p>Following: {this.state.following}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
