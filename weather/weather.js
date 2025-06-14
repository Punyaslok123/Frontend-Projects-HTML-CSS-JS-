// step-1 is to fetch the information from the api 

const apiKey = "a3c9a0f943f2656c5c214ecfbe354459";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

// units=metric is used to convert the temparature into celcious 
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric";

  // weather image change 

const weatherimage=document.querySelector('.weather_img img')



async function checkWeather(city) {
  const response = await fetch(apiUrl +`&q=${city}`+ `&appid=${apiKey}`);

  // if any invalid city comes then display the error message 

  //this are the last step ---

  if(response.status==404) {
    document.querySelector('.error').style.display="block";
    document.querySelector('.main_content').style.display="none";
  }

  // this are the last step---
  else {
  var data = await response.json();
    // console.log(data);

  // step 2 - target is to display the information on the web page

    document.querySelector('.cityname').innerHTML=data.name;
    document.querySelector(".temparature").innerHTML = Math.round(data.main.temp) + `°c`;
    document.querySelector(".humidityamount").innerHTML = data.main.humidity+'%';
    document.querySelector(".windspeed").innerHTML=data.wind.speed + ` Km/h`;

// update the weather image 

     if(data.weather[0].main=="Clouds"){
            weatherimage.src="assets/clouds.png";
     }
     else if(data.weather[0].main=="Clear"){
           weatherimage.src="assets/clear.png";
     }
     else if(data.weather[0].main=="Rain"){
           weatherimage.src="assets/rain.png";
     }
     else if(data.weather[0].main=="Drizzle"){
          weatherimage.src="assets/drizzle.png";
     }
     else  if(data.weather[0].main=="Mist"){
           weatherimage.src="assets/mist.png";
     }
     
     // means there is no invalid city name 
     // this are the last step 
     document.querySelector('.main_content').style.display="block";
     document.querySelector(".error").style.display = "none";
     // this are the last step 
}
}

// checkWeather();

// step-3 is to pass the input city name , 
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");


// when we click the search button , our informatin should be display 


searchbtn.addEventListener('click',()=>{
    checkWeather(searchbox.value);
})




// source - openweather map use from chrome - take api keys(api id)- found in my profile , take api (api link)

