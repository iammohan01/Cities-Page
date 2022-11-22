
// let clientId = "vA80fWejC2rN0ljmmRn9fu5_8umKye6Q3o3n3EyGQuI";
// let endPoint = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=cat`;
// Authorization = cliendId



let clientId = '563492ad6f91700001000001e4a813a422084a3bb3f3ed055be09c41 ';
// let keyWord ;
// let endPoint = `https://api.pexels.com/v1/search?query=${keyWord}`;
let backImg = document.querySelector(".mainPage");
function start(keyWor = "city"){
  // let keyWord = keyWor.value ;
  let endPoint = `https://api.pexels.com/v1/search?query=city&orientation=landscape`;
  fetch(endPoint,{
  headers: {
    Authorization: clientId
  }
})
.then(function (response){
    return response.json();
  })
  .then(function (jsonData){
    let index = getRandom();
    console.log(jsonData);
    backImg.style.backgroundImage =  `url("${jsonData.photos[index].src.original}")` ;
    console.log(jsonData);
  })

  //for unsplash
  // fetch(endPoint)
  // .then(function (response){
  //   return response.json();
  // })
  // .then(function (jsonData){
  //   console.log(jsonData)
  //   backImg.style.backgroundImage = `url("${jsonData.urls.regular}")` ;
  //   console.log(jsonData);
  // })
}
function getRandom(){
  return Math.round(Math.random() * 15)
}
// start();

