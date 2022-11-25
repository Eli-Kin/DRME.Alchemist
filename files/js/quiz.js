function quizFunction() {
  var score = 0;
  var question = 10;
  var grading = "";
  var popup = document.getElementById("popUp");
  var popup2 = document.getElementById("popUp2");
  var takeAgain = document.getElementById("popUp3");
  var overlay = document.getElementById("popUp-overlay");
  var q1 = document.querySelector('input[name="q1"]:checked');
  var q2 = document.querySelector('input[name="q2"]:checked');
  var q3 = document.querySelector('input[name="q3"]:checked');
  var q4 = document.querySelector('input[name="q4"]:checked');
  var q5 = document.querySelector('input[name="q5"]:checked');
  var q6 = document.querySelector('input[name="q6"]:checked');
  var q7 = document.querySelector('input[name="q7"]:checked');
  var q8 = document.querySelector('input[name="q8"]:checked');
  var q9 = document.querySelector('input[name="q9"]:checked');
  var q10 = document.querySelector('input[name="q10"]:checked');

  if (document.getElementById("correctAnswer1").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer2").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer3").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer4").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer5").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer6").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer7").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer8").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer9").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer10").checked) {
    score++;
  }

  //If no answer
  if (!q1 && !q2 && !q3 && !q4 && !q5 && !q6 && !q7 && !q8 && !q9 && !q10) {
    takeAgain.style.display = "block";
    overlay.style.display = "block";
    return false;
  }

  //Quiz Conditions
  if (q1 && !q2 && !q3 && !q4 && !q5 && !q6 && !q7 && !q8 && !q9 && !q10) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You only answered question 1";
    return false;
  } else if (
    (q1 && q2 && !q3 && !q4 && !q5 && !q6 && !q7 && !q8 && !q9 && !q10) ||
    (q1 && !q2 && q3 && !q4 && !q5 && !q6 && !q7 && !q8 && !q9 && !q10) ||
    (q1 && !q2 && !q3 && q4 && !q5 && !q6 && !q7 && !q8 && !q9 && !q10) ||
    (q1 && !q2 && !q3 && !q4 && q5 && !q6 && !q7 && !q8 && !q9 && !q10) ||
    (q1 && !q2 && !q3 && !q4 && !q5 && q6 && !q7 && !q8 && !q9 && !q10) ||
    (q1 && !q2 && !q3 && !q4 && !q5 && !q6 && q7 && !q8 && !q9 && !q10) ||
    (q1 && !q2 && !q3 && !q4 && !q5 && !q6 && !q7 && q8 && !q9 && !q10) ||
    (q1 && !q2 && !q3 && !q4 && !q5 && !q6 && !q7 && !q8 && q9 && !q10) ||
    (q1 && !q2 && !q3 && !q4 && !q5 && !q6 && !q7 && !q8 && !q9 && q10)
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML =
      "You only answered two questions";
    return false;
  }
  else if (!q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You didn't answer question 1";
    return false;
  } else if (
    !q1 &&
    q2 &&
    !q3 &&
    !q4 &&
    !q5 &&
    !q6 &&
    !q7 &&
    !q8 &&
    !q9 &&
    !q10
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You only answered question 2";
    return false;
  } else if (
    (!q1 && q2 && !q3 && !q4 && !q5 && !q6 && !q7 && !q8 && !q9 && !q10) ||
    (!q1 && q2 && !q3 && q4 && !q5 && !q6 && !q7 && !q8 && !q9 && !q10) ||
    (!q1 && q2 && !q3 && !q4 && q5 && !q6 && !q7 && !q8 && !q9 && !q10) ||
    (!q1 && q2 && !q3 && !q4 && !q5 && q6 && !q7 && !q8 && !q9 && !q10) ||
    (!q1 && q2 && !q3 && !q4 && !q5 && !q6 && q7 && !q8 && !q9 && !q10) ||
    (!q1 && q2 && !q3 && !q4 && !q5 && !q6 && !q7 && q8 && !q9 && !q10) ||
    (!q1 && q2 && !q3 && !q4 && !q5 && !q6 && !q7 && !q8 && q9 && !q10) ||
    (!q1 && q2 && !q3 && !q4 && !q5 && !q6 && !q7 && !q8 && q9 && !q10) ||
    (!q1 && q2 && !q3 && !q4 && !q5 && !q6 && !q7 && !q8 && !q9 && q10)
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML =
      "You only answered two questions";
    return false;
  } else if (q1 && !q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You didn't answer question 2";
    return false;
  } else if (
    !q1 &&
    !q2 &&
    q3 &&
    !q4 &&
    !q5 &&
    !q6 &&
    !q7 &&
    !q8 &&
    !q9 &&
    !q10
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You only answered question 3";
    return false;
  } else if (
    (!q1 && !q2 && q3 && q4 && !q5 && !q6 && !q7 && !q8 && !q9 && !q10) ||
    (!q1 && !q2 && q3 && !q4 && q5 && !q6 && !q7 && !q8 && !q9 && !q10) ||
    (!q1 && !q2 && q3 && !q4 && !q5 && q6 && !q7 && !q8 && !q9 && !q10) ||
    (!q1 && !q2 && q3 && !q4 && !q5 && !q6 && q7 && !q8 && !q9 && !q10) ||
    (!q1 && !q2 && q3 && !q4 && !q5 && !q6 && !q7 && q8 && !q9 && !q10) ||
    (!q1 && !q2 && q3 && !q4 && !q5 && !q6 && !q7 && !q8 && q9 && !q10) ||
    (!q1 && !q2 && q3 && !q4 && !q5 && !q6 && !q7 && !q8 && !q9 && q10)
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML =
      "You only answered two questions";
    return false;
  } else if (q1 && q2 && !q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You didn't answer question 3";
    return false;
  } else if (
    !q1 &&
    !q2 &&
    !q3 &&
    q4 &&
    !q5 &&
    !q6 &&
    !q7 &&
    !q8 &&
    !q9 &&
    !q10
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You only answered question 4";
    return false;
  } else if (
    (!q1 && !q2 && q4 && q5 && !q6 && !q7 && !q8 && !q9 && !q10) ||
    (!q1 && !q2 && q4 && !q5 && q6 && !q7 && !q8 && !q9 && !q10) ||
    (!q1 && !q2 && q4 && !q5 && !q6 && q7 && !q8 && !q9 && !q10) ||
    (!q1 && !q2 && q4 && !q5 && !q6 && !q7 && q8 && !q9 && !q10) ||
    (!q1 && !q2 && q4 && !q5 && !q6 && !q7 && !q8 && q9 && !q10) ||
    (!q1 && !q2 && q4 && !q5 && !q6 && !q7 && !q8 && !q9 && q10)
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML =
      "You only answered two questions";
    return false;
  } else if (q1 && q2 && q3 && !q4 && q5 && q6 && q7 && q8 && q9 && q10) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You didn't answer question 4";
    return false;
  } else if (
    !q1 &&
    !q2 &&
    !q3 &&
    !q4 &&
    q5 &&
    !q6 &&
    !q7 &&
    !q8 &&
    !q9 &&
    !q10
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You only answered question 5";
    return false;
  } else if (
    (!q1 && !q2 && !q4 && q5 && q6 && !q7 && !q8 && !q9 && !q10) ||
    (!q1 && !q2 && !q4 && q5 && !q6 && q7 && !q8 && !q9 && !q10) ||
    (!q1 && !q2 && !q4 && q5 && !q6 && !q7 && q8 && !q9 && !q10) ||
    (!q1 && !q2 && !q4 && q5 && !q6 && !q7 && !q8 && q9 && !q10) ||
    (!q1 && !q2 && !q4 && q5 && !q6 && !q7 && !q8 && !q9 && q10)
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML =
      "You only answered two questions";
    return false;
  } else if (q1 && q2 && q3 && q4 && !q5 && q6 && q7 && q8 && q9 && q10) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You didn't answer question 5";
    return false;
  } else if (
    !q1 &&
    !q2 &&
    !q3 &&
    !q4 &&
    !q5 &&
    q6 &&
    !q7 &&
    !q8 &&
    !q9 &&
    !q10
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You only answered question 6";
    return false;
  } else if (
    (!q1 && !q2 && !q4 && !q5 && q6 && q7 && !q8 && !q9 && !q10) ||
    (!q1 && !q2 && !q4 && !q5 && q6 && !q7 && q8 && !q9 && !q10) ||
    (!q1 && !q2 && !q4 && !q5 && q6 && !q7 && !q8 && q9 && !q10) ||
    (!q1 && !q2 && !q4 && !q5 && q6 && !q7 && !q8 && !q9 && q10)
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML =
      "You only answered two questions";
    return false;
  } else if (q1 && q2 && q3 && q4 && q5 && !q6 && q7 && q8 && q9 && q10) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You didn't answer question 6";
    return false;
  } else if (
    !q1 &&
    !q2 &&
    !q3 &&
    !q4 &&
    !q5 &&
    !q6 &&
    q7 &&
    !q8 &&
    !q9 &&
    !q10
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You only answered question 7";
    return false;
  } else if (
    (!q1 && !q2 && !q4 && !q5 && !q6 && q7 && q8 && !q9 && !q10) ||
    (!q1 && !q2 && !q4 && !q5 && !q6 && q7 && !q8 && q9 && !q10) ||
    (!q1 && !q2 && !q4 && !q5 && !q6 && q7 && !q8 && !q9 && q10)
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML =
      "You only answered two questions";
    return false;
  } else if (q1 && q2 && q3 && q4 && q5 && q6 && !q7 && q8 && q9 && q10) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You didn't answer question 7";
    return false;
  } else if (
    !q1 &&
    !q2 &&
    !q3 &&
    !q4 &&
    !q5 &&
    !q6 &&
    !q7 &&
    q8 &&
    !q9 &&
    !q10
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You only answered question 8";
    return false;
  } else if (
    (!q1 && !q2 && !q4 && !q5 && !q6 && !q7 && q8 && q9 && !q10) ||
    (!q1 && !q2 && !q4 && !q5 && !q6 && !q7 && q8 && !q9 && q10)
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML =
      "You only answered two questions";
    return false;
  } else if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && !q8 && q9 && q10) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You didn't answer question 8";
    return false;
  } else if (
    !q1 &&
    !q2 &&
    !q3 &&
    !q4 &&
    !q5 &&
    !q6 &&
    !q7 &&
    !q8 &&
    q9 &&
    !q10
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You only answered question 9";
    return false;
  } else if (
    !q1 &&
    !q2 &&
    !q3 &&
    !q4 &&
    !q5 &&
    !q6 &&
    !q7 &&
    !q8 &&
    q9 &&
    q10
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML =
      "You only answered two questions";
    return false;
  } else if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && !q9 && q10) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You didn't answer question 9";
    return false;
  } else if (
    !q1 &&
    !q2 &&
    !q3 &&
    !q4 &&
    !q5 &&
    !q6 &&
    !q7 &&
    !q8 &&
    !q9 &&
    q10
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML =
      "You only answered question 10";
    return false;
  } else if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && !q10) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML =
      "You didn't answer question 10";
    return false;
  } else if (q1 && !q2 && !q4 && !q5 && !q6 && !q7 && !q8 && !q9 && q10) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML =
      "You only answered two questions";
    return false;
  } else if (
    !q1 ||
    !q2 ||
    !q3 ||
    !q4 ||
    !q5 ||
    !q6 ||
    !q7 ||
    !q8 ||
    !q9 ||
    !q10
  ) {
    popup2.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("alert").innerHTML = "You didn't finish the quiz";
    return false;
  }

  if (score / question >= 0) {
    grading = "You Failed!";
  }
  if (score / question >= 0.2) {
    grading = "You can do better next time.";
  }
  if (score / question >= 0.4) {
    grading = "Good.";
  }
  if (score / question >= 0.6) {
    grading = "Pretty Good!";
  }
  if (score / question >= 0.8) {
    grading = "You're almost there.";
  }
  if (score / question >= 1) {
    grading = "Perfect!";
  }

  function loadPopup() {
    document.getElementById("grading").innerHTML = grading;
    document.getElementById("score").innerHTML =
      "You Score " + score + "/" + question;
    console.log(score);

    popup.style.display = "block";
    overlay.style.display = "block";
  }

  loadPopup();
}

function clickYes() {
  var score = 0;
  var question = 10;
  var grading = "";
  var yes = document.getElementById("yes");
  var popup = document.getElementById("popUp");
  var popup2 = document.getElementById("popUp2");
  var overlay = document.getElementById("popUp-overlay");

  if (document.getElementById("correctAnswer1").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer2").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer3").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer4").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer5").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer6").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer7").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer8").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer9").checked) {
    score++;
  }
  if (document.getElementById("correctAnswer10").checked) {
    score++;
  }

  if (score / question >= 0) {
    grading = "You Failed!";
  }
  if (score / question >= 0.2) {
    grading = "You can do better next time.";
  }
  if (score / question >= 0.4) {
    grading = "Good.";
  }
  if (score / question >= 0.6) {
    grading = "Pretty Good!";
  }
  if (score / question >= 0.8) {
    grading = "You're almost there.";
  }
  if (score / question >= 1) {
    grading = "Perfect!";
  }

  function loadPopup() {
    document.getElementById("grading").innerHTML = grading;
    document.getElementById("score").innerHTML =
      "You Score " + score + "/" + question;
    console.log(score);

    popup2.style.display = "none";
    popup.style.display = "block";
    overlay.style.display = "block";
  }

  loadPopup();
}

function results() {
  var popup = document.getElementById("popUp");
  var overlay = document.getElementById("popUp-overlay");
  var correct = document.getElementsByClassName("correct");
  var wrong = document.getElementsByClassName("wrong");
  var tryAgain = document.getElementById("btn2");
  var takeAgain = document.getElementById("popUp3");
  var cancel = document.getElementById("btnCancel");
  var results = document.getElementById("results");
  var q1 = document.querySelector('input[name="q1"]:checked');
  var q2 = document.querySelector('input[name="q2"]:checked');
  var q3 = document.querySelector('input[name="q3"]:checked');
  var q4 = document.querySelector('input[name="q4"]:checked');
  var q5 = document.querySelector('input[name="q5"]:checked');
  var q6 = document.querySelector('input[name="q6"]:checked');
  var q7 = document.querySelector('input[name="q7"]:checked');
  var q8 = document.querySelector('input[name="q8"]:checked');
  var q9 = document.querySelector('input[name="q9"]:checked');
  var q10 = document.querySelector('input[name="q10"]:checked');
  var radios = document.getElementsByClassName("radios");

  popup.style.display = "none";
  overlay.style.display = "none";
  cancel.style.visibility = "hidden";


  if (!q1 && !q2 && !q3 && !q4 && !q5 && !q6 && !q7 && !q8 && !q9 && !q10) {
    takeAgain.style.display = "block";
    overlay.style.display = "block";
    return false;
  }

  // Question 1
  if (q1) {
    location.href = "#num1";
  }
  // Question 2
  else if (q2) {
    location.href = "#num2";
  }
  //Question 3
  else if (q3) {
    location.href = "#num3";
  }
  //Question 4
  else if (q4) {
    location.href = "#num4";
  }
  //Question 5
  else if (q5) {
    location.href = "#num5";
  }
  //Question 6
  else if (q6) {
    location.href = "#num6";
  }
  //Question 7
  else if (q7) {
    location.href = "#num7";
  }
  //Question 8
  else if (q8) {
    location.href = "#num8";
  }
  //Question 9
  else if (q9) {
    location.href = "#num9";
  }
  //Question 10
  else if (q10) {
    location.href = "#num10";
  }

  // Question 1
  if (q1) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  // Question 2
  if (q2) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  //Question 3
  if (q3) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  //Question 4
  if (q4) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  //Question 5
  if (q5) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  //Question 6
  if (q6) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  //Question 7
  if (q7) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  //Question 8
  if (q8) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  //Question 9
  if (q9) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  //Question 10
  if (q10) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 1 two digits
  if (q1 && q2) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q1 && q3) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q1 && q4) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q1 && q5) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q1 && q6) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q1 && q7) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q1 && q8) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q1 && q9) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q1 && q10) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 2 two digits
  if (q2 && q3) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q2 && q4) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q2 && q5) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q2 && q6) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q2 && q7) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q2 && q8) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q2 && q9) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q2 && q10) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 3 two digits
  if (q3 && q4) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q3 && q5) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q3 && q6) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q3 && q7) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q3 && q8) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q3 && q9) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q3 && q10) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 4 two digits
  if (q4 && q5) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q4 && q6) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q4 && q7) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q4 && q8) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q4 && q9) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q4 && q10) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 5 two digits
  if (q5 && q6) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q5 && q7) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q5 && q8) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q5 && q9) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q5 && q10) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 6 two digits
  if (q6 && q7) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q6 && q8) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q6 && q9) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q6 && q10) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 7 two digits
  if (q7 && q8) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q7 && q9) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q7 && q10) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 8 two digits
  if (q8 && q9) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q8 && q10) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 9 two digits
  if (q9 && q10) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 1 three digits
  if (q1 && q2 && q3) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q1 && q2 && q4) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q1 && q2 && q5) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q1 && q2 && q6) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q1 && q2 && q7) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q1 && q2 && q8) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q1 && q2 && q9) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q1 && q2 && q10) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 2 three digits
  if (q2 && q3 && q4) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q2 && q3 && q5) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q2 && q3 && q6) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q2 && q3 && q7) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q2 && q3 && q8) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q2 && q3 && q9) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q2 && q3 && q10) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 3 three digits
  if (q3 && q4 && q5) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q3 && q4 && q6) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q3 && q4 && q7) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q3 && q4 && q8) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q3 && q4 && q9) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q3 && q4 && q10) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q3 && q4 && q1) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  //Question 4 three digits
  if (q4 && q5 && q6) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q4 && q5 && q7) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q4 && q5 && q8) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q4 && q5 && q9) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q4 && q5 && q10) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q4 && q5 && q1) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q4 && q5 && q2) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  //Question 5 three digits
  if (q5 && q6 && q7) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q5 && q6 && q8) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q5 && q6 && q9) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q5 && q6 && q10) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q5 && q6 && q1) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q5 && q6 && q2) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q5 && q6 && q3) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  //Question 6 three digits
  if (q6 && q7 && q8) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q6 && q7 && q9) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q6 && q7 && q10) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q6 && q7 && q1) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q6 && q7 && q2) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q6 && q7 && q3) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q6 && q7 && q4) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  //Question 7 three digits
  if (q7 && q8 && q9) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q7 && q8 && q10) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q7 && q8 && q1) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q7 && q8 && q2) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q7 && q8 && q3) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q7 && q8 && q4) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q7 && q8 && q5) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  //Question 8 three digits
  if (q8 && q9 && q10) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q8 && q9 && q1) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q8 && q9 && q2) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q8 && q9 && q3) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q8 && q9 && q4) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q8 && q9 && q5) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q8 && q9 && q6) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  //Question 9 three digits
  if (q9 && q10 && q1) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q9 && q10 && q2) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q9 && q10 && q3) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q9 && q10 && q4) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q9 && q10 && q5) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q9 && q10 && q6) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q9 && q10 && q7) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  //Question 10 three digits
  if (q10 && q1 && q2) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q10 && q1 && q3) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q10 && q1 && q4) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q10 && q1 && q5) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q10 && q1 && q6) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q10 && q1 && q7) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q10 && q1 && q8) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  //Question 1 four digits
  if (q1 && q2 && q3 && q4) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q1 && q2 && q3 && q5) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q1 && q2 && q3 && q6) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q1 && q2 && q3 && q7) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q1 && q2 && q3 && q8) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q1 && q2 && q3 && q9) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q1 && q2 && q3 && q10) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 2 four digits
  if (q2 && q3 && q4 && q5) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q2 && q3 && q4 && q6) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q2 && q3 && q4 && q7) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q2 && q3 && q4 && q8) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q2 && q3 && q4 && q9) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q2 && q3 && q4 && q10) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 3 four digits
  if (q3 && q4 && q5 && q6) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q3 && q4 && q5 && q7) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q3 && q4 && q5 && q8) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q3 && q4 && q5 && q9) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q3 && q4 && q5 && q10) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q3 && q4 && q5 && q1) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  //Question 4 four digits
  if (q4 && q5 && q6 && q7) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q4 && q5 && q6 && q8) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q4 && q5 && q6 && q9) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q4 && q5 && q6 && q10) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q4 && q5 && q6 && q1) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q4 && q5 && q6 && q2) {
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  //Question 5 four digits
  if (q5 && q6 && q7 && q8) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q5 && q6 && q7 && q9) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q5 && q6 && q7 && q10) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q5 && q6 && q7 && q1) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q5 && q6 && q7 && q2) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q5 && q6 && q7 && q3) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }

  //Question 6 four digits
  if (q8 && q6 && q7 && q9) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q8 && q6 && q7 && q10) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q8 && q6 && q7 && q1) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q8 && q6 && q7 && q2) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q8 && q6 && q7 && q3) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q8 && q6 && q7 && q4) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  //Question 7 four digits
  if (q8 && q9 && q7 && q10) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q8 && q9 && q7 && q1) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q8 && q9 && q7 && q2) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q8 && q9 && q7 && q3) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q8 && q9 && q7 && q4) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q8 && q9 && q7 && q5) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  //Question 8 four digits
  if (q8 && q9 && q10 && q1) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q8 && q9 && q10 && q2) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q8 && q9 && q10 && q3) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q8 && q9 && q10 && q4) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q8 && q9 && q10 && q5) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q8 && q9 && q10 && q6) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  //Question 9 four digits
  if (q1 && q9 && q10 && q2) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q1 && q9 && q10 && q3) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q1 && q9 && q10 && q4) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q1 && q9 && q10 && q5) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q1 && q9 && q10 && q6) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q1 && q9 && q10 && q7) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  //Question 10 four digits
  if (q1 && q2 && q10 && q3) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q1 && q2 && q10 && q4) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q1 && q2 && q10 && q5) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q1 && q2 && q10 && q6) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q1 && q2 && q10 && q7) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q1 && q2 && q10 && q8) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  //Question 1 five digits
  if (q1 && q2 && q3 && q4 && q5) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q6) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q7) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q8) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q9) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q10) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 2 five digits
  if (q5 && q2 && q3 && q4 && q6) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q5 && q2 && q3 && q4 && q7) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q5 && q2 && q3 && q4 && q8) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q5 && q2 && q3 && q4 && q9) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q5 && q2 && q3 && q4 && q10) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q5 && q2 && q3 && q4 && q1) {
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  //Question 3 five digits
  if (q5 && q6 && q3 && q4 && q7) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q5 && q6 && q3 && q4 && q8) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q5 && q6 && q3 && q4 && q9) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q5 && q6 && q3 && q4 && q10) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q5 && q6 && q3 && q4 && q1) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  //Question 4 five digits
  if (q5 && q6 && q7 && q4 && q8) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q5 && q6 && q7 && q4 && q9) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q5 && q6 && q7 && q4 && q10) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q5 && q6 && q7 && q4 && q1) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q5 && q6 && q7 && q4 && q2) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  //Question 5 five digits
  if (q5 && q6 && q7 && q8 && q9) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q5 && q6 && q7 && q8 && q10) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q5 && q6 && q7 && q8 && q1) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q5 && q6 && q7 && q8 && q2) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q5 && q6 && q7 && q8 && q3) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  //Question 6 five digits
  if (q9 && q6 && q7 && q8 && q10) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q9 && q6 && q7 && q8 && q1) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q9 && q6 && q7 && q8 && q2) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q9 && q6 && q7 && q8 && q3) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q9 && q6 && q7 && q8 && q4) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  //Question 7 five digits
  if (q9 && q10 && q7 && q8 && q1) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q9 && q10 && q7 && q8 && q2) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q9 && q10 && q7 && q8 && q3) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q9 && q10 && q7 && q8 && q4) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q9 && q10 && q7 && q8 && q5) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q9 && q10 && q7 && q8 && q6) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q9 && q10 && q1 && q8 && q2) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q9 && q10 && q1 && q8 && q3) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q9 && q10 && q1 && q8 && q4) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q9 && q10 && q1 && q8 && q5) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  //Question 8 five digits
  if (q9 && q10 && q1 && q8 && q2) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q9 && q10 && q1 && q8 && q3) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q9 && q10 && q1 && q8 && q4) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q9 && q10 && q1 && q8 && q5) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q9 && q10 && q1 && q8 && q6) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  //Question 9 five digits
  if (q9 && q10 && q1 && q2 && q3) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q9 && q10 && q1 && q2 && q4) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q9 && q10 && q1 && q2 && q5) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q9 && q10 && q1 && q2 && q6) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q9 && q10 && q1 && q2 && q7) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q9;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  //Question 10 five digits
  if (q3 && q10 && q1 && q2 && q4) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q3 && q10 && q1 && q2 && q5) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q3 && q10 && q1 && q2 && q6) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q3 && q10 && q1 && q2 && q7) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q3 && q10 && q1 && q2 && q8) {
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  //Question 1 six digits
  if (q1 && q2 && q3 && q4 && q5 && q6) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q5 && q7) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q5 && q8) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q5 && q9) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q5 && q10) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 2 six digits
  if (q6 && q2 && q3 && q4 && q5 && q7) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q6 && q2 && q3 && q4 && q5 && q8) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q6 && q2 && q3 && q4 && q5 && q9) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q6 && q2 && q3 && q4 && q5 && q10) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 3 six digits
  if (q6 && q7 && q3 && q4 && q5 && q8) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q6 && q7 && q3 && q4 && q5 && q9) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q6 && q7 && q3 && q4 && q5 && q10) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q6 && q7 && q3 && q4 && q5 && q1) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  //Question 4 six digits
  if (q6 && q7 && q8 && q4 && q5 && q9) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q6 && q7 && q8 && q4 && q5 && q10) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q6 && q7 && q8 && q4 && q5 && q1) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q6 && q7 && q8 && q4 && q5 && q2) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  //Question 5 six digits
  if (q6 && q7 && q8 && q9 && q5 && q10) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q6 && q7 && q8 && q9 && q5 && q1) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q6 && q7 && q8 && q9 && q5 && q2) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q6 && q7 && q8 && q9 && q5 && q3) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  //Question 6 six digits
  if (q6 && q7 && q8 && q9 && q10 && q1) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q6 && q7 && q8 && q9 && q10 && q2) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q6 && q7 && q8 && q9 && q10 && q3) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q6 && q7 && q8 && q9 && q10 && q4) {
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  //Question 7 six digits
  if (q1 && q7 && q8 && q9 && q10 && q2) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q1 && q7 && q8 && q9 && q10 && q3) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q1 && q7 && q8 && q9 && q10 && q4) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q1 && q7 && q8 && q9 && q10 && q5) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  //Question 8 six digits
  if (q1 && q2 && q8 && q9 && q10 && q3) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q1 && q2 && q8 && q9 && q10 && q4) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q1 && q2 && q8 && q9 && q10 && q5) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q1 && q2 && q8 && q9 && q10 && q6) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  //Question 9 six digits
  if (q1 && q2 && q3 && q9 && q10 && q4) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q1 && q2 && q3 && q9 && q10 && q5) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q1 && q2 && q3 && q9 && q10 && q6) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q1 && q2 && q3 && q9 && q10 && q7) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  //Question 10 six digits
  if (q1 && q2 && q3 && q4 && q10 && q5) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q10 && q6) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q10 && q7) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q10 && q8) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  //Question 1 seven digits
  if (q1 && q2 && q3 && q4 && q5 && q6 && q7) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q5 && q6 && q8) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q5 && q6 && q9) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q5 && q6 && q10) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 2 seven digits
  if (q7 && q2 && q3 && q4 && q5 && q6 && q8) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q7 && q2 && q3 && q4 && q5 && q6 && q9) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q7 && q2 && q3 && q4 && q5 && q6 && q10) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 3 seven digits
  if (q7 && q8 && q3 && q4 && q5 && q6 && q9) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q7 && q8 && q3 && q4 && q5 && q6 && q10) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q7 && q8 && q3 && q4 && q5 && q6 && q1) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  //Question 4 seven digits
  if (q7 && q8 && q9 && q4 && q5 && q6 && q10) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q7 && q8 && q9 && q4 && q5 && q6 && q1) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q7 && q8 && q9 && q4 && q5 && q6 && q2) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  //Question 5 seven digits
  if (q7 && q8 && q9 && q10 && q5 && q6 && q1) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q7 && q8 && q9 && q10 && q5 && q6 && q2) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q7 && q8 && q9 && q10 && q5 && q6 && q3) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  //Question 6 seven digits
  if (q7 && q8 && q9 && q10 && q1 && q6 && q2) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q7 && q8 && q9 && q10 && q1 && q6 && q3) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q7 && q8 && q9 && q10 && q1 && q6 && q4) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  //Question 7 seven digits
  if (q7 && q8 && q9 && q10 && q1 && q2 && q3) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q7 && q8 && q9 && q10 && q1 && q2 && q4) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q7 && q8 && q9 && q10 && q1 && q2 && q5) {
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  //Question 8 seven digits
  if (q3 && q8 && q9 && q10 && q1 && q2 && q4) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q3 && q8 && q9 && q10 && q1 && q2 && q5) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q3 && q8 && q9 && q10 && q1 && q2 && q6) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  //Question 9 seven digits
  if (q3 && q4 && q9 && q10 && q1 && q2 && q5) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q3 && q4 && q9 && q10 && q1 && q2 && q6) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q3 && q4 && q9 && q10 && q1 && q2 && q7) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  //Question 10 seven digits
  if (q3 && q4 && q5 && q10 && q1 && q2 && q6) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q3 && q4 && q5 && q10 && q1 && q2 && q7) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q3 && q4 && q5 && q10 && q1 && q2 && q8) {
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  //Question 1 eight digits
  if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q9) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q10) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 2 eight digits
  if (q8 && q2 && q3 && q4 && q5 && q6 && q7 && q9) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q8 && q2 && q3 && q4 && q5 && q6 && q7 && q10) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 3 eight digits
  if (q8 && q9 && q3 && q4 && q5 && q6 && q7 && q10) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q8 && q9 && q3 && q4 && q5 && q6 && q7 && q1) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  //Question 4 eight digits
  if (q8 && q9 && q10 && q4 && q5 && q6 && q7 && q1) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
  }
  if (q8 && q9 && q10 && q4 && q5 && q6 && q7 && q2) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  //Question 5 eight digits
  if (q8 && q9 && q10 && q1 && q5 && q6 && q7 && q2) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
  }
  if (q8 && q9 && q10 && q1 && q5 && q6 && q7 && q3) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  //Question 6 eight digits
  if (q8 && q9 && q10 && q1 && q2 && q6 && q7 && q3) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
  }
  if (q8 && q9 && q10 && q1 && q2 && q6 && q7 && q4) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  //Question 7 eight digits
  if (q8 && q9 && q10 && q1 && q2 && q3 && q7 && q4) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
  }
  if (q8 && q9 && q10 && q1 && q2 && q3 && q7 && q5) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  //Question 8 eight digits
  if (q8 && q9 && q10 && q1 && q2 && q3 && q4 && q5) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
  }
  if (q8 && q9 && q10 && q1 && q2 && q3 && q4 && q6) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  //Question 9 eight digits
  if (q5 && q9 && q10 && q1 && q2 && q3 && q4 && q6) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
  }
  if (q5 && q9 && q10 && q1 && q2 && q3 && q4 && q7) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  //Question 10 eight digits
  if (q5 && q6 && q10 && q1 && q2 && q3 && q4 && q7) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
  }
  if (q5 && q6 && q10 && q1 && q2 && q3 && q4 && q8) {
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
  }
  //Question 1 nine digits
  if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q10) {
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 2 nine digits
  if (q9 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q10) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 3 nine digits
  if (q9 && q1 && q3 && q4 && q5 && q6 && q7 && q8 && q10) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 4 nine digits
  if (q9 && q1 && q2 && q4 && q5 && q6 && q7 && q8 && q10) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 5 nine digits
  if (q9 && q1 && q2 && q3 && q5 && q6 && q7 && q8 && q10) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 6 nine digits
  if (q9 && q1 && q2 && q3 && q4 && q6 && q7 && q8 && q10) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 7 nine digits
  if (q9 && q1 && q2 && q3 && q4 && q5 && q7 && q8 && q10) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 8 nine digits
  if (q9 && q1 && q2 && q3 && q4 && q5 && q6 && q8 && q10) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 9 nine digits
  if (q9 && q1 && q2 && q3 && q4 && q5 && q6 && q7 && q10) {
    q9;
    correct[8].style.display = "block";
    wrong[24].style.display = "block";
    wrong[25].style.display = "block";
    wrong[26].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  //Question 10 nine digits
  if (q8 && q1 && q2 && q3 && q4 && q5 && q6 && q7 && q10) {
    q8;
    correct[7].style.display = "block";
    wrong[21].style.display = "block";
    wrong[22].style.display = "block";
    wrong[23].style.display = "block";
    q1;
    correct[0].style.display = "block";
    wrong[0].style.display = "block";
    wrong[1].style.display = "block";
    wrong[2].style.display = "block";
    q2;
    correct[1].style.display = "block";
    wrong[3].style.display = "block";
    wrong[4].style.display = "block";
    wrong[5].style.display = "block";
    q3;
    correct[2].style.display = "block";
    wrong[6].style.display = "block";
    wrong[7].style.display = "block";
    wrong[8].style.display = "block";
    q4;
    correct[3].style.display = "block";
    wrong[9].style.display = "block";
    wrong[10].style.display = "block";
    wrong[11].style.display = "block";
    q5;
    correct[4].style.display = "block";
    wrong[12].style.display = "block";
    wrong[13].style.display = "block";
    wrong[14].style.display = "block";
    q6;
    correct[5].style.display = "block";
    wrong[15].style.display = "block";
    wrong[16].style.display = "block";
    wrong[17].style.display = "block";
    q7;
    correct[6].style.display = "block";
    wrong[18].style.display = "block";
    wrong[19].style.display = "block";
    wrong[20].style.display = "block";
    q10;
    correct[9].style.display = "block";
    wrong[27].style.display = "block";
    wrong[28].style.display = "block";
    wrong[29].style.display = "block";
  }
  if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10) {
    var i;
    for (i = 0; i < correct.length; i++) {
      correct[i].style.display = "block";
    }
  
    var j;
    for (j = 0; j < wrong.length; j++) {
      wrong[j].style.display = "block";
    }
  }


  var e;
  for (var e = 0; e < radios.length; e++) {
    radios[e].disabled = true;
  }

  tryAgain.style.display = "block";
}

function test() {
  alert("test");
}

function popupFour() {
  var popup = document.getElementById("popUp");
  var popup2 = document.getElementById("popUp2");
  var popup4 = document.getElementById("popUp4");
  var overlay = document.getElementById("popUp-overlay");
  popup4.style.display = "block";
  overlay.style.display = "block";
  popup2.style.display = "none";
  popup.style.display = "none";
}

function hide() {
  var popup = document.getElementById("popUp");
  var popup2 = document.getElementById("popUp2");
  var overlay = document.getElementById("popUp-overlay");
  popup2.style.display = "none";
  popup.style.display = "none";
  overlay.style.display = "none";
}
