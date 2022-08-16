function showCuriosityPics(roversPics) {
  console.log(roversPics);
  roversPics.forEach((pic) => {
    renderOnePicture(pic);
  })
}
function renderOnePicture(pic) {
  console.log(pic);
  const imageCuriosity = document.createElement("img");
  homePageMainDiv.append(imageCuriosity);
  imageCuriosity.src = pic.img_src
  console.log(homePageMainDiv);
}