var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor()     // or colors[3];
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton=document.getElementById("reset");
var easyBtn=document.getElementById("Esybtn");
var hardBtn=document.getElementById("Hardbtn");



easyBtn.addEventListener("click",function(){
  easyBtn.classList.add("Selected");
  hardBtn.classList.remove("Selected");
  numSquares=3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor= colors[i];
    }
    else {
      squares[i].style.display= "none";
    }
  }
  })

  hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("Selected");
    easyBtn.classList.remove("Selected");
    numSquares=6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor= colors[i];
        squares[i].style.display= "block";
      }

  })

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {

  // Adding colors to individual squares
  squares[i].style.backgroundColor = colors[i];

  // Adding click listeners
  squares[i].addEventListener("click",function() {

    // Grab the color
    var clickedColor = this.style.backgroundColor;

    if (clickedColor===pickedColor) {
      message.textContent="Correct";
      changeColors(clickedColor);
      h1.style.backgroundColor= clickedColor;
      resetButton.textContent="Play Again?";

    }
    else {
      this.style.backgroundColor="#232323";
      message.textContent="Please Try Again";
    }
  })
}

 function changeColors(color) {
   for (var i = 0; i < squares.length; i++) {
     squares[i].style.backgroundColor=color;
   }
 }

 function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
 }

function generateRandomColors(num) {
//make an array
var arr = [];
  //repeat num times
for (var i = 0; i < num; i++) {
  //get random color and push into array
  arr.push(randomColor())
}
//return that array
return arr;
}

function randomColor() {
//pick random red
var r=Math.floor(Math.random() * 256);
//pick random blue
var g=Math.floor(Math.random() * 256);
//pick random green
var b=Math.floor(Math.random() * 256);

return "rgb("+ r + ", " + g +", " + b +")"
}

reset.addEventListener("click",function () {
  //generate new Colors
  colors= generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor= pickColor();
  //change colorDisplay to match random Colors
  colorDisplay.textContent= pickedColor;
  this.textContent="New Colors";
  message.textContent="";
  //change the color of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor= colors[i];
  }
  //Changing the background color Again
  h1.style.backgroundColor= "steelblue";
});
