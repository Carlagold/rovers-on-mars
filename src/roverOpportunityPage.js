
function showOpportunityPics(roversPics) {
  console.log(roversPics);
  roversPics.forEach((pic) => {
    renderOnePicture2(pic);
  })
}
function renderOnePicture2(pic) {
  console.log(pic);
  const imageOpportunity = document.createElement("img");
  homePageMainDiv.append(imageOpportunity);
  imageOpportunity.src = pic.img_src;
  console.log(homePageMainDiv);
}