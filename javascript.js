var playing = false;
var score;
var action;
var timeremaining; 
var correctAnswer;
var wrongAnswer;

//if we click on the start/ reset
document.getElementById("startreset").onclick = function() {
//if we are playing
    if (playing==true)
        {location.reload(); // reload page
        }
    else { //if we are not playing
        //change mode to playing
        playing = true;
        //set score to 0;
        score = 0; 
        document.getElementById("scorevalue").innerHTML = score;
     //show countdown box
//document.getElementById("timer").style.display= "block";
        
        
        
        show("timer");
        timeremaining = 60; 
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide gameover box
         
       hide("gameOver"); //document.getElementById("gameOver").style.display = "none";
        
       //change button to reset 
document.getElementById("startreset").innerHTML = "Reset Game";
        
        //start countdown
        
        startcountdown();
        
        //generate a new Q & A
        
        generateQA();   
    }
}
 
// reload page
//if we are not playing
    //set score to 0
    // show countdown box
        //reduce time by one second in loop
            // timeleft?
                //yes=> continue
                    //no => gameover
        //change button to reset
//generate new Q & A

//clicking on a answer box

for(i=1;i<5;i++){
 document.getElementById("box"+i).onclick = function(){
    //check if we are playing
    if(playing == true) 
    {
        //yes
        if(this.innerHTML == correctAnswer){
            // correct answer
            
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            
            //hide wrong box and show correct box
           
           hide("wrong");
            show("correct");
            //document.getElementById("correct").style.display = "show";
            
// document.getElementById("correct").style.display = "show";
            setTimeout(function(){
                hide("correct");
            },1000);
            
            //generate new question
            
            generateQA();
        }else{
            // wrong answer
            //document.getElementById("correct").style.display ="none";
           
           hide("correct");
            show("wrong");
            //document.getElementById("wrong").style.display = "show";
            
            setTimeout(function() {
               hide("wrong");},1000);
        }
    }
}
}
// if we click on answer box
    //if we are playing
        //answer correct?
            //yes
                //increase score by one
                //show correct box for one second
                //generate new Q & A
            //no
                //show try again box for 1sec.


//funtions

//start counter

function startcountdown(){
    action = setInterval(
        function() {
        timeremaining -= 1; document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        if(timeremaining == 0)
        {
                //gameover
            stopCountdown();
            show("gameOver");
//document.getElementById("gameOver").style.display = "block";
            
document.getElementById("gameOver").innerHTML = "<p>Game over.</p><p> Your score is " + score +".</p>";
        hide("timer");
//document.getElementById("timer").style.display = "none";
                
hide("timer");
hide("correct");
hide("wrong");
//document.getElementById("correct").style.display ="none";
//document.getElementById("wrong").style.display = "none";
                
playing = false;
generateQA.disabled = true;

document.getElementById("choices").disabled = true;
document.getElementById("startreset").innerHTML = "Start Game.";
    }
    },1000);
}

function stopCountdown()
{
// stop the counter
    clearInterval(action);
}

//hide an element 
//function hide(Id) {
//    document.getElementById(Id).style.display = "none";
//}

//show an element
//function show(Id){
    //document.getElementById(Id).style.display = "show";
//}
//hide an element

function hide(Id){
    document.getElementById(Id).style.display = "none";   
}

//show an element

function show(Id){
    document.getElementById(Id).style.display = "block";   
}
// genearte question and multiple answers

function generateQA(){
    var x = 1+Math.round(9*Math.random());
    var y = 1+Math.round(9*Math.random());
    correctAnswer = x*y;
 document.getElementById("question").innerHTML = x + "X" + y;
var correctPosition = 1+Math.round(3*Math.random());
    
document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with correct answer
    
    // fill other boxes with wrong answer
    
    var answers = [correctAnswer];
    
    for(i=1;i<5;i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random())); //wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
        document.getElementById("box"+i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer);
        }
    }
};