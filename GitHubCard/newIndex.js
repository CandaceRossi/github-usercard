/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector(".cards");
axios
  .get("https://api.github.com/users/CandaceRossi")
  .then(data => {
    console.log("this is the response", data);
  })
  .catch(error => {
    console.log("Error", error);
  });
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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function gitUserCard(user) {
  //create elements

  const gitCard = document.createElement("div");
  const gitImg = document.createElement("img");
  const gitInfo = document.createElement("div");
  const gitName = document.createElement("h3");
  const gitUrl = document.createElement("p");
  const gitPublicRepos = document.createElement("p");
  const gitFollowersUrl = document.createElement("p");
  const gitFollowingUrl = document.createElement("p");
  const gitHtmlUrl = document.createElement("p");
  const gitCreatedAt = document.createElement("p");
  const gitUpdatedAt = document.createElement("p");

  //set styles

  gitCard.classList.add("card");
  gitImg.classList.add("img");
  gitName.classList.add("card-name");
  gitUrl.classList.add("card-p");
  gitPublicRepos.classList.add("card-p");
  gitFollowersUrl.classList.add("card-p");
  gitFollowingUrl.classList.add("card-p");
  gitHtmlUrl.classList.add("p");
  gitCreatedAt.classList.add("p");
  gitUpdatedAt.classList.add("p");

  //set the content
  // gitImg.src - `${user.}`
  //put together
  //return card
}
