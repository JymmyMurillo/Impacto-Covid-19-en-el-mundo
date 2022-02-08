fetch("https://disease.sh/v3/covid-19/countries/usa?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const btnInfo = document.querySelector(".usa_info");

    btnInfo.innerHTML += `<img id="spain" class="flag" src="${data.countryInfo.flag}" alt="img">
              <span>${data.country}</span>`;
  });
/* 
fetch("https://disease.sh/v3/covid-19/countries/espa%C3%B1a?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const countryFlags = document.getElementById("country-flags");

    countryFlags.innerHTML += `<div class="carding border">
            <button><img id="spain" class="flag" src="${data.countryInfo.flag}" alt="img">
            <span>${data.country}</span></button>
          </div> `;
  });

fetch("https://disease.sh/v3/covid-19/countries/italy?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const countryFlags = document.getElementById("country-flags");

    countryFlags.innerHTML += `<div class="carding border">
            <button><img id="italy" class="flag" src="${data.countryInfo.flag}" alt="img">
            <span>${data.country}</span></button>
          </div> `;
  });

fetch("https://disease.sh/v3/covid-19/countries/india?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const countryFlags = document.getElementById("country-flags");

    countryFlags.innerHTML += `<div class="carding border">
            <button><img id="india" class="flag" src="${data.countryInfo.flag}" alt="img">
            <span>${data.country}</span></button>
          </div> `;
  });

fetch("https://disease.sh/v3/covid-19/countries/united%20kingdom?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const countryFlags = document.getElementById("country-flags");

    countryFlags.innerHTML += `<div class="carding border">
            <button><img id="uk" class="flag" src="${data.countryInfo.flag}" alt="img">
            <span>${data.country}</span></button>
          </div> `;
  });

fetch("https://disease.sh/v3/covid-19/countries/colombia?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const countryFlags = document.getElementById("country-flags");

    countryFlags.innerHTML += `<div class="carding border">
            <button><img id="colombia" class="flag" src="${data.countryInfo.flag}" alt="img">
            <span>${data.country}</span></button>
          </div> `;
  });

fetch("https://disease.sh/v3/covid-19/countries/venezuela?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const countryFlags = document.getElementById("country-flags");

    countryFlags.innerHTML += `<div class="carding border">
            <button><img id="venezuela" class="flag" src="${data.countryInfo.flag}" alt="img">
            <span>${data.country}</span></button>
          </div> `;
  });

fetch("https://disease.sh/v3/covid-19/countries/chile?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const countryFlags = document.getElementById("country-flags");

    countryFlags.innerHTML += `<div class="carding border">
            <button><img id="chile" class="flag" src="${data.countryInfo.flag}" alt="img">
            <span>${data.country}</span></button>
          </div> `;
  });

fetch("https://disease.sh/v3/covid-19/countries/turkey?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const countryFlags = document.getElementById("country-flags");

    countryFlags.innerHTML += `<div class="carding border">
            <button ><img id="" class="flag" src="${data.countryInfo.flag}" alt="img">
            <span>${data.country}</span></button>
          </div> `;
  }); */

/* ESCUCHADOR DE EVENTOS*/
const btnUsa = document.getElementById("btn_usa");
btnUsa.addEventListener("click", statsUsa);
function statsUsa() {
  fetch("https://disease.sh/v3/covid-19/countries/usa")
    .then((res) => res.json())
    .then((data) => {
      totalCases.innerHTML = data.cases;
      totalDeaths.innerHTML = data.deaths;
      totalRecovered.innerHTML = data.recovered;
      totalActive.innerHTML = data.active;
      newCases.innerHTML = data.todayCases;
      newDeaths.innerHTML = data.todayDeaths;
    });
}

const totalCases = document.getElementById("total_cases");
const totalDeaths = document.getElementById("total_deaths");
const totalRecovered = document.getElementById("total_recovered");
const totalActive = document.getElementById("total_active");
const newCases = document.getElementById("new_cases");
const newDeaths = document.getElementById("new_deaths");
/* 
fetch("https://disease.sh/v3/covid-19/countries/usa?strict=true")
  .then((response) => response.json())
  .then((data) => {
    totalCases.innerHTML = data.cases;
    totalDeaths.innerHTML = data.deaths;
    totalRecovered.innerHTML = data.recovered;
    totalActive.innerHTML = data.active;
    newCases.innerHTML = data.todayCases;
    newDeaths.innerHTML = data.todayDeaths;
  }); */
