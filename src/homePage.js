let curiosityPics;

const homePageMainDiv = document.getElementById("main");

// function generateMainDiv() {
const curiosityDivMain = document.createElement("div");
homePageMainDiv.append(curiosityDivMain);
curiosityDivMain.className = "one";
const curiosityH2 = document.createElement("h2");
curiosityH2.setAttribute("id", "h2-1");
curiosityH2.textContent = "Curiosity";
curiosityDivMain.append(curiosityH2);

const clickMsgCuriosity = document.createElement("p");
clickMsgCuriosity.setAttribute("id", "p1");
clickMsgCuriosity.textContent =
  "Click the image below to view this rover picture collection";
curiosityDivMain.append(clickMsgCuriosity);

const curiosityImgLink = document.createElement("a");
clickMsgCuriosity.append(curiosityImgLink);

// curiosityImgLink = fetchRover(typeOfRover);

// Opportunity
//  function OpportunityElements (OpportunityHomePic) {
const opportunityH2 = document.createElement("h2");
opportunityH2.textContent = "Opportunity";
opportunityH2.setAttribute("id", "h2-2");

const opportunityDivMain = document.createElement("div");
homePageMainDiv.append(opportunityDivMain);
opportunityDivMain.className = "two";
opportunityDivMain.append(opportunityH2);

const clickMsgOpportunity = document.createElement("p");
clickMsgOpportunity.setAttribute("id", "p2");
clickMsgOpportunity.textContent =
  "Click the image below to view this rover picture collection";
opportunityDivMain.append(clickMsgOpportunity);

const opportunityImgLink = document.createElement("a");
clickMsgOpportunity.append(opportunityImgLink);

function fetchRover(typeOfRover) {
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${typeOfRover}/photos?sol=1000&api_key=${accessKey}`)
    .then((Response) => Response.json())
    .then((roversPics) => {
      console.log(roversPics);
      const roversPicsResult = roversPics["photos"];
      showCuriosityPics(roversPicsResult);
      showOpportunityPics(roversPicsResult);

     console.log(roversPicsResult);

    });
  }
 




