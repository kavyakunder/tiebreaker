// var randomNo=Math.random();
// var n=randomNo*6;
// var a=Math.round(n+1);
 var randomNumber1=Math.floor((Math.random()*6)+1);
 var randomNumber2=Math.floor((Math.random()*6)+1);

 // var dicee1="dice"+randomNumber1+".png";
 // var diceee1="images/"+dicee1;

var dice1="images/dice"+randomNumber1+".png";
var dice2="images/dice"+randomNumber2+".png";


var image_1=document.querySelectorAll("img")[0].setAttribute("src",dice1);
var image_2=document.querySelectorAll("img")[1].setAttribute("src",dice2);

if(randomNumber1>randomNumber2)
{
// var player_1wins="Player 1 wins"
document.querySelector("h1").innerHTML="Player 1 wins!!🚩"

  // alert("player 1 wins");
}
else if (randomNumber1==randomNumber2) {
  document.querySelector("h1").innerHTML="Oops!This was a tie.."

}
else
{
  document.querySelector("h1").innerHTML="Player 2 wins!!🚩"

  // alert("player 2  wins");

}

//alert(randomNumber1);
