  var random1 = Math.floor(Math.random() * 6) + 1;


var random2 = "images/dice" + random1+ ".png";
  var image = document.querySelectorAll("img")[0];
  image.setAttribute("src",random2);

  var random3 = Math.floor(Math.random() * 6) + 1;


  var random2 = "images/dice" + random3 +".png";
  document.querySelectorAll("img")[1].setAttribute("src",random2);



  if(random1 > random3){
    document.querySelector("h1").innerHTML = "player 1 wins!";
  }
 else if(random3 > random1){
    document.querySelector("h1").innerHTML = "player 2 wins!";
 }
  else{
    document.querySelector("h1").innerHTML = "Draw";
  }
  