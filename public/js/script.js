const CName = document.getElementById("CName");
const date = document.getElementById("date");
const day = document.getElementById("day");
const cityName = document.getElementById("cityName");
const tempDeg = document.getElementById("tempDeg");
const submit = document.getElementById("submit");
const tempStatus = document.getElementById("tempStatus");
const dataHiding = document.querySelector(".middle_layer");

let parsedData = "";
const TodayDate = new Date().toGMTString();
day.innerHTML = TodayDate.slice(0, 3);
date.innerHTML = TodayDate.slice(5, 16);
const setTemp = () => {
  cityName.innerHTML = parsedData.name;
  tempDeg.innerHTML = parsedData.main.temp;
  const tempMood = parsedData.weather.main;
// const tempMood="Snow"
  if (tempMood == "Clear") {
    tempStatus.innerHTML =
      '<i class="fa-solid fa-sun" style="color:#FFE15D"></i>';
  } else if (tempMood == "Clouds") {
    tempStatus.innerHTML =
      '<i class="fa-solid fa-cloud"  style="color:#2C74B3"  ></i>';
  } else if (tempMood == "Rain") {
    tempStatus.innerHTML =
      '<i class="fa-solid fa-cloud-rain"style="color:#495579"  ></i>';
  } 
  else if (tempMood == "Snow") {
    tempStatus.innerHTML =
      '<i class="fa-solid fa-snowflake"></i>';
  } 
  else {
    tempStatus.innerHTML =
      '<i class="fa-solid fa-cloud" style="color:#2C74B3" ></i>';
  }
  dataHiding.classList.remove("data_hide");
};

const FetchData = async (event) => {
  event.preventDefault();

  if (CName.value == "") {
    cityName.innerHTML = "Please enter the city name please";
    dataHiding.classList.add("data_hide");
  } else {
    try {
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${CName.value}&appid=86460717d353bb360145ae8503290baa&units=metric`;
      const data = await fetch(api);
      parsedData = await data.json();
      setTemp();
    } catch (error) {
      console.log(error);
      cityName.innerHTML = "Please enter the city name properly";
      dataHiding.classList.add("data_hide");
    }
  }
};
submit.addEventListener("click", FetchData);
