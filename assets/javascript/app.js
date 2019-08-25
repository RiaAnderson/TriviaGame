$('#start').on('click', function (){
  for(var i=0; i<triviaQuestions.length; i++){
    $('#subWrapper').append('<h2>'+triviaQuestions[i].question+'</h2>');
    for(var j=0; j<triviaQuestions[i].answers.length; j++){
      $("#subWrapper").append("<input type='radio' name='question-"+i+"' value='"+triviaQuestions[i].answers[j]+"'>"+triviaQuestions[i].answers[j])
    }
  }
  })

  var triviaQuestions = [
    {
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
             "Shows your heart's desire",
             "Shows your future",
             "Shows your favorite memory",
             "Shows your past"
        ],
        correctAnswer: "Shows your heart's desire"
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

]
