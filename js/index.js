//multiple cards
function Card(question, answer) {
    this.question = question;
    this.answer = answer;
  }

var front = document.getElementById("front");
var back = document.getElementById("back");
var flip = document.getElementById("flip");

var card1 = new Card(
    "Lexical Environment",
    "Where code sits in relation to any surrounding code",
  );
var card2 = new Card(
    "Execution Context",
    "How, Why, When, and Where code is executed",
  );
var card3 = new Card(
    "JSON",
    "JavaScript Object Notation, for storing objects and their enclosed data. Often referred to as Key Value Pairs",
  );

var myCards = [card1, card2, card3]
//front of card
//questions

//back of card
//answers

//add a card

//edit a card

//delete a card
