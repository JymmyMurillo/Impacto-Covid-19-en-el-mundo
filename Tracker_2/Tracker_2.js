// HTML Elements
const table = document.getElementById("table");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnStart = document.getElementById("btnStart");
const btnEnd = document.getElementById("btnEnd");
const select = document.getElementById("pageSize");
const toSearch = document.getElementById("toSearch");
const paginationInfo = document.getElementById("paginationInfo");

// Vaiables

let allCountries = [];
let pageSize = parseInt(select.value); //limit
let pageNumber = 0;

// Render Inicial

if (pageNumber === 0) {
  btnPrev.disabled = true;
  btnStart.disabled = true;
}

fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {
    allCountries = data; // Ponemos en all countries toda la data para usarla en las otras funciones
    paginationInfo.innerText = `Showing 1 to ${pageSize} of ${allCountries.length} entries.`;

    const tBody = document.getElementById("tBody");
    data.map((country, index) => {
      if (index < pageSize) {
        tBody.innerHTML += ` <tr>
      <td><img class="flag rounded-3" src=${country.countryInfo.flag} alt=""></td>
      <td>${country.country}</td>
      <td>${country.cases}</td>
      <td>${country.todayCases}</td>
      <td>${country.deaths}</td>
      <td>${country.todayDeaths}</td>
      <td>${country.recovered}</td>
      <td>${country.active}</td>
      <td>${country.critical}</td>
      <td>${country.tests}</td>
    </tr>`;
      }
    });
  });

// Para tener un body limpio de hijos cada que tengo que renderizar nuevos hijos

function deleteTBody() {
  const tBody = document.getElementById("tBody");
  table.removeChild(tBody);
  table.innerHTML += `<tbody id="tBody"></tbody>`;
}

// Para el boton de End

btnEnd.addEventListener("click", () => {
  deleteTBody();
  btnPrev.disabled = false;
  btnStart.disabled = false;
  btnNext.disabled = true;
  btnEnd.disabled = true;

  const nOfPages = Math.ceil(allCountries.length / pageSize); // Conocer la cantidad de paginas
  pageNumber = nOfPages - 1;
  const skip = (nOfPages - 1) * pageSize;
  const countriesToRender = allCountries.slice(skip, allCountries.length);

  paginationInfo.innerText = `Showing ${skip + 1} to ${
    allCountries.length
  } of ${allCountries.length} entries.`;

  const tBody = document.getElementById("tBody");
  countriesToRender.map(
    (country) =>
      (tBody.innerHTML += ` <tr>
    <td><img class="flag rounded-3" src=${country.countryInfo.flag} alt=""></td>
    <td>${country.country}</td>
    <td>${country.cases}</td>
    <td>${country.todayCases}</td>
    <td>${country.deaths}</td>
    <td>${country.todayDeaths}</td>
    <td>${country.recovered}</td>
    <td>${country.active}</td>
    <td>${country.critical}</td>
    <td>${country.tests}</td>
  </tr>`)
  );
});

// Para Start

btnStart.addEventListener("click", () => {
  deleteTBody();
  btnPrev.disabled = true;
  btnStart.disabled = true;
  btnNext.disabled = false;
  btnEnd.disabled = false;

  pageNumber = 0;
  const countriesToRender = allCountries.slice(0, pageSize);
  paginationInfo.innerText = `Showing 1 to ${pageSize} of ${allCountries.length} entries.`;

  const tBody = document.getElementById("tBody");
  countriesToRender.map(
    (country) =>
      (tBody.innerHTML += ` <tr>
    <td><img class="flag rounded-3" src=${country.countryInfo.flag} alt=""></td>
    <td>${country.country}</td>
    <td>${country.cases}</td>
    <td>${country.todayCases}</td>
    <td>${country.deaths}</td>
    <td>${country.todayDeaths}</td>
    <td>${country.recovered}</td>
    <td>${country.active}</td>
    <td>${country.critical}</td>
    <td>${country.tests}</td>
  </tr>`)
  );
});

// Para next
function handleNext() {
  pageNumber += 1;
  if (pageNumber > 0) {
    btnPrev.disabled = false;
    btnStart.disabled = false;
  }
  deleteTBody();

  if ((pageNumber + 1) * pageSize >= allCountries.length) {
    btnNext.disabled = true;
    btnEnd.disabled = true;
  }
  const skip = pageSize * pageNumber;
  const countriesToRender = allCountries.slice(skip, skip + pageSize);

  paginationInfo.innerText = `Showing ${skip + 1} to ${
    pageSize * (pageNumber + 1) > allCountries.length
      ? allCountries.length
      : pageSize * (pageNumber + 1)
  } of ${allCountries.length} entries.`;

  const tBody = document.getElementById("tBody");
  countriesToRender.map(
    (country) =>
      (tBody.innerHTML += ` <tr>
  <td><img class="flag rounded-3" src=${country.countryInfo.flag} alt=""></td>
  <td>${country.country}</td>
  <td>${country.cases}</td>
  <td>${country.todayCases}</td>
  <td>${country.deaths}</td>
  <td>${country.todayDeaths}</td>
  <td>${country.recovered}</td>
  <td>${country.active}</td>
  <td>${country.critical}</td>
  <td>${country.tests}</td>
</tr>`)
  );
}

btnNext.addEventListener("click", () => {
  handleNext();
});

// Para Previous
function handlePrev() {
  pageNumber -= 1;
  if (pageNumber === 0) {
    btnPrev.disabled = true;
    btnStart.disabled = true;
  }
  if (btnNext.disabled) {
    btnNext.disabled = false;
    btnEnd.disabled = false;
  }
  deleteTBody();
  const skip = pageSize * pageNumber;
  const countriesToRender = allCountries.slice(skip, skip + pageSize);

  paginationInfo.innerText = `Showing ${skip + 1} to ${skip + pageSize} of ${
    allCountries.length
  } entries.`;

  const tBody = document.getElementById("tBody");
  countriesToRender.map(
    (country) =>
      (tBody.innerHTML += ` <tr>
  <td><img class="flag rounded-3" src=${country.countryInfo.flag} alt=""></td>
  <td>${country.country}</td>
  <td>${country.cases}</td>
  <td>${country.todayCases}</td>
  <td>${country.deaths}</td>
  <td>${country.todayDeaths}</td>
  <td>${country.recovered}</td>
  <td>${country.active}</td>
  <td>${country.critical}</td>
  <td>${country.tests}</td>
</tr>`)
  );
}

btnPrev.addEventListener("click", () => {
  handlePrev();
});

// Para el pageSize
select.addEventListener("change", () => {
  btnPrev.disabled = true;
  btnStart.disabled = true;
  btnNext.disabled = false;
  btnEnd.disabled = false;

  pageSize = parseInt(select.value);
  pageNumber = 0;

  paginationInfo.innerText = `Showing 1 to ${pageSize} of ${allCountries.length} entries.`;

  deleteTBody();
  const tBody = document.getElementById("tBody");
  allCountries.map((country, index) => {
    if (index < pageSize) {
      tBody.innerHTML += ` <tr>
      <td><img class="flag rounded-3" src=${country.countryInfo.flag} alt=""></td>
      <td>${country.country}</td>
      <td>${country.cases}</td>
      <td>${country.todayCases}</td>
      <td>${country.deaths}</td>
      <td>${country.todayDeaths}</td>
      <td>${country.recovered}</td>
      <td>${country.active}</td>
      <td>${country.critical}</td>
      <td>${country.tests}</td>
    </tr>`;
    }
  });
});

// Pera el Search

toSearch.oninput = () => {
  let trim = toSearch.value.toLowerCase().trim();
  const tmp = new RegExp(trim, "i");

  fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
      deleteTBody();
      const tBody = document.getElementById("tBody");
      if (toSearch.value === "") {
        allCountries = data;
        pageNumber = 0;
      } else {
        allCountries = data.filter((country) => country.country.match(tmp));
      }
      if (allCountries.length <= pageSize) {
        btnNext.disabled = true;
        btnPrev.disabled = true;
        btnStart.disabled = true;
        btnEnd.disabled = true;
      } else {
        btnNext.disabled = false;
        btnEnd.disabled = false;
      }

      paginationInfo.innerText = `Showing 1 to ${
        allCountries.length > pageSize ? pageSize : allCountries.length
      } of ${allCountries.length} entries.`;

      allCountries.map((country, index) => {
        if (index < pageSize) {
          tBody.innerHTML += ` <tr>
      <td><img class="flag rounded-3" src=${country.countryInfo.flag} alt=""></td>
      <td>${country.country}</td>
      <td>${country.cases}</td>
      <td>${country.todayCases}</td>
      <td>${country.deaths}</td>
      <td>${country.todayDeaths}</td>
      <td>${country.recovered}</td>
      <td>${country.active}</td>
      <td>${country.critical}</td>
      <td>${country.tests}</td>
    </tr>`;
        }
      });
    });
};
