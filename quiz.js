// Code for quiz adapted from https://www.sitepoint.com/simple-javascript-quiz/
const quizBox = document.getElementById("quiz");
const resultsBox = document.getElementById("results");

function makeQuiz() {
  // this variable stores the output from HTML
  const output = [];

  // for every question
  questions.forEach((currentQuestion, questionNumber) => {
    // this variable stores the possible answers
    const answers = [];

    // for every answer that is available
    for (letter in currentQuestion.answers) {
      // this adds an HTML radio button
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    // this adds the current question and its answer to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // finally combines the output list into an HTML string and puts it on the page
  quizBox.innerHTML = output.join("");
}

function displayResults() {
  // gather answer boxes from the quiz
  const answerBoxes = quizBox.querySelectorAll(".answers");

  // tracks user's correct answers
  let correct = 0;

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {
    const answerBox = answerBoxes[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userInput = (answerBox.querySelector(selector) || {}).value;

    // if user answer is correct
    if (userInput === currentQuestion.correctAnswer) {
      // updates number of correct answers
      correct++;

      // green color for answer
      answerBoxes[questionNumber].style.color = "lightgreen";
    }
    // for wrong or blank answers
    else {
      // colors answer red
      answerBoxes[questionNumber].style.color = "red";
    }
  });

  // shows user's score
  resultsBox.innerHTML = `${correct} out of ${questions.length}`;
}

// all the questions
const questions = [
  {
    question:
      "If you have written an essay on a similar topic before, can you just get bits and pieces from it?",
    answers: {
      a: "Yes",
      b: "No",
      c: "If you feel like it",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Is it plagiarism if you get someone to look over your work and get feedback from them? ",
    answers: {
      a: "Yes",
      b: "No",
      c: "Only on Mondays",
    },
    correctAnswer: "b",
  },
  {
    question:
      "It is considered plagiarism if you parphrase too closely to the original text regardless of whether or not you give credit.",
    answers: {
      a: "True",
      b: "False",
      c: "Only if Mark Chen says so",
    },
    correctAnswer: "a",
  },

  {
    question:
      "Is it considered plagiarsm if you genuinely forget to cite your sources?",
    answers: {
      a: "Yes",
      b: "No",
      c: "Only on Mondays",
    },
    correctAnswer: "a",
  },
  {
    question: "Citing your sources makes your document more credible.",
    answers: {
      a: "True",
      b: "False",
      c: "Only if Mark Chen says so",
    },
    correctAnswer: "a",
  },
];
