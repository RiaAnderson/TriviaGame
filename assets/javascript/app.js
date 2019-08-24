//variables 

var timer = "";

$("#timer").text("00.00");
//start game
$("#start").on("click", function (){
    
//count down timer
 timer = setTimeout(function(){
    console.log("timesout");
  setInterval (function(){
    var converted = timeConverter(time);
    $("#timer").text(converted);
  }, 1000)
}, 13000);
});
console.log(timer);

// var converted = timeConverter(time);
// $("#timer").text(converted);
clearTimeout(timer);



//trivia questions 
(function() {
    function triviaQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      triviaQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      triviaContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = triviaContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      triviaQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${triviaQuestions.length}`;
    }
  
    const triviaContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const triviaQuestions = [
        {
            question: "What does the Imperius Curse do?",
            answers: {
                a: "Kills the person",
                b: "Controls the person",
                c: "Tortures the person",
                d: "Immobilizes the person"
            },
            correctAnswer: "b"
        },
        {
            question: "What is Harry's Patronus?",
            answers: {
                a: "Stag",
                b: "Wolf",
                c: "Doe",
                d: "Moose"
            },
            correctAnswer: "a"
        },
        {
            question: "Who kills Professor Dumbledore?",
            answers: {
                a: "Lord Voldemort",
                b: "Severus Snape",
                c: "Bellatrix Lestrange",
                d: "Draco Malfoy"
            },
            correctAnswer: "d"
        },
        {
            question: "What was the Defence Against the Dark Arts curse?",
            answers: {
                a: "Every year the professor died",
                b: "No professor could hold the position for more than a year",
                c: "It caused professors to go crazy",
                d: "The professors would become Death Eaters"
            },
            correctAnswer: "b"
        },
        {
            question: "What kind of animal is Fluffy?",
            answers: {
                a: "A four-winged dragon",
                b: "A two-headed snake",
                c: "A three-headed dog",
                d: "A six-legged spider"
            },
            correctAnswer: "c"
        },
        {
            question: "How does Harry catch his first snitch?",
            answers: {
                a: "In his hat",
                b: "With his hand",
                c: "In his mouth",
                d: "With his broom"
            },
            correctAnswer: "c"
        },
        {
            question: "Who is the first person from the wizarding world Harry meets?",
            answers: {
                a: "Hermione Granger",
                b: "Ron Weasley",
                c: "Albus Dumbledore",
                d: "Rubeus Hagrid"
            },
            correctAnswer: "d"
        },
        {
            question: "What does the Mirror of Erised do?",
            answers: {
                a: "Shows your heart's desire",
                b: "Shows your future",
                c: "Shows your favorite memory",
                d: "Shows your past"
            },
            correctAnswer: "a"
        },
        {
            question: "What are the 3 Deathly Hallows?",
            answers: {
                a: "A wand, a stone and a cloak",
                b: "A wand, a stone and a ring",
                c: "A wand, a stone and a broom",
                d: "A wand, a stone and a book"
            },
            correctAnswer: "a"
        },
        {
            question: "According to the Sorting Hat what qualities do Ravenclaw students possess?",
            answers: {
                a: "Patience and loyalty",
                b: "Cunning and deceit",
                c: "Wit and learning",
                d: "Daring and nerve"
            },
            correctAnswer: "c"
        }
    
    ];
  
    // display quiz right away
    triviaQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();

//function to select answer
//provide a score at the end of the game
//correct answers score
//incorrect answers score
//if times out end the game and provide scores
//restart game function
