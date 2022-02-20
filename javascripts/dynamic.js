const photos = [
  "assets/images/debug.jpg",
  "assets/images/photo.jpg",
  "assets/images/writedown.jpg",
  "assets/images/piu.jpg",
  "assets/images/riceball.jpg",
  "assets/images/sit.jpg",
  "assets/images/spring.jpg",
  "assets/images/wallet.jpg"
];

function changePhoto(){
  var photo = document.querySelector(".photo");
  var i = Math.floor(Math.random()*(photos.length));
  photo.setAttribute("src", photos[i]);
};

function changeMode(){
  var body = document.getElementsByTagName("body")[0];
  if(body.getAttribute("class")==="dark"){
    body.className = "light";
  } else{
    body.className = "dark";
  }
}