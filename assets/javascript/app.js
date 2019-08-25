//start button to begin game
$("#start").on("click", function () {
  game.start();
})
//end button once a user has finished the quiz
$(document).on("click","#end", function(){
  game.done();
})
//triva questions and answers
var triviaQuestions = [{
    question: "What does the Imperius Curse do?",
    answers: [
      "Kills the person",
      "Controls the person",
      "Tortures the person",
      "Immobilizes the person"
    ],
    correctAnswer: "Controls the person"
  },
  {
    question: "What is Harry's Patronus?",
    answers: [
      "Stag",
      "Wolf",
      "Doe",
      "Moose"
    ],
    correctAnswer: "Stag"
  },
  {
    question: "Who kills Professor Dumbledore?",
    answers: [
      "Lord Voldemort",
      "Severus Snape",
      "Bellatrix Lestrange",
      "Draco Malfoy"
    ],
    correctAnswer: "Draco Malfoy"
  },
  {
    question: "What was the Defence Against the Dark Arts curse?",
    answers: [
      "Every year the professor died",
      "No professor could hold the position for more than a year",
      "It caused professors to go crazy",
      "The professors would become Death Eaters"
    ],
    correctAnswer: "No professor could hold the position for more than a year"
  },
  {
    question: "What kind of animal is Fluffy?",
    answers: [
      "A four-winged dragon",
      "A two-headed snake",
      "A three-headed dog",
      "A six-legged spider"
    ],
    correctAnswer: "A three-headed dog"
  },
  {
    question: "How does Harry catch his first snitch?",
    answers: [
      "In his hat",
      "With his hand",
      "In his mouth",
      "With his broom"
    ],
    correctAnswer: "In his mouth"
  },
  {
    question: "Who is the first person from the wizarding world Harry meets?",
    answers: [
      "Hermione Granger",
      "Ron Weasley",
      "Albus Dumbledore",
      "Rubeus Hagrid"
    ],
    correctAnswer: "Rubeus Hagrid"
  },
  {
    question: "What does the Mirror of Erised do?",
    answers: [
      //unable to use ' in "heart's."
      //" When ' or '&#39;' or &#39; used the question would always be incorrect. 
      "Shows your hearts desire",
      "Shows your future",
      "Shows your favorite memory",
      "Shows your past"
    ],
    correctAnswer: "Shows your hearts desire"
  },
  {
    question: "What are the 3 Deathly Hallows?",
    answers: [
      "A wand, a stone and a cloak",
      "A wand, a stone and a ring",
      "A wand, a stone and a broom",
      "A wand, a stone and a book"
    ],
    correctAnswer: "A wand, a stone and a cloak"
  },
  {
    question: "According to the Sorting Hat what qualities do Ravenclaw students possess?",
    answers: [
      "Patience and loyalty",
      "Cunning and deceit",
      "Wit and learning",
      "Daring and nerve"
    ],
    correctAnswer: "Wit and learning"
  }
];
//when game starts the timer begins 
var game = {
  correct: 0,
  incorrect: 0,
  timer: 60,
  countdown: function () {
    game.timer--;
    $("#timer").html(game.timer);
    if (game.timer <= 0) {
      console.log("time up");
      game.done();
    }
  },
  start: function () {
    timer = setInterval(game.countdown, 1000);
    $("#subWrapper").prepend("<h1>Time Left: <span id='timer'>6 0</span> Seconds</h1>");
    $("#start").remove();
    for (var i = 0; i < triviaQuestions.length; i++) {
      $("#subWrapper").append("<h2>" + triviaQuestions[i].question + "</h2>");
      for (var j = 0; j < triviaQuestions[i].answers.length; j++) {
        $("#subWrapper").append("<input type='radio' name='question-" + i + "' value='" + triviaQuestions[i].answers[j] + "'>" + triviaQuestions[i].answers[j])
      }
    }
    $("#subWrapper").append("<br><button id='end'>Done</button>");
  },
  //function to check answers
  done: function () {
    $.each($("input[name='question-0']:checked"), function () {
      if ($(this).val() == triviaQuestions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function () {
      if ($(this).val() == triviaQuestions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function () {
      if ($(this).val() == triviaQuestions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function () {
      if ($(this).val() == triviaQuestions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function () {
      if ($(this).val() == triviaQuestions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function () {
      if ($(this).val() == triviaQuestions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function () {
      if ($(this).val() == triviaQuestions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function () {
      if ($(this).val() == triviaQuestions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function () {
      if ($(this).val() == triviaQuestions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-9']:checked"), function () {
      if ($(this).val() == triviaQuestions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
 //print answers to html
  result: function () {
    clearInterval(timer);
    $("subWrapper h2").remove();
    $("#subWrapper").html("<h2>All done!</h2>");
    $("#subWrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#subWrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    $("#subWrapper").append("<h3>Unanswered: " + (triviaQuestions.length - (this.incorrect + this.correct)) + "</h3>");
  }
}