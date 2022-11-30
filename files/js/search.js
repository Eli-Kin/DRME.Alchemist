// Search Engine
let $ = document;
let liContainer = $.querySelector(".autocom-box");
let inputElem = $.querySelector("input");
let searchInput = $.querySelector(".search-input");

let suggestions = [
  "Homepage", //[0]

  // Lesson 1
  "Classification of Matter", //[1] Lesson
  "States of Matter", //[2]

  "Lessons", //[3]
  "Quizzes", //[4]
  "About Us", //[5]

  "Pure Substances and Mixtures", //[6]

  // Lesson 2
  "Modern View of Atomic Structure", //[7] Lesson
  "Isotopes, Atomic Numbers, and Mass Numbers", //[8]

  // Lesson 3
  "Molecules and Molecular Compounds", //[9] Lesson
  "Molecules and Chemical Formulas", //[10]
  "Molecular and Empirical Formulas", //[11]
  "Picturing Molecules", //[12]

  // Lesson 4
  "The Periodical Table", //[13] Lesson

  // Lesson 5
  "Properties of Matter", //[14] Lesson
  "Physical and Chemical Changes", //[15]
  "Units of Measurement", //[16]
  "The Scientific Method", //[17]

  // Lesson 6
  "Bond Polarity and Electronegativity", //[18] Lesson
  "Electronegativity", //[19]
  "Electronegativity and Bond Polarity", //[20]
  "Dipole Moments", //[21]
  "Bond Types and Nomenclature", //[22]

  // Quizzes
  "Classification of Matter Quiz", //[23]
  "Modern View of Atomic Structure Quiz", //[24]
  "Molecules and Molecular Compounds Quiz", //[25]
  "The Periodical Table Quiz", //[26]
  "Properties of Matter Quiz", //[27]
  "Bond Polarity and Electronegativity Quiz", //[28]

];

inputElem.addEventListener("keyup", function () {
  let inputValue = inputElem.value;
  if (inputValue) {
    searchInput.classList.add("active");
    let filteredWord = suggestions.filter(function (word) {
      return word.toLowerCase().includes(inputValue.toLowerCase());
    });

    suggestionWordsGenerator(filteredWord);
  } else {
    searchInput.classList.remove("active");
  }
});

let customListItem;

function suggestionWordsGenerator(wordArray) {
  let suggestionWord = wordArray
    .map(function (word) {
      return "<li>" + word + "</li>";
    })
    .join("");

  if (suggestionWord) {
    liContainer.innerHTML = suggestionWord;
  } else {
    liContainer.innerHTML = "<li>" + inputElem.value + "</li>";
  }
  Select();
}

function Select() {
  let allListItems = liContainer.querySelectorAll("li");
  allListItems.forEach(function (wordItem) {
    wordItem.addEventListener("click", function (e) {
      inputElem.value = e.target.textContent;
      searchInput.classList.remove("active");
    });
  });
}

function openPage() {
  var search = document.getElementById("search").value;

  if (search.toLowerCase() === suggestions[0].toLowerCase()) {
    location.href = "../html/home.html";
  }

  if (search.toLowerCase() === suggestions[1].toLowerCase()) {
    location.href = "../html/lessons/lesson1.html";
  }

  if (search.toLowerCase() === suggestions[2].toLowerCase()) {
    location.href = "../html/lessons/lesson1.html#ls1t1";
  }

  if (search.toLowerCase() === suggestions[3].toLowerCase()) {
    location.href = "../html/lessons.html";
  }

  if (search.toLowerCase() === suggestions[4].toLowerCase()) {
    location.href = "../html/quiz.html";
  }

  if (search.toLowerCase() === suggestions[5].toLowerCase()) {
    location.href = "../html/aboutUs.html";
  }

  if (search.toLowerCase() === suggestions[6].toLowerCase()) {
    location.href = "../html/lessons/lesson1.html#ls1t2";
  }

  if (search.toLowerCase() === suggestions[7].toLowerCase()) {
    location.href = "../html/lessons/lesson2.html";
  }

  if (search.toLowerCase() === suggestions[8].toLowerCase()) {
    location.href = "../html/lessons/lesson2.html#ls2t1";
  }

  if (search.toLowerCase() === suggestions[9].toLowerCase()) {
    location.href = "../html/lessons/lesson3.html";
  }

  if (search.toLowerCase() === suggestions[10].toLowerCase()) {
    location.href = "../html/lessons/lesson3.html#ls3t1";
  }

  if (search.toLowerCase() === suggestions[11].toLowerCase()) {
    location.href = "../html/lessons/lesson3.html#ls3t2";
  }

  if (search.toLowerCase() === suggestions[12].toLowerCase()) {
    location.href = "../html/lessons/lesson3.html#ls3t3";
  }

  if (search.toLowerCase() === suggestions[13].toLowerCase()) {
    location.href = "../html/lessons/lesson4.html";
  }

  if (search.toLowerCase() === suggestions[14].toLowerCase()) {
    location.href = "../html/lessons/lesson5.html";
  }

  if (search.toLowerCase() === suggestions[15].toLowerCase()) {
    location.href = "../html/lessons/lesson5.html#ls5t1";
  }

  if (search.toLowerCase() === suggestions[16].toLowerCase()) {
    location.href = "../html/lessons/lesson5.html#ls5t2";
  }

  if (search.toLowerCase() === suggestions[17].toLowerCase()) {
    location.href = "../html/lessons/lesson5.html#ls5t3";
  }

  if (search.toLowerCase() === suggestions[18].toLowerCase()) {
    location.href = "../html/lessons/lesson6.html";
  }

  if (search.toLowerCase() === suggestions[19].toLowerCase()) {
    location.href = "../html/lessons/lesson6.html#ls6t1";
  }

  if (search.toLowerCase() === suggestions[20].toLowerCase()) {
    location.href = "../html/lessons/lesson6.html#ls6t2";
  }

  if (search.toLowerCase() === suggestions[21].toLowerCase()) {
    location.href = "../html/lessons/lesson6.html#ls6t3";
  }

  if (search.toLowerCase() === suggestions[22].toLowerCase()) {
    location.href = "../html/lessons/lesson6.html#ls6t4";
  }

  if (search.toLowerCase() === suggestions[23].toLowerCase()) {
    location.href = "../html/quizzes/quiz1.html";
  }

  if (search.toLowerCase() === suggestions[24].toLowerCase()) {
    location.href = "../html/quizzes/quiz2.html";
  }

  if (search.toLowerCase() === suggestions[25].toLowerCase()) {
    location.href = "../html/quizzes/quiz3.html";
  }

  if (search.toLowerCase() === suggestions[26].toLowerCase()) {
    location.href = "../html/quizzes/quiz4.html";
  }

  if (search.toLowerCase() === suggestions[27].toLowerCase()) {
    location.href = "../html/quizzes/quiz5.html";
  }

  if (search.toLowerCase() === suggestions[28].toLowerCase()) {
    location.href = "../html/quizzes/quiz6.html";
  }

}
