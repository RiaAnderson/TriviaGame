//variables 
var answer = "";
var timer = "";
var totalScore = 0;
var rightScore = 0;
var wrongScore = 0;

//start game
$("#start").on("click", function (){
    
//count down timer
timer = setTimeout(function(){
    console.log("timesout");
}, 3000);
});

//trivia questions
var triviaQuestions = [
    {
        questions: "What does the Imperius Curse do?",
        answers: {
            a: "Kills the person"
            b: "Controls the person"
            c: "Tortures the person"
            d: "Immobilizes the person"
        },
        correctAnswer= "b"
    },
    {
        questions: "What is Harry's Patronus?",
        answers: {
            a: "Stag"
            b: "Wolf"
            c: "Doe"
            d: "Moose"
        },
        correctAnswer= "a"
    },
    {
        questions: "Who kills Professor Dumbledore?",
        answers: {
            a: "Lord Voldemort"
            b: "Severus Snape"
            c: "Bellatrix Lestrange"
            d: "Draco Malfoy"
        },
        correctAnswer= "d"
    },
    {
        questions: "What was the Defence Against the Dark Arts curse?",
        answers: {
            a: "Every year the professor died"
            b: "No professor could hold the position for more than a year"
            c: "It caused professors to go crazy"
            d: "The professors would become Death Eaters"
        },
        correctAnswer= "b"
    },
    {
        questions: "What kind of animal is Fluffy?",
        answers: {
            a: "A dragon"
            b: "A snake"
            c: "A three-headed dog"
            d: "A spider"
        },
        correctAnswer= "c"
    },
    {
        questions: "How does Harry catch his first snitch?",
        answers: {
            a: "In his hat"
            b: "With his hand"
            c: "In his mouth"
            d: "With his broom"
        },
        correctAnswer= "c"
    },
    {
        questions: "Who is the first person from the wizarding world Harry meets?",
        answers: {
            a: "Hermione Granger"
            b: "Controls the person"
            c: "Albus Dumbledore"
            d: "Rubeus Hagrid"
        },
        correctAnswer= "d"
    },
    {
        questions: "What does the Mirror of Erised do?",
        answers: {
            a: "Shows your heart's desire"
            b: "Shows your future"
            c: "Shows your favorite memory"
            d: "Shows your past"
        },
        correctAnswer= "a"
    },
    {
        questions: "What are the 3 Deathly Hallows?",
        answers: {
            a: "A wand, a stone and a cloak"
            b: "A wand, a stone and a ring"
            c: "A wand, a stone and a broom"
            d: "A wand, a stone and a book"
        },
        correctAnswer= "a"
    },
    {
        questions: "According to the Sorting Hat what qualities does Ravenclaw possess?",
        answers: {
            a: "Patience and loyalty"
            b: "Cunning and deceit"
            c: "Wit and learning"
            d: "Daring and nerve"
        },
        correctAnswer= "c"
    },

]
//function to select answer
//provide a score at the end of the game
//correct answers score
//incorrect answers score
//if times out end the game and provide scores
//restart game function
