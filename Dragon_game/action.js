
// globally track the score 

score=0;
cross=true;  // initially there is a chance of cross

// add song 
 game_going_audio=new Audio('assets/music.mp3');
 gameover_audio=new Audio('assets/gameover.mp3')

// to play the song need to interect with the document 

// setTimeout(()=>{
//      game_going_audio.play();
// },1000)
let gameStarted = false;



// if any key press of the keyboard then that function will execute 



document.onkeydown=function(e){
    // Modern browsers block audio playback unless the user has interacted with the page (key press or click).
    if (!gameStarted) {
      game_going_audio
        .play()
        // .catch((err) => console.log("Audio play blocked:", err));
      gameStarted = true;
    }
    //----------
    
    console.log("key code is ",e.keyCode);
    if(e.keyCode==38){
          dino=document.querySelector('.dino');
          // that keycode press means my dino will do a jump and after some time it ratain dits original position 
          //  animateDino class is added means my dino will do a jump
          dino.classList.add('animateDino');
          // after some time i need to remove this class 
          setTimeout(()=>{
             dino.classList.remove('animateDino')
          },700)
    }

    // dino right movement 

    if(e.keyCode==39){
         dino=document.querySelector('.dino');

         // find the current left position of the  dino 

         dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));

         dino.style.left=(dinox+112+"px");


    }

    if(e.keyCode==37){
         
        dino=document.querySelector('.dino');

        // find the current left positon 

        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));

        dino.style.left=(dinox-112+"px");
    }
    



         
     // obstacle need to move left side , not need to write logic in javascript , use css and html
       
}


// need to check every time is my dino is collide with the obstacle , if collide then game is over 

setInterval(()=>{
     dino=document.querySelector('.dino');
     gameOver=document.querySelector('.gameOver');
     obstacle=document.querySelector('.obstacle');

    // collide logic 

    // current left value of the dino find 
    
    // second property is pseudo selector (null)
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    
    // current top value  of dino
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    // current left and top value of the obstacle 

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    // notice obstacle move in left direction , so when obtacle comes close to the dino then game will be over 

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);

    // console.log(offsetX);
    // console.log(offsetY);

    // game over logic


    if (offsetX < 93 && offsetY < 52) {
      // display game over
    //   gameOver.style.visibility = "visible";
     gameOver.innerHTML="Game Over - Reload to play again";
      // obstacle place its initial position

      obstacle.classList.remove("obstacleAni");

      // gameover song play 
      game_going_audio.pause();
      gameover_audio.play();

      setTimeout(()=>{
       gameover_audio.pause();
      },1000)
    }

    // increase the score when obstacle able to  cross the dino 

    else if(offsetX<145 && cross==true){
      score+=100;
      //   console.log(score);

      // update the score in web page
      updateScore(score);

      cross=false; 
      // need to true it again (means after 1 second they will cross with each other , so cross become true , so that next time they comes with each other , score will increase )

      setTimeout(()=>{
        cross = true;
        // update the score in web page
        updateScore(score);
      },1000)

      // every time after increasing the speed need to inc the speed of obstacle , so that my game is going to be tough (jhatka se bachne ke liya wrap in settimeout ), after some time its speed will become constant 

      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      
      if(aniDur>=0.7){
     
         
    

      newDur = aniDur - 0.05;
      console.log(newDur);
      obstacle.style.animationDuration = newDur + "s";
    
    }

      


    }


},100)

// function used to set the score in the score container

function updateScore(score){
    const scoreCont=document.getElementById('scoreCont')
    scoreCont.innerHTML = "Your score is : " + score;
}
