//Trivia Facts
var facts = [];
facts[0] = "Water expands on freezing. The volume of 1 ice cube is 9\% more than the liquid used to form it."
facts[1] = "Human body contains about 200 g or 0.4 lb of NaCl or salt."
facts[2] = "Pure elements are found in different forms. For instance, pure carbon occurs in the form of graphite and diamond."
facts[3] = "Several radioactive elements glow when it is dark."
facts[4] = "Oxygen gas has no color. But solid or liquid oxygen appears to be blue."
facts[5] = "It is not possible to freeze helium by exposing it to a low temperature. Intense pressure has to be applied to freeze it."
facts[6] = "J is the only letter that is not present in the periodic table."

//Slideshow the Facts
var i = 0;
var intervalId = setInterval(function() {
  document.getElementById('theFacts').innerHTML = facts[i];
  if (i == (facts.length - 1)) {
    i = 0;
  } else {
    i++;
  }
}, 60000)

//Randomize Trivia facts array
var randomFacts = Math.floor(Math.random()*facts.length);
var fact = facts[randomFacts]
document.getElementById("theFacts").innerHTML = fact;


//Quiz Question and Answer
var quiz = [];
quiz[0] = new Question("It have extremely small masses.", "Atoms", "Elements", "Gas", "Liquid");
quiz[1] = new Question("An atom of a specific isotope is called.", "Nuclide", "Nucleus", "Proton", "Electron");
quiz[2] = new Question("Oxygen also exist in another molecular form known as.", "Ozone", "Atmosphere", "Radiation", "Layer");
quiz[3] = new Question("Who is the author of a popular chemistry text published in 1901?", "Ira Remsen", "Albert Einstein", "John Dalton", "Antoine Lavoisier");
quiz[4] = new Question("What substances that changes its physical appearance but not its composition?", "Physical Changes", "Physical Properties", "Chemical Changes", "Chemical Properties");
quiz[5] = new Question("What subtances transformed into chemically different substance?", "Chemical Changes", "Physical Changes", "Physical Properties", "Chemical Properties");
quiz[6] = new Question("It has both definite shape and definite volume", "Solid", "Liquid", "Gas", "Plasma");
var randomQuestion;
var answers = [];
var currentScore = localStorage.getItem('score');

score = document.getElementById("score");
score.innerHTML = localStorage.getItem('score');

//attach an event handler to a button
document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

//Method for calling question and answers
function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
    this.wrongAnswer3 = wrongAnswer3;
};

//Shuffle Methods
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function btnProvideQuestion() { 
  
  //Randomize
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //getQuestion

    //Shuffle Answers Using the Shuffle Methods
    answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2, randomQuestion.wrongAnswer3];
    shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
  document.getElementById("answerD").value= answers[3];
  document.getElementById("answerD").innerHTML= answers[3];

}

//Function of button answer
function answerA_clicked() {
  var answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
    checkNwrong(answerA);
}

function answerB_clicked() {
		var answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
  checkNwrong(answerB);
}
function answerC_clicked() {
  var answerC = document.getElementById("answerC").value;
		checkAnswer(answerC);
    checkNwrong(answerC);
}
function answerD_clicked() {
  var answerD = document.getElementById("answerD").value;
		checkAnswer(answerD);
    checkNwrong(answerD);
}

//Adjust the score based on the answer
function adjustScore(isCorrect) {
  if (isCorrect) {
    currentScore++;
  } else if(currentScore == null){
    currentScore = 0;
  } 
  // else {
  //   if (currentScore > 0) {
  //     currentScore --;
  // 	}
  // }
  document.getElementById("score").innerHTML = currentScore;
  localStorage.setItem('score', currentScore);

  score = document.getElementById("score");
  score.innerHTML = localStorage.getItem('score');
}

//Check if the answer is correct
function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
  } else { 
    adjustScore(false);
  }	  
}

var hideTimeout = 1000; //how many ms to wait before hiding after displaying

//If the answer is correct, show a check icon
function Correct() {

  //display the box
  var customAlert = document.getElementById("correct");
  customAlert.style.visibility = "visible";

  //set up a timer to hide it, a.k.a a setTimeout()
  setTimeout(function () {
    customAlert.style.visibility = "hidden";
  }, hideTimeout);
}

//if the answer is wrong, show X icon
function Wrong() {

  //display the box
  var customAlert = document.getElementById("wrong");
  customAlert.style.visibility = "visible";

  //set up a timer to hide it, a.k.a a setTimeout()
  setTimeout(function () {
    customAlert.style.visibility = "hidden";
  }, hideTimeout);
}

//Check if the answer is correct or wrong, whether it show the check icon or x icon
function checkNwrong(answerA) {
  if (answerA == randomQuestion.wrongAnswer1 || answerA == randomQuestion.wrongAnswer2 || answerA == randomQuestion.wrongAnswer3) {
    // Correct()
    Wrong()
    btnProvideQuestion();
  } else {
    // Wrong()
    Correct()
  }
}

