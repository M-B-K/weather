// https://api.openweathermap.org/data/2.5/weather?lat=${lat}}&lon=${lon}&appid=${key}
const key = "66e157943e91de089af8bf24660a8e76";
let url = `https://api.openweathermap.org/data/2.5/forecast?q=syria&appid=c8d1b17f2768a887833520020f832323`;
let temp = document.querySelector(".content .header h1");
let RealFeel = document.querySelector(".right_now .RealFeel");
let rain = document.querySelector(".right_now .rain");
let desc = document.querySelector(".content .header .title");
let Humidity = document.querySelector(".right_now .Humidity");
let sea_level = document.querySelector(".right_now .sea_level");
let Pressure = document.querySelector(".right_now .Pressure");
let WindSpeed = document.querySelector(".right_now .WindSpeed");

function checkday(day) {
  if (day + d.getDate() > 6) {
    return day + d.getDate() - 7;
  } else {
    return day + d.getDate();
  }
}
const d = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

https: fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    temp.innerHTML = `${Math.round(data.list[0].main.temp - 273)} &#x2103;`;
    // RIGHT NOW
    RealFeel.innerHTML = `${(data.list[0].main.feels_like - 273).toFixed(
      2
    )} &#x2103;`;
    desc.innerHTML = `${data.list[0].weather[0].description}`;
    sea_level.innerHTML = `${data.list[0].main.sea_level}`;
    Humidity.innerHTML = `${data.list[0].main.humidity}%`;
    Pressure.innerHTML = `${data.list[0].main.pressure} mbar`;
    WindSpeed.innerHTML = `${data.list[0].wind.speed} km/h`;
    // FORECAST
    for (i = 0; i < 3; i++) {
      document.querySelector(".day" + (i + 1)).innerHTML =
        weekday[checkday(i - 4)];

      document.querySelector(".disc" + (i + 1)).innerHTML = `${
        data.list[i + 1].weather[0].main
      } `;

      document.querySelector(
        `.forecast .coul2 .stat${i + 1} img`
      ).src = `http://openweathermap.org/img/wn/${
        data.list[i + 1].weather[0].icon
      }@2x.png`;

      document.querySelector(".temp" + (i + 1)).innerHTML = `${Math.round(
        data.list[i + 1].main.temp_min - 273
      )}°C/${Math.round(data.list[i + 1].main.temp_max - 273)}°C`;
    }
  });

/*************************************************** Page Loader ****************************************************/
let loader = document.getElementById("preLoader");
window.addEventListener("load", function () {
  loader.style.visibility = "hidden";
});
