const divSideBar = document.getElementById("sideBar");
const colorCards = document.getElementById("colorCards");
// Total Cases

fetch("https://disease.sh/v3/covid-19/all")
  .then((response) => response.json())
  .then((data) => {
    colorCards.innerHTML += `
    
    <div class="d-flex flex-wrap justify-content-between p-3 bg-danger bg-opacity-10
        rounded-3 totalCase my-3">
      <div class="d-flex flex-row align-items-center">
        <p class="m-0 fw-bold fs-6 me-3">Total Case</p>
        <p class="m-0 bg-white px-2">+${data.todayCases}</p>
      </div>

      <p class="m-0 fw-bold fs-4 text-danger">${data.cases}</p>

    </div>
    <div class="d-flex flex-wrap justify-content-between p-3
        rounded-3 activeCase my-3">
      <div class="d-flex flex-row align-items-center">
        <p class="m-0 fw-bold fs-6 me-3">Active Case</p>
      </div>

      <p class="m-0 fw-bold fs-4">${data.active}</p>

    </div>
    <div class="d-flex flex-wrap justify-content-between p-3 bg-success bg-opacity-10
        rounded-3 recoveredCase my-3">
      <div class="d-flex flex-row align-items-center">
        <p class="m-0 fw-bold fs-6 me-3">Recovered Case</p>
        <p class="m-0 bg-white px-2">+${data.todayRecovered}</p>
      </div>

      <p class="m-0 fw-bold fs-4">${data.recovered}</p>

    </div>
    <div class="d-flex flex-wrap justify-content-between p-3 
        rounded-3 deathsCase my-3">
      <div class="d-flex flex-row align-items-center">
        <p class="m-0 fw-bold fs-6 me-3">Deaths Case</p>
        <p class="m-0 bg-white px-2">+${data.todayDeaths}</p>
      </div>

      <p class="m-0 fw-bold fs-4 ">${data.deaths}</p>

    </div>`;
    console.log(data);
  });

// Top 10

fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {
    const sortCases = data.sort((a, b) => b.cases - a.cases);
    //console.log(sortCases);
    const top10Cases = sortCases.slice(0, 10);
    //console.log(top10Cases);

    top10Cases.map(
      (country) =>
        (divSideBar.innerHTML += `
    <div class="d-flex flex-wrap justify-content-between align-items-center border border-1 px-3 py-2 rounded-3 top10Card mb-3">
      <div class="d-flex flex-row align-items-center">
        <img class="flag rounded-3" src=${country.countryInfo.flag} alt="">
        <p class="mb-0 ms-3">${country.country}</p>
      </div>

      <p class="fw-bold m-0">${country.cases}</p>

    </div>`)
    );
  });
