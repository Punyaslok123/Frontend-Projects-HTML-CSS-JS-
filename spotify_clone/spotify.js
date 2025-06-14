// target-1 play the song when we click the button

// initialize the variables(w)

let songIndex = 0;
let audioElement = new Audio(
  "assets/Aaj Ki Raat - Stree 2 128 Kbps.mp3"
);

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songItems = Array.from(document.getElementsByClassName("songItem"));

let masterSongName=document.getElementById('masterSongName');

let songs = [
  {
    songName: "Aaj Ki Raat",
    filePath: "assetsAaj Ki Raat - Stree 2 128 Kbps.mp3",
    coverPath: "covers/cover1.jpg",
  },
  {
    songName: "Dil E Nadaan",
    filePath: "assets/Dil E Nadaan - Housefull 5 320 Kbps.mp3",
    coverPath: "covers/cover2.jpg",
  },
  {
    songName: "Galti",
    filePath: "assets/Galti - Vishal Mishra 128 Kbps.mp3",
    coverPath: "covers/cover3.jpg",
  },
  {
    songName: "Halki Halki",
    filePath: "assets/Halki Halki Si - Asees Kaur 128 Kbps.mp3",
    coverPath: "covers/cover4.jpg",
  },
  {
    songName: "Ishq Mein",
    filePath: "assets/Ishq Mein - Nadaaniyan 128 Kbps.mp3",
    coverPath: "covers/cover5.jpg",
  },
  {
    songName: "LaaL Pari",
    filePath: "assets/Laal Pari - Housefull 5 320 Kbps.mp3",
    coverPath: "covers/cover6.jpg",
  },
  {
    songName: "Ladki Deewana",
    filePath: "assets/Ladki Deewani - Neelkamal Singh 320 Kbps.mp3",
    coverPath: "covers/cover7.jpg",
  },
  {
    songName: "Main Yaad Aaunga",
    filePath: "assets/Main Yaad Aaunga - Stebin Ben 128 Kbps.mp3",
    coverPath: "covers/cover8.jpg",
  },
  {
    songName: "Singham Again",
    filePath: "assets/Singham Again Title Track - Singham Again 128 Kbps.mp3",
    coverPath: "covers/cover9.jpg",
  },
  {
    songName: "Sukriya",
    filePath:
      "assets/Sukriya - Saaj Bhatt 128 Kbps.mp3",
    coverPath: "covers/cover10.jpg",
  },
];

songItems.forEach((element, i) => {
  // console.log(element, i);
  //  console.log(element.getElementsByTagName('img'));
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


// masterplay play , pause also time stamp pause play handle 
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();

    // in time stamp that song should also be played 
    
     songId=document.getElementById(songIndex.toString());

     songId.classList.remove('fa-play-circle');
     songId.classList.add('fa-pause-circle');

     // timstamp done 




    // now add the pause property
    // fa-pause-circle means - click here to pause(means currently plying, so you need to click for pause)
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

    // gif on
    gif.style.opacity = 1;
  } else {
    // means audio is playing ,so need to pause 

    audioElement.pause();

    // in time stamp that song should also be played

    songId = document.getElementById(songIndex.toString());

    songId.classList.remove("fa-pause-circle");
    songId.classList.add("fa-play-circle");

    // timstamp done
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");

    // gif off
    gif.style.opacity = 0;
  }
});

// find the value of the progress bar,when continuously song timing update 
audioElement.addEventListener("timeupdate", () => {
  // console.log('timeupdate');
  // update the seekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  // console.log(progress);
  // update the change in progrrees bar

  myProgressBar.value = progress;
});

// update the song time according to progress bar value   

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});


// now when we click the timestamp icon button that song should be played  and rest of all song should be stopped 

// this function is used to pause all the song items 
const makeAllPause=()=>{
         Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
           
             element.classList.remove('fa-pause-circle');
             element.classList.add("fa-play-circle");
         })
}

//**** */
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
         element.addEventListener('click',(e)=>{
             console.log(e.target);
          
          
          let clicked_song=parseInt(e.currentTarget.id);   // for update the mastersongname

           // clicking a new song 
           if (songIndex !== clicked_song) {
             makeAllPause();

             e.target.classList.remove("fa-play-circle");

             e.target.classList.add("fa-pause-circle");

             // add that song at which we click  and currtime is set to zero

             // global songindex update
             songIndex = clicked_song;
             // mastersongname also chnaged
             masterSongName.innerText = songs[songIndex].songName;

             // audioElement.src ="assets/Dil E Nadaan - Housefull 5 320 Kbps.mp3";
             audioElement.src = songs[songIndex].filePath;

             audioElement.currentTime = 0;
             audioElement.play();

             // masterPLay means that bottom one need to set

             masterPlay.classList.remove("fa-play-circle");
             masterPlay.classList.add("fa-pause-circle");
             gif.style.opacity = 1;
           }

           //// Case 2: Resuming or pausing the same song
           else {
             if(audioElement.paused){
             
              // need to play 
             e.target.classList.remove("fa-play-circle");
             e.target.classList.add("fa-pause-circle");

             audioElement.play();

             masterPlay.classList.remove("fa-play-circle");
             masterPlay.classList.add("fa-pause-circle");
             gif.style.opacity = 1;
           }
           else {
                // means need to pause 

                audioElement.pause();
                
              songIndex = parseInt(e.currentTarget.id);

                e.target.classList.remove('fa-pause-circle');
                e.target.classList.add('fa-play-circle');

                masterPlay.classList.remove("fa-pause-circle");
                masterPlay.classList.add("fa-play-circle");
                gif.style.opacity = 0;
           }
          }
         })
})


// now if click the previous button then previous song will play otherwise next song will play , same for next 

document.getElementById('previous').addEventListener('click',()=>{
  if (songIndex <= 0) {
    songIndex = 0;
  } else songIndex = songIndex - 1;

  audioElement.src = songs[songIndex].filePath;
  // mastersongname also chnaged
  masterSongName.innerText = songs[songIndex].songName;

  audioElement.currentTime = 0;
  audioElement.play();

  masterPlay.classList.remove("fa-play-circle");

  masterPlay.classList.add("fa-pause-circle");

  // in time stamp that song should also be played

  songId = document.getElementById(songIndex.toString());
  
   
  
  makeAllPause();
  songId.classList.remove("fa-play-circle");
  songId.classList.add("fa-pause-circle");


  gif.style.opacity = 1;
})


document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 9;
  } else songIndex = songIndex + 1;

  audioElement.src = songs[songIndex].filePath;
  // mastersongname also chnaged
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();

  masterPlay.classList.remove("fa-play-circle");

  masterPlay.classList.add("fa-pause-circle");

  // in time stamp that song should also be played
  makeAllPause();

  songId = document.getElementById(songIndex.toString());

  songId.classList.remove("fa-play-circle");
  songId.classList.add("fa-pause-circle");



  gif.style.opacity = 1;
});





