const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
let userChoice;

//this first grabs the buttons, and then forEach button, addEventListener which listens first for a click,
//with each click, the function takes an 'event' which is the click, this function takes the id (saved in a global variable as userChoice)
//then we get the userChoiceDisplay and set the html to what has been selected by the user (r p or sciss)

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
  })
);
