const selectCountry = document.getElementById("selectCountry");
let divCountryCards = document.getElementById("divCountryCards");
let divMap = document.getElementById("divMap");
let country = "";

// Agregar a lista seleccionable de paises
fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {

    data.map(
      (country) =>
        (selectCountry.innerHTML += `
          <option value=${country.country}>${country.country}</option>
          `)
    );
  });

  console.log(selectCountry.value);
// Cargando datos de casos globales
fetch("https://disease.sh/v3/covid-19/all")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    const divGlobalCards = document.getElementById("divGlobalCards");
    divGlobalCards.innerHTML += `
           <div class="d-flex flex-wrap align-items-center border border-top-0  border-1 m-0 py-3">
        <img class="imgVirus2 mx-2" src="../image/icons/covid-defult.svg" alt="" />
        <div class="blueDarkColor">
          <p class="fw-bold m-0">Total Confirmed</p>
          <p class="fs-3 fw-bold m-0">${data.cases}</p>
        </div>
      </div>
      <div class="d-flex flex-wrap align-items-center border border-top-0 border-1 m-0 py-3">
        <img class="imgVirus2 mx-2" src="../image/icons/covid-green.svg" alt="" />
        <div class="blueDarkColor">
          <p class="fw-bold m-0">Total Recovered</p>
          <p class="fs-3 fw-bold m-0">${data.recovered}</p>
        </div>
      </div>
      <div class="d-flex flex-wrap align-items-center border border-top-0 border-1 m-0 py-3">
        <img class="imgVirus2 mx-2" src="../image/icons/covid-red.svg" alt="" />
        <div class="blueDarkColor">
          <p class="fw-bold m-0">Total Deaths</p>
          <p class="fs-3 fw-bold m-0">${data.deaths}</p>
        </div>
      </div>
      <div class="d-flex flex-wrap align-items-center border border-top-0 border-1 m-0 py-3">
        <img class="imgVirus2 mx-2" src="../image/icons/covid-redark.svg" alt="" />
        <div class="blueDarkColor">
          <p class="fw-bold m-0">New Deaths</p>
          <p class="fs-3 fw-bold m-0">${data.todayDeaths}</p>
        </div>
      </div>
      <div class="d-flex flex-wrap align-items-center border border-top-0 border-1 m-0 py-3">
        <img class="imgVirus2 mx-2" src="../image/icons/telephone.svg" alt="" />
        <div class="blueDarkColor">
          <p class="fw-bold m-0">Help Line No.</p>
          <p class="fs-3 fw-bold m-0">189</p>
        </div>
      </div>
          `;
  });

// seleccionando país del que se quieren datos

if ((country === "")) {

  fetch("https://disease.sh/v3/covid-19/countries/afghanistan")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      divCountryCards.innerHTML += `
          <div class="col p-3">
          <div class="bgcolor bgImgRed posRelative">
            <img class="imgVirus" src="../image/icons/covid-defult.svg" alt="" />
            <p class="border-bottom border-1 fs-5 fw-bold p-2 m-0">
              Total Cases
            </p>
            <p class="fs-2 fw-bold p-3 m-0 blueColor">${data.cases}</p>
          </div>
        </div>
        <div class="col p-3">
          <div class="bgcolor bgImgRed posRelative">
            <img class="imgVirus" src="../image/icons/covid-red.svg" alt="" />
            <p class="border-bottom border-1 fs-5 fw-bold p-2 m-0">
              Total Deaths
            </p>
            <p class="fs-2 fw-bold p-3 m-0 redColor">${data.deaths}</p>
          </div>
        </div>

        <div class="col p-3">
          <div class="bgcolor bgImgRed posRelative">
            <img class="imgVirus" src="../image/icons/covid-green.svg" alt="" />
            <p class="border-bottom border-1 fs-5 fw-bold p-2 m-0">
              Total Recovered
            </p>
            <p class="fs-2 fw-bold p-3 m-0 greenColor">${data.recovered}</p>
          </div>
        </div>
        <div class="col p-3">
          <div class="bgcolor bgImgRed posRelative">
            <img class="imgVirus" src="../image/icons/covid-blue.svg" alt="" />
            <p class="border-bottom border-1 fs-5 fw-bold p-2 m-0">
              Total Active
            </p>
            <p class="fs-2 fw-bold p-3 m-0 lowBlueColor">${data.active}</p>
          </div>
        </div>
        <div class="col p-3">
          <div class="bgcolor bgImgRed posRelative">
            <img class="imgVirus" src="../image/icons/covid-orange.svg" alt="" />
            <p class="border-bottom border-1 fs-5 fw-bold p-2 m-0">
              New Cases
            </p>
            <p class="fs-2 fw-bold p-3 m-0 orangeColor">${data.todayCases}</p>
          </div>
        </div>
        <div class="col p-3">
          <div class="bgcolor bgImgRed posRelative">
            <img class="imgVirus" src="../image/icons/covid-redark.svg" alt="" />
            <p class="border-bottom border-1 fs-5 fw-bold p-2 m-0">
              New Deaths
            </p>
            <p class="fs-2 fw-bold p-3 m-0 coffeeColor">${data.todayDeaths}</p>
          </div>
        </div>
          `;
      console.log(divCountryCards);
    });
} else {
  console.log("country no esta vacio");
}
selectCountry.onchange = () => {
  country = selectCountry.value;
  console.log(country);
  const url = "https://disease.sh/v3/covid-19/countries/";
  const urlc = url + country;
  deleteDivCountryCards();
  //console.log(urlc);

  fetch(urlc)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      divCountryCards.innerHTML += `
          <div class="col p-3">
          <div class="bgcolor bgImgRed posRelative">
            <img class="imgVirus" src="../image/icons/covid-defult.svg" alt="" />
            <p class="border-bottom border-1 fs-5 fw-bold p-2 m-0">
              Total Cases
            </p>
            <p class="fs-2 fw-bold p-3 m-0 blueColor">${data.cases}</p>
          </div>
        </div>
        <div class="col p-3">
          <div class="bgcolor bgImgRed posRelative">
            <img class="imgVirus" src="../image/icons/covid-red.svg" alt="" />
            <p class="border-bottom border-1 fs-5 fw-bold p-2 m-0">
              Total Deaths
            </p>
            <p class="fs-2 fw-bold p-3 m-0 redColor">${data.deaths}</p>
          </div>
        </div>

        <div class="col p-3">
          <div class="bgcolor bgImgRed posRelative">
            <img class="imgVirus" src="../image/icons/covid-green.svg" alt="" />
            <p class="border-bottom border-1 fs-5 fw-bold p-2 m-0">
              Total Recovered
            </p>
            <p class="fs-2 fw-bold p-3 m-0 greenColor">${data.recovered}</p>
          </div>
        </div>
        <div class="col p-3">
          <div class="bgcolor bgImgRed posRelative">
            <img class="imgVirus" src="../image/icons/covid-blue.svg" alt="" />
            <p class="border-bottom border-1 fs-5 fw-bold p-2 m-0">
              Total Active
            </p>
            <p class="fs-2 fw-bold p-3 m-0 lowBlueColor">${data.active}</p>
          </div>
        </div>
        <div class="col p-3">
          <div class="bgcolor bgImgRed posRelative">
            <img class="imgVirus" src="../image/icons/covid-orange.svg" alt="" />
            <p class="border-bottom border-1 fs-5 fw-bold p-2 m-0">
              New Cases
            </p>
            <p class="fs-2 fw-bold p-3 m-0 orangeColor">${data.todayCases}</p>
          </div>
        </div>
        <div class="col p-3">
          <div class="bgcolor bgImgRed posRelative">
            <img class="imgVirus" src="../image/icons/covid-redark.svg" alt="" />
            <p class="border-bottom border-1 fs-5 fw-bold p-2 m-0">
              New Deaths
            </p>
            <p class="fs-2 fw-bold p-3 m-0 coffeeColor">${data.todayDeaths}</p>
          </div>
        </div>
          `;
      console.log(divCountryCards);
    });
};

function deleteDivCountryCards() {
  const divCountry = document.getElementById("divCountry");
  divCountry.removeChild(divCountryCards);
  divCountry.removeChild(divMap);
  divCountry.innerHTML += `<div id="divCountryCards" class="row row-cols-1 row-cols-sm-2"></div>
  <div id="divMap" class="bgcolor">
        <img  class="divMap" src="../image/Mapa.PNG" alt="">
      </div>
  `;
  divCountryCards = document.getElementById("divCountryCards");
  divMap = document.getElementById("divMap");
}
