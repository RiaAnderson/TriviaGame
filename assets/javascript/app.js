//variables 
var answer = "";
// var timer = "";
var totalScore = 0;
var rightScore = 0;
var wrongScore = 0;

//start game
$("#start").on("click", function (){
    
//count down timer
var timer = setTimeout(function(){
    console.log("timesout");
}, 3000);
});

clearTimeout(timer);

//trivia questions 
const triviaQuestions = [
    {
        question: "What does the Imperius Curse do?",
        answers: {
            a: "Kills the person"
            b: "Controls the person"
            c: "Tortures the person"
            d: "Immobilizes the person"
        },
        correctAnswer= "b"
    },
    {
        question: "What is Harry's Patronus?",
        answers: {
            a: "Stag"
            b: "Wolf"
            c: "Doe"
            d: "Moose"
        },
        correctAnswer= "a"
    },
    {
        question: "Who kills Professor Dumbledore?",
        answers: {
            a: "Lord Voldemort"
            b: "Severus Snape"
            c: "Bellatrix Lestrange"
            d: "Draco Malfoy"
        },
        correctAnswer= "d"
    },
    {
        question: "What was the Defence Against the Dark Arts curse?",
        answers: {
            a: "Every year the professor died"
            b: "No professor could hold the position for more than a year"
            c: "It caused professors to go crazy"
            d: "The professors would become Death Eaters"
        },
        correctAnswer= "b"
    },
    {
        question: "What kind of animal is Fluffy?",
        answers: {
            a: "A four-winged dragon"
            b: "A two-headed snake"
            c: "A three-headed dog"
            d: "A six-legged spider"
        },
        correctAnswer= "c"
    },
    {
        question: "How does Harry catch his first snitch?",
        answers: {
            a: "In his hat"
            b: "With his hand"
            c: "In his mouth"
            d: "With his broom"
        },
        correctAnswer= "c"
    },
    {
        question: "Who is the first person from the wizarding world Harry meets?",
        answers: {
            a: "Hermione Granger"
            b: "Ron Weasley"
            c: "Albus Dumbledore"
            d: "Rubeus Hagrid"
        },
        correctAnswer= "d"
    },
    {
        question: "What does the Mirror of Erised do?",
        answers: {
            a: "Shows your heart's desire"
            b: "Shows your future"
            c: "Shows your favorite memory"
            d: "Shows your past"
        },
        correctAnswer= "a"
    },
    {
        question: "What are the 3 Deathly Hallows?",
        answers: {
            a: "A wand, a stone and a cloak"
            b: "A wand, a stone and a ring"
            c: "A wand, a stone and a broom"
            d: "A wand, a stone and a book"
        },
        correctAnswer= "a"
    },
    {
        question: "According to the Sorting Hat what qualities do Ravenclaw students possess?",
        answers: {
            a: "Patience and loyalty"
            b: "Cunning and deceit"
            c: "Wit and learning"
            d: "Daring and nerve"
        },
        correctAnswer= "c"
    }

];

function triviaQuiz(){
    const output = [];
    triviaQuestions.forEach(
        (currentQuestion, questionNumber) =>{
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    <label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                        </input>
                    </label>
                );
            }
            output.push(
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> #{answers.join('')} </div>
            )
        };
    )
    triviaContainer.inner.html = out.join('');
}

function showResults(){
    const answerContainers = triviaContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers = [questionNumber];
        const selector = 'input[name=question'+questionNumber+']:checked';
        const userAnswer = (answerContainer.querySelector(selector)) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}
//function to select answer
//provide a score at the end of the game
//correct answers score
//incorrect answers score
//if times out end the game and provide scores
//restart game function
