let boxes=document.querySelectorAll('.box');

let resetBtn=document.querySelector('.reset');

let msg = document.querySelector(".msg");
let msg_container = document.querySelector(".msg-container");

let newBtn=document.querySelector('.new_game');

let game_container=document.querySelector('.game');

let header=document.querySelector('.header');

let footer=document.querySelector(".footer");


let turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// console.log(boxes)



boxes.forEach((box)=>{
       box.addEventListener('click',()=>{
            // console.log("box was clicked")

            if(turnO==true)  {
                box.innerHTML="O";
                turnO=false;
            }
            else {
                box.innerHTML="X";
                turnO=true;
            }

            // make button disable 
            box.disabled=true;
            // winner check 
            checkWinner();
           
       })
})


// enable all buttons 
function enableAllButtons(){
      for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
        msg_container.classList.add('hide');
      }

      // new page style 
      game_container.style.display="flex";
      header.style.display="block";

      footer.classList.remove("foot");
      newBtn.classList.remove("newb");
      resetBtn.classList.remove("rstb");
}

// function disable all buttons 

function disableAllButtons(){
      for(let box of boxes ){
         box.disabled=true;
      }
      
}

// function display winner

function displayWinner(winner){
    
        msg.innerText=`Congratulations , winner is ${winner}`;
        msg_container.classList.remove("hide");
        // new page display and boxes remove 
        game_container.style.display="none";
        header.style.display="none";
        footer.classList.add("foot");  
        newBtn.classList.add("newb");
        resetBtn.classList.add("rstb");
}


// funciton check winner 
function checkWinner(){
      for(pattern of winPatterns){

        // console.log(pattern);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        
        if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val)  {
            // console.log("winner",pos1val);
            displayWinner(pos1val);
            // game is stop , so need to disable all the buttons 
             disableAllButtons();
        }
    }
       
       
      }

}

// game reset functionality  


resetBtn.addEventListener('click',enableAllButtons);

// game again start funcitonality 

newBtn.addEventListener('click',enableAllButtons);

