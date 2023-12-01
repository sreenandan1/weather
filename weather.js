const apiKey ="12dfb6f37fdd97e4b596c764f24242d3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
           document.querySelector(".weather").style.display="none";
    }else var data = await response.json();
        // console.log(data);                                                                                                                                                                                                            
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
     
    if(data.weather[0].main=="clouds"){
        weatherIcon.src= "images/clouds.png";
    }else if(data.weather[0].main=="clear"){
        weatherIcon.src="images/clear.png";
    }else if(data.weather[0].main=="rain"){
        weatherIcon.src="images/rain.png";
    }else if(data.weather[0].main=="drizzle"){
        weatherIcon.src="images/drizzle.png";
    }else if(data.weather[0].main=="mist"){
        weatherIcon.src="images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }







 searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
 });
 
// function initWeatherApp() {
//     const apiKey = "12dfb6f37fdd97e4b596c764f24242d3";
//     const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";
//     const searchBox = document.querySelector(".search input");
//     const searchBtn = document.querySelector(".search button");
//     const weatherIcon = document.querySelector(".weather-icon");
  
//     async function checkWeather(city) {
//       const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//       if (response.status === 404) {
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather").style.display = "none";
//       } else {
//         const data = await response.json();
//         console.log(data);
//         updateWeatherInfo(data);
//       }
//     }
  
//     function updateWeatherInfo(data) {
//       document.querySelector(".city").innerHTML = data.name;
//       document.querySelector(".temp").innerHTML = data.main.temp + "°C";
//       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//       document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  
//       switch (data.weather[0].main.toLowerCase()) {
//         case "clouds":
//           weatherIcon.src = "images/clouds.png";
//           break;
//         case "clear":
//           weatherIcon.src = "images/clear.png";
//           break;
//         case "rain":
//           weatherIcon.src = "images/rain.png";
//           break;
//         case "drizzle":
//           weatherIcon.src = "images/drizzle.png";
//           break;
//         case "mist":
//           weatherIcon.src = "images/mist.png";
//           break;
//         default:
//           weatherIcon.src = ""; // Handle unknown weather conditions
//       }
  
//       document.querySelector(".weather").style.display = "block";
//       document.querySelector(".error").style.display = "none";
//     }
  
//     searchBtn.addEventListener("click", () => {
//       checkWeather(searchBox.value);
//     });
//   }
  
//   // Call the function to initialize the weather app
//   initWeatherApp();
  