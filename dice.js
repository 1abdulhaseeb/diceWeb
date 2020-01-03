

// 1st Random Number Generator
var randomNumber1;
randomNumber1=((Math.random())*6)+1;
randomNumber1=Math.floor(randomNumber1);

// 2nd Random Number Generator
var randomNumber2;
randomNumber2=((Math.random())*6)+1;
randomNumber2=Math.floor(randomNumber2);

// Setting Image 1
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

// Setting Image 2
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

// Result
var result;
if(randomNumber1>randomNumber2)
{
  result="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1)
{
  result="Player 2 Wins!";
}
else
{
  result="Draw!";
}

// Setting Result
document.querySelector("h1").textContent=result;
