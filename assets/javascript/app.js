//variables 
var question = "";
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

//function to select answer
//provide a score at the end of the game
//correct answers score
//incorrect answers score
//if times out end the game and provide scores
//restart game function
