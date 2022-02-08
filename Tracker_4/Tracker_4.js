/* USA */
fetch("https://disease.sh/v3/covid-19/countries/usa?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const btnInfoUsa = document.querySelector(".usa_info");

    btnInfoUsa.innerHTML += `<img id="spain" class="flag" src="${data.countryInfo.flag}" alt="img">
              <span>${data.country}</span>`;
  });

/* SPAIN */
fetch("https://disease.sh/v3/covid-19/countries/espa%C3%B1a?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const btnInfoSpain = document.querySelector(".spain_info");

    btnInfoSpain.innerHTML += `<img id="spain" class="flag" src="${data.countryInfo.flag}" alt="img">
              <span>${data.country}</span>`;
  });

/* ITALY */
fetch("https://disease.sh/v3/covid-19/countries/italy?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const btnInfoItaly = document.querySelector(".ita_info");

    btnInfoItaly.innerHTML += `<img id="spain" class="flag" src="${data.countryInfo.flag}" alt="img">
              <span>${data.country}</span>`;
  });

/* INDIA */
fetch("https://disease.sh/v3/covid-19/countries/india?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const btnInfoInd = document.querySelector(".ind_info");

    btnInfoInd.innerHTML += `<img id="spain" class="flag" src="${data.countryInfo.flag}" alt="img">
              <span>${data.country}</span>`;
  });

/* UK */
fetch("https://disease.sh/v3/covid-19/countries/united%20kingdom?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const btnInfoUk = document.querySelector(".uk_info");

    btnInfoUk.innerHTML += `<img id="spain" class="flag" src="${data.countryInfo.flag}" alt="img">
              <span>${data.country}</span>`;
  });

fetch("https://disease.sh/v3/covid-19/countries/colombia?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const btnInfoCol = document.querySelector(".col_info");

    btnInfoCol.innerHTML += `<img id="spain" class="flag" src="${data.countryInfo.flag}" alt="img">
              <span>${data.country}</span>`;
  });

fetch("https://disease.sh/v3/covid-19/countries/venezuela")
  .then((res) => res.json())
  .then((data) => {
    const btnInfoVen = document.querySelector(".ven_info");

    btnInfoVen.innerHTML += `<img id="spain" class="flag" src="${data.countryInfo.flag}" alt="img">
              <span>${data.country}</span>`;
  });

fetch("https://disease.sh/v3/covid-19/countries/chile?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const btnInfoChi = document.querySelector(".chi_info");

    btnInfoChi.innerHTML += `<img id="spain" class="flag" src="${data.countryInfo.flag}" alt="img">
              <span>${data.country}</span>`;
  });

fetch("https://disease.sh/v3/covid-19/countries/turkey?strict=true")
  .then((res) => res.json())
  .then((data) => {
    const btnInfoTur = document.querySelector(".tur_info");

    btnInfoTur.innerHTML += `<img id="spain" class="flag" src="${data.countryInfo.flag}" alt="img">
              <span>${data.country}</span>`;
  });

/* ESCUCHADOR DE EVENTOS*/

/* USA */
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
/* SPAIN */
const btnSpain = document.getElementById("btn_spain");
btnSpain.addEventListener("click", statsSpain);
function statsSpain() {
  fetch("https://disease.sh/v3/covid-19/countries/espa%C3%B1a?strict=true")
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
/*ITA*/
const btnIta = document.getElementById("btn_ita");
btnIta.addEventListener("click", statsIta);
function statsIta() {
  fetch("https://disease.sh/v3/covid-19/countries/italy?strict=true")
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

/* IND */
const btnInd = document.getElementById("btn_ind");
btnInd.addEventListener("click", statsInd);
function statsInd() {
  fetch("https://disease.sh/v3/covid-19/countries/india?strict=true")
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

/* UK*/
const btnUk = document.getElementById("btn_uk");
btnUk.addEventListener("click", statsUk);
function statsUk() {
  fetch("https://disease.sh/v3/covid-19/countries/united%20kingdom?strict=true")
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

/* COL */
const btnCol = document.getElementById("btn_col");
btnCol.addEventListener("click", statsCol);
function statsCol() {
  fetch("https://disease.sh/v3/covid-19/countries/colombia?strict=true")
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

/* VEN*/
const btnVen = document.getElementById("btn_ven");
btnVen.addEventListener("click", statsVen);
function statsVen() {
  fetch("https://disease.sh/v3/covid-19/countries/venezuela?strict=true")
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

/* CHI*/
const btnChi = document.getElementById("btn_chi");
btnChi.addEventListener("click", statsChi);
function statsChi() {
  fetch("https://disease.sh/v3/covid-19/countries/chile?strict=true")
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

/* TUR*/
const btnTur = document.getElementById("btn_tur");
btnTur.addEventListener("click", statsTur);
function statsTur() {
  fetch("https://disease.sh/v3/covid-19/countries/turkey?strict=true")
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
