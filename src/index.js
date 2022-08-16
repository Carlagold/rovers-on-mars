// Set access key
const accessKey = "UaSJHnoy8z3gNPebBFm90IOmeuab5mEWbdWLK5Yx";

const marsPicsUrl = `"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${accessKey}"`;
const main = document.querySelector("#main");

// Background picture
const body = document.body;
body.style.backgroundImage = 'url("https://mars.nasa.gov/internal_resources/647/")';


// Adding events listener on DOM Nodes
const homePage = document.querySelectorAll("a")[0];
const roverCuriosity = document.querySelectorAll("a")[1];
const roverOpportunity = document.querySelectorAll("a")[2];
const roverSpirit = document.querySelector("a")[3];
const header = document.querySelector("#header");

function renderHomePage() {
homePage.addEventListener("click", (event) => {
  event.preventDefault();
  // render the page
  header.innerHTML = "";
  main.innerHTML = "";
   console.log(homePage);
  // Create a function to render home page
});
}
renderHomePage()

roverCuriosity.addEventListener("click", (event) => {
  event.preventDefault();
  header.innerHTML = "<strong>CURIOSITY PICTURE COLLECTION</strong>";
  main.innerHTML = "";
  fetchRover("curiosity");
});

const homeCuriosityPic = document.createElement("img");
      homeCuriosityPic.src = "/assets/images/curiosity.jpg";
      curiosityDivMain.append(homeCuriosityPic);

homeCuriosityPic.addEventListener("click", (event)=> {
  header.innerHTML = "<strong>Curiosity Picture Collection</strong>";
  main.innerHTML = "" ;
  fetchRover("curiosity");

});

roverOpportunity.addEventListener("click", (event) => {
  event.preventDefault();
  header.innerHTML = "<strong>OPPORTUNITY PICTURE COLLECTION</strong>";
  main.innerHTML = "";
  fetchRover("Opportunity");
});

const homeOpportunityPic = document.createElement("img");
  homeOpportunityPic.src = "/assets/images/opportunity.jpg";
  opportunityDivMain.append(homeOpportunityPic);

  homeOpportunityPic.addEventListener("click", (event) => {
  header.innerHTML = "<strong>Opportunity Picture Collection</strong>";
  main.innerHTML = "";
  fetchRover("opportunity");
});

