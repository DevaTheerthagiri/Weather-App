const apiKey = "27a48a22723a83d40b2a8d3f9222c0dd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather-icon");

async function checkweather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }else{
        
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +'°c';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assets/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "assets/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "assets/drizzle.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assets/rain.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "assets/mist.png"
    }

    document.querySelector(".error").style.display = "none";

    }
};

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})
