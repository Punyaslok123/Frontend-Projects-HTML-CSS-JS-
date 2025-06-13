// add the questions and their answers 

const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },

  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ],
  },

  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true},
    ],
  },

  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const questionElement=document.getElementById('question');
const answerButtons = document.querySelector(".options");
const nextButton = document.querySelector("#next");



// store the question index(means question number ) and score 

let currentQuestionIndex=0;
let score=0;

// need to start the quiz

function startQuiz(){
      currentQuestionIndex=0;
      score=0;
      nextButton.innerHTML="Next";
      // show the questions 

      showQuestions();
}



function showQuestions(){

      // need to reset(remove) the previous queston  and optins
      resetState();
      let currentQuestion=questions[currentQuestionIndex];
      // if index 0 then question number is 1 and so on 

      let questionNo=currentQuestionIndex+1;
      questionElement.innerHTML=questionNo+ ". "+currentQuestion.question;

      
  answerButtons.innerHTML = "";

      // need to display the options 

   
      currentQuestion.answers.forEach((answer)=>{
             const button=document.createElement('button');
             button.innerHTML=answer.text;
             button.classList.add("btn");
             answerButtons.appendChild(button);
            
             // now need to check when click the button 

             if(answer.correct){
               button.dataset.correct=answer.correct;
             }
             
             // add the event listener

             button.addEventListener("click",selectAnswer);


      })


}


function resetState(){
       nextButton.style.display="none";


       while(answerButtons.firstChild)  answerButtons.removeChild(answerButtons.firstChild);
}


function selectAnswer(e){
       const selectedBtn=e.target;

       const isCorrect=selectedBtn.dataset.correct==="true";

       if(isCorrect){
          selectedBtn.classList.add("correct");
          score++;
       }
       else {
        selectedBtn.classList.add("incorrect");
       }

       // now need to disaable the click after selecting the one answer and once we select the wrong anwer it will automatically highlight the correct answer with green color 


       Array.from(answerButtons.children).forEach((button)=>{
           if(button.dataset.correct==="true"){
            button.classList.add("correct");
           }

           button.disabled=true;
       })

       nextButton.style.display="block";


       
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestions();
    }
    else {
      showScore();
    }
}

function showScore(){
      resetState();
      questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
      
      nextButton.innerHTML="play Again";
      nextButton.style.display="block";
      // nextButton.style.margin='14px auto';

}


// when click the next button we will go the next question 

nextButton.addEventListener("click",()=>{
     if(currentQuestionIndex<questions.length){
      handleNextButton();
     }
     else {
      startQuiz();
     }
})
startQuiz();