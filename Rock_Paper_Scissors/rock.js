let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice');

const button=document.querySelector('#btn');

const cmp_score=document.querySelector('#cmp_score');
const user_score=document.querySelector('#user_score');



// funciton to generate the random choice of the computer
function generateCmpChoice(){

     const arr=["paper","rock","scissor"];

     let randInd=Math.floor(Math.random()*3);

     return arr[randInd];
}

// funciton to generate the win logic 
function winLogic(userChoice,compChoice){
       
    if (userChoice === compChoice) {
      button.innerHTML = "It's draw";
      button.style.backgroundColor = "black";
    } else if (userChoice === "rock" && compChoice === "paper") {
      compScore++;
      cmp_score.innerHTML=compScore;
      
      button.innerHTML = "You Lost, paper beats rock";
      button.style.backgroundColor="red";
    }
     else if (userChoice === "rock" && compChoice === "scissor") {
      userScore++;
      user_score.innerHTML=userScore;
      button.innerHTML = "You Won, rock beats scissor";
      button.style.backgroundColor = "green";
    }
    
     else if (userChoice === "paper" && compChoice === "rock") {
      userScore++;
      user_score.innerHTML = userScore;
      button.innerHTML = "You Won, paper beats rock";
      button.style.backgroundColor = "green";
    }
     else if (userChoice === "paper" && compChoice === "scissor") {
      compScore++;

      cmp_score.innerHTML = compScore;
      
      button.innerHTML = "You lost, scissor beats paper";
      button.style.backgroundColor = "red";
    } 
    else if (userChoice === "Scissor" && compChoice === "rock") {
      compScore++;
      cmp_score.innerHTML = compScore;
      
      button.innerHTML = "You lost, rock beats scissor";
      button.style.backgroundColor = "red";
    } 
    else if (userChoice === "scissor" && compChoice === "paper") {
      userScore++;
      user_score.innerHTML = userScore;
      button.innerHTML = "You Won, scissor beats paper";
      button.style.backgroundColor = "green";
    }
}



function playgame(userChoice){
        console.log(userChoice);

        // generate computer choice
        const compChoice=generateCmpChoice();

        console.log("cmp choice ",compChoice);

        // now write the win logic 

        winLogic(userChoice,compChoice);


}


// start the game 

choices.forEach((choice)=>{
    //  console.log(choice);

    choice.addEventListener('click',()=>{
        // userchoice is generate 
        
        // some style effect 
        choice.classList.add("clicks");

        // after some time let me remove this class

        setInterval(()=>{
            choice.classList.remove("clicks");
        },500)
        // done style effect 
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        // alert('choice is clicked');


        // now play the game 

        playgame(userChoice);
    })
})