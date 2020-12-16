
// first ID player & computer random number by applying this belwo
document.getElementById("genera").addEventListener('click',
function() {


var player = Math.floor(Math.random()* 6) + 1;
console.log("player result: " + player);
var computer = Math.floor(Math.random()* 6) + 1;
console.log("computer result: " + computer);
// first ID player & computer random number by applying this belwo

// so the random number generated has kindly been saved in the variables player + computer. so by applying this methid we want it to show on our id html page the results
document.getElementById("player").innerHTML = "player score is " + player;
document.getElementById("computer").innerHTML = "computer score is " + computer;
// so the random number generated has kindly been saved in the variables player + computer. so by applying this methid we want it to show on our id html page the results

var message = "You win";

// we apply the the if condition to decide when its equal to or greater than or else by telling it what to do from the applied version done previously above
if (player > computer) {
message = "You win ";
document.getElementById("player").innerHTML ="player score is " + player + " " + message;

console.log(message + " and your score is " + player );
} else if (computer > player) {
  message = "computer wins";
  document.getElementById("computer").innerHTML = "computer score is " + computer + " " + message;

  console.log(message + " and your score is " + computer);
} else if(computer == player) {
  message = "draw try again";
  document.getElementById("draw").innerHTML = message;
  console.log(message);
}

// document.getElementById("genera").innerHTML = player + computer;

}
);
