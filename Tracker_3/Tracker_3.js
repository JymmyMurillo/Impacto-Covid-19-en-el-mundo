// Top Cases
const divTopCases = document.getElementById("topCases");

fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {
    const sortCases = data.sort((a, b) => b.cases - a.cases);
    //console.log(sortCases);
    const topCases = sortCases.slice(0, 10);
    //console.log(top10Cases);

    topCases.map(
      (country) =>
        (divTopCases.innerHTML += `
        <div class="bgColorCard d-flex flex-column flex-sm-row align-items-center ">
            <div>
              <img class="flag rounded-circle mx-2" src=${country.countryInfo.flag} alt="">
            </div>
            <div class="d-flex flex-column my-2">
              <p class="m-0 fontSizeName fw-bold">${country.country}</p>
              <p class="m-0 fs-6 fw-bold lineHeight">${country.cases}</p>
            </div>
          </div>
    `)
    );
  });

  // Top Today Cases
const divTopTodayCases = document.getElementById("topTodayCases");

fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {
    const sortCases = data.sort((a, b) => b.todayCases - a.todayCases);
    //console.log(sortCases);
    const topTodayCases = sortCases.slice(0, 10);
    //console.log(top10Cases);

    topTodayCases.map(
      (country) =>
        (divTopTodayCases.innerHTML += `
        <div class="bgColorCard d-flex flex-column flex-sm-row align-items-center ">
            <div>
              <img class="flag rounded-circle mx-2" src=${country.countryInfo.flag} alt="">
            </div>
            <div class="d-flex flex-column my-2">
              <p class="m-0 fontSizeName fw-bold">${country.country}</p>
              <p class="m-0 fs-6 fw-bold lineHeight">${country.todayCases}</p>
            </div>
          </div>
    `)
    );
  });

  // Top Deaths Cases
const divTopDeathsCases = document.getElementById("topDeathsCases");

fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {
    const sortCases = data.sort((a, b) => b.deaths - a.deaths);
    //console.log(sortCases);
    const topDeathsCases = sortCases.slice(0, 10);
    //console.log(top10Cases);

    topDeathsCases.map(
      (country) =>
        (divTopDeathsCases.innerHTML += `
        <div class="bgColorCard d-flex flex-column flex-sm-row align-items-center ">
            <div>
              <img class="flag rounded-circle mx-2" src=${country.countryInfo.flag} alt="">
            </div>
            <div class="d-flex flex-column my-2">
              <p class="m-0 fontSizeName fw-bold">${country.country}</p>
              <p class="m-0 fs-6 fw-bold lineHeight">${country.deaths}</p>
            </div>
          </div>
    `)
    );
  });

    // Top Today Deaths Cases
const divTopTodayDeathsCases = document.getElementById("topTodayDeathsCases");

fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {
    const sortCases = data.sort((a, b) => b.todayDeaths - a.todayDeaths);
    //console.log(sortCases);
    const topTodayDeathsCases = sortCases.slice(0, 10);
    //console.log(top10Cases);

    topTodayDeathsCases.map(
      (country) =>
        (divTopTodayDeathsCases.innerHTML += `
        <div class="bgColorCard d-flex flex-column flex-sm-row align-items-center ">
            <div>
              <img class="flag rounded-circle mx-2" src=${country.countryInfo.flag} alt="">
            </div>
            <div class="d-flex flex-column my-2">
              <p class="m-0 fontSizeName fw-bold">${country.country}</p>
              <p class="m-0 fs-6 fw-bold lineHeight">${country.todayDeaths}</p>
            </div>
          </div>
    `)
    );
  });

  // Top Active Cases
const divTopActiveCases = document.getElementById("topActiveCases");

fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {
    const sortCases = data.sort((a, b) => b.active - a.active);
    //console.log(sortCases);
    const topActiveCases = sortCases.slice(0, 10);
    //console.log(top10Cases);

    topActiveCases.map(
      (country) =>
        (divTopActiveCases.innerHTML += `
        <div class="bgColorCard d-flex flex-column flex-sm-row align-items-center ">
            <div>
              <img class="flag rounded-circle mx-2" src=${country.countryInfo.flag} alt="">
            </div>
            <div class="d-flex flex-column my-2">
              <p class="m-0 fontSizeName fw-bold">${country.country}</p>
              <p class="m-0 fs-6 fw-bold lineHeight">${country.active}</p>
            </div>
          </div>
    `)
    );
  });

  // Top Recovered Cases
const divTopRecoveredCases = document.getElementById("topRecoveredCases");

fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {
    const sortCases = data.sort((a, b) => b.recovered - a.recovered);
    //console.log(sortCases);
    const topRecoveredCases = sortCases.slice(0, 10);
    //console.log(top10Cases);

    topRecoveredCases.map(
      (country) =>
        (divTopRecoveredCases.innerHTML += `
        <div class="bgColorCard d-flex flex-column flex-sm-row align-items-center ">
            <div>
              <img class="flag rounded-circle mx-2" src=${country.countryInfo.flag} alt="">
            </div>
            <div class="d-flex flex-column my-2">
              <p class="m-0 fontSizeName fw-bold">${country.country}</p>
              <p class="m-0 fs-6 fw-bold lineHeight">${country.recovered}</p>
            </div>
          </div>
    `)
    );
  });