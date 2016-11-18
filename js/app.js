$(document).ready(function() {

// Generate computer choice

var computer_choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
console.log(computer_choice);

var rock = 1;
var paper = 2;
var scissors = 3;

$("#rock").on("click", function() {
  if (computer_choice === rock){
    alert("It's a tie!")
  }
  else if (computer_choice === paper){
    $("#rock").addClass("failure")
  }
  else {
    $("#rock").addClass("success")
  }
})

$("#paper").on("click", function() {
  if (computer_choice === rock){
    $("#paper").addClass("success")
  }
  else if (computer_choice === paper){
    alert("It's a tie!")
  }
  else {
    $("#paper").addClass("failure")
  }
})

$("#scissors").on("click", function() {
  if (computer_choice === rock){
    $("#scissors").addClass("failure")
  }
  else if (computer_choice === paper){
    $("#scissors").addClass("success")
  }
  else {
    alert("It's a tie")
  }
})



});
