// Pagination

const table = document.getElementById("table");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const select = document.getElementById("pageSize");
let pageSize = parseInt(select.value); //limit
console.log(typeof pageSize);
let pageNumber = 0;

if (pageNumber === 0) {
  btnPrev.disabled = true;
}

fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {
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
  
function deleteTBody() {
  const tBody = document.getElementById("tBody");
  table.removeChild(tBody);
  table.innerHTML += `<tbody id="tBody"></tbody>`;
}

function handleNext() {
  console.log(typeof pageSize);
  pageNumber += 1;
  if (pageNumber > 0) {
    btnPrev.disabled = false;
  }
  deleteTBody();
  
  fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
      if ((pageNumber + 1) * pageSize >= data.length) {
        btnNext.disabled = true;
      }
      const skip = pageSize * pageNumber;
      const countriesToRender = data.slice(skip, skip + pageSize);
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
}

function handlePrev() {
  pageNumber -= 1;
  if (pageNumber === 0) {
    btnPrev.disabled = true;
  }
  if (btnNext.disabled) {
    btnNext.disabled = false;
  }
  deleteTBody();
  fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
      const skip = pageSize * pageNumber;
      console.log("Prev: ", pageNumber, skip);
      const countriesToRender = data.slice(skip, skip + pageSize);
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
}

btnNext.addEventListener("click", () => {
  handleNext();
});

btnPrev.addEventListener("click", () => {
  handlePrev();
});

select.addEventListener("change", () => {
  console.log("holaaaa");
  pageSize = parseInt(select.value);
  console.log(pageSize);
  deleteTBody();
  fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
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
  
});
