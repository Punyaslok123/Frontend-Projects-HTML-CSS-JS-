// setinterval is used to display things after a certain interval of time continously , here after each second we need to change our minute ,second and hour 

// 360 deg=12hr => 1hr=30deg , =>h hr= h* 30deg

// 60 min=30deg => 1min=1/2 deg   =>m min=m/2

// so in case of hours =>total rotation=> (30h+m/2)  deg


//in case of minutes =>total rotation=> 60min=360deg => 1min=60deg  => m min=m*60 

// incase of second total rotation=> 60sec=360deg=> 1sec=6deg => s sec=6s deg

setInterval(()=>{
      d=new Date();
    //   console.log(d);

      htime=d.getHours();
      mtime=d.getMinutes();
      stime=d.getSeconds();
      
    //   console.log(htime);
    //   console.log(mtime);
    //   console.log(stime);
     
      hrotation=htime*30 + mtime/2;
      mrotation=mtime*6;
      srotation=stime*6;

      hour.style.transform=`rotate(${hrotation}deg)`;
      minute.style.transform=`rotate(${mrotation}deg)`

      second.style.transform=`rotate(${srotation}deg)`;
      //need to rotate from the bottom , 
    //   transform.origin=bottom; in css style


      

},1000)


// transform.origin -> use to tell the rotation position 