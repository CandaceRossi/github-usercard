/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let cards = document.querySelector(".cards");
axios
  .get("https://api.github.com/users/CandaceRossi")
  .then(items => {
    console.log("this is the response", items);
    let card = items.data;
    console.log("info", card);
    const linkThem = gitUserCard(card);
    console.log("working", linkThem);
    cards.appendChild(linkThem);
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
  const gitName = document.createElement("h1");
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
  gitInfo.classList.add("card-info");
  gitName.classList.add("name");
  gitUrl.classList.add("card-p");
  gitPublicRepos.classList.add("card-p");
  gitFollowersUrl.classList.add("card-p");
  gitFollowingUrl.classList.add("card-p");
  gitHtmlUrl.classList.add("card-p");
  gitCreatedAt.classList.add("card-p");
  gitUpdatedAt.classList.add("card-p");

  //set the content

  gitImg.src = `${user.avatar_url}`;
  gitName.textContent = `${user.login}`;
  gitUrl.textContent = `${user.html_url}`;
  gitPublicRepos.textContent = `Public Repos: ${user.public_repos}`;
  gitFollowersUrl.textContent = `Followers: ${user.followers}`;
  gitFollowingUrl.textContent = `Following: ${user.following}`;
  gitHtmlUrl.textContent = `Website: ${user.html_url}`;
  gitCreatedAt.textContent = `Created: ${user.created_at}`;
  gitUpdatedAt.textContent = `Updated: ${user.updated_at}`;

  //put together

  gitCard.appendChild(gitInfo);
  gitCard.appendChild(gitImg);
  gitInfo.appendChild(gitName);
  gitInfo.appendChild(gitUrl);
  gitInfo.appendChild(gitPublicRepos);
  gitInfo.appendChild(gitFollowersUrl);
  gitInfo.appendChild(gitFollowingUrl);
  gitInfo.appendChild(gitHtmlUrl);
  gitInfo.appendChild(gitCreatedAt);
  gitInfo.appendChild(gitUpdatedAt);

  return gitCard;
}

const gitUsers = "https://api.github.com/users/";
friendsArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bdigknell"];
userData = {};
const el = document.querySelector("cards");
let cardItem = document.createElement("div");
el.appendChild(cardItem);
friendsArray.forEach(item => {
  axios.get(`${gitUsers}${item}`).then(function(response) {
    userData.push(response);
    return gitUserCard();
  });
});
