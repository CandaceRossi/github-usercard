import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import './styles.css';

class App extends React.Component {

  state = {
    gitCard: [],
    gitCardText: '',
  }


componentDidMount() {
  axios 
  .get('https://api.github.com/users/CandaceRossi')
  .then(res => res.json())
  .then(jsonData => this.ListeningStateChangedEvent({gitCard.message}))
  .catch(err => console.log("Error"))
}

componentDidUpdate() {

}
render() {
  return (
    <div className= "container">
      <h1 className Header>GitHub Cards</h1>
      <div className="cards"></div>
    </div>
  )
}
}






/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards')
console.log("woopee", cards)

axios.get('https://api.github.com/users/CandaceRossi')
    .then((data) => {
        //here is where we get results from server
        console.log('response', data)
        let card = data.data
        console.log("woohoo", card)
        const element = createGithubCard(card)
        console.log('yeehaw', element)
        cards.appendChild(element)
    })
    .catch((error) => {
        console.log('ERROR', error);
    })
    /* Step 2: Inspect and study the data coming back, this is YOUR 
       github info! You will need to understand the structure of this 
       data in order to use it to build your component function 

      
       Skip to Step 3.
    */

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [
//     axios.get(`https://api.github.com/users/tetondan`),
//     axios.get(`https://api.github.com/users/dustinmyers`),
//     axios.get(`https://api.github.com/users/justsml`),
//     axios.get(`https://api.github.com/users/luishrd`),
//     axios.get(`https://api.github.com/users/bigknell`),
//     axios.get(`https://api.github.com/users/danbergelt`)
// ];
// followersArray.forEach(person => {
//         user.then((data) => {
//                 //here is where we get results from server
//                 console.log('response', data)
//                 let card = data.data
//                 console.log("woohoo", card)
//                 const element = createGithubCard(card)
//                 console.log('yeehaw', element)
//                 cards.appendChild(element)
//             })
//             .catch((error) => {
//                 console.log('ERROR');
//             })
//     })
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

// function createGithubCard(userObject) {

//     //create elements
//     const userCard = document.createElement('div')
//     const userImg = document.createElement('img')
//     const cardInfo = document.createElement('div')
//     const govName = document.createElement('h3')
//     const userName = document.createElement('p')
//     const userLocation = document.createElement('p')
//     const userProfile = document.createElement('p')
//     const userGitPage = document.createElement('a')
//     const userFollowers = document.createElement('p')
//     const userFollowing = document.createElement('p')
//     const userBio = document.createElement('p')

//     //set styles
//     userCard.classList.add('card')
//     userImg.classList.add('img')
//     cardInfo.classList.add('card-info')
//     govName.classList.add('name')
//     userName.classList.add('username')
//     userLocation.classList.add('card-p')
//     userProfile.classList.add('card-p')
//     userFollowers.classList.add('card-p')
//     userFollowing.classList.add('card-p')
//     userBio.classList.add('card-p')


//     //set the content
//     userImg.src = `${userObject.avatar_url}`
//     govName.textContent = `${userObject.login}`
//     userName.textContent = `${userObject.name}`
//     userLocation.textContent = `${userObject.location}`
//     userProfile.textContent = `Profile ${userObject.url}`
//     userGitPage.textContent = `Git Page ${userObject.repos_url}`
//     userFollowers.textContent = `followers ${userObject.followers}`
//     userFollowing.textContent = `following ${userObject.following}`

//     //put together
//     userCard.appendChild(cardInfo)
//     userCard.appendChild(userImg)
//     cardInfo.appendChild(govName)
//     cardInfo.appendChild(userName)
//     cardInfo.appendChild(userLocation)
//     cardInfo.appendChild(userProfile)
//     cardInfo.appendChild(userFollowers)
//     cardInfo.appendChild(userFollowing)
//     userProfile.appendChild(userGitPage)


//     return userCard
// }



// /* List of LS Instructors Github username's: 
//   tetondan
//   dustinmyers
//   justsml
//   luishrd
//   bigknell
// */